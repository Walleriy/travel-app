import React, { useState } from 'react';
import Header from "../header";
import Footer from "../footer";
import './app.scss'
import Country from "../../pages/country";
import Main from "../../pages/main";
import { BrowserRouter as Router, Route } from 'react-router-dom';

const App = () => {

    const images = [
        {
            original: 'https://picsum.photos/id/1018/1000/600/',
            thumbnail: 'https://picsum.photos/id/1015/1000/600/',
            originalTitle: 'Title One',
            description: 'Description Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?'
        },
        {
            original: 'https://picsum.photos/id/1015/1000/600/',
            thumbnail: 'https://picsum.photos/id/1015/250/150/',
            originalTitle: 'Title Two',
            description: 'Description Tho Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?'
        },
        {
            original: 'https://picsum.photos/id/1019/1000/600/',
            thumbnail: 'https://picsum.photos/id/1019/250/150/',
            originalTitle: 'Title Three',
            description: 'Description Three Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?'
        },
    ];
    const countries = [
        {
            name: 'Ukraine',
            capital: 'Kiev',
            photoUrl: 'https://www.state.gov/wp-content/uploads/2018/11/Ukraine-2109x1406.jpg',
            description: 'Украї́на — держава, розташована в Східній і в Центральній Європі, у південно-західній частині Східноєвропейської рівнини, держава-правонаступниця Української Радянської Соціалістичної Республіки, та одночасно — Української Народної Республіки, Гетьманщини, Королівства Руського й Київської Русі'
        },
        {
            name: 'Russia',
            capital: 'Moscow',
            photoUrl: 'https://kidpassage.com/images/publications/images/1598_10_interesnykh_faktov_o_Rossii_04.jpg',
            description: 'Росі́я, або Росі́йська Федера́ція — трансконтинентальна держава у Східній Європі та Північній Азії з площею 17 098 246 км². Росія є найбільшою за територією країною у світі, що охоплює більше однієї восьмої площі суходолу Землі, розтягнувшись на одинадцять часових поясів і межуючи з 16 суверенними країнами.'
        },
        {
            name: 'Belarus',
            capital: 'Minsk',
            photoUrl: 'https://www.trafalgar.com/-/media/Images/Home/Destinations/New-Destination-Guides/Belarus/BelarusDvinaRiver961371152GENov222600x1300.jpg',
            description: 'Білору́сь, офіційна назва Респу́бліка Білору́сь — держава у Східній Європі без виходу до моря, що межує з Україною на півдні, Польщею на заході, Литвою та Латвією на півночі, а також РФ на півночі та сході. Столиця та найбільше місто — Мінськ. Більше 40 % території країни площею 207 600 км² покриті лісами.'
        },
        {
            name: 'England',
            capital: 'London',
            photoUrl: 'https://www.fodors.com/wp-content/uploads/2017/10/Ultimate-Things-To-Do-London-Big-Ben.jpg',
            description: 'А́нглія — країна в Західній Європі, що входить до Сполученого королівства Великої Британії та Північної Ірландії. Найбільша за площею і населенням з чотирьох країн Сполученого королівства та трьох частин Великої Британії'
        }

    ];

    const [, setTerm] = useState('');

    const SearchCountry = (term) => {
        setTerm(term);
        let res = search(items, term);
        console.log(`Фраза: ${term} Слова:  ${res}`);
    }

    let items = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto autem commodi culpa deleniti ea, eligendi ipsam maiores molestias nam nemo sunt vero. Ab ad adipisci alias aliquam aperiam aspernatur corporis deleniti dicta dolor eaque harum iste itaque iusto, modi molestias nesciunt nobis perferendis quaerat quibusdam reprehenderit soluta tempore ullam unde, voluptate voluptatum. Aliquid, debitis deserunt dicta distinctio error expedita facere, inventore itaque iure laudantium, nemo neque optio porro ratione reiciendis repellat sit unde. A commodi consequatur deserunt eligendi eum, eveniet, expedita illum itaque iure minus nam, nemo omnis pariatur praesentium provident ratione voluptatem. Accusantium eius iure neque reiciendis suscipit vitae?'.split(' ')

    const search = (items, term) => {
        if (term.length === 0) {
            return items;
        }

        return items.filter((item) => {
            return item.toLowerCase()
                .indexOf(term.toLowerCase()) > -1;
        })
    }

    return (
        <Router>
            <Header />
            <Route path="/" exact>
                <Main SearchCountry={SearchCountry} Countries={countries}/>
            </Route>
            <Route path="/country/:id" render={({ match }) => {
                const { id } = match.params;
                return <Country id={id} images={images} />
            }}>
            </Route>
            <Footer />
        </Router>
    );
}

export default App;
