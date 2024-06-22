//Khoi tao danh sach san pham
function createProduct() {
    if (localStorage.getItem('img') == null) {
        let products = [{
            id: 1,
            status: 1, 
            title: 'Nấm đùi gà xào cháy tỏi',
            img: 'img/nam-dui-ga-chay-toi.jpeg',
            category: 'Món mặn',
            price: 200000,
            desc: 'Một Món chay ngon miệng với nấm đùi gà thái chân hương, xào săn với lửa và thật nhiều tỏi băm, nêm nếm với mắm và nước tương chay, món ngon đưa cơm và rất dễ ăn cả cho người lớn và trẻ nhỏ.'
        },
        {
            id: 2,
            status: 1, 
            title: 'Rau xào ngũ sắc',
            img: 'img/rau-xao-ngu-sac.png',
            category: 'Món mặn',
            price: 180000,
            desc: 'Rau củ quả theo mùa tươi mới xào với nước mắm chay, gia vị để giữ được hương vị ngọt tươi nguyên thủy của rau củ, một món nhiều vitamin và chất khoáng, rất dễ ăn.'
        },
        {
            id: 3,
            status: 1, 
            title: 'Bánh lava phô mai nướng',
            img: 'img/banh_lava_pho_mai_nuong.jpeg',
            category: 'Món mặn',
            price: 180000,
            desc: 'Rau củ quả theo mùa tươi mới xào với nước mắm chay, gia vị để giữ được hương vị ngọt tươi nguyên thủy của rau củ, một món nhiều vitamin và chất khoáng, rất dễ ăn.'
        },
        {
            id: 4,
            status: 1, title: 'Set lẩu thái Tomyum',
            img: 'img/lau_thai.jpg',
            category: 'Món mặn',
            price: 699000,
            desc: 'Lẩu Thái là món ăn xuất phát từ món canh chua Tom yum nổi tiếng của Thái Lan. Nước lẩu có hương vị chua chua cay cay đặc trưng. Các món nhúng lẩu gồn thịt bò, hải sản, rau xanh và các loại nấm.'
        },
        {
            id: 5,
            status: 1, 
            title: 'Cơm chiên cua',
            img: 'img/com_chien_cua.png',
            category: 'Món mặn',
            price: 280000,
            desc: 'Cơm nấu từ gạo ST25 dẻo, hạt cơm tơi ngon, thịt cua tươi chắc nịch, bếp đảo cho săn hạt cơm, rồi đổ cua đã xào thơm vào, xúc miếng cơm chiên cua đầy đặn có thêm hành phi giòn rụm, món ngon như vậy đảm bảo tranh nhau đến miếng cuối cùng.'
        },

        {
            id: 6,
            status: 1, 
            title: 'Súp bào ngư hải sâm (1 phần)',
            img: 'img/sup-bao-ngu-hai-sam.jpeg',
            category: 'Món mặn',
            price: 540000,
            desc: 'Súp bào ngư Bếp Hoa có bào ngư kết hợp cùng sò điệp, tôm tươi... được hầm trong nhiều giờ với rau củ & nấm đông trùng tạo ra vị ngọt tự nhiên hiếm thấy. Một món ăn khiến cả người ốm cũng thấy ngon miệng đó ạ.'
        },

        {
            id: 7,
            status: 1, 
            title: 'Tai cuộn lưỡi',
            category: 'Món mặn',
            img: 'img/tai-cuon-luoi.jpeg',
            price: 340000,
            desc: 'Tai heo được cuộn bên trong cùng phần thịt lưỡi heo. Phần tai bên ngoài giòn dai, phần thịt lưỡi bên trong vẫn mềm, có độ ngọt tự nhiên của thịt. Tai cuộn lưỡi được chấm với nước mắm và tiêu đen.'
        },

        {
            id: 8,
            status: 1, 
            title: 'Xíu mại tôm thịt 10 viên',
            img: 'img/xiu_mai_tom_thit_10_vien.jpg',
            category: 'Món mặn',
            price: 140000,
            desc: 'Quý khách hấp chín trước khi ăn. Những miếng há cảo, sủi cảo, hoành thánh với phần nhân tôm, sò điệp, hải sản tươi ngon hay nhân thịt heo thơm ngậy chắc chắn sẽ khiến bất kỳ ai thưởng thức đều cảm thấy rất ngon miệng.'
        },

        {
            id: 9,
            status: 1, 
            title: 'Trà phô mai kem sữa',
            category: "Nước uống",
            img: 'img/tra-pho-mai-kem-sua.jpg',
            price: 34000,
            desc: 'Món Nước uống vừa béo ngậy, chua ngọt đủ cả mà vẫn có vị thanh của trà.',
        },
        {
            id: 10,
            status: 1, 
            title: 'Trà đào chanh sả',
            category: "Nước uống",
            img: 'img/tra-dao-chanh-sa.jpg',
            price: 25000,
            desc: 'Trà đào chanh sả có vị đậm ngọt thanh của đào, vị chua chua dịu nhẹ của chanh và hương thơm của sả.',
        },
        {
            id: 11,
            status: 1, 
            title: 'Bánh chuối nướng',
            category: 'Món tráng miệng',
            img: 'img/banh-chuoi-nuong.jpeg',
            price: 60000,
            desc: 'Bánh chuối nướng béo ngậy mùi nước cốt dừa cùng miếng chuối mềm ngon sẽ là Món tráng miệng phù hợp với mọi người.'
        },
        {
            id: 12,
            status: 1, 
            title: 'Há cảo sò điệp (10 viên)',
            img: 'img/ha_cao.jpg',
            category: 'Món mặn',
            price: 140000,
            desc: 'Những miếng há cảo, sủi cảo, hoành thánh với phần nhân tôm, sò điệp, hải sản tươi ngon hay nhân thịt heo thơm ngậy chắc chắn sẽ khiến bất kỳ ai thưởng thức đều cảm thấy rất ngon miệng.'
        },
        {
            id: 13,
            status: 1, 
            title: 'Chả rươi (100gr)',
            img: 'img/thit_nuong.jpg',
            category: 'Món mặn',
            price: 60000,
            desc: 'Chả rươi luôn mang đến hương vị khác biệt và "gây thương nhớ" hơn hẳn so với các loại chả khác. Rươi béo càng ăn càng thấy ngậy. Thịt thơm quyện mùi thì là và vỏ quýt rất đặc sắc. Chắc chắn sẽ là một món ăn rất hao cơm'
        },
        {
            id: 14,
            status: 1, 
            title: 'Nộm gà Hội An (1 phần)',
            img: 'img/nom_ga_hoi_an.png',
            category: 'Món mặn',
            price: 60000,
            desc: 'Nộm gà làm từ thịt gà ri thả đồi. Thịt gà ngọt, săn được nêm nếm vừa miệng, bóp thấu với các loại rau tạo thành món nộm thơm ngon, đậm đà, giải ngán hiệu quả.'
        },
        {
            id: 15,
            status: 1, 
            title: 'Set bún cá (1 set 5 bát)',
            img: 'img/set_bun_ca.jpg',
            category: 'Món mặn',
            price: 60000,
            desc: 'Bún cá được làm đặc biệt hơn với cá trắm lọc xương và chiên giòn, miếng cá nhúng vào nước dùng ăn vẫn giòn dai, thơm ngon vô cùng.'
        },
        {
            id: 16,
            status: 1, 
            title: 'Bún cá (1 phần)',
            img: 'img/set_bun_ca.jpg',
            category: 'Món mặn',
            price: 60000,
            desc: 'Bún cá được làm đặc biệt hơn với cá trắm lọc xương và chiên giòn, miếng cá nhúng vào nước dùng ăn vẫn giòn dai, thơm ngon vô cùng'
        },
        {
            id: 17,
            status: 1, 
            title: 'Xôi trắng hành phi (1 phần)',
            img: 'img/bun_ca_hanh_phi.jpeg',
            category: 'Món mặn',
            price: 60000,
            desc: 'Bún cá được làm đặc biệt hơn với cá trắm lọc xương và chiên giòn, miếng cá nhúng vào nước dùng ăn vẫn giòn dai, thơm ngon vô cùng'
        },
        {
            id: 18,
            status: 1, 
            title: 'Tôm sú lột rang thịt (1 phần)',
            img: 'img/tom_su_luot_ran_thit.png',
            category: 'Món mặn',
            price: 60000,
            desc: 'Tôm sú tươi rim với thịt. rim kỹ, vừa lửa nên thịt và tôm săn lại, ngấm vị, càng ăn càng thấy ngon.'
        },
        {
            id: 19,
            status: 1, 
            title: 'Bánh cookie dừa',
            img: 'img/banh_cookie_dua.jpeg',
            category: 'Món mặn',
            price: 130000,
            desc: 'Bánh cookie dừa ngọt vừa miệng, dừa bào tươi nhào bánh nướng giòn tan, cắn vào thơm lừng, giòn rụm'
        },
        {
            id: 20,
            status: 1, 
            title: 'Cá chiên giòn sốt mắm Thái',
            img: 'img/sot_mam_thai.jpeg',
            category: 'Món mặn',
            price: 130000,
            desc: 'Bánh cookie dừa ngọt vừa miệng, dừa bào tươi nhào bánh nướng giòn tan, cắn vào thơm lừng, giòn rụm'
        },
        {
            id: 21,
            status: 1, 
            title: 'Tôm sú rang muối (1 suất)',
            category: 'Món mặn',
            img: 'img/tom-su-rang-muoi.jpeg',
            price: 550000,
            desc: 'Từng chú tôm sú được chọn lựa kĩ càng mỗi ngày, đảm bảo là tôm tươi sống, vẫn còn đang bơi khỏe. Tôm rang muối vừa đậm đà lại vẫn giữ được vị ngọt tự nhiên của tôm sú.'
        },
        {
            id: 22,
            status: 1, 
            title: 'Tôm sú rang bơ tỏi (1 suất)',
            category: 'Món mặn',
            img: 'img/tom-su-rang-bo-toi.jpeg',
            price: 550000,
            desc: 'Tôm được chiên vàng giòn bên ngoài, bên trong thịt tôm vẫn mềm, kết hợp cùng sốt bơ tỏi thơm nức . Tôm tươi được Bếp Hoa chiên theo bí quyết riêng nên phần thịt tôm bên trong sẽ có hương vị thơm ngon đặc biệt, sốt bơ tỏi béo ngậy hấp dẫn. Ăn kèm bánh mỳ rất hợp'
        },

        {
            id: 23,
            status: 1, 
            title: 'Combo Vịt quay và gỏi vịt',
            category: 'Món mặn',
            img: 'img/combo-vitquay-va-goivit.jpeg',
            price: 510000,
            desc: 'Combo vịt quay Bếp Hoa + gỏi vịt bắp cải size đại cực kỳ thích hợp cho những bữa ăn cần nhiều rau, nhiều đạm mà vẫn đảm bảo ngon miệng. Vịt quay chuẩn Macao giòn da thấm thịt, thêm phần gỏi vịt chua chua ngọt ngọt, rau tươi giòn ăn chống ngán, cân bằng dinh dưỡng.'
        },

        {
            id: 24,
            status: 1, 
            title: 'Set cá cơm tầm',
            img: 'img/set_ca_tam.jpg',
            category: 'Món mặn',
            price: 950000,
            desc: 'Một 1 set với 3 món ngon mỹ mãn đủ 4 người ăn no, bếp trưởng tự tay chọn từng con cá tầm tươi đủ chất lượng để chế biến đủ 3 món gỏi, nướng, canh chua 10 điểm cho chất lượng.'
        },
        {
            id: 25,
            status: 1, 
            title: 'Chả ốc 1 phần',
            img: 'img/cha_oc_1_phan.jpeg',
            category: 'Món mặn',
            price: 350000,
            desc: 'Chả ốc với ốc giòn tan, băm rối, trộn với thịt, lá lốt, rau thơm, nêm nếm vừa ăn và viên tròn, chiên cho giòn ngoài mềm trong. Ăn chả ốc kẹp với rau sống và chấm mắm chua ngọt cực kỳ đưa vị.'
        },

        {
            id: 26,
            status: 1, 
            title: 'Gà ủ muối thảo mộc (1 con)',
            category: 'Món mặn',
            img: 'img/ga-u-muoi-thao-moc.png',
            price: 450000,
            desc: 'Gà ủ muối tuyển chọn từ gà ri tươi, ủ muối chín tới với gia vị thảo mộc tự nhiên, da gà mỏng, thịt chắc ngọt.'
        },

        {
            id: 27,
            status: 1, 
            title: 'Gà không lối thoát (1 con)',
            category: 'Món mặn',
            img: 'img/ga-khong-loi-thoat.png',
            price: 520000,
            desc: 'Gà mái ghẹ size 1.4kg sơ chế sạch sẽ, tẩm ướp gia vị đậm đà, bọc vào trong xôi dẻo từ nếp cái hoa vàng, chiên cho giòn mặt ngoài. Khi ăn cắt phần xôi là gà thơm ngon nghi ngút khói, thịt gà ngấm mềm thơm, miếng xôi ngọt tự nhiên từ thịt gà ăn cực kỳ hấp dẫn.'
        },

        {
            id: 28,
            status: 1, 
            title: 'Cá chiên giòn mắm Thái (1 con)',
            category: 'Món mặn',
            img: 'img/ca-chien-gion-mam-thai.jpeg',
            price: 350000,
            desc: 'Cá tươi bếp làm sạch, lạng đôi, ướp cho ngấm và chiên vàng giòn. Thịt cá bên trong óng ánh nước, mềm ngọt, bên ngoài giòn tan hấp dẫn. Thêm sốt mắm Thái đầu bếp làm công thức riêng, vị mắm chua ngọt cay the cực kỳ hợp với cá giòn nóng hổi.'
        },

        {
            id: 29,
            status: 1, 
            title: 'Chân giò chiên giòn mắm Thái',
            category: 'Món mặn',
            img: 'img/chan-gio-chien-gion-mam-thai.webp',
            price: 420000,
            desc: 'Chân giò lợn đen chọn loại ngon, tỉ lệ nạc mỡ đều đặn, bếp xâm bì cẩn thận và ướp thật ngon, chiên vàng giòn nổi bóng, khi ăn chấm mắm chua ngọt cay cay cực kỳ ngon miệng.'
        },

        {
            id: 30,
            status: 1, 
            title: 'Chả cốm (500gr)',
            category: 'Món mặn',
            img: 'img/cha-com.webp',
            price: 175000,
            desc: 'Cốm mộc làng Vòng hạt dẹt dẻo và thơm đặc biệt, thịt lợn tươi phải chọn phần thịt vai xay vừa mềm lại không bở, trộn đều với cốm, nêm với mắm ngon, gia vị đơn giản và quật hỗn hợp thịt xay và cốm đến khi nào thật chắc và dẻo. Viên mỗi bánh chả phải đều tay, hấp sơ qua cho thành hình, khi ăn mới chiên vàng. Chả cốm khi cắn vào phải giòn và lại thật mềm, tứa nước trong miệng. Cốm dẻo dẻo cuộn trong thịt thơm ngon lạ kỳ.'
        },

        {
            id: 31,
            status: 1, 
            title: 'Vịt om sấu (1 hộp)',
            category: 'Món mặn',
            img: 'img/vit-om-sau.jpeg',
            price: 350000,
            desc: '[Mỗi phần có 1,2kg thịt vịt]. Vịt om sấu với thịt vịt mềm thơm, nấu với trái sấu, sả cây, ớt tươi cho ra phần nước om chua thanh và rất thơm. Dùng vịt om sấu với rau mùi tàu, rau thơm và bún rất ngon.'
        },

        {
            id: 32,
            status: 1, 
            title: 'Giò xào (1kg)',
            category: 'Món mặn',
            img: 'img/gio-xao.webp',
            price: 460000,
            desc: 'Giò xào Bếp Hoa đặc biệt được xào khô, ép chặt để tạo độ giòn. Nguyên liệu chính được làm từ tai và lưỡi heo. Khi ăn giò xào, bạn sẽ cảm nhận từng miếng giò vừa giòn vừa thơm lừng mùi tiêu đen và nước mắm.'
        },

        {
            id: 33,
            status: 1, 
            title: 'Nem tai (1 hộp)',
            category: 'Món mặn',
            img: 'img/nem-tai.jpg',
            price: 200000,
            desc: 'Nem tai giòn sần sật, trộn với thính gạo rang thơm, ăn kèm lá sung bùi bùi, chấm tương ớt hoặc nước chấm đặc điệt, công thức chỉ riêng Bếp Hoa có.'
        },

        {
            id: 34,
            status: 1, 
            title: 'Canh dưa bò hầm (1 hộp)',
            category: 'Món mặn',
            img: 'img/canh-dua-bo-ham.jpg',
            price: 270000,
            desc: 'Canh dưa chua hầm nhừ với thịt nạm bò và gân bò. Thơm - ngon - ngọt - béo - chua dịu thanh thanh'
        },

        {
            id: 35,
            status: 1, 
            title: 'Nạc nọng heo nướng kèm xôi trắng (500gr)',
            category: 'Món mặn',
            img: 'img/nac-nong-heo-nuong-kem-xoi-trang.jpg',
            price: 300000,
            desc: 'Nọng heo - phần thịt ngon nhất trên thủ heo, với những dải thịt nạc mỡ đan xen, mỗi thủ chỉ có được 1-2kg thịt nọng ngon mềm như vậy. Bếp trưởng Bếp Hoa tẩm ướp thật ngấm gia vị, nướng thẳng trên than hoa thơm nức, xém cạnh đẹp mắt. Miếng thịt nướng xong gắp khỏi vỉ vẫn thấy mỡ thơm còn sôi trên dải thịt, để thịt nghỉ vài phút khi thái ra óng ánh nước, gắp miếng thịt chấm với nước sốt siêu ngon độc quyền của Bếp, ngon đến tứa nước miếng, tranh nhau gắp sạch đĩa'
        },

        {
            id: 36,
            status: 1, 
            title: 'Thịt quay (400gr)',
            category: 'Món mặn',
            img: 'img/thit-quay.jpg',
            price: 280000,
            desc: 'Thịt lợn quay thơm mùi lá mắc mật. Ngoài bì giòn rụm, thịt bên trong mềm, hương vị đậm đà. Đặc biệt, bếp có loại sốt chấm thịt được pha bằng công thức riêng biệt chỉ Bếp Hoa mới có.Hướng dẫn sử dụng: Sử dụng ngay trong ngày. Bảo quản trong tủ mát.'
        },

        {
            id: 37,
            status: 1, 
            title: 'Khâu nhục',
            category: 'Món mặn',
            img: 'img/khau-nhuc.jpg',
            price: 280000,
            desc: 'Khâu nhục - món ăn cầu kỳ mang phong vị phương Bắc. Làm từ thịt lợn ta, khâu khục được hấp cách thủy trong 6 tiếng cùng với rất nhiều loại gia vị. Thịt mềm nhừ, ngọt vị, phần bì trong và dẻo quẹo. Mỡ ngậy ngậy tan chảy ngay khi vừa đưa lên miệng. Hướng dẫn bảo quản: Hâm nóng lại bằng nồi hấp cách thủy hoặc lò vi sóng. Bảo quản trong tủ mát từ 3-5 ngày.'
        },
        {
            id: 38,
            status: 1, 
            title: 'Xíu mại tôm thịt ( 10 viên)',
            category: 'Món mặn',
            img: 'img/ha_cao_tom_thit.jpg',
            price: 140000,
            desc: 'Những miếng há cảo, sủi cảo, hoành thánh với phần nhân tôm, sò điệp, hải sản tươi ngon hay nhân thịt heo thơm ngậy chắc chắn sẽ khiến bất kỳ ai thưởng thức đều cảm thấy rất ngon miệng.'
        },
        {
            id: 39,
            status: 1, 
            title: 'Chè hương cốm lá dứa',
            category: 'Món tráng miệng',
            img: 'img/che-com-la-dua.jpeg',
            price: 60000,
            desc: 'Chè cốm hương lá dứa dẻo thơm, ngọt dịu, từng hạt cốm thoảng thoảng đâu đó hương lá dứa mát lành'
        },

        {
            id: 40,
            status: 1, 
            title: 'Bánh bông lan chanh dây',
            category: 'Món tráng miệng',
            img: 'img/banh-bong-lan-chanh-day.jpeg',
            price: 50000,
            desc: 'Bánh bông lan chanh dây với vị chua nhẹ, không bị ngọt gắt hẳn sẽ là sự lựa chọn hoàn hảo'
        },

        {
            id: 41,
            status: 1, 
            title: 'Chè bưởi',
            category: 'Món tráng miệng',
            img: 'img/che-buoi.jpeg',
            price: 50000,
            desc: 'Chè bưởi rất dễ ăn bởi hương vị ngọt mát, thơm ngon, vị bùi bùi của đậu xanh, giòn sần sật của cùi bưởi mà không hề bị đắng'
        },
        {
            id: 42,
            status: 1, 
            title: 'Set lẩu Thái tomyum',
            category: "Món lẩu",
            img: 'img/lau-thai-tomyum.jpeg',
            price: 699000,
            desc: 'Lẩu Thái là món ăn xuất phát từ món canh chua Tom yum nổi tiếng của Thái Lan. Nước lẩu có hương vị chua chua cay cay đặc trưng. Các món nhúng lẩu gồn thịt bò, hải sản, rau xanh và các loại nấm.',
        },
        {
            id: 43,
            status: 1, 
            title: 'Set lẩu Thái nấm chay',
            category: "Món lẩu",
            img: 'img/lau-thai-nam-chay.png',
            price: 550000,
            desc: 'Một set lẩu Thái nấm chay với nước dùng 100% từ rau củ quả tự nhiên, thêm sả cây tươi, riềng miếng, ớt, nước dừa để lên được vị nước lẩu Thái chuẩn vị. Đồ nhúng đa dạng với nhiều loại nấm khác nhau, rau tươi giòn, đậu phụ mềm xốp, váng đậu amla chiên giòn. Kèm bún tươi ăn rất hợp.',
        },
        {
            id: 44,
            status: 1, 
            title: 'Đậu hũ xào nấm chay',
            category: "Món chay",
            img: 'img/dau-hu-xao-nam-chay.png',
            price: 220000,
            desc: 'Món xào thanh nhẹ ngọt lịm từ rau củ và nấm tươi, thêm chút đậu phụ chiên thái miếng, nêm nếm đậm đà. Ăn kèm cơm trắng hay làm bún trộn rau củ cũng rất hợp.',
        },
        {
            id: 45,
            status: 1, 
            title: 'Bún trộn chay (1 suất)',
            category: "Món chay",
            img: 'img/bun-tron-chay.png',
            price: 75000,
            desc: 'Bún trộn chay tưởng là quen mà ăn ngon lạ miệng. Với bún tươi được trộn với nước tương và sốt ớt đặc biệt, mắm chay thơm, thêm rau củ tươi, rau thơm bắt vị, nấm xào săn, đậu phụ thái lát, một món thanh nhẹ thích hợp ăn trưa hoặc để dành cho anh chị eat-clean bữa tối.',
        },
        {
            id: 46,
            status: 1, 
            title: 'Bún riêu chay (1 suất)',
            category: "Món chay",
            img: 'img/bun-rieu-chay.png',
            price: 75000,
            desc: 'Bún riêu chay với phần gạch cua chay từ đậu phụ non mềm đánh với sốt màu thơm ngon. Nước dùng thanh nhẹ từ rau củ quả, được nấu lên vị đậm đà rất ngon miệng. Một phần bún riêu kèm với gạch cua là giò chay, đậu phụ rán, rau sống ngọt giòn và tương ớt chay sánh ngon.',
        },
        {
            id: 47,
            status: 1, 
            title: 'Miến xào rau củ chay',
            category: "Món chay",
            img: 'img/mien-xao-rau-cu-chay.png',
            price: 170000,
            desc: 'Sợi miến khoai lang bếp ngâm cho mềm, xào kèm rau củ quả tươi theo mùa, nêm cùng nước tương và dầu mè, một món xào chay vừa mát lành lại thơm ngon.',
        },
        {
            id: 48,
            status: 1, 
            title: 'Cuốn nấm chay (10 cuốn)',
            category: "Món chay",
            img: 'img/cuon-nam-chay.png',
            price: 120000,
            desc: 'Nấm tươi làm chín cuộn với bánh phở và rau bào, thêm đậu phụ chiên giòn thái chân hương đưa vị, chấm mắm chua ngọt chay bếp trưởng pha chế, một món ngon làm món khai vị rất hợp.',
        },
        {
            id: 49,
            status: 1, 
            title: 'Xôi xéo',
            category: "Món chay",
            img: 'img/xoi-xeo.png',
            price: 80000,
            desc: 'Xôi xéo đậu xanh bếp dùng nếp cái hoa vàng hạt mẩy, ngâm với nước nghệ và đồ 2 lần cho hạt nếp chín mềm và thơm, đậu xanh sên mịn cắt tơi trộn cùng xôi, khi ăn rắc hành phi đưa vị, rất hấp dẫn.',
        },
        {
            id: 50,
            status: 1, 
            title: 'Chả quế chay',
            category: "Món chay",
            img: 'img/cha-que-chay.png',
            price: 70000,
            desc: '',
        },
        {
            id: 51,
            status: 1, 
            title: 'Nem chay',
            category: "Món chay",
            img: 'img/nem-chay.png',
            price: 160000,
            desc: 'Nem chay thơm ngon, thanh thuần bếp trưởng sử dụng rau củ bào tươi, đậu xanh, khoai môn, miến, mộc nhĩ và nấm hương, tất cả xào thơm cho lên vị, sau đó cuộn với bánh đa nem mỏng, chiên giòn vỏ, chấm mắm chua ngọt chay ăn kèm rau thơm rất hấp dẫn.',
        },
        {
            id: 52,
            status: 1, 
            title: 'Bánh tráng trộn',
            category: "Món ăn vặt",
            img: 'img/banh-trang-tron.jpg',
            price: 20000,
            desc: 'Bánh tráng trộn là món ăn ngon không chỉ nổi danh đất Sài Thành mà ngay khi xuất hiện tại Hà Nội, nó cũng đã trở thành món ăn “hot trend” rất được giới trẻ yêu thích. ',
        },
        {
            id: 53,
            status: 1, 
            title: 'Bánh tráng nướng',
            category: "Món ăn vặt",
            img: 'img/banh-trang-nuong.jpg',
            price: 10000,
            desc: 'Khác với món bánh tráng trộn, bánh tráng nướng được phết một lớp trứng chút lên bề mặt bánh tráng cùng thịt băm, mỡ hành, nướng đến khi có màu vàng ruộm. ',
        },
        {
            id: 54,
            status: 1, 
            title: 'Ốc thập cẩm (1 suất)',
            category: "Món ăn vặt",
            img: 'img/oc-thap-cam.jpg',
            price: 50000,
            desc: 'Được chế biến đủ các món ốc ngon khác nhau, như: ốc hấp, ốc luộc, ốc xào, ốc bỏ lò,.. với đủ các gia vị như tỏi, hành, ớt, tiêu, rau răm,…',
        },
        {
            id: 55,
            status: 1, 
            title: 'Cơm cháy chà bông',
            category: "Món ăn vặt",
            img: 'img/com-chay-cha-bong.jpg',
            price: 60000,
            desc: 'Cơm cháy chà bông có thể bảo quản cả tháng mà ăn vẫn ngon và đóng gói rất tiện.',
        },
        {
            id: 56,
            status: 1, 
            title: 'Phá lấu (1 suất)',
            category: "Món ăn vặt",
            img: 'img/pha-lau.jpg',
            price: 99000,
            desc: 'Cứ mỗi lần hỏi “Ăn gì ở Sài Gòn ngon, rẻ ?” là người ta nhớ ngay món phá lấu.',
        },
        {
            id: 57,
            status: 1, 
            title: 'Bột chiên (1 suất)',
            category: "Món ăn vặt",
            img: 'img/bot-chien.jpg',
            price: 49000,
            desc: 'Cùng với nước chấm đặc biệt, bột chiên để lại hương vị khó tả cho thực khách sau khi thưởng thức.',
        },
        {
            id: 58,
            status: 1, 
            title: 'Gỏi khô bò (1 suất)',
            category: "Món ăn vặt",
            img: 'img/goi-bo-kho.jpg',
            price: 60000,
            desc: 'Thơm ngon đến từng sợi bò.',
        },
        {
            id: 59,
            status: 1, 
            title: 'Hoành thánh tôm (10 viên)',
            img: 'img/hoanh_thanh.jpg',
            category: 'Món mặn',
            price: 130000,
            desc: 'Những miếng há cảo, sủi cảo, hoành thánh với phần nhân tôm, sò điệp, hải sản tươi ngon hay nhân thịt heo thơm ngậy chắc chắn sẽ khiến bất kỳ ai thưởng thức đều cảm thấy rất ngon miệng.'
        },
        {
            id: 60,
            status: 1, 
            title: 'Nước ép dâu tây',
            img: 'img/nuoc-ep-dau-tay.jpg',
            category: 'Nước uống',
            price: 100000,
            desc: 'Dâu tây ăn nguyên quả ngon ngọt, có cả quả dôn dốt chua, màu đỏ mọng trông cực yêu. Không chỉ ngon miệng mà đồ uống từ dâu tây còn có công dụng bảo vệ sức khỏe, sáng mắt, đẹp da, thon gọn vóc dáng. Làm giảm nguy cơ mắc bệnh về mỡ máu, chống viêm,…'
        },
        ]
        localStorage.setItem('products', JSON.stringify(products));
    }
}

// Hàm cập nhật sản phẩm
function updateProduct(id, newImg, newTitle, newDesc, newPrice) {
    let products = JSON.parse(localStorage.getItem('products'));

    // Tìm sản phẩm theo ID và cập nhật nội dung
    let product = products.find(p => p.id === id);
    if (product) {
        product.img = newImg;
        product.title = newTitle;
        product.desc = newDesc;
        product.price = newPrice;
        
        // Cập nhật lại localStorage với dữ liệu mới
        localStorage.setItem('products', JSON.stringify(products));
    } else {
        console.log('Product not found');
    }
}

// Khởi tạo sản phẩm nếu chưa có trong localStorage
createProduct();

// Cập nhật sản phẩm với ID 
updateProduct(44, 'img/canh-rong-bien-hat-sen.jpg', 'Canh rong biển hạt sen', 'Hãy thử đổi thực đơn ăn chay hàng ngày bằng món canh rong biển hạt sen giúp thanh nhiệt rất tốt.', 220000);
updateProduct(45, 'img/nem-nam-chay.jpg', 'Nem nấm chay', 'Kể cả khi bạn không là tín đồ của những món ăn chay thì khi được thưởng thức món nem nấm chay thì chắc chắn sẽ thấy rất ấn tượng.', 75000);
updateProduct(46, 'img/chao-nam-moi-chay.jpg', 'Nấm rơm kho nước tương', 'Nhắc tới các món ăn chay từ nấm, ta không thể bỏ qua nấm rơm - một nguyên liệu vừa phổ biến, vừa rẻ lại vừa bổ dưỡng. Kết hợp loại nấm này với nước tương và cùng một vài loại gia vị khác là bạn đã có ngay một món ăn thơm ngon tuyệt vời.', 75000);
updateProduct(47, 'img/image2.png', 'Tàu hủ chiên sả ớt', 'Từng miếng tàu hủ non được cắt thành từng khối vuông, sau đó ướp với sả ớt để thấm vị và chiên vàng đều, nêm nếm thêm một chút gia vị cho món ăn thêm đậm đà, ăn với cơm trắng rất ngon.', 100000);
updateProduct(48, 'img/image55.png', 'Salad tàu hủ', 'Salad tàu hủ là món chay ngon nhưng chưa thực sự phổ biến với người Việt. Món này vừa dùng để ăn chay vào các ngày rằm, hoặc ăn kiêng. Bởi vì salad tàu hủ chủ yếu chỉ gồm có rau và tàu hủ, vì vậy cơ thể bạn sẽ được dung nạp nhiều vitamin và chất xơ, tốt cho hệ tiêu hóa.', 150000);
updateProduct(49, 'img/image54.png', 'Nấm kim châm xào chay', '', 75000);
updateProduct(50, 'img/tuyen-tap-nhung-mon-an-chay-mien-nam-2.jpg', 'Cháo nấm', 'Không chỉ là món ăn ngon, các loại nấm còn có tác dụng tăng cường sức đề kháng cơ thể, chống lão hóa, làm giảm nguy cơ mắc các bệnh về tim mạch, giúp giải độc và bảo vệ tế bào gan.', 75000);
updateProduct(51, 'img/tuyen-tap-nhung-mon-an-chay-mien-nam-6.jpg', 'Xôi dừa hạt sen ', 'Món có hương thơm đặc trưng với những hạt gạo nếp mềm, dẻo hòa quyện cùng hương thơm từ các nguyên liệu của dừa sẽ mang đến cho bạn một cảm giác thật ngon miệng.', 100000);

updateProduct(9, 'img/tra-dao.webp', 'Trà Đào', 'Trà đào là loại thức uống đang làm mưa làm gió trên thị trường thức uống hiện nay, đặc biệt là giới trẻ, tuổi teen. Với hương vị thơm ngon, màu sắc bắt mắt của trà đào khiến nhiều người yêu thích.', 22000);
updateProduct(10, 'img/cach-lam-tra-chanh-hong-kong-ngon-chuan-vi-ngoai-quan-202108232123311595.webp', 'Trà chanh Hong Kong', 'Trà chanh Hong Kong là một thức uống giải khát thơm ngon và bổ dưỡng. Đây sẽ là thức uống giúp bạn xua tan cái nóng bức và giúp cơ thể bạn sảng khoái hơn để có tinh thần làm việc hiệu quả. ', 22000);
updateProduct(60, 'img/cach-lam-tra-dau-dong-du-mat-lanh-giai-nhiet-don-gian-tai-nha-202201170928357855.webp', 'Trà Dâu', 'Trà dâu không chỉ là thức uống ngon mà còn có tác dụng giải nhiệt cơ thể ngày nắng nóng, cùng tham khảo cách làm trà dâu đơn giản tại nhà nhé.', 25000);

updateProduct(42, 'img/mon-lau-dac-san-viet-nam-7.jpg', 'Lẩu gà lá é', 'Trong số các các món lẩu ngon lạ miệng của người Việt thì lẩu gà lá é là một món ăn được nhiều người yêu thích. Lẩu gà lá é vốn là đặc sản Phú Yên, nay lan tỏa khắp các tỉnh miền Trung và Nam Bộ, vang danh ở Đà Lạt, có mặt ở Sài Gòn và được dân tình đón nhận một cách nồng nhiệt.', 350000);
updateProduct(43, 'img/lau-hai-san-da-nang-a9a.jpeg', 'Lẩu hải sản', 'Lẩu hải sản Đà Nẵng không chỉ đáp ứng được khẩu vị của người dân địa phương mà còn hấp dẫn du khách từ khắp nơi trên thế giới. Hương vị tinh tế, hấp dẫn và chất lượng dinh dưỡng cao đã mang lại sự nổi tiếng cho món ăn này.', 550000);

updateProduct(11, 'img/top-15-mon-trang-mieng-viet-nam-ngon-nhat-ma-ban-nen-biet-202108201445168873.webp', 'Chè vải hạt sen', 'Chè vải hạt sen có tác dụng thanh nhiệt cơ thể. Hạt sen giòn giòn, bùi bùi, vải ngọt thanh, thơm ngon. Ngoài ra, hạt sen còn giúp bạn có giấc ngủ sâu hơn vào ban đêm. Bạn có thể thêm vào tổ yến hoặc táo tàu để chè giàu dinh dưỡng, thơm ngon hơn.', 30000);
updateProduct(39, 'img/image-top-10-mon-trang-mieng-ngon-nhat-cua-nguoi-viet-165862183192871.jpg', 'Sương sáo nước cốt dừa', 'Sương sáo cốt dừa: một trong những món ăn quen thuộc với nhiều người, đặc biệt gắn liền với tuổi thơ của nhiều thế hệ người Việt. ', 22000);
updateProduct(40, 'img/4-3-1.jpg', 'Pudding', 'Đây là một món ăn thường thấy ở nhiều bữa tiệc phương Tây. Pudding là thành quả của sự kết hợp giữa whipping cream, sữa và trứng cùng một chút bột gelatin. Không giống như bánh flan có sự mềm mịn nhưng dễ bể, bánh pudding đặc và dẻo hơn.', 50000);
updateProduct(41, 'img/5-3-1.jpg', 'Sữa chua', 'Sữa chua sẽ là lựa chọn tuyệt vời cho thực đơn nhà hàng tiệc cưới. Món tráng miệng này chứa nhiều chất dinh dưỡng và vi sinh có lợi giúp ích cho quá trình tiêu hóa.', 30000);

updateProduct(52, 'img/banh-trang-do-cuon-trung-cut-thumbnail-1.jpg', 'Bánh tráng cuốn', 'Là biến tấu từ món bánh tráng trộn, bánh tráng cuốn vẫn chiếm được vị trí trong hàng đồ ăn vặt ngon rẻ ở Sài Gòn.', 55000);
updateProduct(53, 'img/banh-trang-cuon-chien-thumbnail.jpg', 'Bánh tráng chiên', 'Nếu bạn đã ăn quá nhiều bánh tráng nướng thì có thể đổi mới một chút với món bánh tráng chiên được biến tấu siêu độc lạ này. Bánh tráng chiên giòn rụm, ăn kèm với nước sốt béo ngậy hoặc chua ngọt, là món ăn vặt đơn giản, nguyên liệu dễ tìm, có thể làm ngay tại nhà để thưởng thức.', 25000);
updateProduct(54, 'img/chan-ga-sa-ot-do-an-vat-e1694664336679.jpg', 'Chân gà sả ớt', 'Chân gà sả ớt là một món ăn có nguồn gốc từ Trung Quốc. Khi du nhập vào Việt Nam, món ăn đã được biến tấu theo khẩu vị của người Việt. Món ăn có sự kết hợp hài hòa của vị chua, cay, mặn, ngọt và bùi. ', 75000);
updateProduct(55, 'img/tong-hop-15-mon-an-vat-man-thom-ngon-thich-hop-de-nham-nhi-trong-bua-xe-202205111406518712.webp', 'Mực khô chiên nước mắm', 'Mực khô chiên nước mắm là lựa chọn tuyệt vời cho những ngày mưa lạnh. Vị nước mắm đậm đà hòa quyện với thịt mực dai ngọt, vô cùng cuốn miệng. Một vài lon bia lai rai cùng bạn bè sẽ cho buổi chiều mưa thêm ấm áp.', 125000);
updateProduct(56, 'img/tong-hop-15-mon-an-vat-man-thom-ngon-thich-hop-de-nham-nhi-trong-bua-xe-202205111409081103.webp', 'Da heo chiên giòn tẩm muối ớt', 'Da heo chiên giòn tẩm muối ớt là món ăn vặt được nhiều yêu thích bở da heo chiên béo ngậy, giòn rụm cùng vị cay ngọt đậm đà của ớt và đường giúp đánh thức vị giác của bạn.', 100000);
updateProduct(57, 'img/tong-hop-15-mon-an-vat-man-thom-ngon-thich-hop-de-nham-nhi-trong-bua-xe-202205111411411189.webp', 'Bắp chiên trân châu', 'Bắp chiên trân châu là một món ăn vặt bổ dưỡng vì kết hợp nhiều loại rau củ giúp bạn ăn vặt nhưng vẫn giữ dáng đẹp da. Bắp chiên trân châu ăn không ngán mà thanh mát và dễ chịu.', 55000);
updateProduct(58, 'img/tong-hop-15-mon-an-vat-man-thom-ngon-thich-hop-de-nham-nhi-trong-bua-xe-202205111422001042.webp', ' Ốc đá xào sả ớt', 'Thịt ốc giòn ngọt, thơm nức mùi sả chấm cùng với nước mắm cay nồng thật sự là một trải nghiệm tuyệt vời.', 75000);

updateProduct(1, 'img/thit-ba-chi-rim-man-ngot.jpg', 'Thịt ba chỉ rim mặn ngọt', 'Trong mùa hè này, còn gì tuyệt vời hơn khi được thưởng thức những miếng thịt lợn dai giòn ngấm gia vị mặn ăn cùng cơm trắng? Đặc biệt, món ăn này cũng rất đơn giản và dễ dàng thực hiện đấy.', 75000);
updateProduct(2, 'img/vit-om-sau.jpg', 'Vịt om sấu', 'Vịt om sấu không thể nằm ngoài thực đơn món ăn mặn mùa hè nắng nóng bởi sự kết hợp chua nhẹ của sấu và sự ngọt dai của thịt vịt. Do đó, đây là món ăn mặn thích hợp xóa tan cảm giác chán ăn trong ngày hè nóng bức.', 125000);
updateProduct(3, 'img/muc-hap-nhoi-thit.jpg', 'Mực hấp nhồi thịt', 'Mực nhồi thịt ngọt mềm, thơm ngon và rất dễ ăn vào ngày đầu hè đấy.', 155000);
updateProduct(4, 'img/vit-ro-ti.jpg', 'Vịt rô ti', 'Thịt vịt là món ăn rất giàu nguồn protein, đặc biệt loại thịt này rất mềm, ngọt, chắc chắn sẽ giúp kích thích vị giác trong mùa hè nắng nóng này đấy!', 175000);
updateProduct(5, 'img/bong-thien-ly-xao-bo.jpg', 'Bông thiên lý xào thịt bò', '', 85000);
updateProduct(6, 'img/cach-lam-suon-rang-chua-ngot-1.jpg', 'Sườn rim', 'Sườn non rim là món ăn rất thích hợp với người có khẩu vị mặn và ngay cả những người kén ăn cũng không thể nào cưỡng lại được hương vị đậm đà thơm ngon của món sườn non rim.', 95000);
updateProduct(7, 'img/2c3f2d8be6f2108972e4fc185d2a0197.jpg', 'Sườn chiên giòn', 'sườn non chiên giòn vì các bé rất yêu thích, với mùi hương thơm ngon và béo béo của món này.', 85000);
updateProduct(8, 'img/canh-sườn-non-nấu-củ-quả-recipe-main-photo.jpg', 'Canh sườn non', ' Món canh sườn non vừa dinh dưỡng vừa dễ dàng chế biến. Giá trị dinh dưỡng của món canh sườn non được tăng lên khi nấu chung với các loại rau củ như cà rốt, khoai tây, su su , khổ qua…', 75000);
updateProduct(12, 'img/cac-mon-hai-san-ngon-o-da-nang-2.jpg', 'Mực nướng sa tế', 'Mực nướng là một món ăn đặc trưng của vùng biển, được rất nhiều người yêu thích. Những con mực tươi sống sau khi đánh bắt vào bờ sẽ được làm sạch và ướp gia vị. Tiếp đó, mực được nướng trực tiếp trên than hoa cho đến khi vàng ươm và thơm phức.', 200000);
updateProduct(13, 'img/cac-mon-hai-san-ngon-o-da-nang-3.jpg', 'Cua rang me', 'Thịt cua ngọt, kết hợp cùng nước sốt me chua cay tạo nên hương vị độc đáo. Bạn có thể ăn kèm bánh mì, vừa ngon miệng lại no bụng.', 350000);
updateProduct(14, 'img/cac-mon-hai-san-ngon-o-da-nang-5.jpg', 'Sò điệp nướng hành', 'Sò điệp nướng hành mỡ là một món ăn đặc sản nổi tiếng của Đà Nẵng, được rất nhiều thực khách yêu thích. Những con sò điệp tươi sống sau khi rửa sạch sẽ được tách làm đôi và ướp các loại gia vị như tiêu, nêm, đường. Khi có khách gọi món, sò điệp được đem nướng trực tiếp trên than hoa cho đến khi chín vàng ươm, thơm phức.', 225000);
updateProduct(15, 'img/Thnhphm11-1699170028-3875-1699170031.jpg', 'Tôm nướng muối ớt', 'Từng con tôm đỏ au, vị tê cay mặn ngọt kích thích vị giác. Món ăn đơn giản này thích hợp nhâm nhi trong tiết trời se mát ngày thu đông. ', 155000);
updateProduct(16, 'img/Thnhphm33-1696489319-7093-1696489497.jpg', 'Bún riêu cua Nam Bộ', 'Bún riêu Nam Bộ hấp dẫn với topping đa dạng như chả cua, huyết lợn, móng giò, chả lụa, tàu hủ chiên. ', 75000);
updateProduct(17, 'img/Thnhphm11-1669194250-3845-1669194272.jpg', 'Hàu nướng mỡ hành', 'Hàu ngọt, vị béo ngậy đậm đà quyện với lạc bùi bùi, chút cay cay từ ớt, thơm mùi hành lá. Món này ăn nóng khi xem đá bóng World Cup 2022 là thú vị nhất. ', 175000);
updateProduct(18, 'img/Thnhphm1-1644045502-7032-1644045625.jpg', 'Su hào xào mực', 'Su hào khô ráo, ngọt tự nhiên quyện với mực giòn sần sật rất hấp dẫn. Đây là món ăn không thể thiếu trong ngày Tết, hiếu hỉ của người dân làng gốm. ', 175000);
updateProduct(19, 'img/hau-1634963062-3854-1634963133.jpg', 'Hàu đút lò', 'Hàu đút lò dùng nóng với muối tiêu chanh pha ớt băm. ', 125000);
updateProduct(20, 'img/goicuontom-1634449215-9345-1634449333.jpg', 'Cuốn tôm', 'Những món ăn nguội và mát như phở cuốn, cuốn tôm, nem cuốn... rất thích hợp trong tiết trời mùa hè. Cuốn tôm là món ngon, dễ làm, bạn có thể thực hành ngay để chiêu đãi cả nhà. ', 155000);
updateProduct(21, 'img/muc-1633693183-5002-1633693218.jpg', 'Mực xào rối', 'Mực xào rối có mùi thơm hấp dẫn với vị ngọt đậm của thịt mực, hơi cay. ', 155000);
updateProduct(22, 'img/goi-1633423504-5608-1633423701.jpg', 'Gỏi rau nhút hải sản', 'Dễ làm, nguyên liệu dễ kiếm, có thể ngồi nhâm nhi bất kỳ nơi nào... là lý do món gỏi được nhiều người ưa thích.', 125000);
updateProduct(23, 'img/tom-1633330339-8919-1633330508.jpg', 'Tôm rang muối', 'Thay đổi một chút trong cách chế biến, bạn sẽ mang lại một món ăn có hương vị mới, rất hấp dẫn cho cả nhà từ tôm.', 175000);
updateProduct(24, 'img/nomxoaixanh-1633166804-6598-1633166810.jpg', 'Nộm xoài xanh tôm thịt', 'Món này khá đơn giản, từ khâu chọn nguyên liệu đến cách làm nhưng lại rất ngon.', 75000);
updateProduct(25, 'img/Tmstchanhdy-1633061268-3339-1633061278.jpg', 'Tôm sốt chanh dây', 'Vị ngon của tôm hòa quyện với mùi thơm đặc trưng của chanh dây sẽ khiến món ăn này rất hấp dẫn.', 175000);
updateProduct(26, 'img/sa-1351752150.jpg', 'Salad tôm lạnh', 'Món ăn rất ngon, lạ miệng và giàu dinh dưỡng này đòi hỏi chế biến hơi công phu một chút. Bạn có thể tham khảo để trổ tài vào cuối tuần.', 225000);
updateProduct(27, 'img/Chagiokhoaimon-1627292572-5260-1627292652.jpg', 'Chả giò khoai môn', 'Có nhiều loại chả giò nhưng ăn đỡ ngán và lạ miệng hơn cả có lẽ là món chả giò khoai môn. ', 75000);
updateProduct(28, 'img/201894824-822823701977401-3165-9076-5804-1624526997.jpg', 'Chả giò khoai môn thịt heo', 'Chả giò (nem) giòn rụm bên ngoài, bên trong thịt ẩm mềm hoà với vị béo bùi của khoai môn hấp dẫn. ', 175000);



// Kiểm tra kết quả
console.log(JSON.parse(localStorage.getItem('products')));