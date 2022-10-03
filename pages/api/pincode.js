export default function handler(req, res) {
    let pincodes = {
        "721302": ["Kharagpur", "West Bengal"],
        "110003": ["Delhi", "Delhi"],
        "560017": ["Bangalore", "Karnataka"]
    }
    // res.status(200).json([234400, 721302, 110003, 560017])
    res.status(200).json(pincodes)
  }