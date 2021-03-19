import React from 'react';
import Header from "../header";
import Footer from "../footer";
import './app.scss'
import Country from "../../pages/country";
import Main from "../../pages/main";
import { BrowserRouter as Router, Route } from 'react-router-dom';

const App = () => {

    const countries = [
        {
            name: 'Ukraine',
            capital: 'Kiev',
            photoUrl: 'https://www.state.gov/wp-content/uploads/2018/11/Ukraine-2109x1406.jpg',
            description: 'Украї́на — держава, розташована в Східній і в Центральній Європі, у південно-західній частині Східноєвропейської рівнини, держава-правонаступниця Української Радянської Соціалістичної Республіки, та одночасно — Української Народної Республіки, Гетьманщини, Королівства Руського й Київської Русі',
            coordinates: [50.45466, 30.5238],
            videoUrl: "https://youtu.be/WwV8_qMBZ3M",
            currency: "UAH",
            en: {
                "capital": "Kiev",
                "description": "Ukraine (Ukrainian: Україна, romanized: Ukrayina, pronounced [ʊkrɐˈjinɐ] (About this soundlisten); Russian: Украина, romanized: Ukraina pronounced [ʊkrɐˈinə]) is a country in Eastern Europe. It is bordered by Russia to the east and north-east;[c] Belarus to the north; Poland, Slovakia and Hungary to the west; and Romania, Moldova and the Black Sea to the south. Including Crimea, Ukraine has an area of 603,628 km2 (233,062 sq mi), and is the second-largest country in Europe after Russia. Excluding Crimea, Ukraine has a population of about 41.5 million, making it the eighth-most populous country in Europe. Its capital and largest city is Kyiv.",
                "name": "Ukraine"
            },
            ru: {
                    "capital": "Киев",
                    "description": "Украи́на (укр. Україна [ukrɑˈjinɑ]) — государство в Восточной и частично Центральной Европе. Население, по итогам переписи 2001 года, составляло 48 240 902 постоянных жителя[13] и 48 457 102 человека наличного населения[14], по оценкам государственной службы статистики Украины на 1 сентября 2020 года — 41 554 361 постоянных жителя и 41 723 998 человек наличного населения[6][15]. Территория в пределах международно признанных границ[c] — 603 549 км². Занимает 34-е место в мире по численности населенияПерейти к разделу «#Численность, расселение», 44-е по территории. Украина является первым по размеру территории европейским государством, целиком находящимся в Европе.Перейти к разделу «#Географическое положение»",
                    "name": "Украина"
                },
            ua:  {
                    "capital": "Київ",
                    "description": "Украї́на (МФА: [ʊkrɐˈjɪn̪ɐ]) — держава, розташована в Східній і в Центральній Європі, у південно-західній частині Східноєвропейської рівнини, держава-правонаступниця Української Радянської Соціалістичної Республіки[4][5], Союзу Радянських Соціалістичних Республік[4][5] та одночасно — Української Народної Республіки, Гетьманщини, Королівства Руського й Київської Русі. Площа становить 603 548 км²[6] населення, за оцінкою держслужби статистики, складає 41 588 354 особи станом на 1 січня 2021 року (без урахування окупованого Криму). Найбільша за площею країна з тих, чия територія повністю лежить у Європі.[7] Межує з Республікою Білорусь на півночі, Польщею, Словаччиною та Угорщиною — на заході, Румунією і Республікою Молдова — на південному заході, Російською Федерацією на сході й північному сході. На півдні й південному сході омивається Чорним та Азовським морями.",
                    "name": "Україна"
                },
            be:  {
                "capital": "Київ",
                "description": "Украї́на (МФА: [ʊkrɐˈjɪn̪ɐ]) — держава, розташована в Східній і в Центральній Європі, у південно-західній частині Східноєвропейської рівнини, держава-правонаступниця Української Радянської Соціалістичної Республіки[4][5], Союзу Радянських Соціалістичних Республік[4][5] та одночасно — Української Народної Республіки, Гетьманщини, Королівства Руського й Київської Русі. Площа становить 603 548 км²[6] населення, за оцінкою держслужби статистики, складає 41 588 354 особи станом на 1 січня 2021 року (без урахування окупованого Криму). Найбільша за площею країна з тих, чия територія повністю лежить у Європі.[7] Межує з Республікою Білорусь на півночі, Польщею, Словаччиною та Угорщиною — на заході, Румунією і Республікою Молдова — на південному заході, Російською Федерацією на сході й північному сході. На півдні й південному сході омивається Чорним та Азовським морями.",
                "name": "Україна"
            },
            images: [
                {
                    "original": "https://cdn.tripzaza.com/ru/destinations/wp-content/uploads/2017/03/Ukrain-1-Kiev-Pechersk-Lavra-e1490934404725.jpg",
                    "thumbnail": "https://cdn.tripzaza.com/ru/destinations/wp-content/uploads/2017/03/Ukrain-1-Kiev-Pechersk-Lavra-e1490934404725.jpg",
                    "description": "Одной из самых главных святынь православия, что сохранилась практически в первозданном виде еще с 11 века, по праву считается Киево-Печерская лавра – первый монастырь на Руси и символ веры. Над мощными водами Днепра, на его живописных склонах, сияя золотыми куполами, красуются величественные храмы. "
                },
                {
                    "original": "https://cdn.tripzaza.com/ru/destinations/wp-content/uploads/2017/03/Ukrain-2-Maidan-Nezalezhnosti--e1490934628398.jpg",
                    "thumbnail": "https://cdn.tripzaza.com/ru/destinations/wp-content/uploads/2017/03/Ukrain-2-Maidan-Nezalezhnosti--e1490934628398.jpg",
                    "description": "Площадь Независимости, именуемая украинцами «майдан», – главная площадь столицы. Это объект, который туристы и гости города посещают обязательно. Здесь любят побродить у фонтанов, сфотографироваться рядом с величественным монументом и просто погулять. К майдану примыкают несколько главных улиц Киева: Крещатик, Институтская, Софийская, Михайловская."
                },
                {
                    "original": "https://cdn.tripzaza.com/ru/destinations/wp-content/uploads/2017/03/Ukrain-4-The-Khotyn-Fortress-e1490935229596.jpg",
                    "thumbnail": "https://cdn.tripzaza.com/ru/destinations/wp-content/uploads/2017/03/Ukrain-4-The-Khotyn-Fortress-e1490935229596.jpg",
                    "description": "Хотинская крепость – одно из самых зрелищных мест, где нужно обязательно побывать любому туристу. Это настоящий памятник великой истории Руси, которому уже чуть более 1000 лет.\n\nИзначально сооружение представляло собой небольшую крепость, построенную славянами из дерева. Ее функцией была защита местного народа от захватчиков. Когда монголо-татарское иго завоевало Русь, роль этого форта сильно возросла, он охранял важнейшую переправу на реке Днестр от набегов кочевников-грабителей."
                }
            ]

        },
        {
            name: 'Russia',
            capital: 'Moscow',
            photoUrl: 'https://kidpassage.com/images/publications/images/1598_10_interesnykh_faktov_o_Rossii_04.jpg',
            description: 'Росі́я, або Росі́йська Федера́ція — трансконтинентальна держава у Східній Європі та Північній Азії з площею 17 098 246 км². Росія є найбільшою за територією країною у світі, що охоплює більше однієї восьмої площі суходолу Землі, розтягнувшись на одинадцять часових поясів і межуючи з 16 суверенними країнами.',
            coordinates: [55.75222, 37.61556],
            videoUrl: "https://youtu.be/YrNxPr4PKQo",
            currency: "RUB",
            en: {
                "capital": "Moscow",
                "description": "Russia (Russian: Россия, Rossiya, Russian pronunciation: [rɐˈsʲijə]), or the Russian Federation,[c] is a transcontinental country spanning Eastern Europe and Northern Asia. It is the largest country in the world; covering over 17,125,191 square kilometres (6,612,073 sq mi), consisting of more than one-eighth of the Earth's inhabited land area, extending to eleven time zones, and has bordering sixteen sovereign nations. Russia has a population of 146.7 million; and is the ninth-most populous country, as well as the most populous country in Europe. Moscow, the capital, is the largest city in Europe, while Saint Petersburg is the second-largest city and the country's cultural centre. Russians are the largest Slavic and European nation; speaking Russian, the most spoken Slavic language, and the most spoken native language in Europe.",
                "name": "Russia"
            },
            ru: {
                    "capital": "Москва",
                    "description": "Росси́я, другое официальное название — Росси́йская Федера́ция[e] (РФ[f]), — государство в Восточной Европе и Северной Азии. Территория России в её конституционных границах[b] составляет 17 125 191[6] км²; население страны (в пределах её заявленной территории[b]) составляет 146 238 185[9] чел. (2021). Занимает первое место в мире по территорииПерейти к разделу «#Географическое положение», шестое — по объёму ВВП по ППСПерейти к разделу «#Экономика и финансы», и девятое — по численности населенияПерейти к разделу «#Численность населения, расселение».\n\nСтолица — Москва. Государственный язык — русскийПерейти к разделу «#Языки». Денежная единица — российский рубльПерейти к разделу «#Общее состояние, основные показатели».\n\nГосударственный строй — президентско-парламентская республика[4] с федеративным устройством. С 31 декабря 1999 года (с перерывом в 2008—2012 годах, когда Дмитрий Медведев был президентом) должность президента Российской Федерации занимает Владимир Путин. C 16 января 2020 года должность председателя Правительства РФ занимает Михаил МишустинПерейти к разделу «#Государственное устройство».",
                    "name": "Россия"
                },
            ua:  {
                    "capital": "Москва",
                    "description": "Росі́я (рос. Россия МФА: [rɐˈsʲːijə]), або Росі́йська Федера́ція (рос. Российская Федерация)[5] — трансконтинентальна держава у Східній Європі та Північній Азії[6] з площею 17 098 246 км²[7]. Росія є найбільшою за територією країною у світі, що охоплює більше однієї восьмої площі суходолу Землі, розтягнувшись на одинадцять часових поясів і межуючи з 16 суверенними країнами[8][9]. Територія Росії простягається від Балтійського моря на заході до Тихого океану на сході, а також від Північного Льодовитого океану на півночі до Чорного моря та Кавказу на півдні. Із 144 386 830 жителів, які проживають у 85 федеральних суб'єктах (включно з анексованими українськими територіями[10]: Кримом та Севастополем), Росія — найнаселеніша країна Європи та дев'ята за чисельністю країна в світі[11][12]. Столиця та найбільше місто — Москва; інші великі міські райони включають Санкт-Петербург, Новосибірськ, Єкатеринбург, Нижній Новгород, Казань, Челябінськ та Самару.",
                    "name": "Росія"
                },
            be:  {
                "capital": "Москва",
                "description": "Росі́я (рос. Россия МФА: [rɐˈsʲːijə]), або Росі́йська Федера́ція (рос. Российская Федерация)[5] — трансконтинентальна держава у Східній Європі та Північній Азії[6] з площею 17 098 246 км²[7]. Росія є найбільшою за територією країною у світі, що охоплює більше однієї восьмої площі суходолу Землі, розтягнувшись на одинадцять часових поясів і межуючи з 16 суверенними країнами[8][9]. Територія Росії простягається від Балтійського моря на заході до Тихого океану на сході, а також від Північного Льодовитого океану на півночі до Чорного моря та Кавказу на півдні. Із 144 386 830 жителів, які проживають у 85 федеральних суб'єктах (включно з анексованими українськими територіями[10]: Кримом та Севастополем), Росія — найнаселеніша країна Європи та дев'ята за чисельністю країна в світі[11][12]. Столиця та найбільше місто — Москва; інші великі міські райони включають Санкт-Петербург, Новосибірськ, Єкатеринбург, Нижній Новгород, Казань, Челябінськ та Самару.",
                "name": "Росія"
            },
            images: [
                {
                    "original": "https://cdn.tripzaza.com/ru/destinations/wp-content/uploads/2017/04/Russia-1-red-square-e1491988165746.jpg",
                    "thumbnail": "https://cdn.tripzaza.com/ru/destinations/wp-content/uploads/2017/04/Russia-1-red-square-e1491988165746.jpg",
                    "description": "Красная площадь – визитная карточка Москвы. Без этой достопримечательности России невозможно представить себе и саму державу. Почему же главная площадь белокаменной получила такое название? То, что «красное» – слово, обозначающее не только цвет, но и красоту, знают даже школьники."
                },
                {
                    "original": "https://cdn.tripzaza.com/ru/destinations/wp-content/uploads/2017/04/Russia-3-Lake-Baikal-e1491988640354.jpg",
                    "thumbnail": "https://cdn.tripzaza.com/ru/destinations/wp-content/uploads/2017/04/Russia-3-Lake-Baikal-e1491988640354.jpg",
                    "description": "Величайшее озеро на Земле - Байкал, российскую святыню иногда называют «лабораторией разнообразия» и крупнейшим в мире хранилищем чистейшей пресной воды. В нем обитает почти 3,000 видов растений, а более 80% из них не встречаются больше нигде. Единственное млекопитающее, живущее в древнем озере, – байкальская нерпа. "
                },
                {
                    "original": "https://cdn.tripzaza.com/ru/destinations/wp-content/uploads/2017/04/Russia-5-Hermitage-Museum-e1491989129859.jpg",
                    "thumbnail": "https://cdn.tripzaza.com/ru/destinations/wp-content/uploads/2017/04/Russia-5-Hermitage-Museum-e1491989129859.jpg",
                    "description": "Ермитаж - зимний дворец в Санкт-Петербурге – настоящее достояние страны и северной столицы. Его строительство началось при Петре Великом. Этот исторический памятник, смотрящийся в воды Невы как в зеркало, с 1920 годов стал самым величественным и знаменитым российским музеем – Эрмитажем."
                }
            ]
        },
        {
            name: 'Belarus',
            capital: 'Minsk',
            photoUrl: 'https://www.trafalgar.com/-/media/Images/Home/Destinations/New-Destination-Guides/Belarus/BelarusDvinaRiver961371152GENov222600x1300.jpg',
            description: 'Білору́сь, офіційна назва Респу́бліка Білору́сь — держава у Східній Європі без виходу до моря, що межує з Україною на півдні, Польщею на заході, Литвою та Латвією на півночі, а також РФ на півночі та сході. Столиця та найбільше місто — Мінськ. Більше 40 % території країни площею 207 600 км² покриті лісами.',
            coordinates: [53.9, 27.56667],
            videoUrl: "https://youtu.be/vE9S-6DNM5k",
            currency: "BYN",
            en: {
                "capital": "Minsk",
                "description": "Belarus,[a] officially the Republic of Belarus,[b] is a landlocked country in Eastern Europe. It is bordered by Russia to the east and northeast, Ukraine to the south, Poland to the west, and Lithuania and Latvia to the northwest. Covering an area of 207,600 square kilometres (80,200 sq mi) and with a population of 9.4 million, Belarus is the thirteenth-largest and the twentieth-most populous country in Europe. The country is administratively divided into seven regions, and is one of the world's most urbanized, with over 40% of its total land area forested. Minsk is the country's capital and largest city.",
                "name": "Belarus"
            },
            ru: {
                    "capital": "Минск",
                    "description": "Белору́ссия[a] (белор. Беларусь, [bʲɛlaˈrusʲ] Информация о файле слушать), официальное название — Респу́блика Белару́сь[11][12][13][b] (белор. Рэспубліка Беларусь, [rɛspublʲika bʲɛlaˈrusʲ] Информация о файле слушать, аббревиатура — РБ), — государство в Восточной Европе. Население на 1 января 2020 года составляет 9 408 400 человек[5], территория — 207 595 км². Занимает 94-е место по количеству населения[18]Перейти к разделу «#Население» и 84-е по территории в мире[18]Перейти к разделу «#География».\n\nСтолица и самый крупный город государства — Минск. Государственными языками являются белорусский и русский. Унитарная президентская республика. 20 июля 1994 года пост президента в ходе первых в истории страны президентских выборов занял Александр Лукашенко, впоследствии побеждавший также на выборах 2001, 2006, 2010, 2015 и 2020 годовПерейти к разделу «#Государственное устройство».",
                    "name": "Белоруссия"
                },
            ua: {
                    "capital": "Мінськ",
                    "description": "Білору́сь[2] (біл. Беларусь, рос. Беларусь, Белоруссия), офіційна назва Респу́бліка Білору́сь (біл. Рэспубліка Беларусь, рос. Республика Беларусь) — держава у Східній Європі[3] без виходу до моря, що межує з Україною на півдні, Польщею на заході, Литвою та Латвією на півночі, а також РФ на півночі та сході. Столиця та найбільше місто — Мінськ. Більше 40 % території країни площею 207 600 км² покриті лісами. Основними галузями її економіки є сфера послуг і виробництво.[4] Грошова одиниця — білору́ський ру́бель. До XX століття різні держави в різний час контролювали землі сучасної Білорусі, включаючи Полоцьке князівство (XI—XIV ст.), Велике князівство Литовське, Річ Посполиту та Російську імперію.",
                    "name": "Білорусь"
                },
            be: {
                "capital": "Мінськ",
                "description": "Білору́сь[2] (біл. Беларусь, рос. Беларусь, Белоруссия), офіційна назва Респу́бліка Білору́сь (біл. Рэспубліка Беларусь, рос. Республика Беларусь) — держава у Східній Європі[3] без виходу до моря, що межує з Україною на півдні, Польщею на заході, Литвою та Латвією на півночі, а також РФ на півночі та сході. Столиця та найбільше місто — Мінськ. Більше 40 % території країни площею 207 600 км² покриті лісами. Основними галузями її економіки є сфера послуг і виробництво.[4] Грошова одиниця — білору́ський ру́бель. До XX століття різні держави в різний час контролювали землі сучасної Білорусі, включаючи Полоцьке князівство (XI—XIV ст.), Велике князівство Литовське, Річ Посполиту та Російську імперію.",
                "name": "Білорусь"
            },
            images: [
                {
                    "original": "https://cdn.tripzaza.com/ru/destinations/wp-content/uploads/2017/03/Belarussia-1-Brest-e1490336019687.jpg",
                    "thumbnail": "https://cdn.tripzaza.com/ru/destinations/wp-content/uploads/2017/03/Belarussia-1-Brest-e1490336019687.jpg",
                    "description": "Если вы думаете, что посмотреть в Белоруссии, то первым пунктом должен стоять легендарный город Брест. Это тихий и спокойный город, который затерялся в юго-западной части страны. Культурная жизнь Бреста насыщенна, а его экономика развивается динамично."
                },
                {
                    "original": "https://cdn.tripzaza.com/ru/destinations/wp-content/uploads/2017/03/Belarussia-3-The-Mirsky-Castle-Complex-e1490337234480.jpg",
                    "thumbnail": "https://cdn.tripzaza.com/ru/destinations/wp-content/uploads/2017/03/Belarussia-3-The-Mirsky-Castle-Complex-e1490337234480.jpg",
                    "description": "В Гродненской области находится удивительное архитектурное сооружение — Мирский замок. Со стороны он похож на праздничный торт. Кремово-коричневые тона в облицовке фасадов и остроконечные башенки делают его праздничным и нарядным. А на самом деле это мощное фортификационное сооружение. Башни замка имеют высоту 25 м. "
                },
                {
                    "original": "https://cdn.tripzaza.com/ru/destinations/wp-content/uploads/2017/03/Belarussia-4-Church-of-Saints-Simon-and-Helena-e1490338009102.jpg",
                    "thumbnail": "https://cdn.tripzaza.com/ru/destinations/wp-content/uploads/2017/03/Belarussia-4-Church-of-Saints-Simon-and-Helena-e1490338009102.jpg",
                    "description": "Минский костел Святых Симеона и Елены возведен из красного кирпича. Он виден из разных точек города, поскольку здание является достаточно высоким. Удивительная особенность этого памятника заключается в том, что он наполняет добротой и светлыми мыслями каждого, кто побывает в нем. Костел построен в начале прошлого века."
                }
            ]
        },
        {
            name: 'England',
            capital: 'London',
            photoUrl: 'https://www.fodors.com/wp-content/uploads/2017/10/Ultimate-Things-To-Do-London-Big-Ben.jpg',
            description: 'А́нглія — країна в Західній Європі, що входить до Сполученого королівства Великої Британії та Північної Ірландії. Найбільша за площею і населенням з чотирьох країн Сполученого королівства та трьох частин Великої Британії',
            coordinates: [51.50853, -0.12574],
            videoUrl: "https://youtu.be/wSHXd-K-jIk",
            currency: "GBP",
            en: {
                "capital": "London",
                "description": "England is a country that is part of the United Kingdom.[7][8][9] It shares land borders with Wales to its west and Scotland to its north. The Irish Sea lies northwest of England and the Celtic Sea to the southwest. England is separated from continental Europe by the North Sea to the east and the English Channel to the south. The country covers five-eighths of the island of Great Britain, which lies in the North Atlantic, and includes over 100 smaller islands, such as the Isles of Scilly and the Isle of Wight.",
                "name": "England"
            },
            ru: {
                    "capital": "Лондон",
                    "description": "А́нглия (англ. England [ˈɪŋɡlənd]) — страна, являющаяся крупнейшей административно-политической частью[1] Соединённого Королевства Великобритании и Северной Ирландии. Население Англии составляет 84 % от общего числа населения Великобритании. Столица — Лондон, крупнейший город Соединённого Королевства.\n\nАнглия стала объединением семи некогда враждовавших королевств в 927 году и названа по имени древнегерманского племени англов, обосновавшегося на острове Великобритания в V—VI веках.\n\nАнглия — место происхождения английского языка и Англиканской церкви, а английское законодательство формирует основу юридических систем многих стран мира; кроме того, Лондон был центром Британской империи, а страна — местом возникновения Промышленной революции. Англия была первой промышленно развитой страной, а также страной с парламентской демократией, конституционные, правительственные и юридические новшества которой были переняты другими нациями и государствами.",
                    "name": "Англия"
                },
            ua: {
                    "capital": "Лондон",
                    "description": "А́нглія (англ. England) — країна в Західній Європі, що входить до Сполученого королівства Великої Британії та Північної Ірландії. Найбільша за площею і населенням з чотирьох країн Сполученого королівства та трьох частин Великої Британії. Межує з двома іншими частинами Великої Британії — Уельсом на заході і Шотландією на півночі в межах острова Велика Британія. Назва країни походить від назви племені англів, одного з германських племен, що оселились тут у V і VI століттях[1]. Англія не є політичною одиницею з 1707 року, коли з Англійського королівства та залежних від нього країн була утворена Велика Британія. Столиця Англії, Лондон, також є столицею Великої Британії.\n\nОсобливості: мінливість клімату і розмаїтість форм рельєфу; висока густота населення — серед європейських країн тільки населення Нідерландів густіше.",
                    "name": "Англія"
                },
            be: {
                "capital": "Лондон",
                "description": "А́нглія (англ. England) — країна в Західній Європі, що входить до Сполученого королівства Великої Британії та Північної Ірландії. Найбільша за площею і населенням з чотирьох країн Сполученого королівства та трьох частин Великої Британії. Межує з двома іншими частинами Великої Британії — Уельсом на заході і Шотландією на півночі в межах острова Велика Британія. Назва країни походить від назви племені англів, одного з германських племен, що оселились тут у V і VI століттях[1]. Англія не є політичною одиницею з 1707 року, коли з Англійського королівства та залежних від нього країн була утворена Велика Британія. Столиця Англії, Лондон, також є столицею Великої Британії.\n\nОсобливості: мінливість клімату і розмаїтість форм рельєфу; висока густота населення — серед європейських країн тільки населення Нідерландів густіше.",
                "name": "Англія"
            },
            images: [
                {
                    "original": "https://cdn.tripzaza.com/ru/destinations/wp-content/uploads/2018/02/2-Big-Ben-e1517625239863.jpg",
                    "thumbnail": "https://cdn.tripzaza.com/ru/destinations/wp-content/uploads/2018/02/2-Big-Ben-e1517625239863.jpg",
                    "description": "Планируя путешествие и изучая главные достопримечательности Англии, не забывайте о часовой башне Вестминстерского дворца, созданной более 150 лет назад. Памятные часы провозглашают о самых важных событиях государства: наступлении Нового года, Минутах Молчания и т.д. До недавнего времени именно у Биг-Бена был самый громадный циферблат на Земле"
                },
                {
                    "original": "https://cdn.tripzaza.com/ru/destinations/wp-content/uploads/2018/02/4-Hyde-Park-e1517626373267.jpg",
                    "thumbnail": "https://cdn.tripzaza.com/ru/destinations/wp-content/uploads/2018/02/4-Hyde-Park-e1517626373267.jpg",
                    "description": "Немногие интересные места в Англии столь богаты достопримечательностями, как королевский Гайд-парк. Тут располагается знаменитый уголок Ораторов, кладбище животных, мемориал в честь принцессы Дианы, Музей Веллингтона, статуя Ахилла – перечислять можно еще долго. На территории парка регулярно проводятся народные гуляния, масштабные празднества и политические митинги;"
                },
                {
                    "original": "https://cdn.tripzaza.com/ru/destinations/wp-content/uploads/2018/02/6-the-British-Museum-e1517626575877.jpg",
                    "thumbnail": "https://cdn.tripzaza.com/ru/destinations/wp-content/uploads/2018/02/6-the-British-Museum-e1517626575877.jpg",
                    "description": "Если в ваш список того, что посетить в Англии, не будет включен самый старинный и один из наиболее крупных музеев мира, вы побываете в стране напрасно. Расположенный в Лондоне Британский музей является вторым по посещаемости художественным музеем, уступая только Лувру. "
                }
            ]
        }

    ];

    return (
        <Router>
            <Header />
            <Route path="/" exact>
                <Main Countries={countries}/>
            </Route>
            <Route path="/country/:id" render={({ match }) => {
                const { id } = match.params;
                return <Country name={id} countries={countries} />
            }}>
            </Route>
            <Footer />
        </Router>
    );
}

export default App;
