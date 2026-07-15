export const TRUCKS_DATA = [
    {
        id: "1",
        pdfUrl: "/pdfs/тягач4x2.pdf",
        category: "I",
        name: "Седельный тягач КАМАЗ 54901-7004-СА 4х2",
        price: "932 848 000 сум",
        engine: "740.55-300",
        power: "460 л.с.",
        fuel: "Дизель",
        tank: "600+700 л",
        formula: "4х2",
        load: "34.5",
        img: "/images/image.png",
        Снаряженная_масса_тн: "9,15",
        Komplektatsiya: {
            uz: "AC. ikki kishilik, ikkita yotoq joyi, pnevmatik podveska",
            ru: "АС. двухместная, два спальных места, пневматическая подвеска"
        },
        Rasmiy_servis_mavjudligi: {
            uz: "54901 modeli uchun 3 ta sertifikatlangan servis: Toshkent, Samarqand, Navoiy",
            ru: "3 сертифицированных сервиса для модели 54901: Ташкент, Самарканд, Навои"
        },
        Ehtiyot_qismlar_mavjudligi: {
            uz: "Toshkentda kamaymaydigan ehtiyot qismlar ombori, mavjud ehtiyot qismlar hajmi 1.3 mlrd so'm",
            ru: "Неснижаемый склад запчастей в Ташкенте, объем запчастей в наличии 1.3 млрд сум"
        },
        Moliyalashtirish: {
            uz: "Boshlang'ich to'lov 25% (233,212,000), yillik stavka 20%, muddati 36 oy. Yakuniy summa: 1 169 247 309",
            ru: "Первоначальный взнос 25% (233,212,000), годовая ставка 20%, срок 36 месяцев. Итоговая сумма: 1 169 247 309"
        },
        Ekspluatatsiya_xususiyatlari: {
            uz: "Barcha avtotexnika uchun masofadan qat'i nazar 1 yil kafolat, kuch agregatlariga (dvigatel, uzatmalar qutisi, ko'priklar) 3 yil kafolat. 3 yillik servis xizmatlar paketi (PSU) mavjud. Almashtirib turuvchi texnika va 1 yillik bepul monitoring tizimi mavjud. FAST GEAR uzatmalar qutisi ZFga qaraganda arzonroq xizmat ko'rsatiladi. HANDE ko'priklari DANA va MANga qaraganda arzonroq. Kamchiligi - dvigatelning analogi yo'q, faqat rasmiy servisda xizmat ko'rsatiladi, neytrallash tizimi mavjud (ehtiyotkorlik bilan xizmat ko'rsatishni talab qiladi).",
            ru: "Гарантия 1 год без ограничения пробега на всю технику, 3 года на силовые агрегаты (двигатель, КПП, мосты). Доступен пакет сервисных услуг (ПСУ) на 3 года. Есть подменная техника и 1 год бесплатной системы мониторинга. КПП FAST GEAR дешевле в обслуживании, чем ZF. Мосты HANDE дешевле, чем DANA и MAN. Недостаток — нет аналогов двигателя, обслуживание только в официальном сервисе, наличие системы нейтрализации (требует осторожного обслуживания)."
        },
        Yillik_saqlash_xarajatlari: {
            uz: "PSU amal qiladi. 3 yil davomida bepul texnik xizmat ko'rsatish va tez eskiruvchi qismlarni bir marta bepul almashtirish",
            ru: "Действует ПСУ. Бесплатное техническое обслуживание в течение 3 лет и разовая бесплатная замена быстроизнашивающихся деталей."
        },
        Kuchsiz_tomonlari: {
            uz: "Intarder yo'q, yoqilg'i tizimi va chiqindi gazlarni neytrallash tizimi yoqilg'i sifatiga talabchan, multimedia tizimi rus tilida, dvigatelni faqat original ehtiyot qismlar va asboblar bilan ta'mirlash mumkin. Faqat KSD uskunasi bilan diagnostika qilinadi, bitta mashina uchun 15 ta chaqirib olish kompaniyasi chiqarilgan.",
            ru: "Отсутствует интардер, топливная система и система нейтрализации чувствительны к качеству топлива, мультимедиа на русском языке, двигатель требует только оригинальных запчастей. Диагностика только через оборудование KSD, по модели было 15 отзывных кампаний."
        },
        Takliflar: {
            uz: "Avtomobil ishlab chiqarilganiga 2026-yilda 3 yil bo'lishini hisobga olib narxni tushirish. Bir yillik foizsiz muddatli to'lovni ishlab chiqish.",
            ru: "Снизить цену с учетом того, что в 2026 году машине исполнится 3 года. Разработать годовую беспроцентную рассрочку."
        },
        Soha_va_vazifasi: {
            uz: "Ikki o'qli sedelli tyagach, yarim tirkamalarni shatakka olish hamda xalqaro va shaharlararo uzoq masofali tashuvlar uchun mo'ljallangan",
            ru: "Двухосный седельный тягач, предназначенный для буксировки полуприцепов, а также для международных и междугородних перевозок на дальние расстояния."
        },
        competitors: [
            {
                name: "FAW JH6",
                price: "1 250 000 000 сум",
                engine: "Wechai WP13NGA430E52",
                power: "430 л.с.",
                fuel: "МЕТАН",
                tank: "1520 л.",
                formula: "4х2",
                load: "35 тн",
                imgk: "/images/k1.png",
                Komplektatsiya: {
                    uz: "AC. ikki kishilik, ikkita yotoq joyi, pnevmatik podveska",
                    ru: "АС. двухместная, два спальных места, пневматическая подножка"
                },
                Rasmiy_servis_mavjudligi: {
                    uz: "8 ta sertifikatlangan servis markazi, mobil servis tashkil qilish imkoniyati",
                    ru: "8 сертифицированных сервис-центров, возможность организации мобильного сервиса"
                },
                Ehtiyot_qismlar_mavjudligi: {
                    uz: "Ehtiyot qismlarni mas'uliyatli saqlash omborlari yaratilgan",
                    ru: "Созданы склады ответственного хранения запасных частей"
                },
                Moliyalashtirish: {
                    uz: "Boshlang'ich to'lov 30% (375 000 000), yillik stavka 20-26.5%, muddati 12-60 oy",
                    ru: "Первоначальный взнос 30% (375 000 000), годовая ставка 20-26.5%, срок 12-60 месяцев"
                },
                Ekspluatatsiya_xususiyatlari: {
                    uz: "WEICHAI dvigateli KAMAZga qaraganda muammosiz ishlashni ta'minlaydi, ehtiyot qismlar va analoglar keng tarqalgan. Kafolat 3 yil yoki 100 ming km.",
                    ru: "Двигатель WEICHAI обеспечивает более бесперебойную работу по сравнению с КАМАЗом, запчасти и аналоги широко распространены. Гарантия 3 года или 100 000 км."
                },
                Soha_va_vazifasi: {
                    uz: "Ikki o'qli sedelli tyagach, yarim tirkamalarni shatakka olish hamda xalqaro va shaharlararo uzoq masofali tashuvlar uchun mo'ljallangan",
                    ru: "Двухосный седельный тягач для междугородних перевозок."
                }
            }
        ]
    },
    {
        id: "2",
        pdfUrl: "/pdfs/тягач6x6.pdf",
        category: "I",
        name: "Седельный тягач 44108-6010-24 6x6",
        price: "775 040 000 сум",
        engine: "КАМАЗ 740.55-300",
        power: "300 л.с.",
        fuel: "x",
        tank: "350 л",
        formula: "6х6",
        load: "38",
        img: "/images/2.png",
        Снаряженная_масса_тн: "9,275",
        Komplektatsiya: {
            uz: "Minimal komplektatsiya",
            ru: "Минимальная комплектация"
        },
        Rasmiy_servis_mavjudligi: {
            uz: "Xizmat ko'rsatish va ta'mirlash uchun 8 ta sertifikatlangan servis, mobil servis tashkil qilish imkoniyati",
            ru: "8 сертифицированных сервисов для обслуживания, возможность организации мобильного сервиса"
        },
        Ehtiyot_qismlar_mavjudligi: {
            uz: "Respublika bo'ylab markaziy ombor va 6 ta distribyutor dilerda jami 2 mlrd so'mlik ehtiyot qismlar zaxirasi mavjud",
            ru: "Центральный склад и 6 дистрибьюторских дилеров по всей республике, запас запчастей на 2 млрд сум"
        },
        Moliyalashtirish: {
            uz: "Boshlang'ich to'lov 25% (193,760,000), yillik stavka 20%, muddati 36 oy. Yakuniy summa: 971,448,118",
            ru: "Первоначальный взнос 25% (193,760,000), годовая ставка 20%, срок 36 месяцев. Итоговая сумма: 971,448,118"
        },
        Ekspluatatsiya_xususiyatlari: {
            uz: "2 yil yoki 75 ming km kafolat. Yoqilg'i tizimi injiq emas, kam xarajat, MKB va MOB mavjud, ehtiyot qismlar oson topiladi, 385 mm klirens, barcha g'ildiraklarni damlash tizimi bor. Shassini mijoz talabiga ko'ra qo'shimcha jihozlash imkoniyati mavjud.",
            ru: "Гарантия 2 года или 75 000 км. Неприхотливая топливная система, низкие эксплуатационные расходы, наличие МКБ и МОБ, доступность запчастей, клиренс 385 мм, система подкачки колес. Возможность дооснащения шасси по запросу."
        },
        Yillik_saqlash_xarajatlari: {
            uz: "60 mln (materiallar + ish kuchi)",
            ru: "60 млн (материалы + работа)"
        },
        Kuchsiz_tomonlari: {
            uz: "Razdatka mexanizmi zaif, rul boshqaruvi resursi kam, faqat ASKAN qurilmasi bilan diagnostika qilinadi (hamma servisda ham yo'q), TRK nosozliklari ko'p uchraydi",
            ru: "Слабый механизм раздатки, малый ресурс рулевого управления, диагностика только прибором АСКАН (есть не во всех сервисах), частые неисправности ТРК"
        },
        Takliflar: {
            uz: "X",
            ru: "X"
        },
        Soha_va_vazifasi: {
            uz: "Uch o'qli (orqada 2 ko'prik) sedelli tyagach, yarim tirkamalarni shatakka olish, mahalliy va shaharlararo yuk tashish; qurilish sohasi; 45 tonnagacha og'ir texnikalarni tashish uchun mo'ljallangan",
            ru: "Трехосный седельный тягач для буксировки полуприцепов, местных и междугородних перевозок; строительная сфера; перевозка тяжелой техники до 45 тонн."
        },
        competitors: [
            {
                name: "SHAANXI MAN",
                price: "x",
                Komplektatsiya: { uz: "AC. ikki kishilik, ikkita yotoq joyi, pnevmatik podveska", ru: "АС. двухместная, два спальных места, пневмоподвеска" },
                Rasmiy_servis_mavjudligi: { uz: "Barcha viloyatlarda servis markazlari mavjud", ru: "Сервисные центры во всех областях" },
                Ekspluatatsiya_xususiyatlari: { uz: "Sotuvchi tomonidan 2 yil kafolat", ru: "Гарантия от продавца 2 года" },
                Soha_va_vazifasi: { uz: "Uch o'qli sedelli tyagach, og'ir sharoitlarda yuk tashish", ru: "Трехосный тягач для тяжелых условий" }
            }
        ]
    },
    {
        id: "3",
        
        category: "I",
        name: "Седельный тягач 44108-6010-24 КМУ 10 тн длина 9,57 метр 6x6",
        price: "1 329 440 000 сум",
        engine: "КАМАЗ 740.55-300",
        power: "300 л.с.",
        fuel: "x",
        tank: "350 л",
        formula: "6х6",
        load: "23,5",
        img: "/images/12344.jpg",
        Снаряженная_масса_тн: "12,220",
        Komplektatsiya: {
            uz: "Minimal komplektatsiya",
            ru: "Минимальная комплектация"
        },
        Rasmiy_servis_mavjudligi: {
            uz: "Xizmat ko'rsatish va ta'mirlash uchun 8 ta sertifikatlangan servis markazi, mobil servis tashkil qilish imkoniyati",
            ru: "8 сертифицированных сервис-центров, возможность мобильного сервиса"
        },
        Ehtiyot_qismlar_mavjudligi: {
            uz: "Respublika bo'ylab dilerlarda jami 2 mlrd so'mlik ehtiyot qismlar zaxirasi mavjud",
            ru: "Запас запчастей на 2 млрд сум у дилеров по всей республике"
        },
        Moliyalashtirish: {
            uz: "Boshlang'ich to'lov 25% (332,360,000), yillik stavka 20%, muddati 36 oy. Yakuniy summa: 1 666 342 365",
            ru: "Первоначальный взнос 25% (332,360,000), ставка 20%, срок 36 месяцев."
        },
        Ekspluatatsiya_xususiyatlari: {
            uz: "2 yil yoki 75 ming km kafolat. Yoqilg'i tizimi injiq emas, kam xarajat, MKB va MOB mavjud, yo'lsiz sharoitda damlash tizimi bor. 10 tonnalik KMU kran-manipulyatori tufayli kran ijarasiga ehtiyoj qoldirmasdan avtonom ishlash imkonini beradi.",
            ru: "Гарантия 2 года или 75 000 км. Простая топливная система, МКБ, МОБ, подкачка в условиях бездорожья. КМУ 10 тонн позволяет работать автономно без аренды крана."
        },
        Yillik_saqlash_xarajatlari: {
            uz: "60 mln (materiallar + ish kuchi)",
            ru: "60 млн (материалы + работа)"
        },
        Kuchsiz_tomonlari: {
            uz: "Razdatka mexanizmi zaif, rul boshqaruvi resursi kichik, diagnostika uchun ASKAN qurilmasi kerak, TRK muammolari",
            ru: "Слабая раздатка, малый ресурс рулевого управления, требуется АСКАН для диагностики."
        },
        Takliflar: { uz: "X", ru: "X" },
        Soha_va_vazifasi: {
            uz: "Og'ir yuklarni yo'lsiz sharoitlarda, masalan, konlarda yoki olis qurilish maydonlarida tashish va mustaqil yuklash uchun mo'ljallangan.",
            ru: "Предназначен для перевозки и самостоятельной погрузки тяжелых грузов в условиях бездорожья, например, на шахтах или удаленных стройплощадках."
        }
    },
    {
        id: "4",
        pdfUrl: "/pdfs/тягач6x4.pdf",
        category: "I",
        name: "Седельный тягач 6460-001-63 6х4 400 л.с.",
        price: "882 560 000 сум",
        engine: "КАМАЗ 740.50-360",
        power: "360 л.с.",
        fuel: "Дизель",
        tank: "550 л",
        formula: "6х4",
        load: "62",
        img: "/images/4.jpg",
        Снаряженная_масса_тн: "9,425",
        Komplektatsiya: { uz: "Minimal komplektatsiya", ru: "Минимальная комплектация" },
        Rasmiy_servis_mavjudligi: { uz: "Xizmat ko'rsatish va ta'mirlash uchun 8 ta sertifikatlangan servis markazi", ru: "8 сертифицированных сервис-центров" },
        Ehtiyot_qismlar_mavjudligi: { uz: "Respublika bo'ylab dilerlarda jami 2 mlrd so'mlik ehtiyot qismlar zaxirasi mavjud", ru: "Запас запчастей на 2 млрд сум по республике" },
        Moliyalashtirish: { uz: "Boshlang'ich to'lov 25% (220 640 000), yillik stavka 20%, muddati 36 oy.", ru: "Первоначальный взнос 25%, ставка 20%, срок 36 месяцев." },
        Ekspluatatsiya_xususiyatlari: {
            uz: "2 yil yoki 75 ming km kafolat. Murakkab elektronikasiz oddiy mexanika, diagnostika va xizmat ko'rsatish arzon. Yoqilg'i tizimi injiq emas, kam xarajat, MOB mavjud.",
            ru: "Гарантия 2 года или 75 000 км. Простая механика без сложной электроники, дешевое обслуживание. Неприхотливая топливная система, наличие МОБ."
        },
        Yillik_saqlash_xarajatlari: { uz: "45 mln (materiallar + ish kuchi)", ru: "45 млн (материалы + работа)" },
        Kuchsiz_tomonlari: {
            uz: "Intarder yo'q, dvigatel tez-tez qiziydi, GBC qistirmalari muammosi, radiator chang bilan tez to'lib qoladi, tormoz kolodkalari tez eskiradi, gazli dvigatel kam resursli.",
            ru: "Нет интардера, перегрев двигателя, проблема с прокладками ГБЦ, забивание радиатора пылью, быстрый износ колодок, низкий ресурс газового двигателя."
        },
        Takliflar: { uz: "K-5 modeliga o'tish", ru: "Переход на модель К-5" },
        Soha_va_vazifasi: {
            uz: "Uch o'qli sedelli tyagach, qurilish materiallari va 45 tonnagacha og'ir texnikalarni tashish uchun mo'ljallangan",
            ru: "Трехосный тягач для перевозки стройматериалов и тяжелой техники до 45 тонн."
        }
    },
    {
        id: "5",
        category: "I",
        name: "Автосамосвал 10м3 ST-52 на базе шасси КАМАЗ 53605-1950-15 4х2",
        price: "696 640 000 сум",
        engine: "740.15-240",
        power: "240 л.с.",
        fuel: "Дизель",
        tank: "350 л. 35 л/100 км",
        formula: "4х2",
        load: "10",
        img: "/images/5.png",
        Снаряженная_масса_тн: "10,5",
        Komplektatsiya: { uz: "Minimal komplektatsiya", ru: "Минимальная комплектация" },
        Rasmiy_servis_mavjudligi: { uz: "Xizmat ko'rsatish va ta'mirlash uchun 8 ta sertifikatlangan servis markazi", ru: "8 сертифицированных сервис-центров" },
        Ehtiyot_qismlar_mavjudligi: { uz: "Respublika bo'ylab dilerlarda jami 2 mlrd so'mlik ehtiyot qismlar zaxirasi mavjud", ru: "Запас запчастей на 2 млрд сум" },
        Moliyalashtirish: { uz: "Boshlang'ich to'lov 25%, yillik stavka 20%, muddati 36 oy.", ru: "Взнос 25%, ставка 20%, срок 36 месяцев." },
        Ekspluatatsiya_xususiyatlari: {
            uz: "2 yil yoki 75 ming km kafolat. Murakkab elektronikasiz oddiy mexanika, xizmat ko'rsatish arzon. Yoqilg'i tizimi injiq emas, kuchaytirilgan orqa ko'prik 53329 va MOB mavjud.",
            ru: "Гарантия 2 года. Простая механика, дешевое обслуживание. Усиленный задний мост 53329 и наличие МОБ."
        },
        Yillik_saqlash_xarajatlari: { uz: "45 mln (materiallar + ish kuchi)", ru: "45 млн (материалы + работа)" },
        Kuchsiz_tomonlari: {
            uz: "Dvigatel tez-tez qiziydi, radiator chang bilan tez to'ladi, ASKAN diagnostika qurilmasi hamma servisda yo'q, elektr tizimi va elektronika bilan muammolar uchraydi",
            ru: "Перегрев двигателя, забивание радиатора, дефицит сканеров АСКАН, проблемы с электрикой."
        },
        Soha_va_vazifasi: {
            uz: "Kommunal va yo'l ta'mirlash xizmatlari uchun ikki o'qli ag'daruvchi yuk mashinasi, qurilish materiallarini tashishga mo'ljallangan",
            ru: "Двухосный самосвал для коммунальных и дорожных служб, перевозка стройматериалов."
        }
    },
    {
        id: "6",
        category: "I",
        name: "Автосамосвал 12м3 ST-52 на базе шасси КАМАЗ 53229-1963 6х4",
        price: "739 200 000 сум",
        engine: "740.31-240",
        power: "240 л.с.",
        fuel: "Дизель",
        tank: "350 л/100 км",
        formula: "6х4",
        load: "15",
        img: "/images/6.png",
        Снаряженная_масса_тн: "10",
        Komplektatsiya: { uz: "Minimal komplektatsiya", ru: "Минимальная комплектация" },
        Rasmiy_servis_mavjudligi: { uz: "Xizmat ko'rsatish va ta'mirlash uchun 8 ta sertifikatlangan servis markazi", ru: "8 сертифицированных сервис-центров" },
        Ehtiyot_qismlar_mavjudligi: { uz: "Respublika bo'ylab distribyutorlarda 2 mlrd so'mlik zaxira bor", ru: "Запас 2 млрд сум у дистрибьюторов" },
        Moliyalashtirish: { uz: "Boshlang'ich to'lov 25%, yillik stavka 20%, muddati 36 oy.", ru: "Взнос 25%, ставка 20%, срок 36 месяцев." },
        Ekspluatatsiya_xususiyatlari: {
            uz: "2 yil yoki 75 ming km kafolat. Oddiy mexanika, xizmat ko'rsatish arzon. Yoqilg'i tizimi injiq emas, kuchaytirilgan orqa ko'prik 53329 va MOB mavjud.",
            ru: "Гарантия 2 года. Простая механика, усиленный задний мост, наличие МОБ."
        },
        Yillik_saqlash_xarajatlari: { uz: "45 mln (materiallar + ish kuchi)", ru: "45 млн (материалы + работа)" },
        Kuchsiz_tomonlari: {
            uz: "Moy oqishi, GBC qistirmalari va salniklar muammosi, radiator tez to'lishi, rul boshqaruvida nosozliklar uchraydi",
            ru: "Утечки масла, проблемы с прокладками ГБЦ и сальниками, неисправности рулевого управления."
        },
        Takliflar: { uz: "X", ru: "X" },
        Soha_va_vazifasi: {
            uz: "Qurilish materiallarini (tuproq, shag'al, qum va h.k.) tashish va mexanizatsiyalashgan holda tushirish uchun mo'ljallangan.",
            ru: "Предназначен для перевозки и механизированной разгрузки строительных материалов (грунт, гравий, песок и т.д.)."
        }
    },
    {
        id: "7",
        category: "I",
        name: "Автосамосвал 18м3 ST-52 на базе шасси КАМАЗ 6520-1043 6х4",
        price: "845 600 000 сум",
        engine: "740.51-320",
        power: "320 л.с.",
        fuel: "Дизель",
        tank: "350 л",
        formula: "6х4",
        load: "20",
        img: "/images/7.png",
        Снаряженная_масса_тн: "13,1",
        Komplektatsiya: { uz: "Minimal komplektatsiya", ru: "Минимальная комплектация" },
        Rasmiy_servis_mavjudligi: { uz: "Xizmat ko'rsatish va ta'mirlash uchun 8 ta sertifikatlangan servis markazi", ru: "8 сертифицированных сервис-центров" },
        Ehtiyot_qismlar_mavjudligi: { uz: "6 ta distribyutor dilerda jami 2 mlrd so'mlik zaxira bor", ru: "Запас 2 млрд сум у 6 дистрибьюторов" },
        Moliyalashtirish: { uz: "Boshlang'ich to'lov 25%, yillik stavka 20%, muddati 36 oy.", ru: "Взнос 25%, ставка 20%, срок 36 месяцев." },
        Ekspluatatsiya_xususiyatlari: {
            uz: "2 yil yoki 75 ming km kafolat. ZF uzatmalar qutisi (MAN analogi), kuchaytirilgan ko'priklar, oddiy mexanika tufayli xarajatlar kam.",
            ru: "Гарантия 2 года. КПП ZF (аналог MAN), усиленные мосты, низкие эксплуатационные расходы."
        },
        Yillik_saqlash_xarajatlari: { uz: "50 mln (materiallar + ish kuchi)", ru: "50 млн (материалы + работа)" },
        Kuchsiz_tomonlari: {
            uz: "Dvigatel resursi chegarada, moy oqishi, GBC yonishi, ssenleniye mexanizmi murakkab, karyerlar uchun past klirens",
            ru: "Предельный ресурс двигателя, утечки масла, прогар ГБЦ, сложное сцепление, низкий клиренс для карьеров."
        },
        Soha_va_vazifasi: {
            uz: "Yirik hajmli qurilish va inert materiallarini tashish va ag'darish uchun mo'ljallangan.",
            ru: "Предназначен для перевозки и выгрузки крупногабаритных строительных и инертных материалов."
        }
    },
    {
        id: "8",
        category: "I",
        name: "Автосамосвал 14м3 на базе шасси КАМАЗ 65222-23012 6х6",
        price: "1 489 600 000 сум",
        engine: "740.735-400",
        power: "400 л.с.",
        fuel: "Дизель",
        tank: "350 л",
        formula: "6х6",
        load: "19",
        img: "/images/8.png",
        Снаряженная_масса_тн: "15",
        Komplektatsiya: { uz: "Minimal komplektatsiya", ru: "Минимальная комплектация" },
        Rasmiy_servis_mavjudligi: { uz: "Xizmat ko'rsatish va ta'mirlash uchun 8 ta sertifikatlangan servis markazi", ru: "8 сертифицированных сервис-центров" },
        Ehtiyot_qismlar_mavjudligi: { uz: "Markaziy ombor va dilerlarda 2 mlrd so'mlik ehtiyot qismlar mavjud", ru: "Запас запчастей на 2 млрд сум на складах" },
        Moliyalashtirish: { uz: "Boshlang'ich to'lov 25%, yillik stavka 20%, muddati 36 oy.", ru: "Взнос 25%, ставка 20%, срок 36 месяцев." },
        Ekspluatatsiya_xususiyatlari: {
            uz: "2 yil yoki 75 ming km kafolat. Yoqilg'i tizimi talabchan emas, 401 mm klirens, kuchaytirilgan ko'priklar, ZF uzatmalar qutisi, MKB va MOB mavjud.",
            ru: "Гарантия 2 года. Неприхотливая топливная система, клиренс 401 мм, усиленные мосты, КПП ZF, наличие МКБ и МОБ."
        },
        Yillik_saqlash_xarajatlari: { uz: "60 mln (materiallar + ish kuchi)", ru: "60 млн (материалы + работа)" },
        Kuchsiz_tomonlari: {
            uz: "Dvigatel resursi chegarada, moy oqishi, yoqilg'i sifatiga va chiqindi gaz neytrallash tizimiga yuqori talabchanlik",
            ru: "Предельный ресурс двигателя, утечки масла, высокая чувствительность к качеству топлива и системе нейтрализации."
        },
        Soha_va_vazifasi: {
            uz: "Og'ir yo'lsiz sharoitlarda qurilish materiallarini tashish, karyerlar va olis qurilish maydonlari uchun mo'ljallangan.",
            ru: "Перевозка стройматериалов в тяжелых условиях бездорожья, для карьеров и удаленных объектов."
        }
    },
    {
        id: "9",
        category: "I",
        name: "Военный бортовой тентовый автофургон на базе шасси КАМАЗ 43118-1053-10 6х6",
        price: "1 026 704 000 сум",
        engine: "740.30-260",
        power: "260 л.с.",
        fuel: "Дизель",
        tank: "x",
        formula: "6х6",
        load: "10",
        img: "/images/9.png",
        Снаряженная_масса_тн: "11,6",
        Komplektatsiya: { uz: "Minimal komplektatsiya", ru: "Минимальная комплектация" },
        Rasmiy_servis_mavjudligi: { uz: "Xizmat ko'rsatish va ta'mirlash uchun 8 ta sertifikatlangan servis markazi", ru: "8 сертифицированных сервис-центров" },
        Ehtiyot_qismlar_mavjudligi: { uz: "Respublika bo'ylab dilerlarda jami 2 mlrd so'mlik zaxira bor", ru: "Запас 2 млрд сум у дилеров" },
        Moliyalashtirish: { uz: "Boshlang'ich to'lov 25%, yillik stavka 20%, muddati 36 oy.", ru: "Взнос 25%, ставка 20%, срок 36 месяцев." },
        Ekspluatatsiya_xususiyatlari: {
            uz: "2 yil yoki 75 ming km kafolat. 380 mm klirens, yoqilg'i tizimi injiq emas, ta'mirlash hujjatlari keng tarqalgan, MKB va MOB mavjud.",
            ru: "Гарантия 2 года. Клиренс 380 мм, простая топливная система, доступность документации, наличие МКБ и МОБ."
        },
        Yillik_saqlash_xarajatlari: { uz: "45 mln (materiallar + ish kuchi)", ru: "45 млн (материалы + работа)" },
        Kuchsiz_tomonlari: {
            uz: "Moy oqishi, GBC muammolari, radiator tez to'lib qoladi, elektr tizimi va rul boshqaruvi nosozliklari ko'p uchraydi",
            ru: "Утечки масла, проблемы с ГБЦ, забивание радиатора, частые сбои электрики и рулевого управления."
        },
        Takliflar: {
            uz: "Transport vositasini konditsioner, avtonom isitgich va radiostantsiya bilan jihozlash",
            ru: "Оснащение автомобиля кондиционером, автономным отопителем и радиостанцией."
        },
        Soha_va_vazifasi: {
            uz: "Harbiy xizmatchilarni va turli yuklarni yomg'ir, qor va quyoshdan himoyalangan holda tashish uchun mo'ljallangan.",
            ru: "Предназначен для перевозки военнослужащих и различных грузов с защитой от дождя, снега и солнца."
        }
    },
    {
        id: "10",
        category: "I",
        name: "Военный бортовой тентовый автофургон на базе шасси КАМАЗ 4326-1053-15 4х4",
        price: "966 716 800 сум",
        engine: "740.65-240",
        power: "240 л.с.",
        fuel: "Дизель",
        tank: "x",
        formula: "4х4",
        load: "4",
        img: "/images/10.png",
        Снаряженная_mass_тн: "8,7",
        Komplektatsiya: { uz: "Minimal komplektatsiya", ru: "Минимальная комплектация" },
        Rasmiy_servis_mavjudligi: { uz: "Xizmat ko'rsatish va ta'mirlash uchun 8 ta sertifikatlangan servis markazi", ru: "8 сертифицированных сервис-центров" },
        Ehtiyot_qismlar_mavjudligi: { uz: "Markaziy omborda 2 mlrd so'mlik ehtiyot qismlar zaxirasi bor", ru: "Запас запчастей на 2 млрд сум на центральном складе" },
        Moliyalashtirish: { uz: "Boshlang'ich to'lov 25%, yillik stavka 20%, muddati 36 oy.", ru: "Взнос 25%, ставка 20%, срок 36 месяцев." },
        Ekspluatatsiya_xususiyatlari: {
            uz: "2 yil yoki 75 ming km kafolat. Oddiy mexanika, 380 mm klirens, yoqilg'i tizimi talabchan emas, kam xarajat, MOB va MKB mavjud.",
            ru: "Гарантия 2 года. Простая механика, клиренс 380 мм, неприхотливая топливная система, МКБ и МОБ."
        },
        Yillik_saqlash_xarajatlari: { uz: "40 mln (materiallar + ish kuchi)", ru: "40 млн (материалы + работа)" },
        Kuchsiz_tomonlari: {
            uz: "Moy oqishi, radiator tez to'lishi, elektr tizimi va rul boshqaruvi nosozliklari ko'p uchraydi",
            ru: "Утечки масла, забивание радиатора, частые неисправности электрики и рулевого управления."
        },
        Takliflar: {
            uz: "Transport vositasini konditsioner, avtonom isitgich va radiostantsiya bilan jihozlash",
            ru: "Оснащение автомобиля кондиционером, автономным отопителем и радиостанцией."
        },
        Soha_va_vazifasi: {
            uz: "Shaxsiy tarkibni va maxsus yuklarni qiyin yo'l sharoitlarida tashish uchun mo'ljallangan.",
            ru: "Предназначен для перевозки личного состава и специальных грузов в сложных дорожных условиях."
        }
    },
    {
        id: "11", category: "I", name: "Цельнометалический автофургон на базе шасси КАМАЗ 65117 -1029 6х4 объемом 46м3", price: "884 800 000 сум", engine: "740.30-260", power: "260 л.с.", fuel: "Дизель", tank: "x", formula: "6х4", load: "14", Объём: "46", img: "/images/11.jpg",
        Komplektatsiya: { uz: "Minimal komplektatsiya", ru: "Минимальная комплектация" },
        Rasmiy_servis_mavjudligi: {
            uz: "Xizmat ko'rsatish va ta'mirlash uchun 8 ta sertifikatlangan servis markazi, mobil servis tashkil qilish imkoniyati",
            ru: "8 сертифицированных сервисных центров, возможность организации мобильного сервиса"
        },
        Ehtiyot_qismlar_mavjudligi: {
            uz: "Respublika bo'ylab markaziy ombor va 6 ta distribyutor dilerda jami 2 mlrd so'mlik ehtiyot qismlar zaxirasi mavjud",
            ru: "Запас запчастей на 2 млрд сум на центральном складе и у 6 дистрибьюторов по всей республике"
        },
        Moliyalashtirish: {
            uz: "Boshlang'ich to'lov 25% (221 200 000), yillik stavka 20%, muddati 36 oy. Yakuniy summa: 1 109 023 141",
            ru: "Первоначальный взнос 25% (221 200 000), годовая ставка 20%, срок 36 месяцев. Итоговая сумма: 1 109 023 141"
        },
        Ekspluatatsiya_xususiyatlari: {
            uz: "2 yil yoki 75 ming km kafolat. KAMAZ-65117 murakkab elektronikasiz oddiy mexanikaga ega bo'lib, diagnostika va ta'mirlashda mablag' tejaydi. Yoqilg'i tizimi injiq emas, kam xarajat, MOB mavjud. Ehtiyot qismlarining oson topilishi va agregatlarning universalligi bilan ajralib turadi. Shassini mijoz talabiga ko'ra qo'shimcha jihozlash mumkin.",
            ru: "Гарантия 2 года или 75 000 км. КАМАЗ-65117 имеет простую механику без сложной электроники, экономит средства на диагностике. Неприхотливая топливная система, наличие МОБ. Универсальность агрегатов и доступность запчастей."
        },
        Yillik_saqlash_xarajatlari: { uz: "45 mln (materiallar + ish kuchi)", ru: "45 млн (материалы + работа)" },
        Kuchsiz_tomonlari: {
            uz: "Moy oqishi, GBC qistirmalari va salniklarning ishdan chiqishi, radiatorning tez chang bilan to'lishi, elektr tizimi va rul boshqaruvidagi nosozliklar.",
            ru: "Утечки масла, выход из строя прокладок ГБЦ и сальников, быстрое засорение радиатора, проблемы с электрикой и рулевым управлением."
        },
        Takliflar: { uz: "X", ru: "X" },
        Soha_va_vazifasi: {
            uz: "Yopiq metall korpusli furgon xalq iste'moli tovarlarini (mebel, kiyim, maishiy texnika, elektr buyumlari), qurilish materiallari va sanoat mahsulotlarini tashish uchun mo'ljallangan.",
            ru: "Фургон с цельнометаллическим корпусом предназначен для перевозки товаров народного потребления, мебели, одежды, техники и стройматериалов."
        },
        Снаряженная_масса_тн: "10",
        competitors: [
            {
                name: "SINOTRUK HOWO V5X (2 спал. мест.)",
                price: "561 925 000 сум",
                engine: "Weichai WP7.270E51",
                power: "270 л.с.",
                fuel: "Дизель (Евро-5)",
                tank: "300 л.",
                formula: "6x4",
                load: "15 тн",
                Объем_кузова: "54 м3",
                Komplektatsiya: { uz: "AC. ikki kishilik, ikkita yotoq joyi, pnevmatik podveska", ru: "АС. двухместная, два спальных места, пневмоподвеска" },
                Rasmiy_servis_mavjudligi: { uz: "12 ta sertifikatlangan servis markazi", ru: "12 сертифицированных сервисных центров" },
                Ehtiyot_qismlar_mavjudligi: { uz: "Analoglar mavjudligi", ru: "Наличие аналогов" },
                Moliyalashtirish: { uz: "Bank orqali kredit olish imkoniyati mavjud", ru: "Возможно получение кредита через банк" },
                Ekspluatatsiya_xususiyatlari: { uz: "1 yil yoki 30 ming km kafolat. Kafolatga uzatmalar qutisi, dvigatel va ko'priklar kiradi.", ru: "Гарантия 1 год или 30 000 км на КПП, двигатель и мосты." },
                Soha_va_vazifasi: { uz: "Xalq iste'moli tovarlari va sanoat mahsulotlarini tashish uchun mo'ljallangan furgon.", ru: "Фургон для перевозки товаров народного потребления и промтоваров." }
            }
        ]
    },
    {
        id: "12", category: "I", name: "Цельнометаллический автофургон на базе шасси КАМАЗ 43118-1098 6х6 объемом 33 м3", price: "907 200 000 сум", engine: "740.30-260", power: "260 л.с.", fuel: "Дизель", tank: "210+350 л.", formula: "6х6", load: "x", Объём: "33", img: "/images/11.jpg",
        Komplektatsiya: { uz: "Minimal komplektatsiya", ru: "Минимальная комплектация" },
        Rasmiy_servis_mavjudligi: { uz: "Xizmat ko'rsatish va ta'mirlash uchun 8 ta sertifikatlangan servis markazi, mobil servis imkoniyati", ru: "8 сертифицированных сервисных центров, мобильный сервис" },
        Ehtiyot_qismlar_mavjudligi: { uz: "Respublika bo'ylab dilerlarda jami 2 mlrd so'mlik ehtiyot qismlar zaxirasi mavjud", ru: "Запас запчастей на 2 млрд сум у дилеров по всей республике" },
        Moliyalashtirish: { uz: "Boshlang'ich to'lov 25% (226 800 000), yillik stavka 20%, muddati 36 oy. Yakuniy summa: 1 137 099 676", ru: "Взнос 25%, ставка 20%, срок 36 месяцев." },
        Ekspluatatsiya_xususiyatlari: {
            uz: "2 yil yoki 75 ming km kafolat. KAMAZ-43118 oddiy mexanikaga ega, 380 mm klirens, yoqilg'i tizimi injiq emas, MKB va MOB mavjud. Yuqori o'tuvchanlik darajasiga ega.",
            ru: "Гарантия 2 года. Простая механика, клиренс 380 мм, неприхотливая топливная система, МКБ и МОБ. Высокая проходимость."
        },
        Yillik_saqlash_xarajatlari: { uz: "45 mln (materiallar + ish kuchi)", ru: "45 млн (материалы + работа)" },
        Kuchsiz_tomonlari: {
            uz: "Moy oqishi, radiatorning tez chang bilan to'lishi, elektr va elektronika muammolari, rul boshqaruvidagi qiyinchiliklar.",
            ru: "Утечки масла, засорение радиатора, проблемы с электрикой и электроникой, сложности с рулевым управлением."
        },
        Takliflar: {
            uz: "Transport vositasini konditsioner, avtonom isitgich, radiostantsiya va magnitola bilan jihozlash.",
            ru: "Оснащение автомобиля кондиционером, автономным отопителем, радиостанцией и магнитолой."
        },
        Soha_va_vazifasi: {
            uz: "Yopiq metall korpusli furgon turli yuklarni, qurilish materiallari va sanoat mahsulotlarini og'ir yo'l sharoitlarida tashish uchun mo'ljallangan.",
            ru: "Цельнометаллический фургон для перевозки грузов и промтоваров в тяжелых дорожных условиях."
        }
    },
    {
        id: "13", category: "I", name: "Бортовая платформа на базе шасси КАМАЗ 43118-1098 6х6", price: "840 000 000 сум", engine: "740.30-260", power: "260 л.с.", fuel: "Дизель", tank: "210+350 л.", formula: "6х6", load: "x", Объём: "x", img: "/images/13.jpg",
        Komplektatsiya: { uz: "Minimal komplektatsiya", ru: "Минимальная комплектация" },
        Rasmiy_servis_mavjudligi: { uz: "8 ta sertifikatlangan servis markazi, mobil servis tashkil qilish imkoniyati", ru: "8 сертифицированных сервисных центров, возможность мобильного сервиса" },
        Ehtiyot_qismlar_mavjudligi: { uz: "Markaziy omborda va dilerlarda jami 2 mlrd so'mlik zaxira mavjud", ru: "Запас 2 млрд сум на центральном складе и у дилеров" },
        Moliyalashtirish: { uz: "Boshlang'ich to'lov 25%, yillik stavka 20%, muddati 36 oy.", ru: "Взнос 25%, годовая ставка 20%, срок 36 месяцев." },
        Ekspluatatsiya_xususiyatlari: {
            uz: "2 yil yoki 75 ming km kafolat. Oddiy mexanika, 380 mm klirens, yoqilg'i tizimi talabchan emas. Shassini qo'shimcha filtrlar bilan jihozlash imkoniyati bor.",
            ru: "Гарантия 2 года. Простая механика, клиренс 380 мм, неприхотливая топливная система."
        },
        Yillik_saqlash_xarajatlari: { uz: "45 mln (materiallar + ish kuchi)", ru: "45 млн (материалы + работа)" },
        Kuchsiz_tomonlari: { uz: "Moy oqishi, GBC muammolari, rul boshqaruvida tez-tez uchraydigan nosozliklar.", ru: "Утечки масла, проблемы с ГБЦ, частые поломки рулевого управления." },
        Takliflar: {
            uz: "Transport vositasini konditsioner, avtonom isitgich, radiostantsiya va magnitola bilan jihozlash.",
            ru: "Оснащение кондиционером, автономным отопителем и аудиосистемой."
        },
        Soha_va_vazifasi: {
            uz: "Qurilish materiallari (plitalar, bloklar, g'isht), taxtalar, metall buyumlar va sanoat mahsulotlarini tashish. O'ziga xosligi: olinadigan bortlar va ustunlar platformani yuklash va tushirish uchun qulay qiladi.",
            ru: "Перевозка стройматериалов (плиты, кирпич), досок, металла. Съемные борта удобны для погрузки/разгрузки."
        }
    },
    {
        id: "14", category: "I", name: "Бортовая платформа на базе шасси КАМАЗ 65117-1029 6х4", price: "817 600 000 сум", engine: "740.30-260", power: "260 л.с.", fuel: "Дизель", tank: "500 л.", formula: "6х4", load: "x", Объём: "x", img: "/images/14.jpg",
        Komplektatsiya: { uz: "Minimal komplektatsiya", ru: "Минимальная комплектация" },
        Rasmiy_servis_mavjudligi: { uz: "8 ta sertifikatlangan servis markazi, mobil servis tashkil qilish imkoniyati", ru: "8 сертифицированных сервисных центров" },
        Ehtiyot_qismlar_mavjudligi: { uz: "Respublika bo'ylab 6 ta distribyutorda jami 2 mlrd so'mlik zaxira bor", ru: "Запас 2 млрд сум у 6 дистрибьюторов по республике" },
        Moliyalashtirish: { uz: "Boshlang'ich to'lov 25%, yillik stavka 20%, muddati 36 oy.", ru: "Взнос 25%, годовая ставка 20%, срок 36 месяцев." },
        Ekspluatatsiya_xususiyatlari: {
            uz: "2 yil yoki 75 ming km kafolat. KAMAZ-65117 oddiy mexanikaga ega, kam xarajat, yoqilg'i tizimi injiq emas, MOB mavjud. Agregatlar universalligi ta'mirlashni osonlashtiradi.",
            ru: "Гарантия 2 года. Простая механика, низкие расходы, неприхотливая топливная система, наличие МОБ."
        },
        Yillik_saqlash_xarajatlari: { uz: "45 mln (materiallar + ish kuchi)", ru: "45 млн (материалы + работа)" },
        Kuchsiz_tomonlari: { uz: "Moy oqishi, radiator tez to'lishi, elektr tizimi va rul boshqaruvi muammolari.", ru: "Утечки масла, засорение радиатора, проблемы с электрикой и рулевым управлением." },
        Takliflar: { uz: "", ru: "" },
        Soha_va_vazifasi: {
            uz: "Turli yuklarni: qurilish materiallari, metall buyumlar va sanoat mahsulotlarini tashish uchun mo'ljallangan bortli platforma.",
            ru: "Бортовая платформа для перевозки различных грузов: стройматериалов, металлоконструкций и промтоваров."
        },
        Снаряженная_масса_тн: "10,6",
        competitors: [
            {
                name: "SHAANXI MAN, L3000",
                Komplektatsiya: { uz: "Maksimal komplektatsiya", ru: "Максимальная комплектация" },
                Rasmiy_servis_mavjudligi: { uz: "Barcha viloyatlarda servis markazlari mavjud", ru: "Сервисные центры во всех областях" },
                Soha_va_vazifasi: { uz: "Turli qurilish va sanoat yuklarini tashish uchun mo'ljallangan platforma.", ru: "Платформа для перевозки строительных и промышленных грузов." }
            }
        ]
    },
    {
        id: "15", category: "I", name: "Автогидроподъёмник 23м na базе шасси КАМАЗ 43253-1010-15 4х2", price: "1 097 600 000 сум", engine: "x", power: "240 л.с.", fuel: "Дизель", tank: "350 л.", formula: "4х2", load: "x", Объём: "x", img: "/images/15.jpg",
        Komplektatsiya: { uz: "Minimal komplektatsiya", ru: "Минимальная комплектация" },
        Rasmiy_servis_mavjudligi: { uz: "8 ta sertifikatlangan servis markazi", ru: "8 сертифицированных сервисных центров" },
        Ehtiyot_qismlar_mavjudligi: { uz: "Respublika bo'ylab dilerlarda jami 2 mlrd so'mlik zaxira mavjud", ru: "Запас запчастей на 2 млрд сум у дилеров" },
        Moliyalashtirish: { uz: "x", ru: "x" },
        Ekspluatatsiya_xususiyatlari: {
            uz: "2 yil yoki 75 ming km kafolat. KAMAZ-43253 oddiy mexanikaga ega, xarajatlar past. Shassini qo'shimcha yoqilg'i filtri bilan jihozlash mumkin.",
            ru: "Гарантия 2 года. Простая механика, низкие эксплуатационные расходы."
        },
        Yillik_saqlash_xarajatlari: { uz: "45 mln (materiallar + ish kuchi)", ru: "45 млн (материалы + работа)" },
        Kuchsiz_tomonlari: {
            uz: "Yuk ko'tarish qobiliyati past, orqa ko'prik zaif, yarim o'qlar (poluos) tez-tez sinadi, ssenleniye (PGU) muammolari.",
            ru: "Низкая грузоподъемность, слабый задний мост, частые поломки полуосей, проблемы со сцеплением (ПГУ)."
        },
        Takliflar: { uz: "", ru: "" },
        Soha_va_vazifasi: {
            uz: "Teleskopik gidravlik ko'targich (avtogidropodyomnik), ishchilarni balandlikda harakatlantirish, elektr liniyalari, binolar ta'miri va tashqi reklamaga xizmat ko'rsatish uchun mo'ljallangan.",
            ru: "Автогидроподъемник для высотных работ, ремонта зданий, обслуживания электролиний и наружной рекламы."
        }
    },
    {
        id: "16", category: "I", name: "Автогидроподъёмник 28м на базе шасси КАМАЗ 43253-1010-15 4х2", price: "1 254 400 000 сум", engine: "x", power: "240 л.с.", fuel: "Дизель", tank: "350 л.", formula: "4х2", load: "x", Объём: "x", img: "/images/15.jpg",
        Komplektatsiya: { uz: "Minimal komplektatsiya", ru: "Минимальная комплектация" },
        Rasmiy_servis_mavjudligi: { uz: "8 ta sertifikatlangan servis markazi, mobil servis imkoniyati", ru: "8 сертифицированных сервисных центров, мобильный сервис" },
        Ehtiyot_qismlar_mavjudligi: { uz: "Jami 2 mlrd so'mlik ehtiyot qismlar zaxirasi mavjud", ru: "Общий запас запчастей на 2 млрд сум" },
        Moliyalashtirish: { uz: "x", ru: "x" },
        Ekspluatatsiya_xususiyatlari: {
            uz: "2 yil yoki 75 ming km kafolat. Oddiy mexanik tizim, arzon texnik xizmat ko'rsatish va yoqilg'i tizimi injiq emasligi bilan ajralib turadi.",
            ru: "Гарантия 2 года. Простая механика, дешевое обслуживание, неприхотливая топливная система."
        },
        Yillik_saqlash_xarajatlari: { uz: "45 mln (materiallar + ish kuchi)", ru: "45 млн (материалы + работа)" },
        Kuchsiz_tomonlari: { uz: "Yuk ko'tarish qobiliyati past, orqa ko'prik nosozliklari, dvigatelda moy oqishi muammolari.", ru: "Низкая грузоподъемность, неисправности заднего моста, утечки масла в двигателе." },
        Takliflar: { uz: "", ru: "" },
        Soha_va_vazifasi: {
            uz: "Teleskopik gidravlik ko'targich, ishchilarni 28 metr balandlikkacha ko'tarish va harakatlantirish uchun mo'ljallangan.",
            ru: "Автогидроподъемник, предназначенный для подъема рабочих на высоту до 28 метров."
        }
    },
    {
        id: "17", category: "I", name: "Кран манипулятор 6,6 тн. на базе шасси КАМАЗ 65117-1029 6х4 19,5 м.", price: "1 332 800 000 сум", engine: "740.30-260", power: "260 л.с.", fuel: "Дизель", tank: "500 л.", formula: "6х4", load: "6,6", Объём: "x", img: "/images/16.png",
        Komplektatsiya: { uz: "Minimal komplektatsiya", ru: "Минимальная комплектация" },
        Rasmiy_servis_mavjudligi: { uz: "8 ta sertifikatlangan servis markazi, mobil servis imkoniyati", ru: "8 сертифицированных сервисных центров" },
        Ehtiyot_qismlar_mavjudligi: { uz: "Respublika bo'ylab dilerlarda jami 2 mlrd so'mlik zaxira bor", ru: "Запас 2 млрд сум у дилеров по республике" },
        Moliyalashtirish: { uz: "Boshlang‘ich to‘lov 25%, yillik stavka 20%, muddat 36 oy.", ru: "Взнос 25%, ставка 20%, срок 36 месяцев." },
        Ekspluatatsiya_xususiyatlari: {
            uz: "2 yil yoki 75 ming km kafolat. Oddiy mexanika, ta'mirlash xarajatlari past, yoqilg'i tizimi injiq emas. MOB mavjud.",
            ru: "Гарантия 2 года. Простая механика, низкие затраты на ремонт, наличие МОБ."
        },
        Yillik_saqlash_xarajatlari: { uz: "45 mln (materiallar + ish kuchi)", ru: "45 млн (материалы + работа)" },
        Kuchsiz_tomonlari: { uz: "Moy oqishi, radiator tez to'lishi, elektr tizimi va rul boshqaruvi nosozliklari.", ru: "Утечки масла, засорение радиатора, проблемы с электрикой и рулевым управлением." },
        Takliflar: { uz: "x", ru: "x" },
        Soha_va_vazifasi: {
            uz: "Qurilish materiallari va sanoat buyumlarini tashish, ortish va tushirish ishlari, takelaj ishlarida ko'maklashish uchun mo'ljallangan.",
            ru: "Предназначен для перевозки, погрузки и разгрузки стройматериалов и промышленных изделий."
        }
    },
    {
        id: "18", category: "I", name: "Кран манипулятор 6,6 тн. на базе шасси КАМАЗ 43118-1098-10 6х6 19,5 м.", price: "1 368 640 000 сум", engine: "740.30-260", power: "260 л.с.", fuel: "Дизель", tank: "210+350 л.", formula: "6х6", load: "6,6", Объём: "x", img: "/images/17.png",
        Komplektatsiya: { uz: "Minimal komplektatsiya", ru: "Минимальная комплектация" },
        Rasmiy_servis_mavjudligi: { uz: "8 ta sertifikatlangan servis markazi", ru: "8 сертифицированных сервисных центров" },
        Ehtiyot_qismlar_mavjudligi: { uz: "Markaziy omborda va dilerlarda jami 2 mlrd so'mlik zaxira bor", ru: "Запас 2 млрд сум на центральном складе и у дилеров" },
        Moliyalashtirish: { uz: "Boshlang'ich to'lov 25%, yillik stavka 20%, muddati 36 oy.", ru: "Взнос 25%, годовая ставка 20%, срок 36 месяцев." },
        Ekspluatatsiya_xususiyatlari: {
            uz: "2 yil yoki 75 ming km kafolat. KAMAZ-43118 yo'lsiz sharoitda yuqori o'tuvchanlikka ega (380 mm klirens), MKB va MOB mavjud. Dvigatel va mexanika oddiy, arzon xizmat ko'rsatiladi.",
            ru: "Гарантия 2 года. Высокая проходимость (клиренс 380 мм), МКБ и МОБ. Простая и дешевая в обслуживании механика."
        },
        Yillik_saqlash_xarajatlari: { uz: "45 mln (materiallar + ish kuchi)", ru: "45 млн (материалы + работа)" },
        Kuchsiz_tomonlari: { uz: "Moy oqishi, elektr tizimi va rul boshqaruvi nosozliklari tez-tez uchraydi.", ru: "Утечки масла, частые сбои в электрике и рулевом управлении." },
        Takliflar: {
            uz: "Transport vositasini konditsioner, avtonom isitgich, radiostantsiya va magnitola bilan jihozlash.",
            ru: "Оснащение кондиционером, автономным отопителем и радиостанцией."
        },
        Soha_va_vazifasi: {
            uz: "Qiyin yo'l sharoitlarida yuk ortish, tushirish va tashish ishlari uchun mo'ljallangan kran-manipulyator.",
            ru: "Кран-манипулятор для погрузочно-разгрузочных работ в сложных дорожных условиях."
        }
    },
    {
        id: "19", category: "I", name: "Автокран 25тн. вылет стрелы 28м на базе шасси КАМАЗ 43118-1048-10 6х6 (BOB LIFT)", price: "1 937 600 000 сум", engine: "740.30-260", power: "260 л.с.", fuel: "Дизель", tank: " 210+350 л", formula: "6х6", load: "25", Объём: "x", img: "/images/199.png",
        Komplektatsiya: { uz: "Minimal komplektatsiya", ru: "Минимальная комплектация" },
        Rasmiy_servis_mavjudligi: { uz: "8 ta sertifikatlangan servis markazi, mobil servis imkoniyati", ru: "8 сертифицированных сервисных центров" },
        Ehtiyot_qismlar_mavjudligi: { uz: "Respublika bo'ylab 6 ta distribyutorda jami 2 mlrd so'mlik zaxira bor", ru: "Запас 2 млрд сум у 6 дистрибьюторов по республике" },
        Moliyalashtirish: { uz: "Boshlang'ich to'lov 25%, yillik stavka 20%, muddati 36 oy", ru: "Взнос 25%, ставка 20%, срок 36 месяцев" },
        Ekspluatatsiya_xususiyatlari: {
            uz: "2 yil yoki 75 ming km kafolat. Oddiy mexanika, 380 mm klirens, MKB va MOB mavjud. Shassini mijoz talabiga ko'ra qo'shimcha jihozlash mumkin.",
            ru: "Гарантия 2 года. Простая механика, клиренс 380 мм, МКБ и МОБ. Возможность дооснащения."
        },
        Yillik_saqlash_xarajatlari: { uz: "45 mln (materiallar + ish kuchi)", ru: "45 млн (материалы + работа)" },
        Kuchsiz_tomonlari: { uz: "Moy oqishi, radiator tez to'lishi, elektr tizimi va rul boshqaruvi muammolari.", ru: "Утечки масла, забивание радиатора, проблемы с электрикой и рулевым управлением." },
        Takliflar: { uz: "x", ru: "x" },
        Soha_va_vazifasi: {
            uz: "Umumiy vazifadagi avtokranlar qurilish-montaj va yuk ortish ishlarida yuklarni ko'tarish va masofaga ko'chirish uchun xizmat qiladi.",
            ru: "Автокран общего назначения для строительно-монтажных и погрузочных работ."
        }
    },
    {
        id: "20", category: "I", name: "Автоцистерна водовоз для тех воды 8 м3 на базе шасси КАМАЗ 43253-1010-15 4х2", price: "698 880 000 сум", engine: "740.31-240", power: "176 л.с.", fuel: "Дизель", tank: "x", formula: "4х2", load: "x", Объём: "8", img: "/images/18.jpg",
        Komplektatsiya: { uz: "Minimal komplektatsiya", ru: "Минимальная комплектация" },
        Rasmiy_servis_mavjudligi: { uz: "8 ta sertifikatlangan servis markazi", ru: "8 сертифицированных сервисных центров" },
        Ehtiyot_qismlar_mavjudligi: { uz: "Respublika bo'ylab dilerlarda jami 2 mlrd so'mlik zaxira mavjud", ru: "Запас 2 млрд сум у дилеров по республике" },
        Moliyalashtirish: { uz: "x", ru: "x" },
        Ekspluatatsiya_xususiyatlari: {
            uz: "2 yil yoki 75 ming km kafolat. Oddiy mexanika, kam xarajatli texnik xizmat ko'rsatish va yoqilg'i tizimi injiq emasligi bilan ajralib turadi.",
            ru: "Гарантия 2 года. Простая механика, дешевое обслуживание, неприхотливая топливная система."
        },
        Yillik_saqlash_xarajatlari: { uz: "45 mln (materiallar + ish kuchi)", ru: "45 млн (материалы + работа)" },
        Kuchsiz_tomonlari: { uz: "Yuk ko'tarish qobiliyati past, orqa ko'prik zaif, ssenleniye va moy oqishi muammolari.", ru: "Низкая грузоподъемность, слабый задний мост, проблемы со сцеплением и утечки масла." },
        Takliflar: { uz: "x", ru: "x" },
        Soha_va_vazifasi: {
            uz: "Texnik suvni tashish va qisqa muddat saqlash uchun mo'ljallangan avtotsisterna. Shahar va viloyat yo'llari uchun mos.",
            ru: "Автоцистерна для перевозки и хранения технической воды. Подходит для городских и региональных дорог."
        },
        Снаряженная_масса_тн: "6,5",
        competitors: [
            {
                name: "Sinotruk Homan 4x2",
                Komplektatsiya: { uz: "Yotoq joyi, AC, pnevmatik podveska, USB/AUX", ru: "Спальное место, АС, пневмоподвеска, USB/AUX" },
                Rasmiy_servis_mavjudligi: { uz: "12 ta sertifikatlangan servis", ru: "12 сертифицированных сервисов" },
                Soha_va_vazifasi: { uz: "Texnik suv tashish uchun mo'ljallangan tsisterna.", ru: "Цистерна для перевозки технической воды." }
            }
        ]
    },///////////////////////////////////
    {
        id: "21", category: "I", name: "Автоцистерна водовоз для тех воды 10 м3 на базе шасси КАМАЗ 43118-1048-10 6х6", price: "1 030 400 000 сум", engine: "740.30-260", power: "260 л.с.", fuel: "Дизель", tank: "210+350 л.", formula: "6х6", load: "x", Объём: "10", img: "/images/19.jpg",
        Komplektatsiya: { uz: "Minimal komplektatsiya", ru: "Минимальная комплектация" },
        Rasmiy_servis_mavjudligi: { uz: "8 ta sertifikatlangan servis markazi, mobil servis imkoniyati", ru: "8 сертифицированных сервисных центров, возможность мобильного сервиса" },
        Ehtiyot_qismlar_mavjudligi: { uz: "Jami 2 mlrd so'mlik ehtiyot qismlar zaxirasi mavjud", ru: "Запас запчастей на общую сумму 2 млрд сум" },
        Moliyalashtirish: { uz: "Boshlang'ich to'lov 25% (226 800 000), yillik stavka 20%, muddati 36 oy. Yakuniy summa: 1 137 099 676", ru: "Взнос 25%, годовая ставка 20%, срок 36 месяцев." },
        Ekspluatatsiya_xususiyatlari: {
            uz: "2 yil yoki 75 ming km kafolat. KAMAZ-43118 oddiy mexanikaga ega, 380 mm klirens, yoqilg'i tizimi injiq emas. MOB va MKB mavjud.",
            ru: "Гарантия 2 года или 75 000 км. Простая механика, клиренс 380 мм, неприхотливая топливная система, наличие МОБ и МКБ."
        },
        Yillik_saqlash_xarajatlari: { uz: "45 mln (materiallar + ish kuchi)", ru: "45 млн (материалы + работа)" },
        Kuchsiz_tomonlari: {
            uz: "Moy oqishi, radiator tez to'lishi, elektr va rul boshqaruvida uchraydigun nosozliklar.",
            ru: "Утечки масла, засорение радиатора, неисправности в электрике и рулевом управлении."
        },
        Takliflar: {
            uz: "Transport vositasini konditsioner, avtonom isitgich, radiostantsiya va magnitola bilan jihozlash.",
            ru: "Оснащение кондиционером, автономным отопителем, радиостанцией и магнитолой."
        },
        Soha_va_vazifasi: {
            uz: "Og'ir yo'l sharoitlarida texnik suvni tashish va qisqa muddat saqlash uchun mo'ljallangan tsisterna.",
            ru: "Цистерна для перевозки и кратковременного хранения технической воды в тяжелых дорожных условиях."
        },
        Снаряженная_масса_тн: "8,75 (Шасси)",
        competitors: [
            {
                name: "KRANTAS АЦ-12 (Вариант 1)",
                Komplektatsiya: { uz: "Maksimal komplektatsiya", ru: "Максимальная комплектация" },
                Soha_va_vazifasi: { uz: "Texnik suv tashuvchi tsisterna.", ru: "Цистерна для перевозки технической воды." }
            }
        ]
    },
    {
        id: "22", category: "I", name: "Автоцистерна водовоз для тех воды 10 м3 на базе шасси КАМАЗ 53605-1950-15 4х2", price: "887 040 000 сум", engine: "740.15-240", power: "240 л.с.", fuel: "Дизель (Евро-2)", tank: "350 л.", formula: "4x2", load: "x", img: "/images/new.png",
        Komplektatsiya: { uz: "Minimal komplektatsiya", ru: "Минимальная комплектация" },
        Rasmiy_servis_mavjudligi: { uz: "8 ta sertifikatlangan servis markazi, mobil servis imkoniyati", ru: "8 сертифицированных сервисных центров" },
        Ehtiyot_qismlar_mavjudligi: { uz: "Markaziy omborda va dilerlarda jami 2 mlrd so'mlik zaxira mavjud", ru: "Запас 2 млрд сум на центральном складе и у дилеров" },
        Moliyalashtirish: { uz: "Boshlang'ich to'lov 25% (174 160 000), yillik stavka 20%, muddati 36 oy.", ru: "Взнос 25%, годовая ставка 20%, срок 36 месяцев." },
        Ekspluatatsiya_xususiyatlari: {
            uz: "2 yil yoki 75 ming km kafolat. Oddiy mexanika, diagnostikada tejash imkonini beradi. Yoqilg'i tizimi injiq emas, kuchaytirilgan orqa ko'prik va MOB mavjud.",
            ru: "Гарантия 2 года. Простая механика, экономия на диагностике. Усиленный задний мост и наличие МОБ."
        },
        Yillik_saqlash_xarajatlari: { uz: "40 mln (materiallar + ish kuchi)", ru: "40 млн (материалы + работа)" },
        Kuchsiz_tomonlari: {
            uz: "Moy oqishi, GBC nosozliklari, radiator tez to'lishi, elektr tizimi va rul boshqaruvi muammolari.",
            ru: "Утечки масла, неисправности ГБЦ, засорение радиатора, проблемы с электрикой."
        },
        Takliflar: { uz: "x", ru: "x" },
        Soha_va_vazifasi: {
            uz: "Texnik suvni tashish va saqlash uchun mo'ljallangan avtotsisterna.",
            ru: "Автоцистерна для перевозки и хранения технической воды."
        },
        competitors: [
            {
                name: "ISUZU FVR 34K",
                Komplektatsiya: { uz: "Konditsioner, oynalar isitish tizimi, markaziy qulf", ru: "Кондиционер, обогрев зеркал, центральный замок" },
                Soha_va_vazifasi: { uz: "Texnik suv tashishga mo'ljallangan tsisterna.", ru: "Цистерна для перевозки технической воды." }
            }
        ]
    },
    {
        id: "23", category: "I", name: "Автоцистерна водовоз для питьевой воды 8 м3 на базе шасси КАМАЗ 43253-1010-15 4х2", price: "1 075 200 000 сум", engine: "КамАЗ 740.31-240", power: "240 л.с.", fuel: "Дизель", tank: "x", formula: "6х6", load: "x", img: "/images/20.jpg",
        Komplektatsiya: { uz: "Minimal komplektatsiya", ru: "Минимальная комплектация" },
        Rasmiy_servis_mavjudligi: { uz: "8 ta sertifikatlangan servis markazi, mobil servis tashkil qilish imkoniyati", ru: "8 сертифицированных сервисных центров" },
        Ehtiyot_qismlar_mavjudligi: { uz: "Respublika bo'ylab markaziy ombor va 6 ta distribyutor dilerda jami 2 mlrd so'mlik ehtiyot qismlar zaxirasi mavjud", ru: "Запас запчастей на 2 млрд сум на центральном складе и у 6 дистрибьюторов" },
        Moliyalashtirish: { uz: "x", ru: "x" },
        Ekspluatatsiya_xususiyatlari: {
            uz: "2 yil yoki 75 ming km kafolat. KAMAZ-43253 murakkab elektronikasiz oddiy mexanikaga ega bo'lib, diagnostika va ta'mirlashda mablag' tejaydi. Yoqilg'i tizimi injiq emas, kam xarajat. Agregatlar universalligi va ehtiyot qismlarning mavjudligi bilan ajralib turadi. Shassini mijoz talabiga ko'ra qo'shimcha filtrlar bilan jihozlash mumkin.",
            ru: "Гарантия 2 года. Простая механика без сложной электроники. Универсальность агрегатов и доступность запчастей. Экономия на диагностике и ремонте."
        },
        Yillik_saqlash_xarajatlari: { uz: "45 mln (materiallar + ish kuchi)", ru: "45 млн (материалы + работа)" },
        Kuchsiz_tomonlari: {
            uz: "Yuk ko'tarish qobiliyati past, orqa ko'prik mexanizmi zaif, yarim o'qlar (poluos) nosozliklari, ssenleniye (PGU, GCS) muammolari va dvigatelda moy oqishi ko'p uchraydi.",
            ru: "Низкая грузоподъемность, слабый задний мост, поломки полуосей, проблемы со сцеплением и утечки масла."
        },
        Takliflar: { uz: "x", ru: "x" },
        Soha_va_vazifasi: {
            uz: "Oziq-ovqat suyuqliklarini tashish uchun avtotsisterna – ichimlik suvini tashish va qisqa muddat saqlash uchun xizmat qiladi, qattiq va tuproq yo'llarda harakatlanish uchun mo'ljallangan.",
            ru: "Автоцистерна для перевозки пищевых жидкостей — служит для доставки и кратковременного хранения питьевой воды."
        },
        competitors: [
            {
                name: "FAW Tiger VH VUM1110 6 m3",
                Komplektatsiya: { uz: "Yotoq joyi, AC, masofaviy qulf, elektr oynalar, LCD-monitor, multi-rul, spoiler", ru: "Спальное место, АС, электропакет, мультируль, LCD-монитор" },
                Soha_va_vazifasi: { uz: "Ichimlik suvini tashish va saqlash uchun mo'ljallangan avtotsisterna.", ru: "Автоцистерна для перевозки и хранения питьевой воды." }
            }
        ]
    },
    {
        id: "24", category: "I", name: "Автоцистерна водовоз 10м3 для питьевой воды на базе шасси КАМАЗ 43118-1048-10 6х6", price: "1 232 000 000 сум", engine: "740.30-260", power: "260 л.с.", fuel: "Дизель", tank: "210+350 л.", formula: "6х6", load: "x", img: "/images/21.jpg",
        Komplektatsiya: { uz: "Minimal komplektatsiya", ru: "Минимальная комплектация" },
        Rasmiy_servis_mavjudligi: { uz: "8 ta sertifikatlangan servis markazi, mobil servis imkoniyati", ru: "8 сертифицированных сервисных центров" },
        Ehtiyot_qismlar_mavjudligi: { uz: "Jami 2 mlrd so'mlik ehtiyot qismlar zaxirasi mavjud", ru: "Запас запчастей на 2 млрд сум" },
        Moliyalashtirish: { uz: "Boshlang'ich to'lov 25%, yillik stavka 20%, muddati 36 oy.", ru: "Взнос 25%, годовая ставка 20%, срок 36 месяцев." },
        Ekspluatatsiya_xususiyatlari: {
            uz: "2 yil yoki 75 ming km kafolat. KAMAZ-43118 yo'lsiz sharoitda yuqori o'tuvchanlikka ega, 380 mm klirens, MKB va MOB mavjud. Dvigatel va mexanika oddiy, arzon xizmat ko'rsatiladi.",
            ru: "Гарантия 2 года. Высокая проходимость, клиренс 380 мм, наличие МКБ и МОБ. Простое и дешевое обслуживание."
        },
        Yillik_saqlash_xarajatlari: { uz: "45 mln (materiallar + ish kuchi)", ru: "45 млн (материалы + работа)" },
        Kuchsiz_tomonlari: {
            uz: "Moy oqishi, GBC muammolari, radiator tez to'lishi, elektr tizimi va rul boshqaruvi nosozliklari.",
            ru: "Утечки масла, проблемы с ГБЦ, засорение радиатора, неисправности электрики и рулевого управления."
        },
        Takliflar: {
            uz: "Transport vositasini konditsioner, avtonom isitgich, radiostantsiya va magnitola bilan jihozlash.",
            ru: "Оснащение кондиционером, автономным отопителем и радиостанцией."
        },
        Soha_va_vazifasi: {
            uz: "Qiyin yo'l sharoitlarida ichimlik suvini tashish va qisqa muddat saqlash uchun mo'ljallangan.",
            ru: "Предназначен для перевозки и хранения питьевой воды в сложных дорожных условиях."
        }
    },
    {
        id: "25", category: "I", name: "Автоцистерна водовоз 10м3 для питьевой воды на базе шасси КАМАЗ 53605-1950-15 4х2", price: "1 052 800 000 сум", engine: "740.15-240", power: "240 л.с.", fuel: "Дизель", tank: "350 л.", formula: "4х2", load: "x", img: "/images/22.png",
        Komplektatsiya: { uz: "Minimal komplektatsiya", ru: "Минимальная комплектация" },
        Rasmiy_servis_mavjudligi: { uz: "8 ta sertifikatlangan servis markazi, mobil servis imkoniyati", ru: "8 сертифицированных сервисных центров" },
        Ehtiyot_qismlar_mavjudligi: { uz: "Dilerlarda jami 2 mlrd so'mlik ehtiyot qismlar mavjud", ru: "Запас запчастей на 2 млрд сум у дилеров" },
        Moliyalashtirish: { uz: "Boshlang'ich to'lov 25%, yillik stavka 20%, muddati 36 oy.", ru: "Взнос 25%, ставка 20%, срок 36 месяцев." },
        Ekspluatatsiya_xususiyatlari: {
            uz: "2 yil yoki 75 ming km kafolat. Oddiy mexanik tizim, yoqilg'i tizimi injiq emas, kam xarajat, kuchaytirilgan orqa ko'prik va MOB mavjud.",
            ru: "Гарантия 2 года. Простая механика, неприхотливая топливная система, усиленный задний мост и МОБ."
        },
        Yillik_saqlash_xarajatlari: { uz: "40 mln (materiallar + ish kuchi)", ru: "40 млн (материалы + работа)" },
        Kuchsiz_tomonlari: {
            uz: "Moy oqishi, radiator tez to'lishi, ASKAN diagnostika qurilmasi hamma servisda yo'q, elektr tizimi muammolari.",
            ru: "Утечки масла, засорение радиатора, дефицит сканеров АСКАН, проблемы с электрикой."
        },
        Takliflar: { uz: "", ru: "" },
        Soha_va_vazifasi: {
            uz: "Ichimlik suvini tashish va saqlash uchun mo'ljallangan tsisterna.",
            ru: "Цистерна для перевозки и хранения питьевой воды."
        }
    },
    {
        id: "26", category: "I", name: "Автотопливозаправщик 9м3 на базе шасси КАМАЗ 43253-1010 4х2", price: "974 400 000 сум", engine: "740.31-240", power: "240 л.с.", fuel: "Дизель", tank: "350 л.", formula: "4х2", load: "x", img: "/images/23.jpg",
        Komplektatsiya: { uz: "Minimal komplektatsiya", ru: "Минимальная комплектация" },
        Rasmiy_servis_mavjudligi: { uz: "8 ta sertifikatlangan servis markazi, mobil servis imkoniyati", ru: "8 сертифицированных сервисных центров" },
        Ehtiyot_qismlar_mavjudligi: { uz: "Jami 2 mlrd so'mlik zaxira mavjud", ru: "Общий запас запчастей на 2 млрд сум" },
        Moliyalashtirish: { uz: "x", ru: "x" },
        Ekspluatatsiya_xususiyatlari: {
            uz: "2 yil yoki 75 ming km kafolat. KAMAZ-43253 oddiy mexanikaga ega, kam xarajatli xizmat ko'rsatish va yoqilg'i tizimi injiq emasligi bilan ajralib turadi.",
            ru: "Гарантия 2 года. Простая механика, дешевое обслуживание, неприхотливая топливная система."
        },
        Yillik_saqlash_xarajatlari: { uz: "45 mln (materiallar + ish kuchi)", ru: "45 млн (материалы + работа)" },
        Kuchsiz_tomonlari: {
            uz: "Yuk ko'tarish qobiliyati past, orqa ko'prik zaif, yarim o'qlar nosozliklari, ssenleniye muammolari.",
            ru: "Низкая грузоподъемность, слабый задний мост, поломки полуосей, проблемы со сцеплением."
        },
        Takliflar: { uz: "x", ru: "x" },
        Soha_va_vazifasi: {
            uz: "Yoqilg'ini masofaga tashish, qisqa muddat saqlash va boshqa texnikalarni yoqilg'i bilan ta'minlash (o'lchov vositasi bilan) uchun mo'ljallangan.",
            ru: "Транспортировка и хранение топлива, а также заправка другой техники с помощью измерительного оборудования."
        },
        competitors: [
            {
                name: "Sinotruk Homan",
                Komplektatsiya: { uz: "Yotoq joyi, AC, pnevmatik podveska, USB/AUX", ru: "Спальное место, АС, пневмоподвеска, USB/AUX" },
                Soha_va_vazifasi: { uz: "Yoqilg'i tashish va quyish xizmati.", ru: "Служба перевозки и заправки топлива." }
            }
        ]
    },
    {
        id: "27", category: "I", name: "Автотопливозаправщик 9м3 на базе шасси КАМАЗ 43118-1048-10 6х6 3-х секционный", price: "1 086 400 000 сум", engine: "740.30-260", power: "260 л.с.", fuel: "Дизель", tank: "210+350 л.", formula: "6х6", load: "x", img: "/images/24.jpg",
        Komplektatsiya: { uz: "Minimal komplektatsiya", ru: "Минимальная комплектация" },
        Rasmiy_servis_mavjudligi: { uz: "8 ta sertifikatlangan servis markazi, mobil servis imkoniyati", ru: "8 сертифицированных сервисных центров" },
        Ehtiyot_qismlar_mavjudligi: { uz: "Respublika bo'ylab dilerlarda jami 2 mlrd so'mlik zaxira mavjud", ru: "Запас запчастей на 2 млрд сум у дилеров по республике" },
        Moliyalashtirish: { uz: "Boshlang'ich to'lov 25%, yillik stavka 20%, muddati 36 oy.", ru: "Взнос 25%, годовая ставка 20%, срок 36 месяцев." },
        Ekspluatatsiya_xususiyatlari: {
            uz: "2 yil yoki 75 ming km kafolat. 380 mm klirens, yoqilg'i tizimi injiq emas, MKB va MOB mavjud. Tsisterna 3 ta bo'linmadan iborat bo'lib, har xil turdagi yoqilg'ini bir vaqtda tashish imkonini beradi.",
            ru: "Гарантия 2 года. Клиренс 380 мм, неприхотливая топливная система. Трехсекционная цистерна позволяет перевозить разные виды топлива одновременно."
        },
        Yillik_saqlash_xarajatlari: { uz: "45 mln (materiallar + ish kuchi)", ru: "45 млн (материалы + работа)" },
        Kuchsiz_tomonlari: { uz: "Moy oqishi, radiator tez to'lishi, elektr va rul boshqaruvida nosozliklar.", ru: "Утечки масла, засорение радиатора, проблемы с электрикой и рулевым управлением." },
        Takliflar: {
            uz: "Transport vositasini konditsioner, avtonom isitgich va radiostantsiya bilan jihozlash.",
            ru: "Оснащение кондиционером, автономным отопителем и радиостанцией."
        },
        Soha_va_vazifasi: {
            uz: "Qiyin yo'l sharoitlarida yoqilg'i tashish va mexanizatsiyalashgan holda quyish uchun mo'ljallangan.",
            ru: "Предназначен для перевозки и механизированной заправки топлива в сложных дорожных условиях."
        }
    },
    {
        id: "28", category: "I", name: "Автотопливозаправщик 12м3 на базе шасси КАМАЗ 43118-1048-10 6х6", price: "1 120 000 000 сум", engine: "740.30-260", power: "260 л.с.", fuel: "Дизель", tank: "210+350 л.", formula: "6х6", load: "x", img: "/images/25.png",
        Komplektatsiya: { uz: "Minimal komplektatsiya", ru: "Минимальная комплектация" },
        Rasmiy_servis_mavjudligi: { uz: "8 ta sertifikatlangan servis markazi, mobil servis imkoniyati", ru: "8 сертифицированных сервисных центров" },
        Ehtiyot_qismlar_mavjudligi: { uz: "Respublika bo'ylab markaziy ombor va 6 ta distribyutor dilerda jami 2 mlrd so'mlik ehtiyot qismlar zaxirasi mavjud", ru: "Запас 2 млрд сум на складах по всей республике" },
        Moliyalashtirish: { uz: "Boshlang'ich to'lov 25% (226 800 000), yillik stavka 20% , muddati 36 oy.", ru: "Взнос 25%, ставка 20%, срок 36 месяцев." },
        Ekspluatatsiya_xususiyatlari: {
            uz: "2 yil yoki 75 ming km. KAMAZ-43118 murakkab elektronikasiz oddiy mexanikaga ega, xizmat ko'rsatish arzon. 380 mm klirens, MKB va MOB mavjud.",
            ru: "Гарантия 2 года. Простая механика, дешевое обслуживание, клиренс 380 мм, наличие МКБ и МОБ."
        },
        Yillik_saqlash_xarajatlari: { uz: "45 mln (materiallar + ish kuchi)", ru: "45 млн (материалы + работа)" },
        Kuchsiz_tomonlari: { uz: "Moy oqishi, GBC qistirmalari muammosi, elektr tizimi va rul boshqaruvi nosozliklari.", ru: "Утечки масла, проблемы с прокладками ГБЦ, неисправности электрики." },
        Takliflar: {
            uz: "Transport vositasini konditsioner, avtonom isitgich va radiostantsiya bilan jihozlash",
            ru: "Оснащение кондиционером, отопителем и радиостанцией."
        },
        Soha_va_vazifasi: {
            uz: "Yoqilg'ini tashish va boshqa texnikalarni joyida yoqilg'i bilan to'ldirish uchun mo'ljallangan.",
            ru: "Предназначен для транспортировки топлива и дозаправки техники на месте."
        }
    },
    {
        id: "29", category: "I", name: "Автотопливозаправщик 17м3 на базе шасси КАМАЗ 53229-1963-15 6х4", price: "1 052 800 000 сум", engine: "740.31-240", power: "240 л.с.", fuel: "Дизель", tank: "x", formula: "6х4", load: "x", img: "/images/26.jpg",
        Komplektatsiya: { uz: "Minimal komplektatsiya", ru: "Минимальная комплектация" },
        Rasmiy_servis_mavjudligi: { uz: "8 ta sertifikatlangan servis markazi, mobil servis imkoniyati", ru: "8 сертифицированных сервисных центров" },
        Ehtiyot_qismlar_mavjudligi: { uz: "Respublika bo'ylab markaziy ombor va dilerlarda 2 mlrd so'mlik zaxira bor", ru: "Запас запчастей на 2 млрд сум на центральном складе" },
        Moliyalashtirish: { uz: "x", ru: "x" },
        Ekspluatatsiya_xususiyatlari: {
            uz: "2 yil yoki 75 ming km kafolat. Kuchaytirilgan orqa ko'prik 53329 va MOB mavjud. Oddiy mexanika tufayli xarajatlar past.",
            ru: "Гарантия 2 года. Усиленный задний мост 53329 и МОБ. Низкие расходы благодаря простой механике."
        },
        Yillik_saqlash_xarajatlari: { uz: "45 mln (materiallar + ish kuchi)", ru: "45 млн (материалы + работа)" },
        Kuchsiz_tomonlari: { uz: "Moy oqishi, radiator tez to'lishi, elektr tizimi va rul boshqaruvi muammolari.", ru: "Утечки масла, засорение радиатора, проблемы с электрикой." },
        Takliflar: { uz: "x", ru: "x" },
        Soha_va_vazifasi: {
            uz: "Katta hajmli yoqilg'ini tashish va tarqatish uchun mo'ljallangan tsisterna.",
            ru: "Цистерна большой емкости для перевозки и раздачи топлива."
        }
    },
    {
        id: "30", category: "I", name: "Поливомоечная машина 8 м3 на базе шасси КАМАЗ 43253-1010-15 4х2", price: "1 008 000 000 сум", engine: "740.31-240", power: "240 л.с.", fuel: "Дизель", tank: "350 л.", formula: "4х2", load: "x", img: "/images/27.jpg",
        Komplektatsiya: { uz: "Minimal komplektatsiya", ru: "Минимальная комплектация" },
        Rasmiy_servis_mavjudligi: { uz: "8 ta sertifikatlangan servis markazi, mobil servis imkoniyati", ru: "8 сертифицированных сервисных центров" },
        Ehtiyot_qismlar_mavjudligi: { uz: "Markaziy omborda jami 2 mlrd so'mlik ehtiyot qismlar zaxirasi mavjud", ru: "Запас запчастей на 2 млрд сум на центральном складе" },
        Moliyalashtirish: { uz: "x", ru: "x" },
        Ekspluatatsiya_xususiyatlari: {
            uz: "2 yil yoki 75 ming km kafolat. KAMAZ-43253 murakkab elektronikasiz oddiy mexanikaga ega bo'lib, diagnostika va ta'mirlashda mablag' tejaydi.",
            ru: "Гарантия 2 года. Простая механика без сложной электроники, экономия на обслуживании."
        },
        Yillik_saqlash_xarajatlari: { uz: "45 mln (materiallar + ish kuchi)", ru: "45 млн (материалы + работа)" },
        Kuchsiz_tomonlari: { uz: "Yuk ko'tarish qobiliyati past, orqa ko'prik mexanizmi zaifligi, dvigatelda moy oqishi.", ru: "Низкая грузоподъемность, слабый задний мост, утечки масла в двигателе." },
        Takliflar: { uz: "x", ru: "x" },
        Soha_va_vazifasi: {
            uz: "Yo'l qoplamalarini yuvish, yo'l bo'yi hududlari va yashil maydonlarni sug'orish uchun mo'ljallangan.",
            ru: "Предназначен для мойки дорожных покрытий, полива придорожных территорий и зеленых насаждений."
        },
        competitors: [
            {
                name: "Поливомоечная машина Homan H3 8 м3",
                Komplektatsiya: { uz: "Yotoq joyi, AC, pnevmatik podveska, Bluetooth/USB", ru: "Спальное место, АС, пневмоподвеска, Bluetooth/USB" },
                Soha_va_vazifasi: { uz: "Sug'orish va yo'l yuvish ishlari uchun tsisterna.", ru: "Цистерна для полива и мойки дорог." }
            }
        ]
    },
    {
        id: "31", category: "I", name: "КДМ 8 м3 с пушкой с подметалкой на базе шасси КАМАЗ 43253-1010-15 4х2", price: "1 164 800 000 сум", engine: "740.31-240", power: "240 л.с.", fuel: "Дизель", tank: "350 л.", formula: "4х2", load: "x", Объём: "8", img: "/images/28.jpg",
        Komplektatsiya: { uz: "Minimal komplektatsiya", ru: "Минимальная комплектация" },
        Rasmiy_servis_mavjudligi: { uz: "8 ta sertifikatlangan servis markazi", ru: "8 сертифицированных сервисных центров" },
        Ehtiyot_qismlar_mavjudligi: { uz: "Respublika bo'ylab dilerlarda 2 mlrd so'mlik ehtiyot qismlar bor", ru: "Запас запчастей на 2 млрд сум у дилеров по всей республике" },
        Moliyalashtirish: { uz: "x", ru: "x" },
        Ekspluatatsiya_xususiyatlari: {
            uz: "2 yil yoki 75 ming km kafolat. Oddiy mexanika, kam xarajat, shassini qo'shimcha sug'orish va supurish uskunalari bilan jihozlash imkoniyati.",
            ru: "Гарантия 2 года или 75 000 км. Простая механика, низкие расходы, возможность дооснащения поливочным и подметальным оборудованием."
        },
        Yillik_saqlash_xarajatlari: { uz: "45 mln (materiallar + ish kuchi)", ru: "45 млн (материалы + работа)" },
        Kuchsiz_tomonlari: { uz: "Yuk ko'tarish qobiliyati past, orqa ko'prik zaifligi, elektr tizimi nosozliklari.", ru: "Низкая грузоподъемность, слабый задний мост, неисправности электросистемы." },
        Takliflar: { uz: "", ru: "" },
        Soha_va_vazifasi: {
            uz: "KDM (kombinatsiyalangan yo'l mashinasi) — kommunal xizmatlarning ko'p funksiyali texnikasi. Yozda yo'llarni yuvadi va sug'oradi, qishda esa qor tozalash va muzga qarshi reagentlar sepishda foydalaniladi.",
            ru: "КДМ (комбинированная дорожная машина) — многофункциональная техника коммунальных служб. Летом моет и поливает дороги, зимой очищает снег и распределяет реагенты."
        },
        competitors: [
            {
                name: "КДМ FAW Tiger VH VUM 3120 6 м3",
                Komplektatsiya: { uz: "Yotoq joyi, AC, LCD-monitor, multi-rul", ru: "Спальное место, АС, LCD-монитор, мультируль" },
                Rasmiy_servis_mavjudligi: { uz: "8 ta sertifikatlangan servis markazi", ru: "8 сертифицированных сервисных центров" },
                Soha_va_vazifasi: { uz: "Shahar yo'llarini saqlash uchun kombinatsiyalangan mashina.", ru: "Комбинированная дорожная машина для содержания городских дорог." }
            }
        ]
    },
    {
        id: "32", category: "I", name: "Поливомоечная machine 10 m3 с пушкой без подметалкой на базе шасси КАМАЗ 53605-1950-15 4х2", price: "1 064 000 000 сум", engine: "740.15-240", power: "240 л.с.", fuel: "Дизель", tank: "350 л.", formula: "4х2", load: "x", Объём: "10", img: "/images/29.jpg",
        Komplektatsiya: { uz: "Minimal komplektatsiya", ru: "Минимальная комплектация" },
        Rasmiy_servis_mavjudligi: { uz: "8 ta sertifikatlangan servis markazi, mobil servis imkoniyati", ru: "8 сертифицированных сервисных центров" },
        Ehtiyot_qismlar_mavjudligi: { uz: "Respublika bo'ylab dilerlarda jami 2 mlrd so'mlik zaxira mavjud", ru: "Запас запчастей на 2 млрд сум у дилеров по всей республике" },
        Moliyalashtirish: { uz: "Boshlang'ich to'lov 25%, yillik stavka 20%, muddati 36 oy.", ru: "Взнос 25%, годовая ставка 20%, срок 36 месяцев." },
        Ekspluatatsiya_xususiyatlari: {
            uz: "2 yil yoki 75 ming km kafolat. KAMAZ-53605 oddiy mexanika, kam xarajat, kuchaytirilgan orqa ko'prik va MOB mavjud.",
            ru: "Гарантия 2 года. Простая механика КАМАЗ-53605, низкие расходы, усиленный задний мост и МОБ."
        },
        Yillik_saqlash_xarajatlari: { uz: "40 mln (materiallar + ish kuchi)", ru: "40 млн (материалы + работа)" },
        Kuchsiz_tomonlari: { uz: "Moy oqishi, GBC muammolari, elektr tizimi va rul boshqaruvi nosozliklari.", ru: "Утечки масла, проблемы с ГБЦ, неисправности электросистемы и рулевого управления." },
        Takliflar: { uz: "x", ru: "x" },
        Soha_va_vazifasi: {
            uz: "Sug'orish va yo'l yuvish ishlari uchun mo'ljallangan maxsus tsisterna.",
            ru: "Специальная цистерна для полива и мойки дорог."
        },
        competitors: [
            {
                name: "Поливомоечная machine ISUZU FVR34K 8 м3",
                Komplektatsiya: { uz: "Konditsioner, oynalar isitish tizimi, markaziy qulf", ru: "Кондиционер, обогрев зеркал, центральный замок" },
                Soha_va_vazifasi: { uz: "Sifatli va ishonchli sug'orish texnikasi.", ru: "Качественная и надежная поливомоечная техника." }
            }
        ]
    },
    {
        id: "33", category: "I", name: "КДМ 10 м3 с пушкой с подметалкой на базе шасси КАМАЗ 53605-1950-15 4х2", price: "1 265 600 000 сум", engine: "740.15-240", power: "240 л.с.", fuel: "Дизель", tank: "350 л.", formula: "4х2", load: "x", Объём: "10", img: "/images/28.jpg",
        Komplektatsiya: { uz: "Minimal komplektatsiya", ru: "Минимальная комплектация" },
        Rasmiy_servis_mavjudligi: { uz: "8 ta sertifikatlangan servis markazi, mobil servis imkoniyati", ru: "8 сертифицированных сервисных центров" },
        Ehtiyot_qismlar_mavjudligi: { uz: "Respublika bo'ylab markaziy ombor va 6 ta distribyutor dilerda jami 2 mlrd so'mlik ehtiyot qismlar zaxirasi mavjud", ru: "Запас запчастей на 2 млрд сум на центральном складе и у 6 дистрибьюторов" },
        Moliyalashtirish: { uz: "Boshlang'ich to'lov 25% (174 160 000), yillik stavka 20%, muddati 36 oy.", ru: "Взнос 25%, годовая ставка 20%, срок 36 месяцев." },
        Ekspluatatsiya_xususiyatlari: {
            uz: "2 yil yoki 75 ming km kafolat. KAMAZ-53605 murakkab elektronikasiz oddiy mexanikaga ega bo'lib, diagnostika va ta'mirlashda mablag' tejaydi. 380 mm klirens, yoqilg'i tizimi injiq emas, kam xarajat, MOB va MKB mavjud. Shassini mijoz talabiga ko'ra qo'shimcha jihozlash (multitsiklon, qo'shimcha filtr) imkoniyati bor.",
            ru: "Гарантия 2 года. КАМАЗ-53605 с простой механикой, экономия на ремонте. Клиренс 380 мм, наличие МОБ и МКБ. Возможность установки доп. фильтров."
        },
        Yillik_saqlash_xarajatlari: { uz: "40 mln (materiallar + ish kuchi)", ru: "40 млн (материалы + работа)" },
        Kuchsiz_tomonlari: {
            uz: "Moy oqishi, GBC qistirmalari va salniklar muammosi, radiatorning tez chang bilan to'lishi, elektr tizimi va rul boshqaruvidagi nosozliklar.",
            ru: "Утечки масла, проблемы с прокладками ГБЦ, засорение радиатора, неисправности рулевого управления."
        },
        Takliflar: { uz: "", ru: "" },
        Soha_va_vazifasi: {
            uz: "KDM (kombinatsiyalangan yo'l mashinasi) — yil davomida yo'llarni saqlash uchun ishlatiladigan texnika. Yozda sug'orish va yuvish, qishda esa qor tozalash ishlarini bajaradi.",
            ru: "КДМ — всесезонная техника для содержания дорог. Летом — полив и мойка, зимой — снегоочистка."
        },
        competitors: [
            {
                name: "Комбинированная поливоуборочная подметательная machine ISUZU FVR 34K",
                Komplektatsiya: { uz: "Konditsioner, elektr oynalar, markaziy qulf", ru: "Кондиционер, электростеклоподъемники, центральный замок" },
                Soha_va_vazifasi: { uz: "Shaharni saqlash uchun yuqori samarali texnika.", ru: "Высокоэффективная техника для содержания города." }
            }
        ]
    },
    {
        id: "34", category: "I", name: "Вакуумная машина (ассенизатор) 6 м3 на базе шасси КАМАЗ 43253-1010-15 4х2", price: "884 800 000 сум", engine: "740.31-240", power: "240 л.с.", fuel: "Дизель", tank: "350 л.", formula: "4х2", load: "x", Объём: "6", img: "/images/30.jpg",
        Komplektatsiya: { uz: "Minimal komplektatsiya", ru: "Минимальная комплектация" },
        Rasmiy_servis_mavjudligi: { uz: "8 ta sertifikatlangan servis markazi, mobil servis imkoniyati", ru: "8 сертифицированных сервисных центров" },
        Ehtiyot_qismlar_mavjudligi: { uz: "Markaziy omborda jami 2 mlrd so'mlik ehtiyot qismlar zaxirasi mavjud", ru: "Запас запчастей на 2 млрд сум на центральном складе" },
        Moliyalashtirish: { uz: "x", ru: "x" },
        Ekspluatatsiya_xususiyatlari: {
            uz: "2 yil yoki 75 ming km kafolat. KAMAZ-43253 oddiy mexanikaga ega bo'lib, xizmat ko'rsatish arzon. Shassini qo'shimcha filtrlar bilan jihozlash mumkin.",
            ru: "Гарантия 2 года. Простая механика КАМАЗ-43253, дешевое обслуживание."
        },
        Yillik_saqlash_xarajatlari: { uz: "45 mln (materiallar + ish kuchi)", ru: "45 млн (материалы + работа)" },
        Kuchsiz_tomonlari: { uz: "Yuk ko'tarish qobiliyati past, orqa ko'prik zaifligi, ssenleniye va moy oqishi muammolari.", ru: "Низкая грузоподъемность, слабый задний мост, проблемы со сцеплением и утечки масла." },
        Takliflar: { uz: "x", ru: "x" },
        Soha_va_vazifasi: {
            uz: "Suyuq chiqindilarni vakuumli so'rib olish, tashish va to'kish uchun mo'ljallangan maxsus texnika.",
            ru: "Спецтехника для вакуумного забора, транспортировки и слива жидких бытовых отходов."
        },
        competitors: [
            {
                name: "Ассенизатор Homan H3",
                Komplektatsiya: { uz: "Yotoq joyi, AC, pnevmatik podveska, USB/AUX", ru: "Спальное место, АС, пневмоподвеска, USB/AUX" },
                Soha_va_vazifasi: { uz: "Chiqindilarni tashish uchun mo'ljallangan vakuumli mashina.", ru: "Вакуумная машина для транспортировки отходов." }
            }
        ]
    },
    {
        id: "35", category: "I", name: "Вахтовый автобус (24 мест) на базе шасси КАМАЗ 43118-1048-10 6х6", price: "1 243 200 000 сум", engine: "740.30-260", power: "260 л.с.", fuel: "Дизель", tank: "210+350 л.", formula: "6х6", load: "x", img: "/images/31.jpg",
        Komplektatsiya: { uz: "Minimal komplektatsiya", ru: "Минимальная комплектация" },
        Rasmiy_servis_mavjudligi: { uz: "8 ta sertifikatlangan servis markazi, mobil servis imkoniyati", ru: "8 сертифицированных сервисных центров" },
        Ehtiyot_qismlar_mavjudligi: { uz: "Jami 2 mlrd so'mlik ehtiyot qismlar zaxirasi mavjud", ru: "Запас запчастей на 2 млрд сум" },
        Moliyalashtirish: { uz: "Boshlang'ich to'lov 25%, yillik stavka 20%, muddati 36 oy.", ru: "Взнос 25%, годовая ставка 20%, срок 36 месяцев." },
        Ekspluatatsiya_xususiyatlari: {
            uz: "2 yil yoki 75 ming km kafolat. KAMAZ-43118 yuqori o'tuvchanlikka ega, 380 mm klirens, MKB va MOB mavjud. Ishchi brigadalarni olis hududlarga xavfsiz yetkazib berish imkonini beradi.",
            ru: "Гарантия 2 года. Высокая проходимость КАМАЗ-43118, клиренс 380 мм, МОБ и МКБ. Безопасная доставка рабочих бригад в отдаленные районы."
        },
        Yillik_saqlash_xarajatlari: { uz: "45 mln (materiallar + ish kuchi)", ru: "45 млн (материалы + работа)" },
        Kuchsiz_tomonlari: { uz: "Moy oqishi, radiator tez to'lishi, elektr va rul boshqaruvi muammolari.", ru: "Утечки масла, засорение радиатора, проблемы с электросистемой." },
        Takliflar: {
            uz: "Transport vositasini konditsioner, avtonom isitgich va radiostantsiya bilan jihozlash.",
            ru: "Оснащение кондиционером, автономным отопителем и радиостанцией."
        },
        Soha_va_vazifasi: {
            uz: "Ta'mirlash, qurilish va geologiya-qidiruv brigadalarini ob'ektlarga (konlar, qurilish maydonlari) yetkazish uchun mo'ljallangan yuqori o'tuvchan avtobus.",
            ru: "Вахтовый автобус повышенной проходимости для доставки рабочих бригад на удаленные объекты."
        }
    },
    {
        id: "36", category: "I", name: "Вахтовый автобус 21 мест на шасси КАМАЗ 4326-1053-15 4х4", price: "1 209 600 000 сум", engine: "740.31-240", power: "260 л.с.", fuel: "Дизель", tank: "x", formula: "4х4", load: "x", img: "/images/32.jpg",
        Komplektatsiya: { uz: "Minimal komplektatsiya", ru: "Минимальная комплектация" },
        Rasmiy_servis_mavjudligi: { uz: "Xizmat ko'rsatish va ta'mirlash uchun 8 ta sertifikatlangan servis markazi, mobil servis imkoniyati", ru: "8 сертифицированных сервисных центров" },
        Ehtiyot_qismlar_mavjudligi: { uz: "Respublika bo'ylab markaziy ombor va 6 ta distribyutor dilerda jami 2 mlrd so'mlik ehtiyot qismlar zaxirasi mavjud", ru: "Запас запчастей на 2 млрд сум на центральном складе и у 6 дистрибьюторов" },
        Moliyalashtirish: { uz: "x", ru: "x" },
        Ekspluatatsiya_xususiyatlari: {
            uz: "2 yil yoki 75 ming km kafolat. KAMAZ-4326 murakkab elektronikasiz oddiy mexanikaga ega bo'lib, diagnostika va ta'mirlashda mablag' tejaydi. 380 mm klirens, yoqilg'i tizimi injiq emas, kam xarajat, MOB va MKB mavjud.",
            ru: "Гарантия 2 года. Простая механика КАМАЗ-4326, клиренс 380 мм, наличие МОБ и МКБ. Экономия на диагностике."
        },
        Yillik_saqlash_xarajatlari: { uz: "40 mln (materiallar + ish kuchi)", ru: "40 млн (материалы + работа)" },
        Kuchsiz_tomonlari: { uz: "Moy oqishi, GBC qistirmalari va salniklar muammosi, radiatorning tez chang bilan to'lishi, elektr tizimi va rul boshqaruvidagi nosozliklar.", ru: "Утечки масла, проблемы с ГБЦ и сальниками, засорение радиатора." },
        Takliflar: { uz: "Transport vositasini konditsioner, avtonom isitgich, radiostantsiya va magnitola bilan jihozlash.", ru: "Оснащение кондиционером, автономным отопителем и аудиосистемой." },
        Soha_va_vazifasi: {
            uz: "Vaxta avtobuslari – odamlarni tashish uchun mo'ljallangan yuqori o'tuvchan transport vositasi. Ta'mirlash, qurilish va geologiya-qidiruv brigadalarini ob'ektlarga (konlar, qurilish maydonlari) yetkazish uchun xizmat qiladi.",
            ru: "Вахтовый автобус повышенной проходимости для доставки бригад в сложных дорожных условиях."
        },
        competitors: [
            {
                name: "КРАНТАС (18-22 чел)",
                Komplektatsiya: { uz: "Maksimal komplektatsiya", ru: "Максимальная комплектация" },
                Ekspluatatsiya_xususiyatlari: { uz: "Qulay pasaytirilgan kirish eshigi, furgon devorlari 5 mm issiqlik izolyatsiyasi bilan, vagon tipidagi korpus, so'zlashuv qurilmasi.", ru: "Удобный вход, теплоизоляция фургона 5 мм, кузов вагонного типа, переговорное устройство." },
                Soha_va_vazifasi: { uz: "Ishchi brigadalarni qiyin sharoitlarda tashish uchun mo'ljallangan avtobus.", ru: "Автобус для перевозки рабочих бригад в сложных условиях." }
            }
        ]
    },
    {
        id: "37", category: "I", name: "Мусороуборочная машина 11м3 на базе шасси КАМАЗ 43253-1010-15 4х2", price: "1 041 600 000 сум", engine: "740.31-240", power: "260 л.с.", fuel: "Дизель", tank: "350 л.", formula: "4х2", load: "5,5", img: "/images/33.png",
        Komplektatsiya: { uz: "Minimal komplektatsiya", ru: "Минимальная комплектация" },
        Rasmiy_servis_mavjudligi: { uz: "8 ta sertifikatlangan servis markazi, mobil servis imkoniyati", ru: "8 сертифицированных сервисных центров" },
        Ehtiyot_qismlar_mavjudligi: { uz: "Respublika bo'ylab dilerlarda jami 2 mlrd so'mlik ehtiyot qismlar zaxirasi mavjud", ru: "Запас запчастей на 2 млрд сум у дилеров по всей республике" },
        Moliyalashtirish: { uz: "Boshlang'ich to'lov 25% (174 160 000), yillik stavka 20%, muddati 36 oy.", ru: "Взнос 25%, ставка 20%, срок 36 месяцев." },
        Ekspluatatsiya_xususiyatlari: {
            uz: "2 yil yoki 75 ming km kafolat. Oddiy mexanika, kam xarajat, kuchaytirilgan orqa ko'prik va MOB mavjud. Shassini qo'shimcha filtrlar bilan jihozlash mumkin.",
            ru: "Гарантия 2 года. Простая механика, низкие расходы, усиленный задний мост и МОБ."
        },
        Yillik_saqlash_xarajatlari: { uz: "40 mln (materiallar + ish kuchi)", ru: "40 млн (материалы + работа)" },
        Kuchsiz_tomonlari: { uz: "Yuk ko'tarish qobiliyati past, orqa ko'prik zaifligi, ssenleniye va moy oqishi muammolari.", ru: "Низкая грузоподъемность, проблемы со сцеплением и утечки масла." },
        Takliflar: { uz: "", ru: "" },
        Soha_va_vazifasi: {
            uz: "Qattiq maishiy chiqindilarni mexanizatsiyalashgan holda yuklash, zichlash va tashish uchun mo'ljallangan maxsus texnika.",
            ru: "Спецтехника для механизированной погрузки, уплотнения и транспортировки твердых бытовых отходов."
        },
        Снаряженная_масса_тн: "10",
        competitors: [
            {
                name: "ISUZU FVR 34K (Мусоровоз)",
                Komplektatsiya: { uz: "Konditsioner, elektr oynalar, markaziy qulf", ru: "Кондиционер, электростеклоподъемники, центральный замок" },
                Soha_va_vazifasi: { uz: "Chiqindilarni tashish uchun yuqori samarali texnika.", ru: "Высокоэффективная техника для перевозки отходов." }
            }
        ]
    },
    {
        id: "38", category: "I", name: "Полуприцеп самосвальный 27 м3 ST-52", price: "442 400 000 сум", formula: "3-осная", load: "36", img: "/images/37.jpg",
        Komplektatsiya: { uz: "x", ru: "x" },
        Rasmiy_servis_mavjudligi: { uz: "8 ta sertifikatlangan servis markazi, mobil servis imkoniyati", ru: "8 сертифицированных сервисных центров" },
        Ehtiyot_qismlar_mavjudligi: { uz: "Samarqand shahridagi ehtiyot qismlar ombori", ru: "Склад запчастей в Самарканде" },
        Moliyalashtirish: { uz: "Boshlang'ich to'lov 25% (110 600 000), yillik stavka 20%, muddati 36 oy", ru: "Взнос 25%, ставка 20%, срок 36 месяцев" },
        Ekspluatatsiya_xususiyatlari: {
            uz: "1 yil kafolat (masofadan qat'i nazar). FOX o'qlari (SAF analogi), KNORR BREMSE tormoz tizimi, Hardox kuzov metalli, GidroTip gidrotizimi.",
            ru: "Гарантия 1 год. Оси FOX (аналог SAF), тормозная система KNORR BREMSE, кузов из металла Hardox, гидросистема GidroTip."
        },
        Yillik_saqlash_xarajatlari: { uz: "10 mln", ru: "10 млн" },
        Kuchsiz_tomonlari: { uz: "", ru: "" },
        Takliflar: { uz: "", ru: "" },
        Soha_va_vazifasi: {
            uz: "Uch o'qli samosval yarim tirkamasi, inert qurilish materiallarini (qum, shag'al, asfalt) tashish uchun mo'ljallangan.",
            ru: "Трехосный самосвальный полуприцеп для перевозки инертных материалов (песок, гравий, асфальт)."
        },
        Снаряженная_масса_тн: "8,9",
        competitors: [
            {
                name: "Полуприцеп самосвальный 28 м3 IZAZ",
                Rasmiy_servis_mavjudligi: { uz: "Yo'q", ru: "Нет" },
                Ekspluatatsiya_xususiyatlari: { uz: "Sotuvchidan 1 yil kafolat", ru: "Гарантия от продавца 1 год" },
                Soha_va_vazifasi: { uz: "Qurilish materiallarini tashish uchun yarim tirkama.", ru: "Полуприцеп для перевозки стройматериалов." }
            }
        ]
    },
    {
        id: "39", category: "I", name: "Полуприцеп шторно тентовый 16,5 метр 3 осный", price: "588 000 000 сум", formula: "3-осная", load: "31,1", img: "/images/38.jpg",
        Komplektatsiya: { uz: "x", ru: "x" },
        Rasmiy_servis_mavjudligi: { uz: "8 ta sertifikatlangan servis markazi", ru: "8 сертифицированных сервисных центров" },
        Ehtiyot_qismlar_mavjudligi: { uz: "Samarqand shahridagi ombor", ru: "Склад в Самарканде" },
        Moliyalashtirish: { uz: "Boshlang'ich to'lov 25%, yillik stavka 20%, muddati 36 oy", ru: "Взнос 25%, годовая ставка 20%, срок 36 месяцев" },
        Ekspluatatsiya_xususiyatlari: {
            uz: "1 yil kafolat. SAF o'qlari, KNORR BREMSE tormoz tizimi, SESAM va nevpa elementlari. Dasturlanadigan ko'tariluvchi o'q mavjud.",
            ru: "Гарантия 1 год. Оси SAF, тормозная система KNORR BREMSE, элементы SESAM. Наличие подъемной оси."
        },
        Yillik_saqlash_xarajatlari: { uz: "10 mln", ru: "10 млн" },
        Kuchsiz_tomonlari: { uz: "", ru: "" },
        Takliflar: { uz: "", ru: "" },
        Soha_va_vazifasi: {
            uz: "Uch o'qli tentli yarim tirkama, xalqaro va shaharlararo yuk tashish uchun mo'ljallangan.",
            ru: "Трехосный тентовый полуприцеп для международных и междугородних перевозок."
        },
        Снаряженная_масса_тн: "7,9",
    },
    {
        id: "40", category: "I", name: "Полуприцеп шторно тентовый 16,5 метр 4 осный", price: "672 000 000 сум", formula: "4-осная", load: "39,4", img: "/images/39.jpg",
        Komplektatsiya: { uz: "x", ru: "x" },
        Rasmiy_servis_mavjudligi: { uz: "8 ta sertifikatlangan servis markazi", ru: "8 сертифицированных сервисных центров" },
        Ehtiyot_qismlar_mavjudligi: { uz: "Samarqand shahridagi ombor", ru: "Склад в Самарканде" },
        Moliyalashtirish: { uz: "Boshlang'ich to'lov 25%, yillik stavka 20%, muddati 36 oy", ru: "Взнос 25%, ставка 20%, срок 36 месяцев" },
        Ekspluatatsiya_xususiyatlari: {
            uz: "1 yil kafolat. SAF o'qlari, KNORR BREMSE tizimi. To'rt o'qli tirkama yukni ko'proq ortish imkonini beradi.",
            ru: "Гарантия 1 год. Оси SAF, система KNORR BREMSE. Четырехосная конструкция позволяет перевозить больше груза."
        },
        Yillik_saqlash_xarajatlari: { uz: "10 mln", ru: "10 млн" },
        Kuchsiz_tomonlari: { uz: "", ru: "" },
        Takliflar: { uz: "", ru: "" },
        Soha_va_vazifasi: {
            uz: "To'rt o'qli tentli yarim tirkama, ikki o'qli tyagachlar bilan ishlash va xalqaro tashuvlar uchun.",
            ru: "Четырехосный тентовый полуприцеп для работы с двухосными тягачами и международных перевозок."
        },
        Снаряженная_масса_тн: "8,6",
    },
    {
        id: "41", category: "I", name: "Полуприцеп самосвальный 33 м3", price: "509 600 000 сум", formula: "3-осная", load: "36", img: "/images/40.png",
        Komplektatsiya: { uz: "x", ru: "x" },
        Rasmiy_servis_mavjudligi: { uz: "8 ta sertifikatlangan servis markazi", ru: "8 сертифицированных сервисных центров" },
        Ehtiyot_qismlar_mavjudligi: { uz: "Samarqand shahridagi ombor", ru: "Склад в городе Самарканд" },
        Moliyalashtirish: { uz: "Boshlang'ich to'lov 25%, yillik stavka 20%, muddati 36 oy", ru: "Первоначальный взнос 25%, годовая ставка 20%, срок 36 месяцев" },
        Ekspluatatsiya_xususiyatlari: {
            uz: "FOX o'qlari, KNORR BREMSE tormozlari. O'qlarga har 150 ming kmda xizmat ko'rsatiladi. Hardox metalli.",
            ru: "Оси FOX, тормоза KNORR BREMSE. Обслуживание осей каждые 150 тыс. км. Металл Hardox."
        },
        Yillik_saqlash_xarajatlari: { uz: "10 mln", ru: "10 млн" },
        Kuchsiz_tomonlari: { uz: "", ru: "" },
        Takliflar: { uz: "", ru: "" },
        Soha_va_vazifasi: {
            uz: "Katta hajmli inert qurilish materiallarini tashish uchun uch o'qli samosval yarim tirkamasi.",
            ru: "Трехосный самосвальный полуприцеп для перевозки крупногабаритных инертных строительных материалов."
        },
        Снаряженная_масса_тн: "8,6",
    },
    {
        id: "42", category: "I", name: "Прицеп самосвальный 16м3", price: "386 400 000 сум", formula: "3-осная", load: "40", img: "/images/41.png",
        Komplektatsiya: { uz: "x", ru: "x" },
        Rasmiy_servis_mavjudligi: { uz: "8 ta sertifikatlangan servis markazi", ru: "8 сертифицированных сервисных центров" },
        Ehtiyot_qismlar_mavjudligi: { uz: "Samarqand shahridagi ombor", ru: "Склад в городе Самарканд" },
        Moliyalashtirish: { uz: "Boshlang'ich to'lov 25%, yillik stavka 20%, muddati 36 oy", ru: "Первоначальный взнос 25%, годовая ставка 20%, срок 36 месяцев" },
        Ekspluatatsiya_xususiyatlari: {
            uz: "FOX o'qlari, KNORR BREMSE tormoz tizimi. O'qlarga har 150 ming kmda xizmat ko'rsatiladi. Hardox metall kuzov.",
            ru: "Оси FOX, тормозная система KNORR BREMSE. Обслуживание осей каждые 150 тыс. км. Кузов из металла Hardox."
        },
        Yillik_saqlash_xarajatlari: { uz: "10 mln", ru: "10 млн" },
        Kuchsiz_tomonlari: { uz: "", ru: "" },
        Takliflar: { uz: "", ru: "" },
        Soha_va_vazifasi: {
            uz: "Uch o'qli samosval tirkamasi, qurilish materiallarini tashish uchun bortli yuk mashinalari bilan ishlashga mo'ljallangan.",
            ru: "Трехосный самосвальный прицеп, предназначенный для работы с бортовыми грузовиками для перевозки стройматериалов."
        },
        Снаряженная_масса_тн: "7",
    },
    {
        id: "43", category: "I", name: "Полуприцеп самосвал зерновоз 35м3", price: "408 800 000 сум", formula: "3-осная", load: "30", img: "/images/pritsep.png",
        Komplektatsiya: { uz: "x", ru: "x" },
        Rasmiy_servis_mavjudligi: { uz: "8 ta sertifikatlangan servis markazi, mobil servis tashkil qilish imkoniyati", ru: "8 сертифицированных сервисных центров, возможность мобильного сервиса" },
        Ehtiyot_qismlar_mavjudligi: { uz: "Samarqand shahridagi ehtiyot qismlar ombori", ru: "Склад запчастей в городе Самарканд" },
        Moliyalashtirish: { uz: "Boshlang'ich to'lov 25% (102 200 000), yillik stavka 20%, muddati 36 oy", ru: "Первоначальный взнос 25% (102 200 000), ставка 20%, срок 36 месяцев" },
        Ekspluatatsiya_xususiyatlari: {
            uz: "FOX o'qlari (SAF analogi), KNORR BREMSE tormoz tizimi (tormoz tizimlari bo'yicha jahon yetakchisi), o'qlarga har 150 ming kmda xizmat ko'rsatiladi. Hardox metall kuzov, GidroTip gidrotizimi.",
            ru: "Оси FOX (аналог SAF), тормозная система KNORR BREMSE, обслуживание осей каждые 150 тыс. км. Металлический кузов Hardox, гидросистема GidroTip."
        },
        Yillik_saqlash_xarajatlari: { uz: "10 mln", ru: "10 млн" },
        Kuchsiz_tomonlari: { uz: "", ru: "" },
        Takliflar: { uz: "", ru: "" },
        Soha_va_vazifasi: {
            uz: "Uch o'qli samosval yarim tirkama-don tashuvchi, quyma qishloq xo'jaligi yuklarini (zichligi 0,46 dan 0,85 t/m3 gacha) tashish uchun mo'ljallangan.",
            ru: "Трехосный самосвальный полуприцеп-зерновоз для перевозки сыпучих сельхозгрузов (плотностью от 0,46 до 0,85 т/м3)."
        },
        Снаряженная_масса_тн: "8,3",
    },
    {
        id: "44", category: "I", name: "Полуприцеп тентовый 92м3", price: "456 960 000 сум", formula: "3-осная", load: "31,1", img: "/images/43.png",
        Komplektatsiya: { uz: "x", ru: "x" },
        Rasmiy_servis_mavjudligi: { uz: "8 ta sertifikatlangan servis markazi, mobil servis tashkil qilish imkoniyati", ru: "8 сертифицированных сервисных центров" },
        Ehtiyot_qismlar_mavjudligi: { uz: "Samarqand shahridagi ehtiyot qismlar ombori", ru: "Склад запчастей в Самарканде" },
        Moliyalashtirish: { uz: "Boshlang'ich to'lov 25%, yillik stavka 20%, muddati 36 oy", ru: "Взнос 25%, ставка 20%, срок 36 месяцев" },
        Ekspluatatsiya_xususiyatlari: {
            uz: "Masofadan qat'i nazar 1 yil kafolat. SAF o'qlari, KNORR BREMSE tormoz tizimi, SESAM va nevpa elementlari. Dasturlanadigan ko'tariluvchi o'q mavjud.",
            ru: "Гарантия 1 год. Оси SAF, тормозная система KNORR BREMSE, элементы SESAM и nevpa. Программируемая подъемная ось."
        },
        Yillik_saqlash_xarajatlari: { uz: "10 mln", ru: "10 млн" },
        Kuchsiz_tomonlari: { uz: "", ru: "" },
        Takliflar: { uz: "", ru: "" },
        Soha_va_vazifasi: {
            uz: "Uch o'qli tentli yarim tirkama, xalqaro va shaharlararo yuk tashish uchun mo'ljallangan.",
            ru: "Трехосный тентовый полуприцеп для международных и междугородних перевозок."
        },
        Снаряженная_масса_тн: "6,5",
        competitors: [
            {
                name: "Полуприцеп тентовый 92м3 SCHMITZ CargoBull",
                Rasmiy_servis_mavjudligi: { uz: "Sotuvchidan kafolat", ru: "Гарантия от продавца" },
                Soha_va_vazifasi: { uz: "Xalqaro va shaharlararo yuk tashish uchun tirkama.", ru: "Прицеп для международных и междугородних перевозок." }
            }
        ]
    },
    {
        id: "45", category: "I", name: "Полуприцеп контейнеровоз бортовой", price: "364 000 000 сум", formula: "3-осная", load: "30,5", img: "/images/44.png",
        Komplektatsiya: { uz: "x", ru: "x" },
        Rasmiy_servis_mavjudligi: { uz: "8 ta sertifikatlangan servis markazi, mobil servis imkoniyati", ru: "8 сертифицированных сервисных центров" },
        Ehtiyot_qismlar_mavjudligi: { uz: "Samarqand shahridagi ehtiyot qismlar ombori", ru: "Склад запчастей в Самарканде" },
        Moliyalashtirish: { uz: "Lizing: Boshlang'ich to'lov 25%, yillik stavka 20%, muddati 36 oy", ru: "Лизинг: взнос 25%, ставка 20%, срок 36 месяцев" },
        Ekspluatatsiya_xususiyatlari: {
            uz: "1 yil kafolat. SAF o'qlari, KNORR BREMSE tizimi, SESAM va nevpa elementlari, dasturlanadigan ko'tariluvchi o'q mavjud.",
            ru: "Гарантия 1 год. Оси SAF, система KNORR BREMSE, элементы SESAM, подъемная ось."
        },
        Yillik_saqlash_xarajatlari: { uz: "10 mln", ru: "10 млн" },
        Kuchsiz_tomonlari: { uz: "", ru: "" },
        Takliflar: { uz: "", ru: "" },
        Soha_va_vazifasi: {
            uz: "Uch o'qli bortli yarim tirkama-konteyner tashuvchi, standart konteynerlar, uzun o'lchamli yuklar va qurilish materiallarini tashish uchun mo'ljallangan.",
            ru: "Трехосный бортовой полуприцеп-контейнеровоз для перевозки контейнеров, длинномеров и стройматериалов."
        },
        Снаряженная_масса_тн: "7,6",
    },
    {
        id: "46", category: "I", name: "Полуприцеп контейнеровоз рама", price: "296 800 000 сум", formula: "3-осная", load: "30,5", img: "/images/45.png",
        Komplektatsiya: { uz: "x", ru: "x" },
        Rasmiy_servis_mavjudligi: { uz: "8 ta sertifikatlangan servis markazi", ru: "8 сертифицированных сервисных центров" },
        Ehtiyot_qismlar_mavjudligi: { uz: "Samarqand shahridagi ombor", ru: "Склад в Самарканде" },
        Moliyalashtirish: { uz: "Lizing: Boshlang'ich to'lov 25%, yillik stavka 20%, muddati 36 oy", ru: "Лизинг: взнос 25%, ставка 20%, срок 36 месяцев" },
        Ekspluatatsiya_xususiyatlari: {
            uz: "1 yil kafolat. SAF o'qlari, KNORR BREMSE tormoz tizimi, ko'tariluvchi o'q mavjud.",
            ru: "Гарантия 1 год. Оси SAF, тормозная система KNORR BREMSE, наличие подъемной оси."
        },
        Yillik_saqlash_xarajatlari: { uz: "10 mln", ru: "10 млн" },
        Kuchsiz_tomonlari: { uz: "", ru: "" },
        Takliflar: { uz: "", ru: "" },
        Soha_va_vazifasi: {
            uz: "Ikki o'qli sedelli tyagachlar bilan ishlash va standart konteynerlarni tashish uchun mo'ljallangan ramali yarim tirkama.",
            ru: "Рамный полуприцеп для перевозки стандартных контейнеров с двухосными тягачами."
        },
        Снаряженная_масса_тн: "5,3",
    },
    {
        id: "47", category: "I", name: "Полуприцеп контейнеровоз низкорамный модель HIGH CUBE 3 осный", price: "352 800 000 сум", formula: "3-осная", load: "34", img: "/images/46.png",
        Komplektatsiya: { uz: "x", ru: "x" },
        Rasmiy_servis_mavjudligi: { uz: "8 ta sertifikatlangan servis markazi", ru: "8 сертифицированных сервисных центров" },
        Ehtiyot_qismlar_mavjudligi: { uz: "Samarqand shahridagi ombor", ru: "Склад в Самарканде" },
        Moliyalashtirish: { uz: "Lizing: Boshlang'ich to'lov 25%, yillik stavka 20%, muddati 36 oy", ru: "Лизинг: взнос 25%, ставка 20%, срок 36 месяцев" },
        Ekspluatatsiya_xususiyatlari: {
            uz: "1 yil kafolat. SAF o'qlari, KNORR BREMSE tormoz tizimi, ko'tariluvchi o'q mavjud. High-Cube konteynerlari uchun mos.",
            ru: "Гарантия 1 год. Оси SAF, тормозная система KNORR BREMSE, подъемная ось. Подходит для контейнеров High-Cube."
        },
        Yillik_saqlash_xarajatlari: { uz: "10 mln", ru: "10 млн" },
        Kuchsiz_tomonlari: { uz: "", ru: "" },
        Takliflar: { uz: "", ru: "" },
        Soha_va_vazifasi: {
            uz: "Turli standart va yuqori hajmli (High-Cube) konteynerlarni tashish uchun mo'ljallangan past ramali yarim tirkama.",
            ru: "Низкорамный полуприцеп для перевозки стандартных и высокообъемных (High-Cube) контейнеров."
        },
        Снаряженная_масса_тн: "5,5",
    },
    {
        id: "48", category: "I", name: "Полуприцеп контейнеровоз низкорамный модель HIGH CUBE 4 осный", price: "425 600 000 сум", formula: "4-осная", load: "33,5", img: "/images/47.png",
        Komplektatsiya: { uz: "x", ru: "x" },
        Rasmiy_servis_mavjudligi: { uz: "8 ta sertifikatlangan servis markazi", ru: "8 сертифицированных сервисных центров" },
        Ehtiyot_qismlar_mavjudligi: { uz: "Samarqand shahridagi ombor", ru: "Склад в Самарканде" },
        Moliyalashtirish: { uz: "Lizing: Boshlang'ich to'lov 25%, yillik stavka 20%, muddati 36 oy", ru: "Лизинг: взнос 25%, ставка 20%, срок 36 месяцев" },
        Ekspluatatsiya_xususiyatlari: {
            uz: "1 yil kafolat. SAF o'qlari, KNORR BREMSE tizimi. To'rt o'qli tirkama yuk taqsimotini yaxshilaydi.",
            ru: "Гарантия 1 год. Оси SAF, система KNORR BREMSE. Четырехосная конструкция улучшает распределение нагрузки."
        },
        Yillik_saqlash_xarajatlari: { uz: "10 mln", ru: "10 млн" },
        Kuchsiz_tomonlari: { uz: "", ru: "" },
        Takliflar: { uz: "", ru: "" },
        Soha_va_vazifasi: {
            uz: "To'rt o'qli past ramali yarim tirkama-konteyner tashuvchi, og'ir va yuqori hajmli konteynerlar uchun.",
            ru: "Четырехосный низкорамный полуприцеп-контейнеровоз для тяжелых и высокообъемных контейнеров."
        },
        Снаряженная_масса_тн: "6",
    },
    {
        id: "49", category: "I", name: "Тракторный прицеп 5 тн", price: "118 720 000 сум", formula: "2-осная", load: "5", img: "/images/48.png",
        Komplektatsiya: { uz: "x", ru: "x" },
        Rasmiy_servis_mavjudligi: { uz: "8 ta sertifikatlangan servis markazi", ru: "8 сертифицированных сервисных центров" },
        Ehtiyot_qismlar_mavjudligi: { uz: "Samarqand shahridagi ehtiyot qismlar ombori", ru: "Склад запчастей в Самарканде" },
        Moliyalashtirish: { uz: "Lizing: Boshlang'ich to'lov 25%, yillik stavka 20%, muddati 36 oy", ru: "Лизинг: взнос 25%, ставка 20%, срок 36 месяцев" },
        Ekspluatatsiya_xususiyatlari: { uz: "Masofadan qat'i nazar 1 yil kafolat.", ru: "Гарантия 1 год без ограничения пробега." },
        Yillik_saqlash_xarajatlari: { uz: "x", ru: "x" },
        Kuchsiz_tomonlari: { uz: "", ru: "" },
        Takliflar: { uz: "", ru: "" },
        Soha_va_vazifasi: {
            uz: "Ikki o'qli traktor tirkamasi, umumiy foydalanishdagi yo'llarda va dala sharoitida traktor bilan ishlash uchun mo'ljallangan (tezlik 40 km/soatgacha).",
            ru: "Двухосный тракторный прицеп для работы с трактором на дорогах общего пользования и в поле (скорость до 40 км/ч)."
        },
        Снаряженная_масса_тн: "2,2",
    },
    {
        id: "50", category: "5", name: "Тракторный прицеп 8 тн", price: "127 680 000 сум", formula: "2-osli", load: "8", img: "/images/49.png",
        Komplektatsiya: { uz: "x", ru: "x" },
        Rasmiy_servis_mavjudligi: { uz: "8 ta sertifikatlangan servis markazi", ru: "8 сертифицированных сервисных центров" },
        Ehtiyot_qismlar_mavjudligi: { uz: "Samarqand shahridagi ehtiyot qismlar ombori", ru: "Склад запчастей в Самарканде" },
        Moliyalashtirish: { uz: "Lizing: Boshlang'ich to'lov 25% (31 920 000), yillik stavka 20%, muddati 36 oy", ru: "Лизинг: взнос 25%, ставка 20%, срок 36 месяцев" },
        Ekspluatatsiya_xususiyatlari: { uz: "Masofadan qat'i nazar 1 yil kafolat. Mustahkam shassi va gidravlik ag'darish tizimi.", ru: "Гарантия 1 год. Прочное шасси и гидравлическая система опрокидывания." },
        Yillik_saqlash_xarajatlari: { uz: "x", ru: "x" },
        Kuchsiz_tomonlari: { uz: "", ru: "" },
        Takliflar: { uz: "", ru: "" },
        Soha_va_vazifasi: {
            uz: "2 o'qli traktor tirkamasi, qishloq xo'jaligi yuklarini dala sharoitida va yo'llarda tashish uchun (tezlik 40 km/soatgacha).",
            ru: "Двухосный тракторный прицеп для перевозки сельхозгрузов по дорогам и в поле (скорость до 40 км/ч)."
        },
        Снаряженная_масса_тн: "2,8",
    },
    {
        id: "51", category: "6", name: "JAC W 5082х200 шасси однорядный", price: "244 160 000 сум", engine: "HFC4GA3-3D", power: "147 л.с.", fuel: "Бензин", formula: "4x2", load: "2080", img: "/images/50.png",
        Komplektatsiya: {
            uz: "AC, LCD-monitor, 4 tomonlama kameralar, multi-rul, shovqin izolyatsiyasi",
            ru: "АС, LCD-монитор, камеры 360°, мультируль, шумоизоляция"
        },
        Rasmiy_servis_mavjudligi: {
            uz: "5 ta sertifikatlangan servis markazi, mobil servis imkoniyati",
            ru: "5 сертифицированных сервисных центров, мобильный сервис"
        },
        Ehtiyot_qismlar_mavjudligi: {
            uz: "Samarqand shahridagi ehtiyot qismlar ombori",
            ru: "Склад запчастей в городе Самарканд"
        },
        Moliyalashtirish: { uz: "x", ru: "x" },
        Ekspluatatsiya_xususiyatlari: {
            uz: "1 yil barcha agregatlarga, 2 yil kuch agregatlariga, 3 yil bo'yoq va kuzovga kafolat. Cummins analogi bo'lgan dvigatel, diskli tormozlar, haydovchi qulayligi uchun kabina amortizatorlari mavjud.",
            ru: "Гарантия 1 год на все узлы, 2 года на силовые агрегаты, 3 года на ЛКП и кузов. Двигатель — аналог Cummins, дисковые тормоза, амортизаторы кабины для комфорта водителя."
        },
        Yillik_saqlash_xarajatlari: { uz: "18 mln (materiallar + ish kuchi)", ru: "18 млн (материалы + работа)" },
        Kuchsiz_tomonlari: {
            uz: "Uzatmalar qutisidan moy oqishi, orqa ko'prik nosozliklari, konditsioner ishlashidagi kamchiliklar. Akkumulyator ochiq joyda joylashgan (o'g'irlash oson).",
            ru: "Утечки масла из КПП, неисправности заднего моста, огрехи в работе кондиционера. Аккумулятор расположен открыто (легко украсть)."
        },
        Takliflar: { uz: "", ru: "" },
        Soha_va_vazifasi: {
            uz: "Turli maxsus ustqurmalar (furgon, refrijerator, evakuator) o'rnatish uchun mo'ljallangan universal shassi. Shahar ichida harakatlanish uchun juda qulay.",
            ru: "Универсальное шасси для установки спецнадстроек (фургон, рефрижератор, эвакуатор). Удобен для городских условий."
        },
        Снаряженная_масса_тн: "1420",
    },
    {
        id: "52", category: "6", name: "JAC W 5082х200 бортовой однорядный бензиновый", price: "248 640 000 сум", img: "/images/51.png",
        Komplektatsiya: {
            uz: "ABS, A/C, GUR, MP3+USB magnitola, elektr oynalar, markaziy qulf",
            ru: "ABS, A/C, ГУР, магнитола MP3+USB, электростеклоподъемники, центральный замок"
        },
        Rasmiy_servis_mavjudligi: { uz: "5 ta sertifikatlangan servis markazi", ru: "5 сертифицированных сервисных центров" },
        Ehtiyot_qismlar_mavjudligi: { uz: "Samarqand shahridagi ombor", ru: "Склад в Самарканде" },
        Moliyalashtirish: { uz: "x", ru: "x" },
        Ekspluatatsiya_xususiyatlari: {
            uz: "1 yil umumiy kafolat, 2 yil kuch agregatlariga kafolat. Diskli tormozlar, manevr qobiliyati yuqori (5 metrli burilish radiusi).",
            ru: "1 год общей гарантии, 2 года на силовые агрегаты. Дисковые тормоза, высокая маневренность (радиус поворота 5 м)."
        },
        Yillik_saqlash_xarajatlari: { uz: "18 mln (materiallar + ish kuchi)", ru: "18 млн (материалы + работа)" },
        Kuchsiz_tomonlari: { uz: "Moy oqishi, orqa ko'prik zaifligi, akkumulyator xavfsizligi pastligi.", ru: "Утечки масла, слабый задний мост, низкая защищенность аккумулятора." },
        Takliflar: { uz: "", ru: "" },
        Soha_va_vazifasi: {
            uz: "Ochiq bortli mini-yuk mashinasi, turli yuklarni shahar ichida va yaqin masofalarga tashish uchun mo'ljallangan.",
            ru: "Бортовой мини-грузовик для перевозки различных грузов по городу и на короткие расстояния."
        },
        Снаряженная_масса_тн: "1645",
        competitors: [
            {
                name: "Changan Porter",
                Komplektatsiya: { uz: "EBS, ABS, A/C, elektr oynalar, parktronik", ru: "EBS, ABS, A/C, электростеклоподъемники, парктроники" },
                Soha_va_vazifasi: { uz: "Kichik yuk tashish xizmatlari uchun.", ru: "Для услуг по перевозке мелких грузов." }
            }
        ]
    },
    {
        id: "53", category: "6", name: "JAC W 5082 промтоварный", price: "275 520 000 сум", engine: "HFC4GA3-3D", power: "147 л.с.", fuel: "Бензин", formula: "4x2", load: "2080", img: "/images/52.png",
        Komplektatsiya: {
            uz: "ABS, A/C, GUR, MP3+USB magnitola, elektr oynalar, markaziy qulf, stolcha-organayzer",
            ru: "ABS, A/C, ГУР, магнитола, электропакет, центральный замок, столик-органайзер"
        },
        Rasmiy_servis_mavjudligi: { uz: "5 ta sertifikatlangan servis markazi, mobil servis imkoniyati", ru: "5 сертифицированных сервис-центров, мобильный сервис" },
        Ehtiyot_qismlar_mavjudligi: { uz: "Samarqand shahridagi ehtiyot qismlar ombori", ru: "Склад запчастей в Самарканде" },
        Moliyalashtirish: { uz: "x", ru: "x" },
        Ekspluatatsiya_xususiyatlari: {
            uz: "1 yil umumiy, 2 yil kuch agregatlariga kafolat. Panelli ustqurma (furgon) yukni yog'ingarchilik va changdan to'liq himoya qiladi. Cummins analogi bo'lgan dvigatel, shahar ichida manevr qobiliyati yuqori.",
            ru: "Гарантия до 2 лет. Фургон полностью защищает груз от осадков и пыли. Двигатель — аналог Cummins, высокая маневренность в городе."
        },
        Yillik_saqlash_xarajatlari: { uz: "18 mln (materiallar + ish kuchi)", ru: "18 млн (материалы + работа)" },
        Kuchsiz_tomonlari: {
            uz: "Uzatmalar qutisidan moy oqishi, orqa ko'prik 'chulok' qismi zaifligi, konditsioner injiqliklari. Akkumulyator xavfsizligi past (o'g'irlash oson).",
            ru: "Утечки масла из КПП, слабость «чулка» заднего моста, капризный кондиционер. Риск кражи аккумулятора."
        },
        Takliflar: { uz: "", ru: "" },
        Soha_va_vazifasi: {
            uz: "Sanoat mahsulotlarini yog'ingarchilik va changdan himoyalangan holda tashish uchun mo'ljallangan furgonli mini-yuk mashinasi.",
            ru: "Промтоварный фургон для перевозки товаров с защитой от осадков и пыли."
        },
        Снаряженная_масса_тн: "1780",
        competitors: [
            {
                name: "Foton Truck Mate II D1 промтоварный",
                Komplektatsiya: { uz: "ABS, A/C, GUR, elektr oynalar, LED faralar", ru: "ABS, A/C, ГУР, электропакет, LED-фары" },
                Soha_va_vazifasi: { uz: "Shahar ichida yuk tashish uchun furgon.", ru: "Фургон для внутригородских перевозок." }
            }
        ]
    },
    {
        id: "54", category: "6", name: "JAC W 5082х200 тентовый", price: "255 360 000 сум", engine: "HFC4GA3-3D", power: "147 л.с.", fuel: "Бензин", formula: "4x2", load: "2028", img: "/images/53.png",
        Komplektatsiya: { uz: "ABS, A/C, GUR, MP3+USB magnitola, elektr oynalar, markaziy qulf", ru: "ABS, A/C, ГУР, магнитола, электростеклоподъемники, центральный замок" },
        Rasmiy_servis_mavjudligi: { uz: "5 ta sertifikatlangan servis markazi, mobil servis imkoniyati", ru: "5 сертифицированных сервис-центров" },
        Ehtiyot_qismlar_mavjudligi: { uz: "Samarqand shahridagi ehtiyot qismlar ombori", ru: "Склад запчастей в Самарканде" },
        Moliyalashtirish: { uz: "x", ru: "x" },
        Ekspluatatsiya_xususiyatlari: {
            uz: "1 yil hamma narsaga, 2 yil kuch agregatlariga kafolat. Tentli ustqurma yukni quyosh va yomg'irdan himoya qiladi. Dvigatel 2.0 CTI, diskli tormozlar, haydovchi uchun qulay salon.",
            ru: "Гарантия до 2 лет. Тентовая надстройка защищает груз от солнца и дождя. Двигатель 2.0 CTI, дисковые тормоза."
        },
        Yillik_saqlash_xarajatlari: { uz: "18 mln (materiallar + ish kuchi)", ru: "18 млн (материалы + работа)" },
        Kuchsiz_tomonlari: { uz: "Uzatmalar qutisida moy oqishi kuzatilgan, orqa ko'prik 'chulok' qismi sinishi holatlari bor. Akkumulyator joylashuvi xavfsiz emas.", ru: "Утечки масла в КПП, риск поломки «чулка» заднего моста. Незащищенный аккумулятор." },
        Takliflar: { uz: "", ru: "" },
        Soha_va_vazifasi: {
            uz: "Mini-yuk mashinasi tentli platforma bilan. Turli xil yuklarni shahar sharoitida quyosh va yomg'irdan himoyalangan holda tashish uchun mo'ljallangan.",
            ru: "Тентованный мини-грузовик для перевозки товаров с защитой от внешних воздействий в городе."
        },
        Снаряженная_масса_тн: "1725",
    },
    {
        id: "55", category: "7", name: "Шасси КАМАЗ 4326-1053-15 4х4", price: "907 200 000 сум", img: "/images/54.png",
        Komplektatsiya: { uz: "Minimal komplektatsiya", ru: "Минимальная комплектация" },
        Rasmiy_servis_mavjudligi: { uz: "8 ta sertifikatlangan servis markazi, mobil servis imkoniyati", ru: "8 сертифицированных сервис-центров, мобильный сервис" },
        Ehtiyot_qismlar_mavjudligi: { uz: "Markaziy omborda va dilerlarda jami 2 mlrd so'mlik zaxira bor", ru: "Общий запас запчастей на 2 млрд сум" },
        Moliyalashtirish: { uz: "Boshlang'ich to'lov 25% (226 800 000), yillik stavka 20%, muddati 36 oy", ru: "Взнос 25%, ставка 20%, срок 36 месяцев." },
        Ekspluatatsiya_xususiyatlari: {
            uz: "2 yil yoki 75 ming km kafolat. Oddiy mexanika, 380 mm klirens, yoqilg'i tizimi injiq emas, MOB va MKB mavjud. Shassini multitsiklon va qo'shimcha filtrlar bilan jihozlash mumkin.",
            ru: "Гарантия 2 года. Простая механика, клиренс 380 мм, неприхотливая топливная система, наличие МОБ и МКБ."
        },
        Yillik_saqlash_xarajatlari: { uz: "40 mln (materiallar + ish kuchi)", ru: "40 млн (материалы + работа)" },
        Kuchsiz_tomonlari: { uz: "Moy oqishi, GBC muammolari, elektr tizimi va rul boshqaruvi nosozliklari.", ru: "Утечки масла, проблемы с ГБЦ, неисправности электрики и рулевого управления." },
        Takliflar: { uz: "", ru: "" },
        Soha_va_vazifasi: {
            uz: "Bu 4x4 g'ildirak formulasiga ega universal yuqori o'tuvchan shassi bo'lib, eng og'ir yo'l va iqlim sharoitlarida foydalanish uchun mo'ljallangan. Turli murakkab maxsus ustqurmalar uchun ideal baza.",
            ru: "Универсальное полноприводное шасси 4х4 для самых тяжелых дорожных условий. Идеальная база для спецнадстроек."
        },
        Снаряженная_масса_тн: "7,3",
    },
    {
        id: "56", category: "7", name: "Шасси КАМАЗ 43118-1098-10 6х6", price: "940 800 000 сум", engine: "740.30-260", power: "260 л.с.", fuel: "Дизель", tank: "210+350 л", formula: "6x6", img: "/images/55.png",
        Komplektatsiya: { uz: "Minimal komplektatsiya", ru: "Минимальная комплектация" },
        Rasmiy_servis_mavjudligi: { uz: "8 ta sertifikatlangan servis markazi", ru: "8 сертифицированных сервисных центров" },
        Ehtiyot_qismlar_mavjudligi: { uz: "Respublika bo'ylab dilerlarda jami 2 mlrd so'mlik zaxira mavjud", ru: "Запас запчастей на 2 млрд сум у дилеров по всей республике" },
        Moliyalashtirish: { uz: "Boshlang'ich to'lov 25% (235 200 000), yillik stavka 20%, muddati 36 oy", ru: "Взнос 25%, ставка 20%, срок 36 месяцев." },
        Ekspluatatsiya_xususiyatlari: {
            uz: "2 yil yoki 75 ming km kafolat. KAMAZ-43118 oddiy mexanikaga ega bo'lib, diagnostika va ta'mirlashda mablag' tejaydi. 380 mm klirens, MKB va MOB mavjud.",
            ru: "Гарантия 2 года. Простая механика КАМАЗ-43118, экономия на обслуживании. Клиренс 380 мм, наличие МКБ и МОБ."
        },
        Yillik_saqlash_xarajatlari: { uz: "45 mln (materiallar + ish kuchi)", ru: "45 млн (материалы + работа)" },
        Kuchsiz_tomonlari: { uz: "Moy oqishi, GBC qistirmalari muammosi, radiator tez to'lishi, rul boshqaruvidagi nosozliklar.", ru: "Утечки масла, проблемы с прокладками ГБЦ, засорение радиатора." },
        Takliflar: { uz: "", ru: "" },
        Soha_va_vazifasi: {
            uz: "Bu 6x6 g'ildirak formulasiga ega universal yuqori o'tuvchan shassi bo'lib, eng og'ir yo'l sharoitlarida foydalanish uchun mo'ljallangan. Avtotsisterna, furgon va kran-manipulyatorlar uchun ideal baza.",
            ru: "Полноприводное шасси 6х6 для тяжелых условий. Идеально для автоцистерн, фургонов и КМУ."
        },
        Снаряженная_масса_тн: "8,84",
    },
    {
        id: "57", category: "7", name: "Шасси КАМАЗ 43118-1053-10 6х6", price: "940 800 000 сум", engine: "740.30-260", power: "260 л.с.", fuel: "Дизель", tank: "210+350 л", formula: "6x6", img: "/images/55.png",
        Komplektatsiya: { uz: "Minimal komplektatsiya", ru: "Минимальная комплектация" },
        Rasmiy_servis_mavjudligi: { uz: "Xizmat ko'rsatish va ta'mirlash uchun 8 ta sertifikatlangan servis markazi, mobil servis tashkil qilish imkoniyati", ru: "8 сертифицированных сервисных центров, мобильный сервис" },
        Ehtiyot_qismlar_mavjudligi: { uz: "Respublika bo'ylab markaziy ombor va 6 ta distribyutor dilerda jami 2 mlrd so'mlik ehtiyot qismlar zaxirasi mavjud", ru: "Запас запчастей на 2 млрд сум на центральном складе и у 6 дистрибьюторов" },
        Moliyalashtirish: { uz: "Boshlang'ich to'lov 25% (235 200 000), yillik stavka 20%, muddati 36 oy", ru: "Взнос 25%, годовая ставка 20%, срок 36 месяцев." },
        Ekspluatatsiya_xususiyatlari: {
            uz: "2 yil yoki 75 ming km kafolat. KAMAZ-43118 murakkab elektronikasiz oddiy mexanikaga ega bo'lib, diagnostika va ta'mirlashda mablag' tejaydi. Bu mintaqaviy servis sharoitlarida yillik xarajatlarni kamaytirish imkonini beradi. Yoqilg'i tizimi injiq emas, 380 mm klirens, MOB va MKB mavjud. Agregatlar universalligi ta'mirlashni osonlashtiradi. Shassini multitsiklon va qo'shimcha filtrlar bilan jihozlash mumkin.",
            ru: "Гарантия 2 года. Простая механика без электроники экономит средства. Неприхотливая топливная система, клиренс 380 мм, МОБ и МКБ. Возможность установки доп. фильтров."
        },
        Yillik_saqlash_xarajatlari: { uz: "45 mln (materiallar + ish kuchi)", ru: "45 млн (материалы + работа)" },
        Kuchsiz_tomonlari: {
            uz: "Moy oqishi, GBC qistirmalari va salniklarning ishdan chiqishi, radiatorning tez chang bilan to'lishi, faqat ASKAN qurilmasi bilan diagnostika qilinadi, elektr tizimi va rul boshqaruvidagi nosozliklar.",
            ru: "Утечки масла, износ ГБЦ и сальников, засорение радиатора, диагностика только через АСКАН."
        },
        Takliflar: { uz: "", ru: "" },
        Soha_va_vazifasi: {
            uz: "Bu 6x6 g'ildirak formulasiga ega universal yuqori o'tuvchan shassi bo'lib, eng og'ir yo'l va iqlim sharoitlarida foydalanish uchun mo'ljallangan. Yuqori o'tuvchanligi va ramaning montaj uzunligi tufayli turli murakkab maxsus ustqurmalar — avtotsisternalardan tortib burg'ulash qurilmalarigacha o'rnatish uchun ideal baza hisoblanadi.",
            ru: "Полноприводное шасси 6х6 для тяжелых условий. Благодаря длине рамы подходит для установки любых надстроек — от цистерн до буровых."
        },
        Снаряженная_масса_тн: "9,1",
    },
    {
        id: "58", category: "7", name: "Шасси КАМАЗ 43118-1048-10 6х6", price: "940 800 000 сум", engine: "740.30-260", power: "260 л.с.", fuel: "Дизель", tank: "210+350 л.", formula: "6x6", img: "/images/last.png",
        Komplektatsiya: { uz: "Minimal komplektatsiya", ru: "Минимальная комплектация" },
        Rasmiy_servis_mavjudligi: { uz: "8 ta sertifikatlangan servis markazi, mobil servis tashkil qilish imkoniyati", ru: "8 сертифицированных сервисных центров" },
        Ehtiyot_qismlar_mavjudligi: { uz: "Respublika bo'ylab markaziy ombor va 6 ta distribyutor dilerda jami 2 mlrd so'mlik ehtiyot qismlar zaxirasi mavjud", ru: "Запас 2 млрд сум у дистрибьюторов и на центральном складе" },
        Moliyalashtirish: { uz: "Boshlang'ich to'lov 25% (235 200 000), yillik stavka 20%, muddati 36 oy", ru: "Взнос 25%, годовая ставка 20%, срок 36 месяцев." },
        Ekspluatatsiya_xususiyatlari: {
            uz: "2 yil yoki 75 ming km kafolat. KAMAZ-43118 oddiy mexanikaga ega bo'lib, murakkab elektronika yo'qligi sababli diagnostika va ta'mirlashda mablag' tejaydi. 380 mm yo'ldan balandlik (klirens), yoqilg'i tizimi talabchan emas, MOB va MKB mavjud. Shassini mijoz talabiga ko'ra qo'shimcha filtrlar bilan jihozlash imkoniyati bor.",
            ru: "Гарантия 2 года. Простая механика без электроники облегчает ремонт. Клиренс 380 мм, неприхотливая топливная система, наличие МОБ и МКБ."
        },
        Yillik_saqlash_xarajatlari: { uz: "45 mln (materiallar + ish kuchi)", ru: "45 млн (материалы + работа)" },
        Kuchsiz_tomonlari: { uz: "Moy oqishi, GBC qistirmalari muammosi, radiatorning tez chang bilan to'lishi, faqat ASKAN bilan diagnostika qilinadi, elektr tizimi va rul boshqaruvida tez-tez uchraydigan nosozliklar.", ru: "Утечки масла, проблемы с ГБЦ, диагностика только АСКАНом, неисправности рулевого управления." },
        Takliflar: { uz: "", ru: "" },
        Soha_va_vazifasi: {
            uz: "Bu 6x6 g'ildirak formulasiga ega universal yuqori o'tuvchan shassi bo'lib, eng og'ir yo'l sharoitlarida foydalanish uchun mo'ljallangan. Avtotsisterna, furgon, burg'ulash qurilmalari va kran-manipulyatorlar o'rnatish uchun ideal asosdir.",
            ru: "Шасси 6х6 для тяжелых условий. Идеальная база для цистерн, фургонов, буровых установок и КМУ."
        },
        Снаряженная_масса_тн: "8,75",
    }
];
