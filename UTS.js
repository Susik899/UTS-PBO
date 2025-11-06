class Cuti {
  constructor(jenis, durasi, maxKuota) {
    this.jenis = jenis;
    this.durasi = durasi;
    this.maxKuota = maxKuota;
  }

  ajukanCuti() {
    console.log(`Mengajukan ${this.jenis}`);
    console.log(`Durasi: ${this.durasi} hari`);
    console.log(`Max Kuota: ${this.maxKuota} hari`);
    
    if (this.maxKuota >= this.durasi) {
      console.log(`Status: Pengajuan berhasil!`);
    } else {
      console.log("Status: Kuota anda tidak cukup untuk mengajukan cuti ini");
    }
  }
}

class CutiTahunan extends Cuti {
  constructor(durasi) {
    super("Cuti Tahunan", durasi, 12);
  }
}

class CutiSakit extends Cuti {
  constructor(durasi) {
    super("Cuti Sakit", durasi, 2);
  }
}

class CutiMelahirkan extends Cuti {
  constructor(durasi) {
    super("Cuti Melahirkan", durasi, 90);
  }
}

const cutiTahunan = new CutiTahunan(10); 
cutiTahunan.ajukanCuti();

const cutiSakit = new CutiSakit(1);
cutiSakit.ajukanCuti();

const cutiMelahirkan = new CutiMelahirkan(90);
cutiMelahirkan.ajukanCuti();

const cutiTahunanLebih = new CutiTahunan(15); 
cutiTahunan.ajukanCuti();

const cutiSakitLebih = new CutiSakit(3);
cutiSakit.ajukanCuti();