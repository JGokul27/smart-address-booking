import Address from '../models/Address.js'

// for Adding new address
export const addAddress = async (req, res) => {
  const { addressLine1, city, state, country, pinCode } = req.body;
  try {
    const newAddress = new Address({ addressLine1, city, state, country, pinCode });
    await newAddress.save();
    res.status(201).json(newAddress);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// to get address
export const getAddresses = async (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;
  
    try {
      const addresses = await Address.find().skip(skip).limit(limit);
      const total = await Address.countDocuments();
      res.status(200).json({ addresses, total, page, pages: Math.ceil(total / limit) });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };

// to Update an address
export const updateAddress = async (req, res) => {
  const { id } = req.params;
  const { addressLine1, city, state, country, pinCode } = req.body;
  try {
    const updatedAddress = await Address.findByIdAndUpdate(
      id,
      { addressLine1, city, state, country, pinCode },
      { new: true }
    );
    res.status(200).json(updatedAddress);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete an address
export const deleteAddress = async (req, res) => {
  const { id } = req.params;
  try {
    await Address.findByIdAndDelete(id);
    res.status(200).json({ message: 'Address deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};