const imgPath = '../../src/img/';

const manufacturerList = [
    {
        id: 1,
        name: 'Сварог',
        photo: imgPath + 'Svarog.jpg',
        specialization: 'Weapon,Armor',
        rating: '10',
        description: 'Сварог – источник огня и его повелитель. Он творит не словом, не магией, а руками, он ' +
            'создает материальный мир.'
    },
    {
        id: 2,
        name: 'Велунд',
        photo: imgPath + 'Velund.jpg',
        specialization: 'Weapon,Armor',
        rating: '8',
        description: 'Велунд чудесный бог-кузнец. Он прославился как мастер по кольчугам и мечам. Он был талантливым ' +
            'мастером и выковал исландский лабиринт – Дом Велунда.'
    },
    {
        id: 3,
        name: 'Вулкан',
        photo: imgPath + 'Vulcan.jpg',
        specialization: 'Weapon,Armor',
        rating: '7',
        description: 'Вулкан — бог огня и покровитель кузнечного ремесла. Изготовил оружие и доспехи для многих ' +
            'богов и героев. Его кузница находилась в вулкане Этна (Сицилия). Себе в помощь создал золотых женщин.'
    },
    {
        id: 4,
        name: 'Синдри и Брок',
        photo: imgPath + 'SindryAndBrok.jpg',
        specialization: 'Weapon',
        rating: '6',
        description: 'Карликами-двергам Брок и Синдри создали золотое кольцо Драупнир, вепря с золотой щетиной ' +
            'Гуллинбурсти и молот Мьёллнир.'
    },
    {
        id: 5,
        name: 'Гефест',
        photo: imgPath + 'Gefest.jpg',
        specialization: 'Weapon,Armor',
        rating: '9',
        description: 'Гефест - бог огня, самый искусный кузнец, покровитель кузнечного ремесла, изобретений, ' +
            'строитель всех зданий на Олимпе, изготовитель молний Зевса.'
    },
    {
        id: 6,
        name: 'Гоибниу',
        photo: imgPath + 'Goibniu.jpg',
        specialization: 'Weapon,Armor',
        rating: '8',
        description: 'Гоибниу - бог-кузнец. Способен всего тремя ударами молота изготовлял магические мечи или ' +
            'копья. Копья Гоибниу не пролетали мимо цели, а оставленные ими раны не заживали вовек. Помогали ' +
            'Гоибниу медник Кредне, делавший заклёпки для копий, кромки щитов, клинки для мечей и рукояти, а ' +
            'также плотник Лухта, изготавливающий щиты и древки для копий.'
    },
    {
        id: 7,
        name: 'Замок',
        photo: imgPath + 'Castle.png',
        specialization: 'Spell',
        rating: '9',
        description: 'Рыцарский город, в котором присутствуют существа, наиболее близкие к реальным, вместе с ' +
            'мифическими грифонами и ангелами. У города хорошо оснащённая армия, включая двух стрелков и двух ' +
            'летающих воинов, при быстрой доступности для найма. Герои-воины Замка зовутся рыцарями, герои-маги ' +
            'монахами, а родной землёй его существ является трава.'
    },
    {
        id: 8,
        name: 'Оплот',
        photo: imgPath + 'Rampart.jpg',
        specialization: 'Spell',
        rating: '7',
        description: 'город, представляющий собой гармоничное сосуществование цивилизации и дикой природы и ' +
            'населённый лесными созданиями (эльфами, гномами, единорогами, дендроидами), а также являющийся ' +
            'домом для «добрых» зелёных и золотых драконов. Сильные существа Оплота отличаются высоким сопротивлением ' +
            'магии. Сам город, благодаря особым постройкам, обладает самой мощной экономикой в игре. Герои-воины ' +
            'Оплота зовутся рейнджерами, герои-маги друидами.'
    },
    {
        id: 9,
        name: 'Башня',
        photo: imgPath + 'Tower.png',
        specialization: 'Spell',
        rating: '10',
        description: 'магический город с высокой башенной архитектурой, больше других в игре ориентированный на ' +
            'волшебство. Герои-воины, называемые алхимиками, по умолчанию обладают книгой заклинаний, а герои-маги ' +
            'имеют большу́ю вероятность развить все магические навыки. Особое строение Башни добавляет больше ' +
            'заклинаний в Гильдию магов. Среди армий города присутствуют существа, призванные на службу благодаря ' +
            'сильному колдовству, такие как гаргульи и големы, и существа вроде наг, джиннов и гигантов, заключившие ' +
            'с городом древний союз. Их родной землёй является снег.'
    },
    {
        id: 10,
        name: 'Инферно',
        photo: imgPath + 'Inferno.jpg',
        specialization: 'Spell',
        rating: '5',
        description: 'город со «злым» мировоззрением, выполненный в классическом представлении Ада и населённый ' +
            'соответствующими тварями — бесами, церберами, демонами, дьяволами. Существа Инферно самые слабые в ' +
            'игре, но при этом одни из самых быстрых; сам город ориентирован на использование магии (преимущественно, ' +
            'огненной). Герои-воины Инферно называются демонами, герои-маги — еретиками. Родной землёй существ ' +
            'Инферно является лава.'
    },
    {
        id: 11,
        name: 'Некрополис',
        photo: imgPath + 'Necropolis.jpg',
        specialization: 'Spell',
        rating: '4',
        description: 'город смерти, воины которого состоят из живых мертвецов, привидений и вампиров. Герои ' +
            'Некрополиса (рыцари смерти и некроманты) существенно отличаются от остальных, поскольку у всех ' +
            'них изначально имеется навык «Некромантия», позволяющий создавать скелетов из погибших в бою существ. ' +
            'Родным типом земли для нежити является грязь.'
    },
    {
        id: 12,
        name: 'Поземелье',
        photo: imgPath + 'Dungeon.png',
        specialization: 'Spell',
        rating: '8',
        description: 'город лордов и чернокнижников, преследующих богатство и власть. Их армии состоят из союзных ' +
            'и порабощённых обитателей подземелий: троглодитов, гарпий, медуз, минотавров, красных и чёрных драконов. ' +
            'Подземный ландшафт является родным для существ этого города. Подземелье специализируется на ' +
            'использовании магии, особенно на разрушительных заклинаниях; при этом одним из существ города является ' +
            'чёрный дракон, обладающий полным иммунитетом к волшебству.'
    },
    {
        id: 13,
        name: 'Цитадель',
        photo: imgPath + 'Stronghold.jpg',
        specialization: 'Spell',
        rating: '6',
        description: 'город варваров, относящийся к фракциям с «нейтральным» мировоззрением и больше всего ' +
            'ориентированный на атаку, в то время как магия в нём играет очень слабую роль. Армию Цитадели ' +
            'составляют гоблиноподобные существа (гоблины, орки, огры) и огромные монстры, такие как птицы рухи ' +
            'и циклопы, хорошо подходящие для штурма вражеских городов. Герои города делятся на варваров и боевых ' +
            'магов. Родная земля Цитадели — камни.'
    },
    {
        id: 14,
        name: 'Крепость',
        photo: imgPath + 'Fortress.jpg',
        specialization: 'Spell',
        rating: '8',
        description: 'город, населённый жителями болот, представленных в игре в виде гноллов и ящероподобных ' +
            'созданий — змиев, василисков, виверн, гидр. Герои-воины Крепости зовутся хозяевами зверей, а ' +
            'магические герои — ведьмами. Как и Цитадель, город Крепость не специализируется на магии, но ' +
            'целиком посвящён защите. В Крепости есть ряд строений, улучшающих защиту героев и гарнизона, а ' +
            'ров города — единственный из всех имеет ширину в 2 клетки, что существенно замедляет продвижение ' +
            'вражеских войск при осаде.'
    },
    {
        id: 15,
        name: 'Сопряжение',
        photo: imgPath + 'Conflux.jpg',
        specialization: 'Spell',
        rating: '10',
        description: 'Этот магический город является прибежищем стихийных элементалей, а также фей и птиц ' +
            'фениксов. Боевые герои и маги Сопряжения делятся на путешественников и элементалистов. Сопряжение ' +
            'считается очень дисбалансным городом с точки зрения игровых сообществ — из-за слишком сильных ' +
            'существ, героев и магии. Родной землёй города является трава.'
    }
];

export default manufacturerList