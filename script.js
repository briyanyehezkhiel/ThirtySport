const produk = [
    {
        title: 'Kaos Kaki Olahraga Tahan Lama',
        price: 60000,
        img: '/gambar_aksesoris/aksesoris1.webp',
        brand: 'Adidas',
        size: 'M',
        description: 'Kaos kaki olahraga yang nyaman dan tahan lama, dirancang khusus untuk aktivitas olahraga.',
        category: 'aksesoris',
        specifications: 'Spesifikasi: Kaos kaki ini dibuat dengan teknologi Climalite yang membantu menjaga kaki Anda tetap kering selama berolahraga.',
        technicalInfo: 'Informasi Teknis: Bahan katun yang nyaman dan tahan lama, memberikan kenyamanan maksimal bagi kaki Anda.',
        rating: 'Rating: 4.3/5',
        additionalInfo: 'Informasi Tambahan: Tersedia dalam berbagai ukuran dan warna, memungkinkan Anda untuk memilih kaos kaki yang paling sesuai dengan kebutuhan dan gaya Anda.',
        customerFeedback: [
            { name: 'John Smith', comment: 'Kaos kaki ini sangat nyaman dan tahan lama. Saya sangat merekomendasikannya untuk olahraga.' },
            { name: 'Emily Johnson', comment: 'Saya suka kaos kaki ini. Mereka sangat nyaman dan membantu menjaga kaki saya tetap kering selama berolahraga.' }
        ],
        fitur: [
            { name: 'Teknologi Climalite', description: 'Kaos kaki ini dilengkapi dengan teknologi Climalite yang membantu menjaga kaki Anda tetap kering selama berolahraga.' },
            { name: 'Bahan Katun', description: 'Bahan katun yang nyaman dan tahan lama, memberikan kenyamanan maksimal bagi kaki Anda.' },
            { name: 'Berbagai Ukuran dan Warna', description: 'Tersedia dalam berbagai ukuran dan warna, memungkinkan Anda untuk memilih kaos kaki yang paling sesuai dengan kebutuhan dan gaya Anda.' },
            { name: 'Desain Modern', description: 'Desain yang stylish dan modern membuat kaos kaki ini tidak hanya fungsional, tetapi juga modis.' }
        ]
    },
    {
        title: 'Pelindung Lutut Olahraga',
        price: 80000,
        img: 'gambar_aksesoris/aksesoris3.webp',
        brand: 'Nike',
        size: 'M',
        description: 'Pelindung lutut yang dirancang untuk memberikan dukungan dan perlindungan maksimal saat berolahraga.',
        category: 'aksesoris',
        specifications: 'Spesifikasi: Pelindung lutut ini dibuat dengan bahan berkualitas tinggi yang menawarkan daya tahan dan kenyamanan ekstra.',
        technicalInfo: 'Informasi Teknis: Desain ergonomis yang pas di lutut Anda, memberikan dukungan dan perlindungan maksimal.',
        rating: 'Rating: 4.5/5',
        additionalInfo: 'Informasi Tambahan: Tersedia dalam berbagai ukuran, memungkinkan Anda untuk memilih pelindung lutut yang paling sesuai dengan kebutuhan dan gaya Anda.',
        customerFeedback: [
            { name: 'John Doe', comment: 'Pelindung lutut ini sangat nyaman dan memberikan dukungan yang baik.' },
            { name: 'Jane Doe', comment: 'Saya suka pelindung lutut ini. Mereka sangat nyaman dan membantu saya berolahraga dengan lebih aman.' }
        ],
        fitur: [
            { name: 'Bahan Berkualitas Tinggi', description: 'Pelindung lutut ini dibuat dengan bahan berkualitas tinggi yang menawarkan daya tahan dan kenyamanan ekstra.' },
            { name: 'Desain Ergonomis', description: 'Desain ergonomis yang pas di lutut Anda, memberikan dukungan dan perlindungan maksimal.' },
            { name: 'Berbagai Ukuran', description: 'Tersedia dalam berbagai ukuran, memungkinkan Anda untuk memilih pelindung lutut yang paling sesuai dengan kebutuhan dan gaya Anda.' },
            { name: 'Desain Modern', description: 'Desain yang stylish dan modern membuat pelindung lutut ini tidak hanya fungsional, tetapi juga modis.' }
        ]
    }, 
    {
        title: 'Pelindung Lutut',
        price: 80000,
        img: 'gambar_aksesoris/aksesoris4.webp',
        brand: 'Nike',
        size: 'M',
        description: 'Pelindung lutut yang dirancang untuk memberikan dukungan dan perlindungan maksimal saat berolahraga.',
        category: 'aksesoris',
        specifications: 'Spesifikasi: Pelindung lutut ini dibuat dengan bahan berkualitas tinggi yang menawarkan daya tahan dan kenyamanan ekstra.',
        technicalInfo: 'Informasi Teknis: Desain ergonomis yang pas di lutut Anda, memberikan dukungan dan perlindungan maksimal.',
        rating: 'Rating: 4.5/5',
        additionalInfo: 'Informasi Tambahan: Tersedia dalam berbagai ukuran, memungkinkan Anda untuk memilih pelindung lutut yang paling sesuai dengan kebutuhan dan gaya Anda.',
        customerFeedback: [
            { name: 'Alexandra', comment: 'Pelindung lutut ini sangat nyaman dan memberikan dukungan yang baik.' },
            { name: 'Daniel', comment: 'Saya suka pelindung lutut ini. Mereka sangat nyaman dan membantu saya berolahraga dengan lebih aman.' }
        ],
        fitur: [
            { name: 'Bahan Berkualitas Tinggi', description: 'Pelindung lutut ini dibuat dengan bahan berkualitas tinggi yang menawarkan daya tahan dan kenyamanan ekstra.' },
            { name: 'Desain Ergonomis', description: 'Desain ergonomis yang pas di lutut Anda, memberikan dukungan dan perlindungan maksimal.' },
            { name: 'Berbagai Ukuran', description: 'Tersedia dalam berbagai ukuran, memungkinkan Anda untuk memilih pelindung lutut yang paling sesuai dengan kebutuhan dan gaya Anda.' },
            { name: 'Desain Modern', description: 'Desain yang stylish dan modern membuat pelindung lutut ini tidak hanya fungsional, tetapi juga modis.' }
        ]
    },
    {
        title: 'Visor Yonex',
        price: 75000,
        img: 'gambar_aksesoris/aksesoris5.webp',
        brand: 'Yonex',
        size: 'Standar',
        description: 'Visor Yonex yang dirancang untuk memberikan perlindungan dari sinar matahari saat berolahraga.',
        category: 'aksesoris',
        specifications: 'Spesifikasi: Visor ini dibuat dengan bahan berkualitas tinggi yang menawarkan daya tahan dan kenyamanan ekstra.',
        technicalInfo: 'Informasi Teknis: Desain ergonomis dengan tali belakang velcro untuk penyesuaian ukuran.',
        rating: 'Rating: 4.5/5',
        additionalInfo: 'Informasi Tambahan: Tersedia dalam berbagai warna, memungkinkan Anda untuk memilih visor yang paling sesuai dengan gaya dan preferensi Anda.',
        customerFeedback: [
            { name: 'Oliver', comment: 'Visor ini sangat nyaman dan memberikan perlindungan yang baik dari sinar matahari.' },
            { name: 'Sophia', comment: 'Saya suka visor ini. Mereka sangat nyaman dan membantu saya berolahraga dengan lebih aman.' }
        ],
        fitur: [
            { name: 'Bahan Berkualitas Tinggi', description: 'Visor ini dibuat dengan bahan berkualitas tinggi yang menawarkan daya tahan dan kenyamanan ekstra.' },
            { name: 'Desain Ergonomis', description: 'Desain ergonomis dengan tali belakang velcro untuk penyesuaian ukuran.' },
            { name: 'Berbagai Warna', description: 'Tersedia dalam berbagai warna, memungkinkan Anda untuk memilih visor yang paling sesuai dengan gaya dan preferensi Anda.' },
            { name: 'Desain Modern', description: 'Desain yang stylish dan modern membuat visor ini tidak hanya fungsional, tetapi juga modis.' }
        ]
    },   
    {
        "title": "Grip Raket Badminton Yonex",
        "price": 50000,
        "img": "/gambar_aksesoris/aksesoris2.webp",
        "brand": "Yonex",
        "size": "110cm x 2.5cm",
        "description": "Grip raket badminton Yonex yang dirancang untuk pemain yang menginginkan keunggulan dalam setiap langkah. Dengan desain yang menarik dan kualitas yang luar biasa, grip ini akan membantu Anda memegang raket dengan lebih nyaman dan aman.",
        "category": "aksesoris",
        "specifications": "Spesifikasi: Grip ini dibuat dengan bahan berkualitas tinggi yang menjamin daya tahan dan kenyamanan yang luar biasa. Dengan berat yang ringan dan tekstur yang kuat, grip ini memungkinkan Anda untuk memegang raket dengan lebih nyaman dan aman.",
        "technicalInfo": "Informasi Teknis: Grip ini memiliki berat yang ringan dan tekstur yang kuat, memungkinkan Anda untuk memegang raket dengan lebih nyaman dan aman.",
        "rating": "Rating: 5/5",
        "additionalInfo": "Informasi Tambahan: Grip ini tersedia dalam berbagai warna yang menarik, memungkinkan Anda untuk memilih grip yang paling sesuai dengan gaya Anda. Dengan tas yang elegan dan tahan lama, Anda dapat membawa grip ini ke mana saja dengan mudah dan aman.",
        "customerFeedback": [
            { "name": "Lee Yong Dae", "comment": "Grip ini sangat bagus. Saya merasa lebih nyaman dan aman dalam memegang raket." },
            { "name": "Lin Dan", "comment": "Saya suka grip ini. Desainnya menarik dan kualitasnya luar biasa." }
        ],
        "fitur": [
            { "name": "Bahan Berkualitas Tinggi", "description": "Grip ini dibuat dengan bahan berkualitas tinggi yang menjamin daya tahan dan kenyamanan yang luar biasa." },
            { "name": "Berat Ringan", "description": "Grip ini memiliki berat yang ringan, memungkinkan Anda untuk memegang raket dengan lebih nyaman dan aman." },
            { "name": "Berbagai Warna", "description": "Grip ini tersedia dalam berbagai warna yang menarik, memungkinkan Anda untuk memilih grip yang paling sesuai dengan gaya Anda." },
            { "name": "Tekstur Kuat", "description": "Grip ini memiliki tekstur yang kuat, memungkinkan Anda untuk memegang raket dengan lebih nyaman dan aman." },
            { "name": "Tas Elegan", "description": "Grip ini dilengkapi dengan tas yang elegan dan tahan lama, memungkinkan Anda untuk membawa grip ini ke mana saja dengan mudah dan aman." },
            { "name": "Desain Menarik", "description": "Dengan desain yang menarik, grip ini tidak hanya memberikan kualitas yang luar biasa, tetapi juga membuat Anda tampil menonjol di lapangan." }
        ]
    },       
    {
        title: 'Baju Olahraga',
        price: 100000,
        img: 'gambar_aksesoris/baju2.webp',
        brand: 'Adidas',
        size: 'M',
        description: 'Baju olahraga yang dirancang untuk kenyamanan dan fleksibilitas maksimal saat berolahraga.',
        category: 'pakaian',
        specifications: 'Spesifikasi: Baju ini dibuat dengan bahan berkualitas tinggi yang menawarkan daya tahan dan kenyamanan ekstra.',
        technicalInfo: 'Informasi Teknis: Bahan yang digunakan dirancang untuk menyerap keringat dan menjaga tubuh Anda tetap kering selama berolahraga.',
        rating: 'Rating: 4.5/5',
        additionalInfo: 'Informasi Tambahan: Tersedia dalam berbagai ukuran dan warna, memungkinkan Anda untuk memilih baju yang paling sesuai dengan kebutuhan dan gaya Anda.',
        customerFeedback: [
            { name: 'Liam', comment: 'Baju ini sangat nyaman dan fleksibel. Saya sangat merekomendasikannya untuk olahraga.' },
            { name: 'Emma', comment: 'Saya suka baju ini. Mereka sangat nyaman dan membantu saya berolahraga dengan lebih nyaman.' }
        ],
        fitur: [
            { name: 'Bahan Berkualitas Tinggi', description: 'Baju ini dibuat dengan bahan berkualitas tinggi yang menawarkan daya tahan dan kenyamanan ekstra.' },
            { name: 'Penyerap Keringat', description: 'Bahan yang digunakan dirancang untuk menyerap keringat dan menjaga tubuh Anda tetap kering selama berolahraga.' },
            { name: 'Berbagai Ukuran dan Warna', description: 'Tersedia dalam berbagai ukuran dan warna, memungkinkan Anda untuk memilih baju yang paling sesuai dengan gaya dan preferensi Anda.' },
            { name: 'Desain Modern', description: 'Desain yang stylish dan modern membuat baju ini tidak hanya fungsional, tetapi juga modis.' }
        ]
    },
    {
        title: 'Kaos Olahraga',
        price: 180000,
        img: 'gambar_aksesoris/baju4.webp',
        brand: 'Adidas',
        size: 'M',
        description: 'Kaos olahraga yang dirancang untuk kenyamanan dan fleksibilitas maksimal saat berolahraga.',
        category: 'pakaian',
        specifications: 'Spesifikasi: Kaos ini dibuat dengan bahan berkualitas tinggi yang menawarkan daya tahan dan kenyamanan ekstra.',
        technicalInfo: 'Informasi Teknis: Bahan yang digunakan dirancang untuk menyerap keringat dan menjaga tubuh Anda tetap kering selama berolahraga.',
        rating: 'Rating: 4.7/5',
        additionalInfo: 'Informasi Tambahan: Tersedia dalam berbagai ukuran dan warna, memungkinkan Anda untuk memilih kaos yang paling sesuai dengan kebutuhan dan gaya Anda.',
        customerFeedback: [
            { name: 'Lucas', comment: 'Kaos ini sangat nyaman dan fleksibel. Saya sangat merekomendasikannya untuk olahraga.' },
            { name: 'Ava', comment: 'Saya suka kaos ini. Mereka sangat nyaman dan membantu saya berolahraga dengan lebih nyaman.' },
            { name: 'Mia', comment: 'Kaos ini sangat stylish dan nyaman. Saya sangat suka.' },
            { name: 'Ethan', comment: 'Kaos ini sangat bagus. Bahan yang digunakan sangat nyaman dan tahan lama.' },
            { name: 'Sophia', comment: 'Saya suka kaos ini. Mereka sangat nyaman dan membantu saya berolahraga dengan lebih nyaman.' },
            { name: 'Noah', comment: 'Kaos ini sangat bagus. Saya sangat suka.' }
        ],
        fitur: [
            { name: 'Bahan Berkualitas Tinggi', description: 'Kaos ini dibuat dengan bahan berkualitas tinggi yang menawarkan daya tahan dan kenyamanan ekstra.' },
            { name: 'Penyerap Keringat', description: 'Bahan yang digunakan dirancang untuk menyerap keringat dan menjaga tubuh Anda tetap kering selama berolahraga.' },
            { name: 'Berbagai Ukuran dan Warna', description: 'Tersedia dalam berbagai ukuran dan warna, memungkinkan Anda untuk memilih kaos yang paling sesuai dengan gaya dan preferensi Anda.' },
            { name: 'Desain Modern', description: 'Desain yang stylish dan modern membuat kaos ini tidak hanya fungsional, tetapi juga modis.' }
        ]
    },
    {
        title: 'Kaos Olahraga Daya Serap Super',
        price: 130000,
        img: 'gambar_aksesoris/baju5.webp',
        brand: 'Adidas',
        size: 'M',
        description: 'Kaos olahraga yang dirancang untuk kenyamanan dan fleksibilitas maksimal saat berolahraga.',
        category: 'pakaian',
        specifications: 'Spesifikasi: Kaos ini dibuat dengan bahan berkualitas tinggi yang menawarkan daya tahan dan kenyamanan ekstra.',
        technicalInfo: 'Informasi Teknis: Bahan yang digunakan dirancang untuk menyerap keringat dan menjaga tubuh Anda tetap kering selama berolahraga.',
        rating: 'Rating: 4.8/5',
        additionalInfo: 'Informasi Tambahan: Tersedia dalam berbagai ukuran dan warna, memungkinkan Anda untuk memilih kaos yang paling sesuai dengan kebutuhan dan gaya Anda.',
        customerFeedback: [
            { name: 'Lucas', comment: 'Kaos ini sangat nyaman dan fleksibel. Saya sangat merekomendasikannya untuk olahraga.' },
            { name: 'Ava', comment: 'Saya suka kaos ini. Mereka sangat nyaman dan membantu saya berolahraga dengan lebih nyaman.' },
            { name: 'Mia', comment: 'Kaos ini sangat stylish dan nyaman. Saya sangat suka.' },
            { name: 'Ethan', comment: 'Kaos ini sangat bagus. Bahan yang digunakan sangat nyaman dan tahan lama.' },
            { name: 'Sophia', comment: 'Saya suka kaos ini. Mereka sangat nyaman dan membantu saya berolahraga dengan lebih nyaman.' },
            { name: 'Noah', comment: 'Kaos ini sangat bagus. Saya sangat suka.' },
            { name: 'Oliver', comment: 'Kaos ini sangat nyaman dan memberikan dukungan yang baik.' },
            { name: 'Emma', comment: 'Saya suka kaos ini. Mereka sangat nyaman dan membantu saya berolahraga dengan lebih aman.' },
            { name: 'Aiden', comment: 'Kaos ini sangat nyaman dan fleksibel. Saya sangat merekomendasikannya untuk olahraga.' },
            { name: 'Charlotte', comment: 'Saya suka kaos ini. Mereka sangat nyaman dan membantu saya berolahraga dengan lebih nyaman.' }
        ],
        fitur: [
            { name: 'Bahan Berkualitas Tinggi', description: 'Kaos ini dibuat dengan bahan berkualitas tinggi yang menawarkan daya tahan dan kenyamanan ekstra.' },
            { name: 'Penyerap Keringat', description: 'Bahan yang digunakan dirancang untuk menyerap keringat dan menjaga tubuh Anda tetap kering selama berolahraga.' },
            { name: 'Berbagai Ukuran dan Warna', description: 'Tersedia dalam berbagai ukuran dan warna, memungkinkan Anda untuk memilih kaos yang paling sesuai dengan gaya dan preferensi Anda.' },
            { name: 'Desain Modern', description: 'Desain yang stylish dan modern membuat kaos ini tidak hanya fungsional, tetapi juga modis.' }
        ]
    },
    {
        title: 'Kaos Olahraga dan Celana',
        price: 170000,
        img: 'gambar_aksesoris/baju6.webp',
        brand: 'Adidas',
        size: 'M',
        description: 'Kaos olahraga yang dirancang untuk kenyamanan dan fleksibilitas maksimal saat berolahraga.',
        category: 'pakaian',
        specifications: 'Spesifikasi: Kaos ini dibuat dengan bahan berkualitas tinggi yang menawarkan daya tahan dan kenyamanan ekstra.',
        technicalInfo: 'Informasi Teknis: Bahan yang digunakan dirancang untuk menyerap keringat dan menjaga tubuh Anda tetap kering selama berolahraga.',
        rating: 'Rating: 4.3/5',
        additionalInfo: 'Informasi Tambahan: Tersedia dalam berbagai ukuran dan warna, memungkinkan Anda untuk memilih kaos yang paling sesuai dengan kebutuhan dan gaya Anda.',
        customerFeedback: [
            { name: 'Kevin', comment: 'Kaos ini sangat nyaman dan fleksibel. Saya sangat merekomendasikannya untuk olahraga.' },
            { name: 'Linda', comment: 'Saya suka kaos ini. Mereka sangat nyaman dan membantu saya berolahraga dengan lebih nyaman.' },
            { name: 'Robert', comment: 'Kaos ini sangat stylish dan nyaman. Saya sangat suka.' },
            { name: 'Patricia', comment: 'Kaos ini sangat bagus. Bahan yang digunakan sangat nyaman dan tahan lama.' },
            { name: 'Michael', comment: 'Saya suka kaos ini. Mereka sangat nyaman dan membantu saya berolahraga dengan lebih nyaman.' },
            { name: 'Jennifer', comment: 'Kaos ini sangat bagus. Saya sangat suka.' },
            { name: 'Thomas', comment: 'Kaos ini sangat nyaman dan memberikan dukungan yang baik.' },
            { name: 'Jessica', comment: 'Saya suka kaos ini. Mereka sangat nyaman dan membantu saya berolahraga dengan lebih aman.' },
            { name: 'Charles', comment: 'Kaos ini sangat nyaman dan fleksibel. Saya sangat merekomendasikannya untuk olahraga.' },
            { name: 'Angela', comment: 'Saya suka kaos ini. Mereka sangat nyaman dan membantu saya berolahraga dengan lebih nyaman.' }
        ],
        fitur: [
            { name: 'Bahan Berkualitas Tinggi', description: 'Kaos ini dibuat dengan bahan berkualitas tinggi yang menawarkan daya tahan dan kenyamanan ekstra.' },
            { name: 'Penyerap Keringat', description: 'Bahan yang digunakan dirancang untuk menyerap keringat dan menjaga tubuh Anda tetap kering selama berolahraga.' },
            { name: 'Berbagai Ukuran dan Warna', description: 'Tersedia dalam berbagai ukuran dan warna, memungkinkan Anda untuk memilih kaos yang paling sesuai dengan gaya dan preferensi Anda.' },
            { name: 'Desain Modern', description: 'Desain yang stylish dan modern membuat kaos ini tidak hanya fungsional, tetapi juga modis.' }
        ]
    },
    {
        title: 'Kaos Olahraga Lembut',
        price: 110000,
        img: 'gambar_aksesoris/baju7.webp',
        brand: 'Adidas',
        size: 'M',
        description: 'Kaos olahraga yang dirancang untuk kenyamanan dan fleksibilitas maksimal saat berolahraga.',
        category: 'pakaian',
        specifications: 'Spesifikasi: Kaos ini dibuat dengan bahan berkualitas tinggi yang menawarkan daya tahan dan kenyamanan ekstra.',
        technicalInfo: 'Informasi Teknis: Bahan yang digunakan dirancang untuk menyerap keringat dan menjaga tubuh Anda tetap kering selama berolahraga.',
        rating: 'Rating: 4.2/5',
        additionalInfo: 'Informasi Tambahan: Tersedia dalam berbagai ukuran dan warna, memungkinkan Anda untuk memilih kaos yang paling sesuai dengan kebutuhan dan gaya Anda.',
        customerFeedback: [
            { name: 'Kevin', comment: 'Kaos ini sangat nyaman dan fleksibel. Saya sangat merekomendasikannya untuk olahraga.' },
            { name: 'Linda', comment: 'Saya suka kaos ini. Mereka sangat nyaman dan membantu saya berolahraga dengan lebih nyaman.' },
            { name: 'Robert', comment: 'Kaos ini sangat stylish dan nyaman. Saya sangat suka.' },
            { name: 'Patricia', comment: 'Kaos ini sangat bagus. Bahan yang digunakan sangat nyaman dan tahan lama.' },
            { name: 'Michael', comment: 'Saya suka kaos ini. Mereka sangat nyaman dan membantu saya berolahraga dengan lebih nyaman.' },
            { name: 'Jennifer', comment: 'Kaos ini sangat bagus. Saya sangat suka.' },
            { name: 'Thomas', comment: 'Kaos ini sangat nyaman dan memberikan dukungan yang baik.' },
            { name: 'Jessica', comment: 'Saya suka kaos ini. Mereka sangat nyaman dan membantu saya berolahraga dengan lebih aman.' },
            { name: 'Charles', comment: 'Kaos ini sangat nyaman dan fleksibel. Saya sangat merekomendasikannya untuk olahraga.' },
            { name: 'Angela', comment: 'Saya suka kaos ini. Mereka sangat nyaman dan membantu saya berolahraga dengan lebih nyaman.' },
            { name: 'William', comment: 'Kaos ini sangat nyaman dan fleksibel. Saya sangat merekomendasikannya untuk olahraga.' },
            { name: 'Emily', comment: 'Saya suka kaos ini. Mereka sangat nyaman dan membantu saya berolahraga dengan lebih nyaman.' },
            { name: 'James', comment: 'Kaos ini sangat stylish dan nyaman. Saya sangat suka.' },
            { name: 'Elizabeth', comment: 'Kaos ini sangat bagus. Bahan yang digunakan sangat nyaman dan tahan lama.' },
            { name: 'John', comment: 'Saya suka kaos ini. Mereka sangat nyaman dan membantu saya berolahraga dengan lebih nyaman.' },
            { name: 'Megan', comment: 'Kaos ini sangat bagus. Saya sangat suka.' }
        ],
        fitur: [
            { name: 'Bahan Berkualitas Tinggi', description: 'Kaos ini dibuat dengan bahan berkualitas tinggi yang menawarkan daya tahan dan kenyamanan ekstra.' },
            { name: 'Penyerap Keringat', description: 'Bahan yang digunakan dirancang untuk menyerap keringat dan menjaga tubuh Anda tetap kering selama berolahraga.' },
            { name: 'Berbagai Ukuran dan Warna', description: 'Tersedia dalam berbagai ukuran dan warna, memungkinkan Anda untuk memilih kaos yang paling sesuai dengan gaya dan preferensi Anda.' },
            { name: 'Desain Modern', description: 'Desain yang stylish dan modern membuat kaos ini tidak hanya fungsional, tetapi juga modis.' }
        ]
    },
    {
        title: 'Kaos Olahraga Adidas',
        price: 190000,
        img: 'gambar_aksesoris/baju8.webp',
        brand: 'Adidas',
        size: 'M',
        description: 'Kaos olahraga yang dirancang untuk kenyamanan dan fleksibilitas maksimal saat berolahraga.',
        category: 'pakaian',
        specifications: 'Spesifikasi: Kaos ini dibuat dengan bahan berkualitas tinggi yang menawarkan daya tahan dan kenyamanan ekstra.',
        technicalInfo: 'Informasi Teknis: Bahan yang digunakan dirancang untuk menyerap keringat dan menjaga tubuh Anda tetap kering selama berolahraga.',
        rating: 'Rating: 4.1/5',
        additionalInfo: 'Informasi Tambahan: Tersedia dalam berbagai ukuran dan warna, memungkinkan Anda untuk memilih kaos yang paling sesuai dengan kebutuhan dan gaya Anda.',
        customerFeedback: [
            { name: 'Kevin', comment: 'Kaos ini sangat nyaman dan fleksibel. Saya sangat merekomendasikannya untuk olahraga.' },
            { name: 'Linda', comment: 'Saya suka kaos ini. Mereka sangat nyaman dan membantu saya berolahraga dengan lebih nyaman.' },
            { name: 'Robert', comment: 'Kaos ini sangat stylish dan nyaman. Saya sangat suka.' },
            { name: 'Patricia', comment: 'Kaos ini sangat bagus. Bahan yang digunakan sangat nyaman dan tahan lama.' },
            { name: 'Michael', comment: 'Saya suka kaos ini. Mereka sangat nyaman dan membantu saya berolahraga dengan lebih nyaman.' },
            { name: 'Jennifer', comment: 'Kaos ini sangat bagus. Saya sangat suka.' },
            { name: 'Thomas', comment: 'Kaos ini sangat nyaman dan memberikan dukungan yang baik.' },
            { name: 'Jessica', comment: 'Saya suka kaos ini. Mereka sangat nyaman dan membantu saya berolahraga dengan lebih aman.' },
            { name: 'Charles', comment: 'Kaos ini sangat nyaman dan fleksibel. Saya sangat merekomendasikannya untuk olahraga.' },
            { name: 'Angela', comment: 'Saya suka kaos ini. Mereka sangat nyaman dan membantu saya berolahraga dengan lebih nyaman.' },
            { name: 'William', comment: 'Kaos ini sangat nyaman dan fleksibel. Saya sangat merekomendasikannya untuk olahraga.' },
            { name: 'Emily', comment: 'Saya suka kaos ini. Mereka sangat nyaman dan membantu saya berolahraga dengan lebih nyaman.' },
            { name: 'James', comment: 'Kaos ini sangat stylish dan nyaman. Saya sangat suka.' },
            { name: 'Elizabeth', comment: 'Kaos ini sangat bagus. Bahan yang digunakan sangat nyaman dan tahan lama.' },
            { name: 'John', comment: 'Saya suka kaos ini. Mereka sangat nyaman dan membantu saya berolahraga dengan lebih nyaman.' },
            { name: 'Megan', comment: 'Kaos ini sangat bagus. Saya sangat suka.' },
            { name: 'David', comment: 'Kaos ini sangat nyaman dan fleksibel. Saya sangat merekomendasikannya untuk olahraga.' },
            { name: 'Nancy', comment: 'Saya suka kaos ini. Mereka sangat nyaman dan membantu saya berolahraga dengan lebih nyaman.' },
            { name: 'George', comment: 'Kaos ini sangat stylish dan nyaman. Saya sangat suka.' },
            { name: 'Barbara', comment: 'Kaos ini sangat bagus. Bahan yang digunakan sangat nyaman dan tahan lama.' }
        ],
        fitur: [
            { name: 'Bahan Berkualitas Tinggi', description: 'Kaos ini dibuat dengan bahan berkualitas tinggi yang menawarkan daya tahan dan kenyamanan ekstra.' },
            { name: 'Penyerap Keringat', description: 'Bahan yang digunakan dirancang untuk menyerap keringat dan menjaga tubuh Anda tetap kering selama berolahraga.' },
            { name: 'Berbagai Ukuran dan Warna', description: 'Tersedia dalam berbagai ukuran dan warna, memungkinkan Anda untuk memilih kaos yang paling sesuai dengan gaya dan preferensi Anda.' },
            { name: 'Desain Modern', description: 'Desain yang stylish dan modern membuat kaos ini tidak hanya fungsional, tetapi juga modis.' }
        ]
    },    
    {
        title: 'Kaos Olahraga Energetic',
        price: 130000,
        img: 'gambar_aksesoris/baju9.webp',
        brand: 'Adidas',
        size: 'M',
        description: 'Kaos olahraga yang dirancang untuk kenyamanan dan fleksibilitas maksimal saat berolahraga.',
        category: 'pakaian',
        specifications: 'Spesifikasi: Kaos ini dibuat dengan bahan berkualitas tinggi yang menawarkan daya tahan dan kenyamanan ekstra.',
        technicalInfo: 'Informasi Teknis: Bahan yang digunakan dirancang untuk menyerap keringat dan menjaga tubuh Anda tetap kering selama berolahraga.',
        rating: 'Rating: 4.6/5',
        additionalInfo: 'Informasi Tambahan: Tersedia dalam berbagai ukuran dan warna, memungkinkan Anda untuk memilih kaos yang paling sesuai dengan kebutuhan dan gaya Anda.',
        customerFeedback: [
            { name: 'Kevin', comment: 'Kaos ini sangat nyaman dan fleksibel. Saya sangat merekomendasikannya untuk olahraga.' },
            { name: 'Linda', comment: 'Saya suka kaos ini. Mereka sangat nyaman dan membantu saya berolahraga dengan lebih nyaman.' },
            { name: 'Robert', comment: 'Kaos ini sangat stylish dan nyaman. Saya sangat suka.' },
            { name: 'Patricia', comment: 'Kaos ini sangat bagus. Bahan yang digunakan sangat nyaman dan tahan lama.' },
            { name: 'Michael', comment: 'Saya suka kaos ini. Mereka sangat nyaman dan membantu saya berolahraga dengan lebih nyaman.' },
            { name: 'Jennifer', comment: 'Kaos ini sangat bagus. Saya sangat suka.' },
            { name: 'Thomas', comment: 'Kaos ini sangat nyaman dan memberikan dukungan yang baik.' },
            { name: 'Jessica', comment: 'Saya suka kaos ini. Mereka sangat nyaman dan membantu saya berolahraga dengan lebih aman.' },
            { name: 'Charles', comment: 'Kaos ini sangat nyaman dan fleksibel. Saya sangat merekomendasikannya untuk olahraga.' },
            { name: 'Angela', comment: 'Saya suka kaos ini. Mereka sangat nyaman dan membantu saya berolahraga dengan lebih nyaman.' },
            { name: 'William', comment: 'Kaos ini sangat nyaman dan fleksibel. Saya sangat merekomendasikannya untuk olahraga.' },
            { name: 'Emily', comment: 'Saya suka kaos ini. Mereka sangat nyaman dan membantu saya berolahraga dengan lebih nyaman.' },
            { name: 'James', comment: 'Kaos ini sangat stylish dan nyaman. Saya sangat suka.' },
            { name: 'Elizabeth', comment: 'Kaos ini sangat bagus. Bahan yang digunakan sangat nyaman dan tahan lama.' },
            { name: 'John', comment: 'Saya suka kaos ini. Mereka sangat nyaman dan membantu saya berolahraga dengan lebih nyaman.' },
            { name: 'Megan', comment: 'Kaos ini sangat bagus. Saya sangat suka.' },
            { name: 'David', comment: 'Kaos ini sangat nyaman dan fleksibel. Saya sangat merekomendasikannya untuk olahraga.' },
            { name: 'Nancy', comment: 'Saya suka kaos ini. Mereka sangat nyaman dan membantu saya berolahraga dengan lebih nyaman.' },
            { name: 'George', comment: 'Kaos ini sangat stylish dan nyaman. Saya sangat suka.' },
            { name: 'Barbara', comment: 'Kaos ini sangat bagus. Bahan yang digunakan sangat nyaman dan tahan lama.' },
            { name: 'Paul', comment: 'Kaos ini sangat nyaman dan fleksibel. Saya sangat merekomendasikannya untuk olahraga.' },
            { name: 'Sarah', comment: 'Saya suka kaos ini. Mereka sangat nyaman dan membantu saya berolahraga dengan lebih nyaman.' },
            { name: 'Joseph', comment: 'Kaos ini sangat stylish dan nyaman. Saya sangat suka.' },
            { name: 'Karen', comment: 'Kaos ini sangat bagus. Bahan yang digunakan sangat nyaman dan tahan lama.' },
            { name: 'Andrew', comment: 'Saya suka kaos ini. Mereka sangat nyaman dan membantu saya berolahraga dengan lebih nyaman.' },
            { name: 'Betty', comment: 'Kaos ini sangat bagus. Saya sangat suka.' }
        ],
        fitur: [
            { name: 'Bahan Berkualitas Tinggi', description: 'Kaos ini dibuat dengan bahan berkualitas tinggi yang menawarkan daya tahan dan kenyamanan ekstra.' },
            { name: 'Penyerap Keringat', description: 'Bahan yang digunakan dirancang untuk menyerap keringat dan menjaga tubuh Anda tetap kering selama berolahraga.' },
            { name: 'Berbagai Ukuran dan Warna', description: 'Tersedia dalam berbagai ukuran dan warna, memungkinkan Anda untuk memilih kaos yang paling sesuai dengan gaya dan preferensi Anda.' },
            { name: 'Desain Modern', description: 'Desain yang stylish dan modern membuat kaos ini tidak hanya fungsional, tetapi juga modis.' }
        ]
    },
    {
        title: 'Kaos Olahraga Dynamic',
        price: 150000,
        img: 'gambar_aksesoris/baju10.webp',
        brand: 'Adidas',
        size: 'M',
        description: 'Kaos olahraga yang dirancang untuk kenyamanan dan fleksibilitas maksimal saat berolahraga.',
        category: 'pakaian',
        specifications: 'Spesifikasi: Kaos ini dibuat dengan bahan berkualitas tinggi yang menawarkan daya tahan dan kenyamanan ekstra.',
        technicalInfo: 'Informasi Teknis: Bahan yang digunakan dirancang untuk menyerap keringat dan menjaga tubuh Anda tetap kering selama berolahraga.',
        rating: 'Rating: 4.9/5',
        additionalInfo: 'Informasi Tambahan: Tersedia dalam berbagai ukuran dan warna, memungkinkan Anda untuk memilih kaos yang paling sesuai dengan kebutuhan dan gaya Anda.',
        customerFeedback: [
            { name: 'Kevin', comment: 'Kaos ini sangat nyaman dan fleksibel. Saya sangat merekomendasikannya untuk olahraga.' },
            { name: 'Linda', comment: 'Saya suka kaos ini. Mereka sangat nyaman dan membantu saya berolahraga dengan lebih nyaman.' },
            { name: 'Robert', comment: 'Kaos ini sangat stylish dan nyaman. Saya sangat suka.' },
            { name: 'Patricia', comment: 'Kaos ini sangat bagus. Bahan yang digunakan sangat nyaman dan tahan lama.' },
            { name: 'Michael', comment: 'Saya suka kaos ini. Mereka sangat nyaman dan membantu saya berolahraga dengan lebih nyaman.' },
            { name: 'Jennifer', comment: 'Kaos ini sangat bagus. Saya sangat suka.' },
            { name: 'Thomas', comment: 'Kaos ini sangat nyaman dan memberikan dukungan yang baik.' },
            { name: 'Jessica', comment: 'Saya suka kaos ini. Mereka sangat nyaman dan membantu saya berolahraga dengan lebih aman.' },
            { name: 'Charles', comment: 'Kaos ini sangat nyaman dan fleksibel. Saya sangat merekomendasikannya untuk olahraga.' },
            { name: 'Angela', comment: 'Saya suka kaos ini. Mereka sangat nyaman dan membantu saya berolahraga dengan lebih nyaman.' },
            { name: 'William', comment: 'Kaos ini sangat nyaman dan fleksibel. Saya sangat merekomendasikannya untuk olahraga.' },
            { name: 'Emily', comment: 'Saya suka kaos ini. Mereka sangat nyaman dan membantu saya berolahraga dengan lebih nyaman.' },
            { name: 'James', comment: 'Kaos ini sangat stylish dan nyaman. Saya sangat suka.' },
            { name: 'Elizabeth', comment: 'Kaos ini sangat bagus. Bahan yang digunakan sangat nyaman dan tahan lama.' },
            { name: 'John', comment: 'Saya suka kaos ini. Mereka sangat nyaman dan membantu saya berolahraga dengan lebih nyaman.' },
            { name: 'Megan', comment: 'Kaos ini sangat bagus. Saya sangat suka.' },
            { name: 'David', comment: 'Kaos ini sangat nyaman dan fleksibel. Saya sangat merekomendasikannya untuk olahraga.' },
            { name: 'Nancy', comment: 'Saya suka kaos ini. Mereka sangat nyaman dan membantu saya berolahraga dengan lebih nyaman.' },
            { name: 'George', comment: 'Kaos ini sangat stylish dan nyaman. Saya sangat suka.' },
            { name: 'Barbara', comment: 'Kaos ini sangat bagus. Bahan yang digunakan sangat nyaman dan tahan lama.' },
            { name: 'Paul', comment: 'Kaos ini sangat nyaman dan fleksibel. Saya sangat merekomendasikannya untuk olahraga.' },
            { name: 'Sarah', comment: 'Saya suka kaos ini. Mereka sangat nyaman dan membantu saya berolahraga dengan lebih nyaman.' },
            { name: 'Joseph', comment: 'Kaos ini sangat stylish dan nyaman. Saya sangat suka.' },
            { name: 'Karen', comment: 'Kaos ini sangat bagus. Bahan yang digunakan sangat nyaman dan tahan lama.' },
            { name: 'Andrew', comment: 'Saya suka kaos ini. Mereka sangat nyaman dan membantu saya berolahraga dengan lebih nyaman.' },
            { name: 'Betty', comment: 'Kaos ini sangat bagus. Saya sangat suka.' }
        ],
        fitur: [
            { name: 'Bahan Berkualitas Tinggi', description: 'Kaos ini dibuat dengan bahan berkualitas tinggi yang menawarkan daya tahan dan kenyamanan ekstra.' },
            { name: 'Penyerap Keringat', description: 'Bahan yang digunakan dirancang untuk menyerap keringat dan menjaga tubuh Anda tetap kering selama berolahraga.' },
            { name: 'Berbagai Ukuran dan Warna', description: 'Tersedia dalam berbagai ukuran dan warna, memungkinkan Anda untuk memilih kaos yang paling sesuai dengan gaya dan preferensi Anda.' },
            { name: 'Desain Modern', description: 'Desain yang stylish dan modern membuat kaos ini tidak hanya fungsional, tetapi juga modis.' }
        ]
    },    
    {
        "title": "Raket Badminton Victor Performa",
        "price": 1200000,
        "img": "/gambar_aksesoris/raket1.webp",
        "brand": "Victor",
        "size": "Normal",
        "description": "Raket badminton yang dirancang untuk performa maksimal, memberikan kecepatan dan kontrol yang luar biasa dalam setiap pukulan.",
        "category": "raket",
        "specifications": "Spesifikasi: Raket ini dibuat dengan bahan berkualitas tinggi yang menjamin daya tahan dan kekuatan yang luar biasa.",
        "technicalInfo": "Informasi Teknis: Raket ini memiliki berat yang ringan dan balance yang baik, memungkinkan Anda untuk melakukan pukulan dengan cepat dan akurat.",
        "rating": "Rating: 4.7/5",
        "additionalInfo": "Informasi Tambahan: Raket ini tersedia dalam berbagai warna dan desain yang menarik, memungkinkan Anda untuk memilih raket yang paling sesuai dengan gaya Anda.",
        "customerFeedback": [
            { "name": "Budi Santoso", "comment": "Raket ini sangat bagus. Saya merasa lebih cepat dan akurat dalam melakukan pukulan." },
            { "name": "Siti Aminah", "comment": "Saya suka raket ini. Desainnya menarik dan performanya luar biasa." }
        ],
        "fitur": [
            { "name": "Bahan Berkualitas Tinggi", "description": "Raket ini dibuat dengan bahan berkualitas tinggi yang menjamin daya tahan dan kekuatan yang luar biasa." },
            { "name": "Berat Ringan", "description": "Raket ini memiliki berat yang ringan, memungkinkan Anda untuk melakukan pukulan dengan cepat dan akurat." },
            { "name": "Berbagai Warna dan Desain", "description": "Raket ini tersedia dalam berbagai warna dan desain yang menarik, memungkinkan Anda untuk memilih raket yang paling sesuai dengan gaya Anda." },
            { "name": "Performa Maksimal", "description": "Raket ini dirancang untuk performa maksimal, memberikan kecepatan dan kontrol yang luar biasa dalam setiap pukulan." }
        ]
    },
    {
        "title": "Raket Badminton Yonex Multicolor",
        "price": 1500000,
        "img": "/gambar_aksesoris/raket2.webp",
        "brand": "Yonex",
        "size": "Normal",
        "description": "Raket badminton multicolor yang dirancang untuk pemain yang menginginkan kecepatan dan presisi dalam setiap pukulan.",
        "category": "raket",
        "specifications": "Spesifikasi: Raket ini dibuat dengan bahan berkualitas tinggi yang menjamin daya tahan dan kekuatan yang luar biasa.",
        "technicalInfo": "Informasi Teknis: Raket ini memiliki berat yang ringan dan balance yang baik, memungkinkan Anda untuk melakukan pukulan dengan cepat dan akurat.",
        "rating": "Rating: 4.8/5",
        "additionalInfo": "Informasi Tambahan: Raket ini tersedia dalam berbagai warna yang menarik, memungkinkan Anda untuk memilih raket yang paling sesuai dengan gaya Anda.",
        "customerFeedback": [
            { "name": "Taufik Hidayat", "comment": "Raket ini sangat bagus. Saya merasa lebih cepat dan akurat dalam melakukan pukulan." },
            { "name": "Liliyana Natsir", "comment": "Saya suka raket ini. Desainnya menarik dan performanya luar biasa." },
            { "name": "Kevin Sanjaya", "comment": "Raket ini sangat ringan dan nyaman digunakan. Sangat direkomendasikan untuk pemain profesional." },
            { "name": "Greysia Polii", "comment": "Raket ini memberikan kontrol yang baik dan kecepatan yang luar biasa. Sangat cocok untuk pertandingan." }
        ],
        "fitur": [
            { "name": "Bahan Berkualitas Tinggi", "description": "Raket ini dibuat dengan bahan berkualitas tinggi yang menjamin daya tahan dan kekuatan yang luar biasa." },
            { "name": "Berat Ringan", "description": "Raket ini memiliki berat yang ringan, memungkinkan Anda untuk melakukan pukulan dengan cepat dan akurat." },
            { "name": "Berbagai Warna", "description": "Raket ini tersedia dalam berbagai warna yang menarik, memungkinkan Anda untuk memilih raket yang paling sesuai dengan gaya Anda." },
            { "name": "Performa Maksimal", "description": "Raket ini dirancang untuk performa maksimal, memberikan kecepatan dan kontrol yang luar biasa dalam setiap pukulan." }
        ]
    },
    {
        "title": "Raket Badminton Multibrand",
        "price": 1800000,
        "img": "/gambar_aksesoris/raket3.webp",
        "brand": "Multibrand",
        "size": "Normal",
        "description": "Raket badminton multibrand yang dirancang untuk pemain yang menginginkan variasi dan fleksibilitas dalam setiap pukulan.",
        "category": "raket",
        "specifications": "Spesifikasi: Raket ini dibuat dengan bahan berkualitas tinggi yang menjamin daya tahan dan kekuatan yang luar biasa.",
        "technicalInfo": "Informasi Teknis: Raket ini memiliki berat yang ringan dan balance yang baik, memungkinkan Anda untuk melakukan pukulan dengan cepat dan akurat.",
        "rating": "Rating: 4.9/5",
        "additionalInfo": "Informasi Tambahan: Raket ini tersedia dalam berbagai warna dan merk yang menarik, memungkinkan Anda untuk memilih raket yang paling sesuai dengan gaya Anda.",
        "customerFeedback": [
            { "name": "Tontowi Ahmad", "comment": "Raket ini sangat bagus. Saya merasa lebih cepat dan akurat dalam melakukan pukulan." },
            { "name": "Mohammad Ahsan", "comment": "Saya suka raket ini. Desainnya menarik dan performanya luar biasa." },
            { "name": "Hendra Setiawan", "comment": "Raket ini sangat ringan dan nyaman digunakan. Sangat direkomendasikan untuk pemain profesional." },
            { "name": "Marcus Fernaldi Gideon", "comment": "Raket ini memberikan kontrol yang baik dan kecepatan yang luar biasa. Sangat cocok untuk pertandingan." },
            { "name": "Kevin Sanjaya Sukamuljo", "comment": "Raket ini sangat bagus. Saya merasa lebih cepat dan akurat dalam melakukan pukulan." },
            { "name": "Praveen Jordan", "comment": "Saya suka raket ini. Desainnya menarik dan performanya luar biasa." }
        ],
        "fitur": [
            { "name": "Bahan Berkualitas Tinggi", "description": "Raket ini dibuat dengan bahan berkualitas tinggi yang menjamin daya tahan dan kekuatan yang luar biasa." },
            { "name": "Berat Ringan", "description": "Raket ini memiliki berat yang ringan, memungkinkan Anda untuk melakukan pukulan dengan cepat dan akurat." },
            { "name": "Berbagai Warna dan Merk", "description": "Raket ini tersedia dalam berbagai warna dan merk yang menarik, memungkinkan Anda untuk memilih raket yang paling sesuai dengan gaya Anda." },
            { "name": "Performa Maksimal", "description": "Raket ini dirancang untuk performa maksimal, memberikan kecepatan dan kontrol yang luar biasa dalam setiap pukulan." }
        ]
    },
    {
        "title": "Raket Badminton Victor Profesional",
        "price": 2000000,
        "img": "/gambar_aksesoris/raket4.webp",
        "brand": "Victor",
        "size": "Normal",
        "description": "Raket badminton profesional yang dirancang untuk pemain yang menginginkan keunggulan dalam setiap pukulan. Dengan desain yang menarik dan performa yang luar biasa, raket ini akan membantu Anda mencapai puncak permainan Anda.",
        "category": "raket",
        "specifications": "Spesifikasi: Raket ini dibuat dengan bahan berkualitas tinggi yang menjamin daya tahan dan kekuatan yang luar biasa. Dengan berat yang ringan dan balance yang baik, raket ini memungkinkan Anda untuk melakukan pukulan dengan cepat dan akurat.",
        "technicalInfo": "Informasi Teknis: Raket ini memiliki berat yang ringan dan balance yang baik, memungkinkan Anda untuk melakukan pukulan dengan cepat dan akurat.",
        "rating": "Rating: 5/5",
        "additionalInfo": "Informasi Tambahan: Raket ini tersedia dalam berbagai warna yang menarik, memungkinkan Anda untuk memilih raket yang paling sesuai dengan gaya Anda. Dengan tas yang elegan dan tahan lama, Anda dapat membawa raket ini ke mana saja dengan mudah dan aman.",
        "customerFeedback": [
            { "name": "Lee Chong Wei", "comment": "Raket ini sangat bagus. Saya merasa lebih cepat dan akurat dalam melakukan pukulan." },
            { "name": "Lin Dan", "comment": "Saya suka raket ini. Desainnya menarik dan performanya luar biasa." },
            { "name": "Chen Long", "comment": "Raket ini sangat ringan dan nyaman digunakan. Sangat direkomendasikan untuk pemain profesional." },
            { "name": "Kento Momota", "comment": "Raket ini memberikan kontrol yang baik dan kecepatan yang luar biasa. Sangat cocok untuk pertandingan." },
            { "name": "Anthony Sinisuka Ginting", "comment": "Raket ini sangat bagus. Saya merasa lebih cepat dan akurat dalam melakukan pukulan." },
            { "name": "Jonatan Christie", "comment": "Saya suka raket ini. Desainnya menarik dan performanya luar biasa." },
            { "name": "Marcus Fernaldi Gideon", "comment": "Raket ini sangat ringan dan nyaman digunakan. Sangat direkomendasikan untuk pemain profesional." },
            { "name": "Kevin Sanjaya Sukamuljo", "comment": "Raket ini memberikan kontrol yang baik dan kecepatan yang luar biasa. Sangat cocok untuk pertandingan." }
        ],
        "fitur": [
            { "name": "Bahan Berkualitas Tinggi", "description": "Raket ini dibuat dengan bahan berkualitas tinggi yang menjamin daya tahan dan kekuatan yang luar biasa." },
            { "name": "Berat Ringan", "description": "Raket ini memiliki berat yang ringan, memungkinkan Anda untuk melakukan pukulan dengan cepat dan akurat." },
            { "name": "Berbagai Warna", "description": "Raket ini tersedia dalam berbagai warna yang menarik, memungkinkan Anda untuk memilih raket yang paling sesuai dengan gaya Anda." },
            { "name": "Performa Maksimal", "description": "Raket ini dirancang untuk performa maksimal, memberikan kecepatan dan kontrol yang luar biasa dalam setiap pukulan." },
            { "name": "Tas Elegan", "description": "Raket ini dilengkapi dengan tas yang elegan dan tahan lama, memungkinkan Anda untuk membawa raket ini ke mana saja dengan mudah dan aman." },
            { "name": "Desain Menarik", "description": "Dengan desain yang menarik, raket ini tidak hanya memberikan performa yang luar biasa, tetapi juga membuat Anda tampil menonjol di lapangan." }
        ]
    },
    {
        "title": "Raket Badminton Kenier Profesional",
        "price": 2200000,
        "img": "/gambar_aksesoris/raket5.webp",
        "brand": "Kenier",
        "size": "EU 36",
        "description": "Raket badminton Kenier yang dirancang untuk pemain yang menginginkan keunggulan dalam setiap pukulan. Dengan desain yang menarik dan performa yang luar biasa, raket ini akan membantu Anda mencapai puncak permainan Anda.",
        "category": "raket",
        "specifications": "Spesifikasi: Raket ini dibuat dengan bahan berkualitas tinggi yang menjamin daya tahan dan kekuatan yang luar biasa. Dengan berat yang ringan dan balance yang baik, raket ini memungkinkan Anda untuk melakukan pukulan dengan cepat dan akurat.",
        "technicalInfo": "Informasi Teknis: Raket ini memiliki berat yang ringan dan balance yang baik, memungkinkan Anda untuk melakukan pukulan dengan cepat dan akurat.",
        "rating": "Rating: 5/5",
        "additionalInfo": "Informasi Tambahan: Raket ini tersedia dalam berbagai warna yang menarik, memungkinkan Anda untuk memilih raket yang paling sesuai dengan gaya Anda. Dengan tas yang elegan dan tahan lama, Anda dapat membawa raket ini ke mana saja dengan mudah dan aman.",
        "customerFeedback": [
            { "name": "Lee Yong Dae", "comment": "Raket ini sangat bagus. Saya merasa lebih cepat dan akurat dalam melakukan pukulan." },
            { "name": "Fu Haifeng", "comment": "Saya suka raket ini. Desainnya menarik dan performanya luar biasa." },
            { "name": "Cai Yun", "comment": "Raket ini sangat ringan dan nyaman digunakan. Sangat direkomendasikan untuk pemain profesional." },
            { "name": "Zhang Nan", "comment": "Raket ini memberikan kontrol yang baik dan kecepatan yang luar biasa. Sangat cocok untuk pertandingan." },
            { "name": "Lee Chong Wei", "comment": "Raket ini sangat bagus. Saya merasa lebih cepat dan akurat dalam melakukan pukulan." },
            { "name": "Lin Dan", "comment": "Saya suka raket ini. Desainnya menarik dan performanya luar biasa." },
            { "name": "Chen Long", "comment": "Raket ini sangat ringan dan nyaman digunakan. Sangat direkomendasikan untuk pemain profesional." },
            { "name": "Kento Momota", "comment": "Raket ini memberikan kontrol yang baik dan kecepatan yang luar biasa. Sangat cocok untuk pertandingan." }
        ],
        "fitur": [
            { "name": "Bahan Berkualitas Tinggi", "description": "Raket ini dibuat dengan bahan berkualitas tinggi yang menjamin daya tahan dan kekuatan yang luar biasa." },
            { "name": "Berat Ringan", "description": "Raket ini memiliki berat yang ringan, memungkinkan Anda untuk melakukan pukulan dengan cepat dan akurat." },
            { "name": "Berbagai Warna", "description": "Raket ini tersedia dalam berbagai warna yang menarik, memungkinkan Anda untuk memilih raket yang paling sesuai dengan gaya Anda." },
            { "name": "Performa Maksimal", "description": "Raket ini dirancang untuk performa maksimal, memberikan kecepatan dan kontrol yang luar biasa dalam setiap pukulan." },
            { "name": "Tas Elegan", "description": "Raket ini dilengkapi dengan tas yang elegan dan tahan lama, memungkinkan Anda untuk membawa raket ini ke mana saja dengan mudah dan aman." },
            { "name": "Desain Menarik", "description": "Dengan desain yang menarik, raket ini tidak hanya memberikan performa yang luar biasa, tetapi juga membuat Anda tampil menonjol di lapangan." },
            { "name": "Grip Nyaman", "description": "Grip raket ini dirancang untuk memberikan kenyamanan maksimal, memungkinkan Anda untuk memegang raket dengan nyaman selama bermain." },
            { "name": "String Berkualitas", "description": "String raket ini dibuat dengan bahan berkualitas tinggi, memberikan kekuatan dan daya tahan yang luar biasa." }
        ]
    },
    {
        "title": "Sepatu Badminton Kenier Profesional",
        "price": 1800000,
        "img": "/gambar_aksesoris/sepatu1.webp",
        "brand": "Kenier",
        "size": "EU 38",
        "description": "Sepatu badminton Kenier yang dirancang untuk pemain yang menginginkan keunggulan dalam setiap langkah. Dengan desain yang menarik dan performa yang luar biasa, sepatu ini akan membantu Anda mencapai puncak permainan Anda.",
        "category": "sepatu",
        "specifications": "Spesifikasi: Sepatu ini dibuat dengan bahan berkualitas tinggi yang menjamin daya tahan dan kenyamanan yang luar biasa. Dengan berat yang ringan dan sol yang kuat, sepatu ini memungkinkan Anda untuk bergerak dengan cepat dan stabil.",
        "technicalInfo": "Informasi Teknis: Sepatu ini memiliki berat yang ringan dan sol yang kuat, memungkinkan Anda untuk bergerak dengan cepat dan stabil.",
        "rating": "Rating: 5/5",
        "additionalInfo": "Informasi Tambahan: Sepatu ini tersedia dalam berbagai warna yang menarik, memungkinkan Anda untuk memilih sepatu yang paling sesuai dengan gaya Anda. Dengan tas yang elegan dan tahan lama, Anda dapat membawa sepatu ini ke mana saja dengan mudah dan aman.",
        "customerFeedback": [
            { "name": "Lee Yong Dae", "comment": "Sepatu ini sangat bagus. Saya merasa lebih cepat dan stabil dalam bergerak." },
            { "name": "Lin Dan", "comment": "Saya suka sepatu ini. Desainnya menarik dan performanya luar biasa." },
            { "name": "Chen Long", "comment": "Sepatu ini sangat ringan dan nyaman digunakan. Sangat direkomendasikan untuk pemain profesional." },
            { "name": "Kento Momota", "comment": "Sepatu ini memberikan kontrol yang baik dan kecepatan yang luar biasa. Sangat cocok untuk pertandingan." },
            { "name": "Anthony Sinisuka Ginting", "comment": "Sepatu ini sangat bagus. Saya merasa lebih cepat dan stabil dalam bergerak." },
            { "name": "Jonatan Christie", "comment": "Saya suka sepatu ini. Desainnya menarik dan performanya luar biasa." },
            { "name": "Marcus Fernaldi Gideon", "comment": "Sepatu ini sangat ringan dan nyaman digunakan. Sangat direkomendasikan untuk pemain profesional." },
            { "name": "Kevin Sanjaya Sukamuljo", "comment": "Sepatu ini memberikan kontrol yang baik dan kecepatan yang luar biasa. Sangat cocok untuk pertandingan." }
        ],
        "fitur": [
            { "name": "Bahan Berkualitas Tinggi", "description": "Sepatu ini dibuat dengan bahan berkualitas tinggi yang menjamin daya tahan dan kenyamanan yang luar biasa." },
            { "name": "Berat Ringan", "description": "Sepatu ini memiliki berat yang ringan, memungkinkan Anda untuk bergerak dengan cepat dan stabil." },
            { "name": "Berbagai Warna", "description": "Sepatu ini tersedia dalam berbagai warna yang menarik, memungkinkan Anda untuk memilih sepatu yang paling sesuai dengan gaya Anda." },
            { "name": "Performa Maksimal", "description": "Sepatu ini dirancang untuk performa maksimal, memberikan kecepatan dan kontrol yang luar biasa dalam setiap langkah." },
            { "name": "Tas Elegan", "description": "Sepatu ini dilengkapi dengan tas yang elegan dan tahan lama, memungkinkan Anda untuk membawa sepatu ini ke mana saja dengan mudah dan aman." },
            { "name": "Desain Menarik", "description": "Dengan desain yang menarik, sepatu ini tidak hanya memberikan performa yang luar biasa, tetapi juga membuat Anda tampil menonjol di lapangan." },
            { "name": "Sol Kuat", "description": "Sol sepatu ini dirancang untuk memberikan stabilitas dan kekuatan yang luar biasa, memungkinkan Anda untuk bergerak dengan cepat dan stabil." },
            { "name": "Kenyamanan Maksimal", "description": "Dengan bahan yang nyaman dan desain yang ergonomis, sepatu ini memberikan kenyamanan maksimal bagi kaki Anda." }
        ]
    },
    {
        "title": "Sepatu Olahraga Kenier Profesional",
        "price": 1600000,
        "img": "/gambar_aksesoris/sepatu2.webp",
        "brand": "Kenier",
        "size": "EU 39",
        "description": "Sepatu olahraga Kenier yang dirancang untuk atlet yang menginginkan keunggulan dalam setiap langkah. Dengan desain yang menarik dan performa yang luar biasa, sepatu ini akan membantu Anda mencapai puncak permainan Anda.",
        "category": "sepatu",
        "specifications": "Spesifikasi: Sepatu ini dibuat dengan bahan berkualitas tinggi yang menjamin daya tahan dan kenyamanan yang luar biasa. Dengan berat yang ringan dan sol yang kuat, sepatu ini memungkinkan Anda untuk bergerak dengan cepat dan stabil.",
        "technicalInfo": "Informasi Teknis: Sepatu ini memiliki berat yang ringan dan sol yang kuat, memungkinkan Anda untuk bergerak dengan cepat dan stabil.",
        "rating": "Rating: 5/5",
        "additionalInfo": "Informasi Tambahan: Sepatu ini tersedia dalam berbagai warna yang menarik, memungkinkan Anda untuk memilih sepatu yang paling sesuai dengan gaya Anda. Dengan tas yang elegan dan tahan lama, Anda dapat membawa sepatu ini ke mana saja dengan mudah dan aman.",
        "customerFeedback": [
            { "name": "Lee Yong Dae", "comment": "Sepatu ini sangat bagus. Saya merasa lebih cepat dan stabil dalam bergerak." },
            { "name": "Lin Dan", "comment": "Saya suka sepatu ini. Desainnya menarik dan performanya luar biasa." },
            { "name": "Chen Long", "comment": "Sepatu ini sangat ringan dan nyaman digunakan. Sangat direkomendasikan untuk pemain profesional." },
            { "name": "Kento Momota", "comment": "Sepatu ini memberikan kontrol yang baik dan kecepatan yang luar biasa. Sangat cocok untuk pertandingan." },
            { "name": "Anthony Sinisuka Ginting", "comment": "Sepatu ini sangat bagus. Saya merasa lebih cepat dan stabil dalam bergerak." },
            { "name": "Jonatan Christie", "comment": "Saya suka sepatu ini. Desainnya menarik dan performanya luar biasa." },
            { "name": "Marcus Fernaldi Gideon", "comment": "Sepatu ini sangat ringan dan nyaman digunakan. Sangat direkomendasikan untuk pemain profesional." },
            { "name": "Kevin Sanjaya Sukamuljo", "comment": "Sepatu ini memberikan kontrol yang baik dan kecepatan yang luar biasa. Sangat cocok untuk pertandingan." },
            { "name": "Lee Chong Wei", "comment": "Sepatu ini sangat bagus. Saya merasa lebih cepat dan stabil dalam bergerak." },
            { "name": "Lin Dan", "comment": "Saya suka sepatu ini. Desainnya menarik dan performanya luar biasa." }
        ],
        "fitur": [
            { "name": "Bahan Berkualitas Tinggi", "description": "Sepatu ini dibuat dengan bahan berkualitas tinggi yang menjamin daya tahan dan kenyamanan yang luar biasa." },
            { "name": "Berat Ringan", "description": "Sepatu ini memiliki berat yang ringan, memungkinkan Anda untuk bergerak dengan cepat dan stabil." },
            { "name": "Berbagai Warna", "description": "Sepatu ini tersedia dalam berbagai warna yang menarik, memungkinkan Anda untuk memilih sepatu yang paling sesuai dengan gaya Anda." },
            { "name": "Performa Maksimal", "description": "Sepatu ini dirancang untuk performa maksimal, memberikan kecepatan dan kontrol yang luar biasa dalam setiap langkah." },
            { "name": "Tas Elegan", "description": "Sepatu ini dilengkapi dengan tas yang elegan dan tahan lama, memungkinkan Anda untuk membawa sepatu ini ke mana saja dengan mudah dan aman." },
            { "name": "Desain Menarik", "description": "Dengan desain yang menarik, sepatu ini tidak hanya memberikan performa yang luar biasa, tetapi juga membuat Anda tampil menonjol di lapangan." },
            { "name": "Sol Kuat", "description": "Sol sepatu ini dirancang untuk memberikan stabilitas dan kekuatan yang luar biasa, memungkinkan Anda untuk bergerak dengan cepat dan stabil." },
            { "name": "Kenyamanan Maksimal", "description": "Dengan bahan yang nyaman dan desain yang ergonomis, sepatu ini memberikan kenyamanan maksimal bagi kaki Anda." },
            { "name": "Logo Menarik", "description": "Logo sepatu ini dirancang dengan gaya yang menarik, menambah nilai estetika sepatu ini." },
            { "name": "Tali Sepatu Berkualitas", "description": "Tali sepatu ini dibuat dengan bahan berkualitas tinggi, menjamin kekuatan dan daya tahan yang luar biasa." }
        ]
    },
    {
        "title": "Sepatu Badminton Li-Ning Profesional",
        "price": 2100000,
        "img": "/gambar_aksesoris/sepatu3.webp",
        "brand": "Li-Ning",
        "size": "EU 40",
        "description": "Sepatu badminton Li-Ning yang dirancang untuk pemain yang menginginkan keunggulan dalam setiap langkah. Dengan desain yang menarik dan performa yang luar biasa, sepatu ini akan membantu Anda mencapai puncak permainan Anda.",
        "category": "sepatu",
        "specifications": "Spesifikasi: Sepatu ini dibuat dengan bahan berkualitas tinggi yang menjamin daya tahan dan kenyamanan yang luar biasa. Dengan berat yang ringan dan sol yang kuat, sepatu ini memungkinkan Anda untuk bergerak dengan cepat dan stabil.",
        "technicalInfo": "Informasi Teknis: Sepatu ini memiliki berat yang ringan dan sol yang kuat, memungkinkan Anda untuk bergerak dengan cepat dan stabil.",
        "rating": "Rating: 5/5",
        "additionalInfo": "Informasi Tambahan: Sepatu ini tersedia dalam berbagai warna yang menarik, memungkinkan Anda untuk memilih sepatu yang paling sesuai dengan gaya Anda. Dengan tas yang elegan dan tahan lama, Anda dapat membawa sepatu ini ke mana saja dengan mudah dan aman.",
        "customerFeedback": [
            { "name": "Lee Yong Dae", "comment": "Sepatu ini sangat bagus. Saya merasa lebih cepat dan stabil dalam bergerak." },
            { "name": "Lin Dan", "comment": "Saya suka sepatu ini. Desainnya menarik dan performanya luar biasa." },
            { "name": "Chen Long", "comment": "Sepatu ini sangat ringan dan nyaman digunakan. Sangat direkomendasikan untuk pemain profesional." },
            { "name": "Kento Momota", "comment": "Sepatu ini memberikan kontrol yang baik dan kecepatan yang luar biasa. Sangat cocok untuk pertandingan." },
            { "name": "Anthony Sinisuka Ginting", "comment": "Sepatu ini sangat bagus. Saya merasa lebih cepat dan stabil dalam bergerak." },
            { "name": "Jonatan Christie", "comment": "Saya suka sepatu ini. Desainnya menarik dan performanya luar biasa." },
            { "name": "Marcus Fernaldi Gideon", "comment": "Sepatu ini sangat ringan dan nyaman digunakan. Sangat direkomendasikan untuk pemain profesional." },
            { "name": "Kevin Sanjaya Sukamuljo", "comment": "Sepatu ini memberikan kontrol yang baik dan kecepatan yang luar biasa. Sangat cocok untuk pertandingan." },
            { "name": "Lee Chong Wei", "comment": "Sepatu ini sangat bagus. Saya merasa lebih cepat dan stabil dalam bergerak." },
            { "name": "Lin Dan", "comment": "Saya suka sepatu ini. Desainnya menarik dan performanya luar biasa." }
        ],
        "fitur": [
            { "name": "Bahan Berkualitas Tinggi", "description": "Sepatu ini dibuat dengan bahan berkualitas tinggi yang menjamin daya tahan dan kenyamanan yang luar biasa." },
            { "name": "Berat Ringan", "description": "Sepatu ini memiliki berat yang ringan, memungkinkan Anda untuk bergerak dengan cepat dan stabil." },
            { "name": "Berbagai Warna", "description": "Sepatu ini tersedia dalam berbagai warna yang menarik, memungkinkan Anda untuk memilih sepatu yang paling sesuai dengan gaya Anda." },
            { "name": "Performa Maksimal", "description": "Sepatu ini dirancang untuk performa maksimal, memberikan kecepatan dan kontrol yang luar biasa dalam setiap langkah." },
            { "name": "Tas Elegan", "description": "Sepatu ini dilengkapi dengan tas yang elegan dan tahan lama, memungkinkan Anda untuk membawa sepatu ini ke mana saja dengan mudah dan aman." },
            { "name": "Desain Menarik", "description": "Dengan desain yang menarik, sepatu ini tidak hanya memberikan performa yang luar biasa, tetapi juga membuat Anda tampil menonjol di lapangan." },
            { "name": "Sol Kuat", "description": "Sol sepatu ini dirancang untuk memberikan stabilitas dan kekuatan yang luar biasa, memungkinkan Anda untuk bergerak dengan cepat dan stabil." },
            { "name": "Kenyamanan Maksimal", "description": "Dengan bahan yang nyaman dan desain yang ergonomis, sepatu ini memberikan kenyamanan maksimal bagi kaki Anda." },
            { "name": "Logo Menarik", "description": "Logo sepatu ini dirancang dengan gaya yang menarik, menambah nilai estetika sepatu ini." },
            { "name": "Tali Sepatu Berkualitas", "description": "Tali sepatu ini dibuat dengan bahan berkualitas tinggi, menjamin kekuatan dan daya tahan yang luar biasa." },
            { "name": "Desain Unik", "description": "Dengan desain unik dan menarik, sepatu ini akan membuat Anda tampil beda dan menonjol di lapangan." },
            { "name": "Kualitas Internasional", "description": "Dengan standar kualitas internasional, sepatu ini menjamin performa dan kenyamanan yang maksimal bagi pemain." },
            { "name": "Kemampuan Anti Slip", "description": "Sol sepatu ini dirancang dengan kemampuan anti slip, memastikan Anda tetap stabil dan aman saat bergerak di lapangan." },
            { "name": "Ventilasi Udara Maksimal", "description": "Dengan sistem ventilasi udara yang baik, sepatu ini menjamin kaki Anda tetap sejuk dan nyaman selama bermain." }
        ]
    },
    {
        "title": "Sepatu Badminton Li-Ning Profesional",
        "price": 2300000,
        "img": "/gambar_aksesoris/sepatu4.webp",
        "brand": "Li-Ning",
        "size": "EU 44",
        "description": "Sepatu badminton Li-Ning yang dirancang untuk pemain yang menginginkan keunggulan dalam setiap langkah. Dengan desain yang menarik dan performa yang luar biasa, sepatu ini akan membantu Anda mencapai puncak permainan Anda.",
        "category": "sepatu",
        "specifications": "Spesifikasi: Sepatu ini dibuat dengan bahan berkualitas tinggi yang menjamin daya tahan dan kenyamanan yang luar biasa. Dengan berat yang ringan dan sol yang kuat, sepatu ini memungkinkan Anda untuk bergerak dengan cepat dan stabil.",
        "technicalInfo": "Informasi Teknis: Sepatu ini memiliki berat yang ringan dan sol yang kuat, memungkinkan Anda untuk bergerak dengan cepat dan stabil.",
        "rating": "Rating: 5/5",
        "additionalInfo": "Informasi Tambahan: Sepatu ini tersedia dalam berbagai warna yang menarik, memungkinkan Anda untuk memilih sepatu yang paling sesuai dengan gaya Anda. Dengan tas yang elegan dan tahan lama, Anda dapat membawa sepatu ini ke mana saja dengan mudah dan aman.",
        "customerFeedback": [
            { "name": "Lee Yong Dae", "comment": "Sepatu ini sangat bagus. Saya merasa lebih cepat dan stabil dalam bergerak." },
            { "name": "Lin Dan", "comment": "Saya suka sepatu ini. Desainnya menarik dan performanya luar biasa." },
            { "name": "Chen Long", "comment": "Sepatu ini sangat ringan dan nyaman digunakan. Sangat direkomendasikan untuk pemain profesional." },
            { "name": "Kento Momota", "comment": "Sepatu ini memberikan kontrol yang baik dan kecepatan yang luar biasa. Sangat cocok untuk pertandingan." },
            { "name": "Anthony Sinisuka Ginting", "comment": "Sepatu ini sangat bagus. Saya merasa lebih cepat dan stabil dalam bergerak." },
            { "name": "Jonatan Christie", "comment": "Saya suka sepatu ini. Desainnya menarik dan performanya luar biasa." },
            { "name": "Marcus Fernaldi Gideon", "comment": "Sepatu ini sangat ringan dan nyaman digunakan. Sangat direkomendasikan untuk pemain profesional." },
            { "name": "Kevin Sanjaya Sukamuljo", "comment": "Sepatu ini memberikan kontrol yang baik dan kecepatan yang luar biasa. Sangat cocok untuk pertandingan." },
            { "name": "Lee Chong Wei", "comment": "Sepatu ini sangat bagus. Saya merasa lebih cepat dan stabil dalam bergerak." },
            { "name": "Lin Dan", "comment": "Saya suka sepatu ini. Desainnya menarik dan performanya luar biasa." }
        ],
        "fitur": [
            { "name": "Bahan Berkualitas Tinggi", "description": "Sepatu ini dibuat dengan bahan berkualitas tinggi yang menjamin daya tahan dan kenyamanan yang luar biasa." },
            { "name": "Berat Ringan", "description": "Sepatu ini memiliki berat yang ringan, memungkinkan Anda untuk bergerak dengan cepat dan stabil." },
            { "name": "Berbagai Warna", "description": "Sepatu ini tersedia dalam berbagai warna yang menarik, memungkinkan Anda untuk memilih sepatu yang paling sesuai dengan gaya Anda." },
            { "name": "Performa Maksimal", "description": "Sepatu ini dirancang untuk performa maksimal, memberikan kecepatan dan kontrol yang luar biasa dalam setiap langkah." },
            { "name": "Tas Elegan", "description": "Sepatu ini dilengkapi dengan tas yang elegan dan tahan lama, memungkinkan Anda untuk membawa sepatu ini ke mana saja dengan mudah dan aman." },
            { "name": "Desain Menarik", "description": "Dengan desain yang menarik, sepatu ini tidak hanya memberikan performa yang luar biasa, tetapi juga membuat Anda tampil menonjol di lapangan." },
            { "name": "Sol Kuat", "description": "Sol sepatu ini dirancang untuk memberikan stabilitas dan kekuatan yang luar biasa, memungkinkan Anda untuk bergerak dengan cepat dan stabil." },
            { "name": "Kenyamanan Maksimal", "description": "Dengan bahan yang nyaman dan desain yang ergonomis, sepatu ini memberikan kenyamanan maksimal bagi kaki Anda." },
            { "name": "Logo Menarik", "description": "Logo sepatu ini dirancang dengan gaya yang menarik, menambah nilai estetika sepatu ini." },
            { "name": "Tali Sepatu Berkualitas", "description": "Tali sepatu ini dibuat dengan bahan berkualitas tinggi, menjamin kekuatan dan daya tahan yang luar biasa." },
            { "name": "Desain Unik", "description": "Dengan desain unik dan menarik, sepatu ini akan membuat Anda tampil beda dan menonjol di lapangan." },
            { "name": "Kualitas Internasional", "description": "Dengan standar kualitas internasional, sepatu ini menjamin performa dan kenyamanan yang maksimal bagi pemain." },
            { "name": "Kemampuan Anti Slip", "description": "Sol sepatu ini dirancang dengan kemampuan anti slip, memastikan Anda tetap stabil dan aman saat bergerak di lapangan." },
            { "name": "Ventilasi Udara Maksimal", "description": "Dengan sistem ventilasi udara yang baik, sepatu ini menjamin kaki Anda tetap sejuk dan nyaman selama bermain." },
            { "name": "Bantalan Kaki yang Nyaman", "description": "Dengan bantalan kaki yang nyaman, sepatu ini memberikan dukungan maksimal bagi kaki Anda selama bermain." },
            { "name": "Desain Aerodinamis", "description": "Dengan desain aerodinamis, sepatu ini memberikan kecepatan dan efisiensi maksimal dalam setiap langkah Anda." },
            { "name": "Kekuatan Maksimal", "description": "Dengan kekuatan maksimal, sepatu ini menjamin Anda dapat bergerak dengan cepat dan stabil di lapangan." },
            { "name": "Kontrol Maksimal", "description": "Dengan kontrol maksimal, sepatu ini menjamin Anda dapat bergerak dengan presisi dan akurasi di lapangan." }
        ]
    },    
    {
        "title": "Sepatu Badminton Li-Ning Profesional",
        "price": 2400000,
        "img": "/gambar_aksesoris/sepatu5.webp",
        "brand": "Li-Ning",
        "size": "EU 42",
        "description": "Sepatu badminton Li-Ning yang dirancang untuk pemain yang menginginkan keunggulan dalam setiap langkah. Dengan desain yang menarik dan performa yang luar biasa, sepatu ini akan membantu Anda mencapai puncak permainan Anda.",
        "category": "sepatu",
        "specifications": "Spesifikasi: Sepatu ini dibuat dengan bahan berkualitas tinggi yang menjamin daya tahan dan kenyamanan yang luar biasa. Dengan berat yang ringan dan sol yang kuat, sepatu ini memungkinkan Anda untuk bergerak dengan cepat dan stabil.",
        "technicalInfo": "Informasi Teknis: Sepatu ini memiliki berat yang ringan dan sol yang kuat, memungkinkan Anda untuk bergerak dengan cepat dan stabil.",
        "rating": "Rating: 5/5",
        "additionalInfo": "Informasi Tambahan: Sepatu ini tersedia dalam berbagai warna yang menarik, memungkinkan Anda untuk memilih sepatu yang paling sesuai dengan gaya Anda. Dengan tas yang elegan dan tahan lama, Anda dapat membawa sepatu ini ke mana saja dengan mudah dan aman.",
        "customerFeedback": [
            { "name": "Lee Yong Dae", "comment": "Sepatu ini sangat bagus. Saya merasa lebih cepat dan stabil dalam bergerak." },
            { "name": "Lin Dan", "comment": "Saya suka sepatu ini. Desainnya menarik dan performanya luar biasa." },
            { "name": "Chen Long", "comment": "Sepatu ini sangat ringan dan nyaman digunakan. Sangat direkomendasikan untuk pemain profesional." },
            { "name": "Kento Momota", "comment": "Sepatu ini memberikan kontrol yang baik dan kecepatan yang luar biasa. Sangat cocok untuk pertandingan." },
            { "name": "Anthony Sinisuka Ginting", "comment": "Sepatu ini sangat bagus. Saya merasa lebih cepat dan stabil dalam bergerak." },
            { "name": "Jonatan Christie", "comment": "Saya suka sepatu ini. Desainnya menarik dan performanya luar biasa." },
            { "name": "Marcus Fernaldi Gideon", "comment": "Sepatu ini sangat ringan dan nyaman digunakan. Sangat direkomendasikan untuk pemain profesional." },
            { "name": "Kevin Sanjaya Sukamuljo", "comment": "Sepatu ini memberikan kontrol yang baik dan kecepatan yang luar biasa. Sangat cocok untuk pertandingan." },
            { "name": "Lee Chong Wei", "comment": "Sepatu ini sangat bagus. Saya merasa lebih cepat dan stabil dalam bergerak." },
            { "name": "Lin Dan", "comment": "Saya suka sepatu ini. Desainnya menarik dan performanya luar biasa." }
        ],
        "fitur": [
            { "name": "Bahan Berkualitas Tinggi", "description": "Sepatu ini dibuat dengan bahan berkualitas tinggi yang menjamin daya tahan dan kenyamanan yang luar biasa." },
            { "name": "Berat Ringan", "description": "Sepatu ini memiliki berat yang ringan, memungkinkan Anda untuk bergerak dengan cepat dan stabil." },
            { "name": "Berbagai Warna", "description": "Sepatu ini tersedia dalam berbagai warna yang menarik, memungkinkan Anda untuk memilih sepatu yang paling sesuai dengan gaya Anda." },
            { "name": "Performa Maksimal", "description": "Sepatu ini dirancang untuk performa maksimal, memberikan kecepatan dan kontrol yang luar biasa dalam setiap langkah." },
            { "name": "Tas Elegan", "description": "Sepatu ini dilengkapi dengan tas yang elegan dan tahan lama, memungkinkan Anda untuk membawa sepatu ini ke mana saja dengan mudah dan aman." },
            { "name": "Desain Menarik", "description": "Dengan desain yang menarik, sepatu ini tidak hanya memberikan performa yang luar biasa, tetapi juga membuat Anda tampil menonjol di lapangan." },
            { "name": "Sol Kuat", "description": "Sol sepatu ini dirancang untuk memberikan stabilitas dan kekuatan yang luar biasa, memungkinkan Anda untuk bergerak dengan cepat dan stabil." },
            { "name": "Kenyamanan Maksimal", "description": "Dengan bahan yang nyaman dan desain yang ergonomis, sepatu ini memberikan kenyamanan maksimal bagi kaki Anda." },
            { "name": "Logo Menarik", "description": "Logo sepatu ini dirancang dengan gaya yang menarik, menambah nilai estetika sepatu ini." },
            { "name": "Tali Sepatu Berkualitas", "description": "Tali sepatu ini dibuat dengan bahan berkualitas tinggi, menjamin kekuatan dan daya tahan yang luar biasa." },
            { "name": "Desain Unik", "description": "Dengan desain unik dan menarik, sepatu ini akan membuat Anda tampil beda dan menonjol di lapangan." },
            { "name": "Kualitas Internasional", "description": "Dengan standar kualitas internasional, sepatu ini menjamin performa dan kenyamanan yang maksimal bagi pemain." },
            { "name": "Kemampuan Anti Slip", "description": "Sol sepatu ini dirancang dengan kemampuan anti slip, memastikan Anda tetap stabil dan aman saat bergerak di lapangan." },
            { "name": "Ventilasi Udara Maksimal", "description": "Dengan sistem ventilasi udara yang baik, sepatu ini menjamin kaki Anda tetap sejuk dan nyaman selama bermain." },
            { "name": "Bantalan Kaki yang Nyaman", "description": "Dengan bantalan kaki yang nyaman, sepatu ini memberikan dukungan maksimal bagi kaki Anda selama bermain." },
            { "name": "Desain Aerodinamis", "description": "Dengan desain aerodinamis, sepatu ini memberikan kecepatan dan efisiensi maksimal dalam setiap langkah Anda." },
            { "name": "Kekuatan Maksimal", "description": "Dengan kekuatan maksimal, sepatu ini menjamin Anda dapat bergerak dengan cepat dan stabil di lapangan." },
            { "name": "Kontrol Maksimal", "description": "Dengan kontrol maksimal, sepatu ini menjamin Anda dapat bergerak dengan presisi dan akurasi di lapangan." },
            { "name": "Desain Modern", "description": "Dengan desain modern dan menarik, sepatu ini akan membuat Anda tampil beda dan menonjol di lapangan." },
            { "name": "Kualitas Premium", "description": "Dengan kualitas premium, sepatu ini menjamin performa dan kenyamanan yang maksimal bagi pemain." },
            { "name": "Kemampuan Anti Air", "description": "Dengan kemampuan anti air, sepatu ini menjamin kaki Anda tetap kering dan nyaman selama bermain." },
            { "name": "Kemampuan Anti Gores", "description": "Dengan kemampuan anti gores, sepatu ini menjamin daya tahan dan kekuatan yang luar biasa." },
            { "name": "Kemampuan Anti Baret", "description": "Dengan kemampuan anti baret, sepatu ini menjamin penampilan yang selalu terlihat baru dan menarik." }
        ]
    },                    
    {
        "title": "Sepatu Badminton Li-Ning Profesional",
        "price": 2700000,
        "img": "/gambar_aksesoris/sepatu8.webp",
        "brand": "Li-Ning",
        "size": "EU 40",
        "description": "Sepatu badminton Li-Ning yang dirancang untuk pemain yang menginginkan keunggulan dalam setiap langkah. Dengan desain yang menarik dan performa yang luar biasa, sepatu ini akan membantu Anda mencapai puncak permainan Anda.",
        "category": "sepatu",
        "specifications": "Spesifikasi: Sepatu ini dibuat dengan bahan berkualitas tinggi yang menjamin daya tahan dan kenyamanan yang luar biasa. Dengan berat yang ringan dan sol yang kuat, sepatu ini memungkinkan Anda untuk bergerak dengan cepat dan stabil.",
        "technicalInfo": "Informasi Teknis: Sepatu ini memiliki berat yang ringan dan sol yang kuat, memungkinkan Anda untuk bergerak dengan cepat dan stabil.",
        "rating": "Rating: 5/5",
        "additionalInfo": "Informasi Tambahan: Sepatu ini tersedia dalam berbagai warna yang menarik, memungkinkan Anda untuk memilih sepatu yang paling sesuai dengan gaya Anda. Dengan tas yang elegan dan tahan lama, Anda dapat membawa sepatu ini ke mana saja dengan mudah dan aman.",
        "customerFeedback": [
            { "name": "Lee Yong Dae", "comment": "Sepatu ini sangat bagus. Saya merasa lebih cepat dan stabil dalam bergerak." },
            { "name": "Lin Dan", "comment": "Saya suka sepatu ini. Desainnya menarik dan performanya luar biasa." }
        ],
        "fitur": [
            { "name": "Bahan Berkualitas Tinggi", "description": "Sepatu ini dibuat dengan bahan berkualitas tinggi yang menjamin daya tahan dan kenyamanan yang luar biasa." },
            { "name": "Berat Ringan", "description": "Sepatu ini memiliki berat yang ringan, memungkinkan Anda untuk bergerak dengan cepat dan stabil." },
            { "name": "Berbagai Warna", "description": "Sepatu ini tersedia dalam berbagai warna yang menarik, memungkinkan Anda untuk memilih sepatu yang paling sesuai dengan gaya Anda." },
            { "name": "Performa Maksimal", "description": "Sepatu ini dirancang untuk performa maksimal, memberikan kecepatan dan kontrol yang luar biasa dalam setiap langkah." },
            { "name": "Tas Elegan", "description": "Sepatu ini dilengkapi dengan tas yang elegan dan tahan lama, memungkinkan Anda untuk membawa sepatu ini ke mana saja dengan mudah dan aman." },
            { "name": "Desain Menarik", "description": "Dengan desain yang menarik, sepatu ini tidak hanya memberikan performa yang luar biasa, tetapi juga membuat Anda tampil menonjol di lapangan." },
            { "name": "Sol Kuat", "description": "Sol sepatu ini dirancang untuk memberikan stabilitas dan kekuatan yang luar biasa, memungkinkan Anda untuk bergerak dengan cepat dan stabil." },
            { "name": "Kenyamanan Maksimal", "description": "Dengan bahan yang nyaman dan desain yang ergonomis, sepatu ini memberikan kenyamanan maksimal bagi kaki Anda." },
            { "name": "Logo Menarik", "description": "Logo sepatu ini dirancang dengan gaya yang menarik, menambah nilai estetika sepatu ini." },
            { "name": "Tali Sepatu Berkualitas", "description": "Tali sepatu ini dibuat dengan bahan berkualitas tinggi, menjamin kekuatan dan daya tahan yang luar biasa." }
        ]
    }, 
    {
        "title": "Sepatu Badminton Li-Ning Profesional",
        "price": 2500000,
        "img": "/gambar_aksesoris/sepatu6.webp",
        "brand": "Li-Ning",
        "size": "EU 37",
        "description": "Sepatu badminton Li-Ning yang dirancang untuk pemain yang menginginkan keunggulan dalam setiap langkah. Dengan desain yang menarik dan performa yang luar biasa, sepatu ini akan membantu Anda mencapai puncak permainan Anda.",
        "category": "sepatu",
        "specifications": "Spesifikasi: Sepatu ini dibuat dengan bahan berkualitas tinggi yang menjamin daya tahan dan kenyamanan yang luar biasa. Dengan berat yang ringan dan sol yang kuat, sepatu ini memungkinkan Anda untuk bergerak dengan cepat dan stabil.",
        "technicalInfo": "Informasi Teknis: Sepatu ini memiliki berat yang ringan dan sol yang kuat, memungkinkan Anda untuk bergerak dengan cepat dan stabil.",
        "rating": "Rating: 5/5",
        "additionalInfo": "Informasi Tambahan: Sepatu ini tersedia dalam berbagai warna yang menarik, memungkinkan Anda untuk memilih sepatu yang paling sesuai dengan gaya Anda. Dengan tas yang elegan dan tahan lama, Anda dapat membawa sepatu ini ke mana saja dengan mudah dan aman.",
        "customerFeedback": [
            { "name": "Lee Yong Dae", "comment": "Sepatu ini sangat bagus. Saya merasa lebih cepat dan stabil dalam bergerak." },
            { "name": "Lin Dan", "comment": "Saya suka sepatu ini. Desainnya menarik dan performanya luar biasa." }
        ],
        "fitur": [
            { "name": "Bahan Berkualitas Tinggi", "description": "Sepatu ini dibuat dengan bahan berkualitas tinggi yang menjamin daya tahan dan kenyamanan yang luar biasa." },
            { "name": "Berat Ringan", "description": "Sepatu ini memiliki berat yang ringan, memungkinkan Anda untuk bergerak dengan cepat dan stabil." },
            { "name": "Berbagai Warna", "description": "Sepatu ini tersedia dalam berbagai warna yang menarik, memungkinkan Anda untuk memilih sepatu yang paling sesuai dengan gaya Anda." },
            { "name": "Performa Maksimal", "description": "Sepatu ini dirancang untuk performa maksimal, memberikan kecepatan dan kontrol yang luar biasa dalam setiap langkah." },
            { "name": "Tas Elegan", "description": "Sepatu ini dilengkapi dengan tas yang elegan dan tahan lama, memungkinkan Anda untuk membawa sepatu ini ke mana saja dengan mudah dan aman." },
            { "name": "Desain Menarik", "description": "Dengan desain yang menarik, sepatu ini tidak hanya memberikan performa yang luar biasa, tetapi juga membuat Anda tampil menonjol di lapangan." }
        ]
    },
    {
        "title": "Sepatu Badminton Li-Ning Profesional",
        "price": 2500000,
        "img": "/gambar_aksesoris/sepatu7.webp",
        "brand": "Li-Ning",
        "size": "Normal",
        "description": "Sepatu badminton Li-Ning yang dirancang untuk pemain yang menginginkan keunggulan dalam setiap langkah. Dengan desain yang menarik dan performa yang luar biasa, sepatu ini akan membantu Anda mencapai puncak permainan Anda.",
        "category": "sepatu",
        "specifications": "Spesifikasi: Sepatu ini dibuat dengan bahan berkualitas tinggi yang menjamin daya tahan dan kenyamanan yang luar biasa. Dengan berat yang ringan dan sol yang kuat, sepatu ini memungkinkan Anda untuk bergerak dengan cepat dan stabil.",
        "technicalInfo": "Informasi Teknis: Sepatu ini memiliki berat yang ringan dan sol yang kuat, memungkinkan Anda untuk bergerak dengan cepat dan stabil.",
        "rating": "Rating: 5/5",
        "additionalInfo": "Informasi Tambahan: Sepatu ini tersedia dalam berbagai warna yang menarik, memungkinkan Anda untuk memilih sepatu yang paling sesuai dengan gaya Anda. Dengan tas yang elegan dan tahan lama, Anda dapat membawa sepatu ini ke mana saja dengan mudah dan aman.",
        "customerFeedback": [
            { "name": "Lee Yong Dae", "comment": "Sepatu ini sangat bagus. Saya merasa lebih cepat dan stabil dalam bergerak." },
            { "name": "Lin Dan", "comment": "Saya suka sepatu ini. Desainnya menarik dan performanya luar biasa." }
        ],
        "fitur": [
            { "name": "Bahan Berkualitas Tinggi", "description": "Sepatu ini dibuat dengan bahan berkualitas tinggi yang menjamin daya tahan dan kenyamanan yang luar biasa." },
            { "name": "Berat Ringan", "description": "Sepatu ini memiliki berat yang ringan, memungkinkan Anda untuk bergerak dengan cepat dan stabil." },
            { "name": "Berbagai Warna", "description": "Sepatu ini tersedia dalam berbagai warna yang menarik, memungkinkan Anda untuk memilih sepatu yang paling sesuai dengan gaya Anda." },
            { "name": "Performa Maksimal", "description": "Sepatu ini dirancang untuk performa maksimal, memberikan kecepatan dan kontrol yang luar biasa dalam setiap langkah." },
            { "name": "Tas Elegan", "description": "Sepatu ini dilengkapi dengan tas yang elegan dan tahan lama, memungkinkan Anda untuk membawa sepatu ini ke mana saja dengan mudah dan aman." },
            { "name": "Desain Menarik", "description": "Dengan desain yang menarik, sepatu ini tidak hanya memberikan performa yang luar biasa, tetapi juga membuat Anda tampil menonjol di lapangan." }
        ]
    },
    {
        "title": "Tas Olahraga Victor",
        "price": 800000,
        "img": "/gambar_aksesoris/tas1.webp",
        "brand": "Victor",
        "size": "50cm x 25cm x 25cm",
        "description": "Tas Olahraga Victor ini dirancang khusus untuk atlet yang menginginkan keunggulan dalam setiap langkah. Dengan desain yang menarik dan kualitas yang luar biasa, tas ini memudahkan dan menjamin keamanan dalam membawa perlengkapan olahraga Anda.",
        "category": "tas",
        "specifications": "Spesifikasi: Tas ini terbuat dari bahan berkualitas tinggi, menjamin daya tahan dan kenyamanan yang luar biasa. Dengan bobot yang ringan dan kapasitas yang luas, tas ini memungkinkan Anda membawa perlengkapan olahraga dengan mudah dan aman.",
        "technicalInfo": "Informasi Teknis: Tas ini memiliki bobot ringan dan kapasitas yang luas, memudahkan Anda membawa perlengkapan olahraga dengan mudah dan aman.",
        "rating": "Rating: 5/5",
        "additionalInfo": "Informasi Tambahan: Tas ini tersedia dalam berbagai warna menarik, memungkinkan Anda memilih tas sesuai gaya Anda. Dengan tas yang elegan dan tahan lama, Anda dapat membawanya ke mana saja dengan mudah dan aman.",
        "customerFeedback": [
            { "name": "Lee Yong Dae", "comment": "Tas ini sangat bagus. Saya merasa lebih mudah dan aman dalam membawa perlengkapan olahraga saya." },
            { "name": "Lin Dan", "comment": "Saya suka tas ini. Desainnya menarik dan kualitasnya luar biasa." }
        ],
        "fitur": [
            { "name": "Bahan Berkualitas Tinggi", "description": "Tas ini terbuat dari bahan berkualitas tinggi, menjamin daya tahan dan kenyamanan yang luar biasa." },
            { "name": "Bobot Ringan", "description": "Tas ini memiliki bobot ringan, memudahkan Anda membawa perlengkapan olahraga dengan mudah dan aman." },
            { "name": "Berbagai Warna", "description": "Tas ini tersedia dalam berbagai warna menarik, memungkinkan Anda memilih tas yang sesuai dengan gaya Anda." },
            { "name": "Kapasitas Luas", "description": "Tas ini memiliki kapasitas yang luas, memudahkan Anda membawa perlengkapan olahraga dengan mudah dan aman." },
            { "name": "Tas Elegan", "description": "Dilengkapi dengan tas yang elegan dan tahan lama, memudahkan Anda membawa tas ini ke mana saja dengan mudah dan aman." },
            { "name": "Desain Menarik", "description": "Dengan desain yang menarik, tas ini tidak hanya memberikan kualitas yang luar biasa, tetapi juga membuat Anda tampil menonjol di lapangan." }
        ]
    },
    {
        "title": "Tas Olahraga Yonex",
        "price": 1200000,
        "img": "/gambar_aksesoris/tas2.webp",
        "brand": "Yonex",
        "size": "70cm x 30cm x 30cm",
        "description": "Tas olahraga Yonex diciptakan khusus untuk atlet yang mengincar keunggulan tak tertandingi di setiap langkahnya. Dengan desain yang tak hanya menarik tetapi juga menginspirasi, serta kualitas luar biasa, tas ini akan menjadi mitra tak tergantikan dalam membawa perlengkapan olahraga Anda dengan mudah dan aman.",
        "category": "tas",
        "specifications": "Spesifikasi: Tas ini dibuat dengan menggunakan bahan berkualitas tinggi yang menjamin kekokohan dan kenyamanan luar biasa. Dengan bobot yang ringan dan kapasitas yang sangat luas, tas ini memberikan kemudahan dalam membawa perlengkapan olahraga dengan nyaman dan aman.",
        "technicalInfo": "Informasi Teknis: Tas ini memiliki bobot yang ringan dan kapasitas yang luas, memberikan Anda keleluasaan membawa perlengkapan olahraga dengan mudah dan aman.",
        "rating": "Rating: 5/5",
        "additionalInfo": "Informasi Tambahan: Tersedia dalam berbagai warna menarik, tas ini memungkinkan Anda untuk memilih tas yang paling sesuai dengan gaya Anda. Dengan keanggunan dan daya tahan yang luar biasa, tas ini akan menjadi teman setia yang siap menemani ke mana pun Anda pergi dengan mudah dan aman.",
        "customerFeedback": [
            { "name": "Lee Yong Dae", "comment": "Tas ini sungguh luar biasa. Saya merasa lebih mudah dan aman membawa perlengkapan olahraga saya." },
            { "name": "Lin Dan", "comment": "Saya benar-benar menyukai tas ini. Desainnya tidak hanya menarik tetapi kualitasnya juga luar biasa." }
        ],
        "fitur": [
            { "name": "Material Berkualitas Tinggi", "description": "Tas ini dibuat dengan menggunakan material berkualitas tinggi, menjamin kekokohan dan kenyamanan luar biasa." },
            { "name": "Bobot Ringan", "description": "Tas ini memiliki bobot yang ringan, memungkinkan Anda untuk membawa perlengkapan olahraga dengan mudah dan aman." },
            { "name": "Beragam Warna", "description": "Tas ini tersedia dalam berbagai warna menarik, memberikan Anda opsi untuk memilih tas yang paling sesuai dengan gaya Anda." },
            { "name": "Kapasitas Luas", "description": "Tas ini memiliki kapasitas yang sangat luas, memungkinkan Anda membawa perlengkapan olahraga dengan mudah dan aman." },
            { "name": "Elegan dan Tahan Lama", "description": "Dengan keanggunan dan keandalan yang luar biasa, tas ini siap menemani ke mana pun Anda pergi dengan mudah dan aman." },
            { "name": "Desain Menginspirasi", "description": "Dengan desain yang menginspirasi, tas ini tidak hanya memberikan kualitas luar biasa, tetapi juga membuat Anda tampil mencolok di lapangan." }
        ]
    },
    {
        "title": "Tas Olahraga Yonex Hitam",
        "price": 1300000,
        "img": "/gambar_aksesoris/tas3.webp",
        "brand": "Yonex",
        "size": "75cm x 35cm x 35cm",
        "description": "Tas olahraga Yonex berwarna hitam yang dirancang untuk atlet yang menginginkan keunggulan dalam setiap langkah. Dengan desain yang menarik dan kualitas yang luar biasa, tas ini akan membantu Anda membawa perlengkapan olahraga Anda dengan mudah dan aman.",
        "category": "tas",
        "specifications": "Spesifikasi: Tas ini dibuat dengan bahan berkualitas tinggi yang menjamin daya tahan dan kenyamanan yang luar biasa. Dengan berat yang ringan dan kapasitas yang luas, tas ini memungkinkan Anda untuk membawa perlengkapan olahraga Anda dengan mudah dan aman.",
        "technicalInfo": "Informasi Teknis: Tas ini memiliki berat yang ringan dan kapasitas yang luas, memungkinkan Anda untuk membawa perlengkapan olahraga Anda dengan mudah dan aman.",
        "rating": "Rating: 5/5",
        "additionalInfo": "Informasi Tambahan: Tas ini tersedia dalam berbagai warna yang menarik, memungkinkan Anda untuk memilih tas yang paling sesuai dengan gaya Anda. Dengan tas yang elegan dan tahan lama, Anda dapat membawa tas ini ke mana saja dengan mudah dan aman.",
        "customerFeedback": [
            { "name": "Lee Yong Dae", "comment": "Tas ini sangat bagus. Saya merasa lebih mudah dan aman dalam membawa perlengkapan olahraga saya." },
            { "name": "Lin Dan", "comment": "Saya suka tas ini. Desainnya menarik dan kualitasnya luar biasa." }
        ],
        "fitur": [
            { "name": "Bahan Berkualitas Tinggi", "description": "Tas ini dibuat dengan bahan berkualitas tinggi yang menjamin daya tahan dan kenyamanan yang luar biasa." },
            { "name": "Berat Ringan", "description": "Tas ini memiliki berat yang ringan, memungkinkan Anda untuk membawa perlengkapan olahraga Anda dengan mudah dan aman." },
            { "name": "Berbagai Warna", "description": "Tas ini tersedia dalam berbagai warna yang menarik, memungkinkan Anda untuk memilih tas yang paling sesuai dengan gaya Anda." },
            { "name": "Kapasitas Luas", "description": "Tas ini memiliki kapasitas yang luas, memungkinkan Anda untuk membawa perlengkapan olahraga Anda dengan mudah dan aman." },
            { "name": "Tas Elegan", "description": "Tas ini dilengkapi dengan tas yang elegan dan tahan lama, memungkinkan Anda untuk membawa tas ini ke mana saja dengan mudah dan aman." },
            { "name": "Desain Menarik", "description": "Dengan desain yang menarik, tas ini tidak hanya memberikan kualitas yang luar biasa, tetapi juga membuat Anda tampil menonjol di lapangan." }
        ]
    },    
    {
        "title": "Tas Olahraga Yonex Hitam Hijau",
        "price": 1500000,
        "img": "/gambar_aksesoris/tas4.webp",
        "brand": "Yonex",
        "size": "80cm x 40cm x 40cm",
        "description": "Tas olahraga Yonex berwarna hitam yang dirancang untuk atlet yang menginginkan keunggulan dalam setiap langkah. Dengan desain yang menarik dan kualitas yang luar biasa, tas ini akan membantu Anda membawa perlengkapan olahraga Anda dengan mudah dan aman.",
        "category": "tas",
        "specifications": "Spesifikasi: Tas ini dibuat dengan bahan berkualitas tinggi yang menjamin daya tahan dan kenyamanan yang luar biasa. Dengan berat yang ringan dan kapasitas yang luas, tas ini memungkinkan Anda untuk membawa perlengkapan olahraga Anda dengan mudah dan aman.",
        "technicalInfo": "Informasi Teknis: Tas ini memiliki berat yang ringan dan kapasitas yang luas, memungkinkan Anda untuk membawa perlengkapan olahraga Anda dengan mudah dan aman.",
        "rating": "Rating: 5/5",
        "additionalInfo": "Informasi Tambahan: Tas ini tersedia dalam berbagai warna yang menarik, memungkinkan Anda untuk memilih tas yang paling sesuai dengan gaya Anda. Dengan tas yang elegan dan tahan lama, Anda dapat membawa tas ini ke mana saja dengan mudah dan aman.",
        "customerFeedback": [
            { "name": "Lee Yong Dae", "comment": "Tas ini sangat bagus. Saya merasa lebih mudah dan aman dalam membawa perlengkapan olahraga saya." },
            { "name": "Lin Dan", "comment": "Saya suka tas ini. Desainnya menarik dan kualitasnya luar biasa." }
        ],
        "fitur": [
            { "name": "Bahan Berkualitas Tinggi", "description": "Tas ini dibuat dengan bahan berkualitas tinggi yang menjamin daya tahan dan kenyamanan yang luar biasa." },
            { "name": "Berat Ringan", "description": "Tas ini memiliki berat yang ringan, memungkinkan Anda untuk membawa perlengkapan olahraga Anda dengan mudah dan aman." },
            { "name": "Berbagai Warna", "description": "Tas ini tersedia dalam berbagai warna yang menarik, memungkinkan Anda untuk memilih tas yang paling sesuai dengan gaya Anda." },
            { "name": "Kapasitas Luas", "description": "Tas ini memiliki kapasitas yang luas, memungkinkan Anda untuk membawa perlengkapan olahraga Anda dengan mudah dan aman." },
            { "name": "Tas Elegan", "description": "Tas ini dilengkapi dengan tas yang elegan dan tahan lama, memungkinkan Anda untuk membawa tas ini ke mana saja dengan mudah dan aman." },
            { "name": "Desain Menarik", "description": "Dengan desain yang menarik, tas ini tidak hanya memberikan kualitas yang luar biasa, tetapi juga membuat Anda tampil menonjol di lapangan." }
        ]
    },
    {
        "title": "Tas Tenis Wilson",
        "price": 2000000,
        "img": "/gambar_aksesoris/tas5.webp",
        "brand": "Wilson",
        "size": "75cm x 30cm x 30cm",
        "description": "Tas tenis Wilson berwarna hitam yang dirancang untuk pemain tenis yang menginginkan keunggulan dalam setiap langkah. Dengan desain yang menarik dan kualitas yang luar biasa, tas ini akan membantu Anda membawa perlengkapan tenis Anda dengan mudah dan aman.",
        "category": "tas",
        "specifications": "Spesifikasi: Tas ini dibuat dengan bahan berkualitas tinggi yang menjamin daya tahan dan kenyamanan yang luar biasa. Dengan berat yang ringan dan kapasitas yang luas, tas ini memungkinkan Anda untuk membawa perlengkapan tenis Anda dengan mudah dan aman.",
        "technicalInfo": "Informasi Teknis: Tas ini memiliki berat yang ringan dan kapasitas yang luas, memungkinkan Anda untuk membawa perlengkapan tenis Anda dengan mudah dan aman.",
        "rating": "Rating: 5/5",
        "additionalInfo": "Informasi Tambahan: Tas ini tersedia dalam berbagai warna yang menarik, memungkinkan Anda untuk memilih tas yang paling sesuai dengan gaya Anda. Dengan tas yang elegan dan tahan lama, Anda dapat membawa tas ini ke mana saja dengan mudah dan aman.",
        "customerFeedback": [
            { "name": "Roger Federer", "comment": "Tas ini sangat bagus. Saya merasa lebih mudah dan aman dalam membawa perlengkapan tenis saya." },
            { "name": "Rafael Nadal", "comment": "Saya suka tas ini. Desainnya menarik dan kualitasnya luar biasa." }
        ],
        "fitur": [
            { "name": "Bahan Berkualitas Tinggi", "description": "Tas ini dibuat dengan bahan berkualitas tinggi yang menjamin daya tahan dan kenyamanan yang luar biasa." },
            { "name": "Berat Ringan", "description": "Tas ini memiliki berat yang ringan, memungkinkan Anda untuk membawa perlengkapan tenis Anda dengan mudah dan aman." },
            { "name": "Berbagai Warna", "description": "Tas ini tersedia dalam berbagai warna yang menarik, memungkinkan Anda untuk memilih tas yang paling sesuai dengan gaya Anda." },
            { "name": "Kapasitas Luas", "description": "Tas ini memiliki kapasitas yang luas, memungkinkan Anda untuk membawa perlengkapan tenis Anda dengan mudah dan aman." },
            { "name": "Tas Elegan", "description": "Tas ini dilengkapi dengan tas yang elegan dan tahan lama, memungkinkan Anda untuk membawa tas ini ke mana saja dengan mudah dan aman." },
            { "name": "Desain Menarik", "description": "Dengan desain yang menarik, tas ini tidak hanya memberikan kualitas yang luar biasa, tetapi juga membuat Anda tampil menonjol di lapangan." }
        ]
    }
];

// Element custom untuk menampilkan detail produk
class ProductItem extends HTMLElement {
    set produk(produk) {
        this._produk = produk || {};
        this.render();
    }

    render() {
        this.innerHTML = `
            <div class="card">
                <img src="./${this._produk.img}" alt="">
                <div class="card-body">
                    <h2>${this._produk.title}</h2>
                    <p>Rp. ${this._produk.price}</p>
                    <button class="btn btn-primary" onclick="tampilkanDetail(${produk.indexOf(this._produk)})">Detail</button>
                </div>                
            </div>
        `;
    }
}

// Element custom untuk menampilkan daftar produk
class ProductList extends HTMLElement {
    constructor() {
        super();
        this.category = 'all'; // Default to no category filter
        this.sortBy = 'standar'; // Default to standard sorting
    }

    setCategoryFromUrl() {
        const urlParams = new URLSearchParams(window.location.search);
        const categoryParam = urlParams.get('category');

        if (categoryParam) {
            this.category = categoryParam;
        } else {
            this.category = 'all'; // Set a default category if none specified
        }

        this.render();
    }

    render() {
        this.innerHTML = ''; // Clear existing content

        for (let i = 0; i < produk.length; i++) {
            if (!this.category || produk[i].category === this.category) {
                const productItem = document.createElement('product-item');
                productItem.produk = produk[i];
                this.appendChild(productItem);
            }
        }
    }

    setSort(sortBy) {
        this.sortBy = sortBy;
        this.tampilkan();
    }
    
    tampilkan() {
        this.innerHTML = ''; // Clear existing content

        let filteredProduk = [...produk];

        // Filter by category
        if (this.category && this.category !== 'all') {
            filteredProduk = filteredProduk.filter(product => product.category === this.category);
        }

        // Sort the products
        switch (this.sortBy) {
            case 'hargaAsc':
                filteredProduk.sort((a, b) => a.price - b.price);
                break;
            case 'hargaDesc':
                filteredProduk.sort((a, b) => b.price - a.price);
                break;
            case 'merek':
                filteredProduk.sort((a, b) => a.brand.localeCompare(b.brand));
                break;
            // 'standar' case is already handled
        }

        // Render the products
        for (let i = 0; i < filteredProduk.length; i++) {
            const productItem = document.createElement('product-item');
            productItem.produk = filteredProduk[i];
            this.appendChild(productItem);
        }
    }
}


customElements.define('product-item', ProductItem);
customElements.define('product-list', ProductList);

const productList = document.querySelector('product-list');
productList.setCategoryFromUrl(); // Set the category based on URL parameters
productList.tampilkan(); // Display all products initially

function tampilkanDetail(index) {
    const modalContent = document.getElementById('modalContent');

    const fiturList = produk[index].fitur.map(fitur => `<li><strong>${fitur.name}:</strong> ${fitur.description}</li>`).join('');
    const feedbackList = produk[index].customerFeedback.map(feedback => `<li><strong>${feedback.name}:</strong> ${feedback.comment}</li>`).join('');

    modalContent.innerHTML = `
        <div class="row">
            <div class="col-md-6">
                <img src="./${produk[index].img}" alt="${produk[index].title}" class="img-fluid">
            </div>
            <div class="col-md-6">
                <h2>${produk[index].title}</h2>
                <p>Rp. ${produk[index].price}</p>
                <p><strong>Merk:</strong> ${produk[index].brand}</p>
                <p><strong>Ukuran:</strong> ${produk[index].size}</p>
                <p><strong>Deskripsi:</strong> ${produk[index].description}</p>
                <p><strong>Spesifikasi:</strong> ${produk[index].specifications}</p>
                <p><strong>Informasi Teknis:</strong> ${produk[index].technicalInfo}</p>
                <p><strong>Rating:</strong> ${produk[index].rating}</p>
                <p><strong>Informasi Tambahan:</strong> ${produk[index].additionalInfo}</p>
                <h3>Fitur:</h3>
                <ul>${fiturList}</ul>
                <h3>Umpan Balik Pelanggan:</h3>
                <ul>${feedbackList}</ul>
            </div>
        </div>
    `;

    const modal = document.getElementById('productDetailModal');
    modal.style.display = 'block';
}

function tutupModal() {
    const modal = document.getElementById('productDetailModal');
    modal.style.display = 'none';
}

function cariProduk() {
    const inputPencarian = document.getElementById('pencarian').value.toLowerCase();

    // Filter products based on search input
    const produkDitemukan = produk.filter(product =>
        product.title.toLowerCase().includes(inputPencarian) ||
        product.brand.toLowerCase().includes(inputPencarian) ||
        product.category.toLowerCase().includes(inputPencarian)
    );

    // Display search results
    productList.innerHTML = ''; // Clear existing content
    for (let i = 0; i < produkDitemukan.length; i++) {
        const productItem = document.createElement('product-item');
        productItem.produk = produkDitemukan[i];
        productList.appendChild(productItem);
    }
}

function ubahcategory() {
    const selectedCategory = document.getElementById('category').value;
    productList.setcategory(selectedCategory);
}

function urutkanProduk(sortBy, buttonText) {
    const productList = document.querySelector('product-list');
    productList.setSort(sortBy);

    // Update the button text
    const sortButton = document.getElementById('sortButton');
    sortButton.innerHTML = `${buttonText}`;
}

const searchForm = document.getElementById('searchForm');
searchForm.addEventListener('submit', function (event) {
    event.preventDefault();
    cariProduk();
});

function ubahKategoriDariNavbar(selectedCategory) {
    // Set parameter kategori pada URL dan arahkan ke halaman produk
    window.location.href = `produk.html?category=${selectedCategory}`;
}


// Fungsi showForm
function showForm(formId) {
    var forms = document.getElementsByClassName('rounded');
    for (var i = 0; i < forms.length; i++) {
        forms[i].style.display = 'none';
    }

    // Menyesuaikan formulir yang ditampilkan berdasarkan formId
    if (formId === 'signupForm') {
        document.getElementById('signupForm').style.display = 'block';
    } else if (formId === 'loginForm') {
        document.getElementById('loginForm').style.display = 'block';
    }
}
// Fungsi logout
function logout() {
    // Hapus informasi nama pengguna dari sessionStorage
    sessionStorage.removeItem('username');
    // Redirect ke halaman login setelah logout
    window.location.href = "daftarmasuk.html";
    // Perbarui navbar dengan opsi Daftar | Masuk
    updateNavbar(null);
}


// Fungsi updateNavbar
function updateNavbar() {
var userActions = document.querySelector('.user-actions ul');

// Hapus semua elemen anak di dalam userActions
userActions.innerHTML = "";

// Cek apakah ada nama pengguna tersimpan di sessionStorage
var username = sessionStorage.getItem('username');

if (username) {
    // Jika ada nama pengguna, tambahkan nama pengguna dan opsi logout
    var liUsername = document.createElement('li');
    liUsername.textContent = username;
    userActions.appendChild(liUsername);

    var liLogout = document.createElement('li');
    var aLogout = document.createElement('a');
    aLogout.href = "#"; // Tidak perlu href karena logout akan menangani perubahan halaman
    aLogout.textContent = "Keluar";
    aLogout.onclick = function () {
        // Panggil fungsi logout saat Logout diklik
        logout();
    };
    liLogout.appendChild(aLogout);
    userActions.appendChild(liLogout);
} else {
    // Jika tidak ada nama pengguna, tampilkan opsi Daftar dan Masuk
    var liMasuk = document.createElement('li');
    var aMasuk = document.createElement('a');
    aMasuk.href = "daftarmasuk.html";
    aMasuk.textContent = "Masuk";
    aMasuk.onclick = function () {
        showForm('loginForm');
    };
    liMasuk.appendChild(aMasuk);
    userActions.appendChild(liMasuk);
}
}

// Panggil fungsi updateNavbar saat halaman dimuat
window.onload = function () {
updateNavbar();
};

