const createProfile = (features) => {
  let res = [];
  for (let i = 0; i < features[0].length; i++) {
    let f = 0;
    features.forEach((feature) => {
      f += feature[i];
    });
    res.push(f / features.length);
  }
  return res;
};

export default createProfile;
