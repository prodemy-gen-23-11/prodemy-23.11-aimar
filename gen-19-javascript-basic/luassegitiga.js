function hitungLuasSegitiga(alas, tinggi) {
    let luas = 0.5 * alas * tinggi;
    return luas;
  }

  let alas = 4;
  let tinggi = 10;
  let luas = hitungLuasSegitiga(alas, tinggi);

  console.log("Luas segitiga adalah: "+ luas);
  