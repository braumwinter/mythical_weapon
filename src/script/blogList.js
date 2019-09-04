const imgPath = '../../src/img/';

const blogList = [
    {
        id: 1,
        header:'Очень удобный',
        name: 'Вася',
        avatar: imgPath + 'avatar.png',
        idProduct: '1',
        text:'Удобный, острый'
    },
    {
        id: 2,
        header:'Рекомендую',
        name: 'Олег',
        avatar: imgPath + 'avatar.png',
        idProduct: '1',
        text:'Удобно держать в руке. Цельная конструкция. '
    },
    {
        id: 3,
        header:'острый',
        name: 'Эрик',
        avatar: imgPath + 'avatar.png',
        idProduct: '2',
        text:'очень острый ,понравился'
    },
    {
        id: 4,
        header:'Супер',
        name: 'Борис',
        avatar: imgPath + 'avatar.png',
        idProduct: '2',
        text:'Заточены идеально, просто бритва.'
    },
    {
        id: 5,
        header:'Качественный',
        name: 'Иван',
        avatar: imgPath + 'avatar.png',
        idProduct: '3',
        text:'Товар пришел в целости и сохранности. Качество на высоте,приятный на ощупь.'
    },
    {
        id: 6,
        header:'Внушительный',
        name: 'Максим',
        avatar: imgPath + 'avatar.png',
        idProduct: '3',
        text:'Выглядит внушительно, ничего не ржавое, чехол целый, ненужные бумажки в виде сертификата в наличии.'
    },
    {
        id: 7,
        header:'Отлично!',
        name: 'Исидор',
        avatar: imgPath + 'avatar.png',
        idProduct: '4',
        text:'Отличный товар и очень низкая цена.'
    },
    {
        id: 8,
        header:'Супер',
        name: 'Эраст',
        avatar: imgPath + 'avatar.png',
        idProduct: '4',
        text:'Хорошая вещь, пригодится в хозяйстве'
    },
    {
        id: 9,
        header:'Понравился',
        name: 'Евгений',
        avatar: imgPath + 'avatar.png',
        idProduct: '4',
        text:'Качество отличное! покупали на подарок, очень понравился!'
    },
    {
        id: 10,
        header:'Полное соответствие',
        name: 'Павел',
        avatar: imgPath + 'avatar.png',
        idProduct: '5',
        text:'Выполнен качественно. Размер соответствует описанию.'
    },
    {
        id: 11,
        header:'Великолепно',
        name: 'Лев',
        avatar: imgPath + 'avatar.png',
        idProduct: '5',
        text:'Качественный. Полностью детализированный. Спасибо создателям. Процветания вашему делу:)'
    },
    {
        id: 12,
        header:'сын в восторге',
        name: 'Харитон',
        avatar: imgPath + 'avatar.png',
        idProduct: '6',
        text:'Сын в восторге, из рук не выпускает'
    },
    {
        id: 13,
        header:'Спасибо!',
        name: 'Константин',
        avatar: imgPath + 'avatar.png',
        idProduct: '6',
        text:'Серьезный и качественный товар! Браво!'
    },
    {
        id: 14,
        header:'Класс',
        name: 'Родион',
        avatar: imgPath + 'avatar.png',
        idProduct: '7',
        text:'Очень острый и легкий. В руке лежит.'
    },
    {
        id: 15,
        header:'Лёгкий и острый',
        name: 'Валерьян',
        avatar: imgPath + 'avatar.png',
        idProduct: '7',
        text:'Он классный, лёгкий, удобно держать в руке, его легко точить и он острый.'
    },
    {
        id: 16,
        header:'понравилось',
        name: 'Юлиан',
        avatar: imgPath + 'avatar.png',
        idProduct: '8',
        text:'понравилось. яркое и тяжелое, длинное. приятно держать в руках.'
    },
    {
        id: 17,
        header:'довольна',
        name: 'Ксения',
        avatar: imgPath + 'avatar.png',
        idProduct: '8',
        text:'Качество отличное. Не смотря на аскетичность - элегантное. Удобно держать в руке. Покупкой довольна.'
    },
    {
        id: 18,
        header:'отличное качество',
        name: 'Дмитрий',
        avatar: imgPath + 'avatar.png',
        idProduct: '9',
        text:'Качество изготовления просто отличное, всё ровненько, без зазубрин и прочего негатива.'
    },
    {
        id: 19,
        header:'Спасибо',
        name: 'Фаддей',
        avatar: imgPath + 'avatar.png',
        idProduct: '9',
        text:'Ручка матовая, не скользящая, под серебро. Держать в руке одно удовольствие. Удачная покупка! Спасибо!'
    },
    {
        id: 20,
        header:'Аккуратный',
        name: 'Ким',
        avatar: imgPath + 'avatar.png',
        idProduct: '10',
        text:'Качество хорошее, сделано аккуратно. Металл блестящий. В меру тяжелое'
    },
    {
        id: 21,
        header:'Супер',
        name: 'Галактион',
        avatar: imgPath + 'avatar.png',
        idProduct: '10',
        text:'Большое, блестящее, качественное, жалею, что сразу не заказал 6 штук.'
    },
    {
        id: 22,
        header:'Вау!',
        name: 'Семён',
        avatar: imgPath + 'avatar.png',
        idProduct: '11',
        text:'Качество плотное'
    },
    {
        id: 23,
        header:'Качественный',
        name: 'Ждан',
        avatar: imgPath + 'avatar.png',
        idProduct: '12',
        text:'Очень понравился,качественный'
    },
    {
        id: 24,
        header:'Супер!',
        name: 'Анфим',
        avatar: imgPath + 'avatar.png',
        idProduct: '12',
        text:'Качество - СУПЕР!'
    },
    {
        id: 25,
        header:'Спасибо',
        name:'Разумник',
        avatar: imgPath + 'avatar.png',
        idProduct: '13',
        text:'Качественный и приятный в руке'
    },
    {
        id: 26,
        header:'РЕКОМЕНДУЮ!',
        name: 'Иннокентий',
        avatar: imgPath + 'avatar.png',
        idProduct: '14',
        text:'Молот НАИПРЕКРАСНЕЙШИЙ!!! Берите, выручает во многих моментах))))'
    },
    {
        id: 27,
        header:'Качественный',
        name: 'Федосей',
        avatar: imgPath + 'avatar.png',
        idProduct: '14',
        text:'Увесистый, удобный!'
    },
    {
        id: 28,
        header:'Классный',
        name: 'Онисим',
        avatar: imgPath + 'avatar.png',
        idProduct: '14',
        text:'Молот пришел в целости. Тяжеленький,аккуратный. Очень понравился'
    },
    {
        id: 29,
        header:'Хочу ещё!',
        name: 'Трифон',
        avatar: imgPath + 'avatar.png',
        idProduct: '14',
        text:'Очень приятный, тяжеленький. Побольше бы таких товаров'
    },
    {
        id: 30,
        header:'Крутой',
        name: 'Владислав',
        avatar: imgPath + 'avatar.png',
        idProduct: '15',
        text:'Мне доспех очень понравился, он реально крутой'
    },
    {
        id: 31,
        header:'защищает',
        name: 'Ева',
        avatar: imgPath + 'avatar.png',
        idProduct: '15',
        text:'Качество супер,муж говорит что защищает'
    },
    {
        id: 32,
        header:'Здорово!',
        name: 'Руслан',
        avatar: imgPath + 'avatar.png',
        idProduct: '15',
        text:'Понравился. Очень редкий случай, когда точно не переплачиваешь и в наборе ровно то, что тебе однозначно нужно!'
    },
    {
        id: 33,
        header:'Отличный',
        name: 'Александр',
        avatar: imgPath + 'avatar.png',
        idProduct: '16',
        text:'Очень эффектно выглядит.'
    },
    {
        id: 34,
        header:'Здорово',
        name: 'Спиридон',
        avatar: imgPath + 'avatar.png',
        idProduct: '16',
        text:'Очень удобный, хороший доспех'
    },
    {
        id: 35,
        header:'Спасибо',
        name: 'Филипп',
        avatar: imgPath + 'avatar.png',
        idProduct: '17',
        text:'Отличный товар'
    },
    {
        id: 36,
        header:'Супер',
        name: 'Всеволод',
        avatar: imgPath + 'avatar.png',
        idProduct: '17',
        text:'Супер качество супер'
    },
    {
        id: 37,
        header:'идеальные',
        name: 'Назар',
        avatar: imgPath + 'avatar.png',
        idProduct: '18',
        text:'Сели идеально'
    },
    {
        id: 38,
        header:'отличнейшие',
        name: 'Донат',
        avatar: imgPath + 'avatar.png',
        idProduct: '18',
        text:'хорошего качества, плотные, не зауженные, в общем-классика'
    },
    {
        id: 39,
        header:'качественный',
        name: 'Яков',
        avatar: imgPath + 'avatar.png',
        idProduct: '19',
        text:'Отличный щит, в меру увесистый'
    },
    {
        id: 40,
        header:'понравился',
        name: 'София',
        avatar: imgPath + 'avatar.png',
        idProduct: '19',
        text:'Щит классный, заказывала мужу. Ему очень понравился'
    },
    {
        id: 41,
        header:'да',
        name: 'Матвей',
        avatar: imgPath + 'avatar.png',
        idProduct: '20',
        text:'Отличный прочный пояс'
    },
    {
        id: 42,
        header:'качественный',
        name: 'Кондрат',
        avatar: imgPath + 'avatar.png',
        idProduct: '20',
        text:'На ощупь и по всем остальным ощущениям ремень очень качественный.'
    },
    {
        id: 43,
        header:'рекоомендую',
        name: 'Тихон',
        avatar: imgPath + 'avatar.png',
        idProduct: '21',
        text:'крутые, приятные. цена супер'
    },
    {
        id: 44,
        header:'спасибо',
        name: 'Игорь',
        avatar: imgPath + 'avatar.png',
        idProduct: '21',
        text:'качество приличное!'
    },
    {
        id: 45,
        header:'шикарно',
        name: 'Венедикт',
        avatar: imgPath + 'avatar.png',
        idProduct: '22',
        text:'Очень удобные, мягкие'
    },
    {
        id: 46,
        header:'Рекомендую',
        name: 'Евстафий',
        avatar: imgPath + 'avatar.png',
        idProduct: '22',
        text:'Размер в размер.Без изъянов.'
    },
    {
        id: 47,
        header:'очень понравились',
        name: 'Зиновий',
        avatar: imgPath + 'avatar.png',
        idProduct: '22',
        text:'внешне выглядят отлично, по ноге сидят идеально, мягкие, удобные'
    },
    {
        id: 48,
        header:'Полное соответствие',
        name: 'Тарас',
        avatar: imgPath + 'avatar.png',
        idProduct: '22',
        text:'Бомба! Все соответствует описанию.'
    },
    {
        id: 49,
        header:'Это шедевр!',
        name: 'Диана',
        avatar: imgPath + 'avatar.png',
        idProduct: '23',
        text:'Заказывала эти сапоги в том году!!! Относила всю зиму, как говорят и в пир, и в мир!!! ' +
            'В этом году как новые, очень удобные, мягкие, качественные!!!'
    },
    {
        id: 50,
        header:'Любимые сапоги',
        name: 'Виталий',
        avatar: imgPath + 'avatar.png',
        idProduct: '23',
        text:'Эти сапоги одни из любимых. Особенно радует подошва, высокий рант защищает кожу от грязи и реагентов.'
    },
    {
        id: 51,
        header:'Работает!',
        name: 'Милена',
        avatar: imgPath + 'avatar.png',
        idProduct: '24',
        text:'Пояс прелесть, качество соответствует цене. Уже "выгуляла". Спасибо производителю и магазину, что не перестаёте приятно удивлять.'
    },
    {
        id: 52,
        header:'Очень удобно и приятно',
        name: 'Карина',
        avatar: imgPath + 'avatar.png',
        idProduct: '24',
        text:'Пояс хорошего качества. Очень понравился. Внутри приятное письмо с открыткой от производителя.' +
            ' Шнур развязывается, можно регулировать'
    },
    {
        id: 53,
        header:'Покупайте! не пожалеете!',
        name: 'Светлана',
        avatar: imgPath + 'avatar.png',
        idProduct: '24',
        text:'Хороший пояс, соответствует описанию, качество хорошее'
    },
    {
        id: 54,
        header:'Вау!',
        name: 'Анна',
        avatar: imgPath + 'avatar.png',
        idProduct: '25',
        text:'Классная шапка,дочка в восторге!'
    },
    {

        id: 55,
        header:'нормально',
        name: 'Роза',
        avatar: imgPath + 'avatar.png',
        idProduct: '25',
        text:'Хорошая. Но я ожидала более плотного полотна.'
    },
    {
        id: 56,
        header:'Спасибо',
        name: 'Никита',
        avatar: imgPath + 'avatar.png',
        idProduct: '26',
        text:'Отлично. Благодарю'
    },
    {
        id: 57,
        header:'Супер!!!!!',
        name: 'Дорофей',
        avatar: imgPath + 'avatar.png',
        idProduct: '26',
        text:'СУПЕРРРРРРРРРР!!!!!! очень крутая вещь!!!!!купил себе сам, жене очень понравилось) сказала, что у меня хороший вкус.'
    },
    {
        id: 58,
        header:'Понравилось',
        name: 'Оксана',
        avatar: imgPath + 'avatar.png',
        idProduct: '27',
        text:'Я довольна заказом. Пришёл довольно быстро'
    },
    {
        id: 59,
        header:'Отличная доставка',
        name: 'Христофор',
        avatar: imgPath + 'avatar.png',
        idProduct: '27',
        text:'Этот заказ прибыл очень быстро всем рекомендую этого продавца'
    },
    {
        id: 60,
        header:'ок',
        name: 'Иннокентий',
        avatar: imgPath + 'avatar.png',
        idProduct: '28',
        text:'всё ок спасибо'
    },
    {
        id: 61,
        header:'Спасибо',
        name: 'Анфим',
        avatar: imgPath + 'avatar.png',
        idProduct: '28',
        text:'Пришел довольно быстро. Цвет и материал прекрасны'
    },
    {
        id: 62,
        header:'Отлично',
        name: 'Пётр',
        avatar: imgPath + 'avatar.png',
        idProduct: '29',
        text:'Всё пришло отлично'
    },
    {
        id: 63,
        header:' ',
        name: 'Кузьма',
        avatar: imgPath + 'avatar.png',
        idProduct: '29',
        text:'спасибо'
    },
    {
        id: 64,
        header:'качественный',
        name: 'Борис',
        avatar: imgPath + 'avatar.png',
        idProduct: '30',
        text:'качество хорошее, бумага довольно плотная желтоватая'
    },
    {
        id: 65,
        header:'всё пришло',
        name: 'Фома',
        avatar: imgPath + 'avatar.png',
        idProduct: '30',
        text:'Он хорошо упакован, свернут вокруг поролонового цилиндра и не имеет никаких морщин.'
    },
    {
        id: 66,
        header:'доволен',
        name: 'Демьян',
        avatar: imgPath + 'avatar.png',
        idProduct: '31',
        text:'Товаром доволен, упаковка стандартная'
    },
    {
        id: 67,
        header:'понравилось',
        name: 'Хильда',
        avatar: imgPath + 'avatar.png',
        idProduct: '31',
        text:'Интересная плотная, как бы состаренная бумага'
    },
    {
        id: 68,
        header:'могёте',
        name: 'Созон',
        avatar: imgPath + 'avatar.png',
        idProduct: '32',
        text:'классно збс четка умеете могёте'
    },
    {
        id: 69,
        header:'странно',
        name: 'Тамара',
        avatar: imgPath + 'avatar.png',
        idProduct: '32',
        text:'Очень хрупкий'
    },
    {
        id: 70,
        header:'спасибо',
        name: 'Иулиан',
        avatar: imgPath + 'avatar.png',
        idProduct: '33',
        text:'Заказ прибыл. Качество печати хорошее. Сын доволен.'
    },
    {
        id: 71,
        header:'да',
        name: 'Протасий',
        avatar: imgPath + 'avatar.png',
        idProduct: '33',
        text:'печать хорошая'
    },
    {
        id: 72,
        header:'Большое спасибо',
        name: 'Елена',
        avatar: imgPath + 'avatar.png',
        idProduct: '34',
        text:'Дошло все в целости и сохранности. Спасибо продавцу!!!'
    },
    {
        id: 73,
        header:'понравилось',
        name: 'Надежда',
        avatar: '',
        idProduct: '34',
        text:'Упакован очень хорошо, дошёл без повреждений'
    },
    {
        id: 74,
        header:'быстро и дёшево',
        name: 'Лукий',
        avatar: imgPath + 'avatar.png',
        idProduct: '35',
        text:'Доволен и всё. пришло очень быстро.'
    },
    {
        id: 75,
        header:'Очень не плохо',
        name: 'Ростислав',
        avatar: imgPath + 'avatar.png',
        idProduct: '35',
        text:'Посылку получил быстро, все было упаковано аккуратно. Все соответствует описанию. Только немного темнее..'
    },
    {
        id: 76,
        header:'Рекомендую',
        name: 'Арсений',
        avatar: imgPath + 'avatar.png',
        idProduct: '36',
        text:'Бумага плотная, рисунок хороший. Все соответствует заявленным критериям в описании.'
    },
    {
        id: 77,
        header:'Качественно',
        name: 'Сергей',
        avatar: imgPath + 'avatar.png',
        idProduct: '36',
        text:'Упакован качественно. Ничего не помято.'
    },
    {
        id: 78,
        header:'Хороше качество',
        name: 'Валентин',
        avatar: imgPath + 'avatar.png',
        idProduct: '37',
        text:'Довольно хорошее качество товара мне все очень понравилось.'
    },
    {
        id: 79,
        header:'без дефектов',
        name: 'Еремей',
        avatar: imgPath + 'avatar.png',
        idProduct: '37',
        text:'Упакован хорошо дефектов неимеется.'
    },
    {
        id: 80,
        header:'Супер',
        name: 'Святополк',
        avatar: imgPath + 'avatar.png',
        idProduct: '38',
        text:'Очень клевая штука за свои деньги.'
    },
    {
        id: 81,
        header:'Класс',
        name: 'Михаил',
        avatar: imgPath + 'avatar.png',
        idProduct: '38',
        text:'Классно. Пришло быстро, ничего не помялось. Качество на уровне.'
    },
    {
        id: 82,
        header:'Здорово!',
        name: 'Георгий',
        avatar: imgPath + 'avatar.png',
        idProduct: '39',
        text:'Очень хорошее качество, хорошо упакованы, хорошая расцветка, хороший размер.'
    },
    {
        id: 83,
        header:'ВАУ!',
        name: 'Платон',
        avatar: imgPath + 'avatar.png',
        idProduct: '39',
        text:'10из10!'
    },
    {
        id: 84,
        header:'Очень кочественно',
        name: 'Егор',
        avatar: imgPath + 'avatar.png',
        idProduct: '40',
        text:'Шикарное качество'
    },
    {
        id: 85,
        header:'быстро и хорошо!',
        name: 'Леонтий',
        avatar: imgPath + 'avatar.png',
        idProduct: '40',
        text:'Всё пришло очень быстро и в целости'
    },
    {
        id: 86,
        header:'Очень понравилось',
        name: 'Феликс',
        avatar: imgPath + 'avatar.png',
        idProduct: '41',
        text:'Ставлю лайк как в фалауте. Товар пришло быстро)'
    },
    {
        id: 87,
        header:'Рекомендую',
        name: 'Артур',
        avatar: imgPath + 'avatar.png',
        idProduct: '41',
        text:'Просто покупайте! Поверьте, оно того стоит!'
    },
    {
        id: 88,
        header:'Отлично',
        name: 'Мирон',
        avatar: imgPath + 'avatar.png',
        idProduct: '42',
        text:'Качество отличное.Товаром доволен. Отправили быстро.'
    },
    {
        id: 89,
        header:'Понравилось!',
        name: 'Лаврентий',
        avatar: imgPath + 'avatar.png',
        idProduct: '42',
        text:'Хорошая бумага, такое можно и в рамку повесить. Продавец хорошо упаковал,ничего не измялось, положили в подарок наклейку.'
    }
];

export default blogList;