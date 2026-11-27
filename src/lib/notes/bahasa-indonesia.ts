import type { SubjectNotes } from "./types";

/**
 * Cambridge IGCSE Bahasa Indonesia (0538) 2028–2030 Syllabus Notes
 * Covers Reading Comprehension, Inference & Viewpoint, Note-Making & Summary,
 * Informal Letters, Formal Articles/Reports, and Indonesian Grammar & Affixes.
 * Strictly text-only with zero figures.
 */
export const BAHASA_INDONESIA: SubjectNotes = {
  id: "bahasa-indonesia",
  name: "Bahasa Indonesia",
  code: "0538",
  color: "bg-emerald-600",
  chapters: [
    {
      number: 1,
      title: "Pemahaman Bacaan dan Penemuan Fakta (Reading Comprehension & Facts)",
      section: "Kertas 1: Membaca dan Memahami",
      topic: "Factual Retrieval, Keyword Scanning, Synonyms, and Accurate Answers",
      intro:
        "Bagian 1 menguji kemampuan membaca teks otentik (artikel berita, profil tokoh, brosur perjalanan) untuk menemukan informasi faktual secara akurat. Siswa dituntut membaca cepat, memindai kata kunci, mengenali sinonim, dan menyusun jawaban yang ringkas dan tepat sasaran.",
      subheadings: [
        {
          title: "Teknik Membaca Memindai dan Menemukan Informasi (Scanning & Skimming)",
          body:
            "**1. Strategi Membaca Efektif:**\n" +
            "- **Membaca Sekilas (Skimming):** Baca judul, subjudul, dan kalimat pembuka setiap paragraf dalam 30–45 detik untuk menangkap tema utama sebelum membaca pertanyaan.\n" +
            "- **Membaca Memindai (Scanning):** Tandai kata tanya utama (*Siapa, Kapan, Di mana, Mengapa, Berapa, Bagaimana*) dan cari kata kunci spesifik atau sinonimnya di dalam teks.\n" +
            "- **Jawaban Singkat dan Tepat:** Jangan menyalin seluruh kalimat yang panjang. Nilai diberikan untuk ketepatan fakta, bukan panjangnya kalimat.\n\n" +
            "**2. Memahami Sinonim dan Parafrasa:**\n" +
            "- Penguji sering menggunakan kata yang berbeda dalam soal dibanding yang tertulis di teks.\n" +
            "- *Contoh:* Jika soal menanyakan *'jumlah pengunjung setiap tahun'*, teks mungkin menyebut *'ribuan wisatawan memadati destinasi ini setiap tahunnya'*.",
          examinerTips: [
            "Tuliskan jawaban yang langsung menjawab pertanyaan; hindari menyalin kalimat pengantar yang tidak relevan.",
            "Pastikan mencantumkan satuan angka secara lengkap (misalnya '50 kilometer' atau 'Rp 200.000', jangan hanya '50' atau '200.000')."
          ],
          commonMistakes: [
            "Menyalin satu paragraf penuh dengan harapan penguji mencari sendiri jawaban yang benar.",
            "Kehilangan angka satuan atau salah mencocokkan tanggal kejadian."
          ],
          recap: [
            "Gunakan skimming untuk tema umum dan scanning untuk kata kunci spesifik.",
            "Perhatikan sinonim antara kata tanya dan teks bacaan.",
            "Berikan jawaban singkat, padat, dan akurat."
          ]
        },
        {
          title: "Penanda Waktu, Urutan, dan Pembatasan (Contextual Signposts)",
          body:
            "**1. Kata Penanda Urutan Waktu:**\n" +
            "- *Awalnya, kemudian, setelah itu, selanjutnya, bersamaan dengan itu, akhirnya*. Cermati agar tidak tertukar antara jadwal rencana dan pelaksanaan sebenarnya.\n\n" +
            "**2. Kata Batasan dan Syarat:**\n" +
            "- Kata-kata seperti *kecuali, hanya, wajib, dilarang, khusus bagi, asalkan* sering kali memuat kunci jawaban yang menentukan.",
          examinerTips: [
            "Perhatikan apakah soal meminta 'satu' atau 'dua' alasan. Jika meminta dua, tuliskan pada baris terpisah secara jelas.",
            "Hati-hati terhadap jebakan kata pengalih (distractor) yang memiliki kata sama tetapi konteksnya berlawanan."
          ],
          commonMistakes: [
            "Mengabaikan kata 'kecuali' sehingga memilih jawaban yang justru salah.",
            "Mencampuradukkan waktu peluncuran awal dengan waktu penyempurnaan program."
          ],
          recap: [
            "Penanda waktu memperjelas urutan kronologis kejadian.",
            "Kata pembatas dan syarat memuat informasi penting.",
            "Pilah jawaban ganda ke dalam poin-poin yang terpisah."
          ]
        }
      ]
    },
    {
      number: 2,
      title: "Analisis Sudut Pandang dan Implikasi Teks (Inference, Tone & Opinions)",
      section: "Kertas 1: Membaca Kritis",
      topic: "Implicit Meaning, Opinions vs Facts, Distractors, and Multiple Matching",
      intro:
        "Bagian ini menguji kemampuan memahami makna tersirat, nada bicara penulis (kritis, optimis, skeptis, simpatik), dan mencocokkan pendapat beberapa narasumber (A, B, C, D) dengan pernyataan soal secara presisi.",
      subheadings: [
        {
          title: "Membedakan Fakta Objektif dan Opini Subjektif (Fact vs Opinion)",
          body:
            "**1. Fakta Objektif:**\n" +
            "- Pernyataan yang dapat dibuktikan kebenarannya melalui data statistik, dokumen resmi, atau bukti nyata (misal: *'Candi Borobudur dibangun pada abad ke-8'*).\n\n" +
            "**2. Opini dan Sudut Pandang:**\n" +
            "- Pandangan pribadi, perasaan, atau penilaian nilai moral dari narasumber.\n" +
            "- Kata kunci: *menurut saya, tampaknya, sangat disayangkan, patut dipuji, sebaiknya, berpotensi*.\n\n" +
            "**3. Mengidentifikasi Nada Penulis:**\n" +
            "- Nada dapat bernuansa mendidik, mengkritik secara tajam, bernada ironi, atau membakar semangat pembaca.",
          examinerTips: [
            "Garis bawahi kata sifat evaluatif (seperti 'mengecewakan', 'mengagumkan', 'kurang matang') untuk menangkap sikap narasumber.",
            "Waspadai narasumber yang awalnya ragu tetapi akhirnya berubah pikiran di akhir paragraf."
          ],
          commonMistakes: [
            "Menjawab berdasarkan pengetahuan umum pribadi, bukan berdasarkan apa yang tertera di teks bacaan.",
            "Terkecoh kata-kata yang sama persis padahal maknanya dipelintir oleh penguji."
          ],
          recap: [
            "Fakta bersifat empiris; opini bersifat subjektif.",
            "Kata sifat evaluatif mencerminkan sikap dan emosi penulis.",
            "Cermati pergeseran pandangan di akhir teks."
          ]
        },
        {
          title: "Strategi Pencocokan Pernyataan Ganda (Multiple Matching Strategy)",
          body:
            "**1. Metode Tiga Langkah:**\n" +
            "- **Langkah 1:** Baca semua pernyataan soal terlebih dahulu dan tandai kata kuncinya.\n" +
            "- **Langkah 2:** Baca teks A secara utuh, lalu tandai pernyataan yang cocok. Lanjutkan ke teks B, C, dan D secara berurutan.\n" +
            "- **Langkah 3:** Jika ada dua teks yang mirip, bandingkan kembali secara teliti untuk mengeliminasi jawaban yang tidak sempurna.",
          examinerTips: [
            "Tuliskan huruf pilihan (A, B, C, atau D) secara jelas pada kotak yang disediakan.",
            "Setiap pernyataan soal hanya memiliki satu padanan narasumber yang benar."
          ],
          commonMistakes: [
            "Menebak tanpa memeriksa kembali kalimat rujukan di dalam teks.",
            "Membiarkan kotak jawaban kosong saat ujian selesai."
          ],
          recap: [
            "Pahami kriteria soal sebelum membaca narasumber.",
            "Periksa teks satu demi satu secara sistematis.",
            "Eliminasi distractor dengan memeriksa kecocokan konteks."
          ]
        }
      ]
    },
    {
      number: 3,
      title: "Pencatatan Poin Penting dan Penulisan Ringkasan (Note-Making & Summary)",
      section: "Kertas 1: Keterampilan Sintesis",
      topic: "Categorisation, Bullet Points, Own Words, and Word Limit Discipline",
      intro:
        "Bagian ini menuntut kecakapan menyaring informasi penting dari teks panjang, mengelompokkannya di bawah dua judul yang berbeda, dan menuliskan ringkasan padat berkohesi menggunakan bahasa sendiri dalam batasan 100–120 kata.",
      subheadings: [
        {
          title: "Teknik Mencatat Poin-Poin Penting (Note-Making Techniques)",
          body:
            "**1. Disiplin Kategori Judul:**\n" +
            "- Soal menyediakan dua kolom kategori (misalnya: *'Manfaat program digitalisasi'* dan *'Tantangan yang dihadapi guru'*).\n" +
            "- Poin yang ditulis di bawah judul yang keliru tidak akan mendapatkan nilai.\n\n" +
            "**2. Kaidah Penulisan Poin:**\n" +
            "- Gunakan frasa ringkas namun bermakna lengkap (misalnya: *'Meningkatkan efisiensi kerja'*, bukan hanya *'efisiensi'*).\n" +
            "- Hapus contoh-contoh ilustratif, angka statistik yang terlalu rinci, dan kalimat pembuka retoris.",
          examinerTips: [
            "Tuliskan hanya satu poin jelas pada setiap baris poin (bullet line). Menuliskan dua poin dalam satu baris hanya dinilai satu poin oleh penguji.",
            "Gunakan frasa verba atau nomina yang lugas."
          ],
          commonMistakes: [
            "Menukar informasi antara kolom kategori pertama dan kedua.",
            "Menuliskan ulang kalimat contoh yang panjang dari teks."
          ],
          recap: [
            "Kelompokkan poin строго sesuai dengan judul kategori.",
            "Satu baris hanya untuk satu poin informasi.",
            "Hilangkan contoh ilustratif dan angka-angka tambahan."
          ]
        },
        {
          title: "Menulis Ringkasan dengan Bahasa Sendiri (Summary Writing & Paraphrasing)",
          body:
            "**1. Format Penulisan Ringkasan:**\n" +
            "- Ditulis dalam bentuk paragraf yang utuh dan mengalir, bukan dalam bentuk poin-poin.\n" +
            "- Disiplin batas kata: 100–120 kata. Tulisan yang melampaui batas kata tidak akan diperiksa oleh penguji.\n\n" +
            "**2. Menggunakan Bahasa Sendiri (Own Words):**\n" +
            "- Ubah struktur kalimat (misal: dari kalimat aktif menjadi pasif atau sebaliknya).\n" +
            "- Gunakan sinonim yang tepat (misal: mengganti *'memberikan dampak buruk'* menjadi *'merugikan'*).\n" +
            "- Sambungkan antarpoin menggunakan kata hubung logis: *selain itu, di samping itu, oleh karena itu, namun, sebagai hasilnya*.",
          examinerTips: [
            "Jangan menambahkan opini pribadi atau informasi tambahan yang tidak terdapat di teks asli.",
            "Hitung jumlah kata setelah selesai menulis dan tuliskan jumlahnya di sudut bawah."
          ],
          commonMistakes: [
            "Menyalin mentah-mentah kalimat dari teks (lifting) sehingga kehilangan nilai bahasa.",
            "Menulis lebih dari 130 kata sehingga poin akhir terpotong."
          ],
          recap: [
            "Tulis ringkasan dalam paragraf yang padu.",
            "Gunakan sinonim dan restrukturisasi kalimat sendiri.",
            "Patuhi batas 100–120 kata tanpa menambah opini pribadi."
          ]
        }
      ]
    },
    {
      number: 4,
      title: "Penulisan Surat Informal dan Komunikasi Pribadi (Informal Letters & Emails)",
      section: "Kertas 2: Keterampilan Menulis",
      topic: "Informal Format, Greetings, 3 Bullet Development, and Friendly Tone",
      intro:
        "Bagian ini menuntut kemampuan menulis surat atau surel (email) pribadi kepada sahabat atau anggota keluarga (120–160 kata). Tulisan harus mengembangkan tiga poin panduan soal secara seimbang dengan nada akrab dan tata bahasa yang runtut.",
      subheadings: [
        {
          title: "Struktur dan Format Surat / Surel Informal",
          body:
            "**1. Susunan Surat Pribadi Standar:**\n" +
            "- **Salam Pembuka:** *Halo [Nama Sahabat],* / *Sahabatku yang baik,* / *Hai Rian,*\n" +
            "- **Paragraf Pembuka:** Menanyakan kabar dan menyampaikan rasa rindu (*'Bagaimana kabarmu di sana? Semoga kamu sekeluarga dalam keadaan sehat.'*).\n" +
            "- **Paragraf Isi (2–3 Paragraf):** Mengembangkan ketiga poin panduan soal secara mendalam dengan menyertakan detail pengalaman dan emosi.\n" +
            "- **Paragraf Penutup:** Harapan untuk bertemu atau meminta balasan (*'Sekian dulu ceritaku. Jangan lupa segera balas suratku, ya!'*).\n" +
            "- **Salam Penutup dan Tanda Tangan:** *Salam hangat,* / *Sahabatmu,* diikuti nama terang.",
          examinerTips: [
            "Pastikan ketiga poin panduan soal dijawab dengan porsi yang seimbang; mengabaikan satu poin akan menurunkan nilai isi secara signifikan.",
            "Gunakan gaya bahasa yang santai namun tetap mematuhi kaidah ejaan bahasa Indonesia yang baik."
          ],
          commonMistakes: [
            "Menggunakan kata-kata kaku seperti 'Dengan hormat' dalam surat kepada teman sebaya.",
            "Hanya menulis satu kalimat pendek untuk menjawab poin ketiga di bagian akhir."
          ],
          recap: [
            "Gunakan salam pembuka dan penutup yang bersahabat.",
            "Kembangkan ketiga poin panduan soal secara proporsional.",
            "Gunakan gaya bahasa percakapan yang wajar dan komunikatif."
          ]
        },
        {
          title: "Kekayaan Kosakata Deskriptif dan Idiomatis",
          body:
            "**1. Menghidupkan Cerita dengan Detail Deskriptif:**\n" +
            "- Ungkapkan perasaan secara jujur: *'Hatiku berdebar kencang saat melangkah ke panggung'*, *'Kami tak henti-hentinya berdecak kagum'*.\n" +
            "- Ungkapan dan peribahasa sederhana yang relevan: *cuci mata, banting tulang, berlapang dada, memeras keringat*.\n\n" +
            "**2. Kelancaran dan Variasi Kalimat:**\n" +
            "- Padukan kalimat tanya yang mengajak teman berpikir (*'Kamu pasti tidak menyangka apa yang terjadi selanjutnya, kan?'*).",
          examinerTips: [
            "Jaga target jumlah kata antara 140–155 kata agar waktu ujian mencukupi.",
            "Periksa konsistensi penggunaan kata ganti (misal: konsisten menggunakan 'kamu' atau 'engkau')."
          ],
          commonMistakes: [
            "Memasukkan bahasa gaul slang media sosial yang tidak baku.",
            "Penceritaan monoton yang hanya berupa daftar kegiatan 'saya pergi... lalu saya... kemudian saya...'."
          ],
          recap: [
            "Sertakan detail sensoris dan ungkapan perasaan.",
            "Gunakan kalimat tanya retoris untuk membangun keakraban.",
            "Jaga keseimbangan panjang tulisan dalam rentang 120–160 kata."
          ]
        }
      ]
    },
    {
      number: 5,
      title: "Penulisan Artikel Formal, Pidato dan Laporan (Formal Articles & Reports)",
      section: "Kertas 2: Keterampilan Menulis",
      topic: "Formal Register, Balanced Argumentation, Persuasion, and Clear Recommendations",
      intro:
        "Bagian akhir penulisan menantang siswa menyusun tulisan formal untuk khalayak umum (120–160 kata), seperti artikel majalah sekolah, pidato resmi, atau laporan kegiatan. Diperlukan bahasa baku, argumen yang seimbang, dan kesimpulan yang meyakinkan.",
      subheadings: [
        {
          title: "Format Artikel Majalah dan Teks Pidato Resmi",
          body:
            "**1. Artikel Majalah Sekolah:**\n" +
            "- **Judul yang Menarik:** Singkat dan menggugah rasa ingin tahu (misal: *'Generasi Digital: Peluang Emas atau Ancaman Tersembunyi?'*).\n" +
            "- **Pendahuluan:** Menguraikan isu kekinian yang sedang hangat diperdebatkan.\n" +
            "- **Tubuh Argumen:** Membahas sisi positif dan sisi negatif secara objektif dan berimbang.\n" +
            "- **Kesimpulan:** Memberikan pandangan bijak dan ajakan nyata ke depan.\n\n" +
            "**2. Teks Pidato:**\n" +
            "- Sapaan penghormatan: *'Yang terhormat Bapak/Ibu guru, serta teman-teman yang saya banggakan...'*\n" +
            "- Kalimat persuasif yang santun dan penutup ucapan terima kasih: *'Sekian pidato dari saya, terima kasih atas perhatian hadirin.'*",
          examinerTips: [
            "Gunakan ragam bahasa formal (baku) tanpa singkatan sehari-hari seperti 'nggak', 'udah', atau 'banget'.",
            "Sajikan argumen dari kedua belah pihak sebelum menetapkan kesimpulan."
          ],
          commonMistakes: [
            "Lupa menyertakan judul pada artikel majalah.",
            "Lupa menuliskan salam pembuka atau penutup pada teks pidato."
          ],
          recap: [
            "Artikel memerlukan judul menarik dan argumen berimbang.",
            "Pidato memerlukan salam penghormatan dan penutup terima kasih.",
            "Pertahankan ragam bahasa baku tanpa singkatan percakapan."
          ]
        },
        {
          title: "Kosakata Tingkat Tinggi dan Kohesi Gagasan (Formal Register & Flow)",
          body:
            "**1. Pilihan Kosakata Baku Tingkat Lanjut:**\n" +
            "- *Signifikan, implementasi, memprihatinkan, kesenjangan, terobosan, menumbuhkembangkan, kesinambungan, tolok ukur, pemangku kepentingan*.\n\n" +
            "**2. Kata Transisi Logis:**\n" +
            "- *Pertama-tama, di satu sisi... di sisi lain, tidak dapat dimungkiri bahwa, kendati demikian, pada hakikatnya, dengan demikian*.",
          examinerTips: [
            "Awali setiap paragraf dengan kalimat topik yang menegaskan gagasan utama paragraf tersebut.",
            "Periksa kembali kesesuaian penulisan tanda baca, terutama penggunaan huruf kapital pada awal kalimat dan nama diri."
          ],
          commonMistakes: [
            "Menuliskan seluruh esai dalam satu paragraf raksasa tanpa pemisahan ide.",
            "Argumen yang terlalu emosional tanpa landasan logika yang sehat."
          ],
          recap: [
            "Gunakan leksikon baku tingkat lanjut untuk meningkatkan mutu tulisan.",
            "Bangun kohesi antarkalimat dengan kata transisi yang tepat.",
            "Pisahkan paragraf berdasarkan fokus gagasan."
          ]
        }
      ]
    },
    {
      number: 6,
      title: "Tata Bahasa Baku, Imbuhan (Afiksasi) dan Strategi Ujian (Grammar & Exam Skills)",
      section: "Sistem Bahasa dan Panduan Ujian",
      topic: "Affixes (me-, di-, ber-, pe-an, ke-an), Reduplication, and Papers 1 & 2 Mastery",
      intro:
        "Penguasaan tata bahasa Indonesia yang baik dan benar, khususnya pembentukan kata melalui proses afiksasi (imbuhan) dan ejaan EYD, merupakan syarat mutlak meraih nilai tertinggi (Grade 9 / A*). Bab ini mengupas tuntas sistem imbuhan, kalimat pasif, dan kiat manajemen waktu ujian.",
      subheadings: [
        {
          title: "Sistem Afiksasi: Awalan, Akhiran, dan Konfiks (Affixes Mastery)",
          body:
            "**1. Morfologi Awalan 'meN-':**\n" +
            "- Perubahan bentuk 'meN-' berdasarkan huruf awal kata dasar:\n" +
            "  - Huruf K, T, S, P luluh jika diikuti vokal (misal: *kritis -> mengkritisi / kirim -> mengirim; tulis -> menulis; sapu -> menyapu; panggil -> memanggil*).\n" +
            "  - Huruf konsonan bersuara tidak luluh (misal: *baca -> membaca; dapat -> mendapat; goreng -> menggoreng*).\n\n" +
            "**2. Perbedaan Awalan 'ber-' dan 'meN-':**\n" +
            "- 'meN-' umumnya membentuk verba transitif yang membutuhkan objek (*'membaca buku'*).\n" +
            "- 'ber-' umumnya membentuk verba intransitif atau keadaan (*'bersepeda', 'berpikir'*, *'berbahagia'*).\n\n" +
            "**3. Konfiks 'ke-...-an' dan 'peN-...-an':**\n" +
            "- 'ke-...-an': Menunjukkan keadaan atau hal (misal: *bersih -> kebersihan; indah -> keindahan*).\n" +
            "- 'peN-...-an': Menunjukkan proses perbuatan (misal: *bangun -> pembangunan; didik -> pendidikan*).",
          examinerTips: [
            "Hati-hati terhadap peluluhan huruf K, T, S, P; kesalahan pembentukan kata 'meN-' sering menjadi sorotan pemeriksa.",
            "Perhatikan perbedaan penulisan kata depan 'di' yang dipisah (*di sekolah*) dan awalan 'di-' yang dirangkai (*ditulis*)."
          ],
          commonMistakes: [
            "Menulis kata depan 'di mana' atau 'di rumah' secara digabung (misal: 'dirumah').",
            "Menolak meluluhkan huruf P sehingga menulis 'mempromosikan' padahal kata dasar asing kadang punya pengecualian, tetapi kata asli seperti 'memukul' bukan 'mempukul'."
          ],
          recap: [
            "Pahami aturan peluluhan K, T, S, P pada awalan 'meN-'.",
            "Pisahkan kata depan 'di' untuk tempat; rangkai awalan 'di-' untuk kata kerja pasif.",
            "Kuasai konfiks 'ke-...-an' untuk keadaan dan 'peN-...-an' untuk proses."
          ]
        },
        {
          title: "Kalimat Pasif dan Panduan Manajemen Waktu Ujian (Exam Strategy)",
          body:
            "**1. Struktur Kalimat Pasif Bahasa Indonesia:**\n" +
            "- **Pasif Orang Ketiga (menggunakan awalan 'di-'):** *Objek + di-verba + oleh + Pelaku* (*'Buku itu dibaca oleh Budi'*).\n" +
            "- **Pasif Orang Pertama/Kedua (bentuk pasif persona):** *Objek + Pelaku (ku-/kau-/saya/kamu) + Verba Dasar* (*'Buku itu sudah kubaca'*, bukan *'Buku itu didengar oleh saya'*).\n\n" +
            "**2. Alokasi Waktu Ujian Kertas 1 dan Kertas 2:**\n" +
            "- **Kertas 1 (Membaca):** 20 menit Latihan 1 (Fakta) -> 20 menit Latihan 2 (Pencocokan) -> 35 menit Latihan 3 & 4 (Catatan dan Ringkasan) -> 15 menit pemeriksaan ulang.\n" +
            "- **Kertas 2 (Menulis):** 10 menit membuat draf rencana -> 40 menit menulis surat -> 45 menit menulis artikel formal -> 15 menit mengoreksi ejaan huruf kapital dan tanda baca.",
          examinerTips: [
            "Jangan pernah menulis kalimat pasif persona dengan awalan 'di-' untuk kata ganti 'saya' (salah: 'surat itu ditulis oleh saya'; benar: 'surat itu saya tulis').",
            "Gunakan 10 menit terakhir untuk memeriksa ulang penulisan imbuhan dan huruf kapital."
          ],
          commonMistakes: [
            "Menerapkan pola pasif yang keliru untuk kata ganti orang pertama.",
            "Kehabisan waktu pada tugas menulis kedua karena terlalu lama mengarang surat pertama."
          ],
          recap: [
            "Terapkan pasif 'di-' untuk orang ketiga dan pasif persona untuk orang pertama/kedua.",
            "Alokasikan waktu secara disiplin di setiap bagian soal.",
            "Lakukan pemeriksaan akhir ejaan dan pembentukan kata sebelum menyerahkan lembar ujian."
          ]
        }
      ]
    }
  ]
};
