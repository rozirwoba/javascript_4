function inputData() {
    let form = document.getElementById('form');
    let nama = form.nama.value;
    let jabatan = form.jabatan.value;
    let status = form.status.value;

    class HitungGaji {
        constructor(nama, jabatan, status) {
            this.nama = nama;
            this.jabatan = jabatan;
            this.status = status;
        }
    
        menampilkan() {
            let gajiPokok;
            switch (this.jabatan) {
                case "Manager":
                    gajiPokok = 15000000;
                    break;
                case "Asisten Manager":
                    gajiPokok = 10000000;
                    break;
                case "Staff":
                    gajiPokok = 5000000;
                    break;
                default:
                    gajiPokok = 0;
            }
            let tunjanganJabatan = 0.15 * gajiPokok;
            let bpjs = 0.1 * gajiPokok;
            let tunjanganKeluarga = this.status === "Sudah Menikah" ? 0.2 * gajiPokok : 0;
            let totalGaji = gajiPokok + tunjanganJabatan + bpjs + tunjanganKeluarga;
            
            Swal.fire({
                title: "Data Pegawai",
                text: "Data Pegawai",
                icon: "success",
                html: `
                <div class='justify-content-center'>
                <table border='1' class='table-width'>
                    <thead>
                        <tr>
                            <td>Nama</td>
                            <td>${this.nama}</td>
                        </tr>
                        <tr>
                            <td>Jabatan</td>
                            <td>${this.jabatan}</td>
                        </tr>
                        <tr>
                            <td>Status</td>
                            <td>${this.status}</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Gaji Pokok</td>
                            <td colspan="2">${gajiPokok}</td>
                        </tr>
                        <tr>
                            <td>Tunjangan Jabatan</td>
                            <td colspan="2">${tunjanganJabatan}</td>
                        </tr>
                        <tr>
                            <td>Tunjangan Keluarga</td>
                            <td colspan="2">${tunjanganKeluarga}</td>
                        </tr>
                        <tr>
                            <td>BPJS</td>
                            <td colspan="2">${bpjs}</td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <th>Jumlah</th>
                            <td colspan="2">${totalGaji}</td>
                        </tr>
                    </tfoot>
                </table>
                </div>
                `
            });
        }
    }

    let Gaji = new HitungGaji(nama, jabatan, status);
    Gaji.menampilkan();
}