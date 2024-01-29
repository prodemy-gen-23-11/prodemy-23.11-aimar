function hitungLuasLingkaran(jariJari) {
    let luas = Math.PI * jariJari * jariJari;
    return luas;
  }

  let jariJari = 7;
  let luas = hitungLuasLingkaran(jariJari);

  console.log("Luas lingkaran: "+luas);