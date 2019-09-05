import React, {Component} from "react";
import {connect} from 'react-redux';
import {Accordion, Icon} from 'semantic-ui-react'
import './FAQPage.scss';
import Catalog from '../catalog/catalog'

class FAQ extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeIndex: 0
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e, titleProps) {
        const {index} = titleProps;
        const {activeIndex} = this.state;
        const newIndex = activeIndex === index ? -1 : index;

        this.setState({activeIndex: newIndex})
    };

    render() {
        return (
            <div id="mainRem2">
                <div id="rem2">
                    <Catalog/>
                </div>
                <div id="myAccordion">
                    <Accordion inverted>
                        <Accordion.Title active={this.state.activeIndex === 0} index={0} onClick={this.handleClick}>
                            <div className="dropdownFlex">
                                Мечи
                                <Icon name='dropdown'/>
                            </div>
                        </Accordion.Title>
                        <Accordion.Content active={this.state.activeIndex === 0}>
                            <p className="textIndent">
                                Использование образа меча в мифологиях является способом противопоставления
                                «жизнь-смерть».
                            </p>
                            <p className="textIndent">
                                Меч используется, чтобы отсекать всё «недостойное и бесплодное», он символизирует начало
                                высшей справедливости.
                            </p>
                            <p className="textIndent">
                                В Новое время он благодаря своей форме визуально сближается с христианским распятием,
                                поэтому меч приобретает
                                дополнительную символику единения, братства, став символом рыцарства, предметом, на
                                котором клялись.
                                Практически все достойные герои-воины Средневековья имеют собственные именные мечи,
                                которые становятся им верными спутниками и друзьями.
                            </p>
                            <p className="textIndent">
                                Меч, будучи выкованным в огне, также был связан с хтоническими силами — он
                                отождествляется с молнией,
                                атрибутом бога-громовержца. Огромный меч, иногда из небесного огня, является оружием
                                солярных богов и
                                культурных героев, поэтому он используется для борьбы с «тёмными» чудовищами, для защиты
                                девственницы.
                            </p>
                            <p className="textIndent">
                                Эта зависимость от стихии делает меч инструментом связи со всеми мирами. Например, герои
                                могут добывать
                                его изнутри камня, из-под камня, то есть из мира «подземного», либо из ствола дерева,
                                из-под воды. Таким
                                образом, меч может служить «мостом в другой мир».
                            </p>
                            <p className="textIndent">
                                Фольклор выделяет различные функции волшебных мечей — мечи-саморубы, мечи, делающие их
                                владельца неуязвимым,
                                невидимым; говорящие мечи, способные заколдовывать и расколдовывать, усыплять,
                                переносить по воздуху.
                            </p>
                        </Accordion.Content>

                        <Accordion.Title active={this.state.activeIndex === 1} index={1} onClick={this.handleClick}>
                            <div className="dropdownFlex">
                                Копья
                                <Icon name='dropdown'/>
                            </div>
                        </Accordion.Title>
                        <Accordion.Content active={this.state.activeIndex === 1}>
                            <p className="textIndent">
                                Копьё, как более «раннее» оружие, чем меч, является атрибутом не только воина, но и
                                охотника, как героя,
                                так и божества.
                            </p>
                            <p className="textIndent">
                                Также копьё является символом войны и фаллическим символом. «Это
                                оружие
                                приземлённого
                                характера, в отличие от небесных, божественных скрытых смыслов меча». С символической
                                точки зрения копьё
                                можно сравнить с ветвью, деревом, крестом, а также с обозначением пространственной
                                ориентировки.
                            </p>
                            <p className="textIndent">
                                Раймунд Луллий в «Записках дворянского ордена» выражает веру в то, что копьё дано рыцарю
                                как символ высокой
                                нравственности. «Окровавленное копьё», о котором упоминается в легенде о Граале, иногда
                                трактуется как копьё
                                страстных желаний и вожделений, то есть в смысле Страсти как таковой. Некоторые авторы
                                не согласны с таким
                                толкованием, для них приемлема интерпретация копья как жертвенного символа.
                            </p>
                        </Accordion.Content>

                        <Accordion.Title active={this.state.activeIndex === 2} index={2} onClick={this.handleClick}>
                            <div className="dropdownFlex">
                                Трезубцы
                                <Icon name='dropdown'/>
                            </div>
                        </Accordion.Title>
                        <Accordion.Content active={this.state.activeIndex === 2}>
                            <p className="textIndent">
                                Обычно встречались в качестве атрибута лишь у божеств, причём связанных со стихиями. «Во
                                многих случаях
                                символика трезубца связана с магией числа три и с солярными символами: крестом,
                                свастикой».
                                Также относится к группе фаллических символов.
                            </p>
                            <p className="textIndent">
                                Трезубец — оружие, которое состоит из длинного древка и наконечника, увенчанного тремя
                                зубцами.
                                Как и многие другие колюще-рубящие виды оружия, трезубец произошёл от повседневного
                                мирного инструмента, в
                                данном случае остроги, применяемой для рыбной ловли до наших дней. Изначальным
                                материалом являлись кости.
                                При переформировании трезубца из инструмента охоты в оружие исчезли крючки на концах
                                зубцов, которыми
                                удерживалась рыба. В ближнем бою этот эффект был не востребован.
                            </p>
                            <p className="textIndent">
                                Трезубец использовали
                                как копьё, с его
                                помощью можно было также захватывать оружие противника. Это оружие было распространено
                                во времена Римской
                                империи у гладиаторов (ретиариев).
                            </p>
                        </Accordion.Content>

                        <Accordion.Title active={this.state.activeIndex === 3} index={3} onClick={this.handleClick}>
                            <div className="dropdownFlex">
                                Луки
                                <Icon name='dropdown'/>
                            </div>
                        </Accordion.Title>
                        <Accordion.Content active={this.state.activeIndex === 3}>
                            <p className="textIndent">
                                Луки также чаще являлись оружием богов, а не героев.
                            </p>
                            <p className="textIndent">
                                Так, лук Шивы был эмблемой его
                                силы. «На этом
                                символизме основывается понятие „напряжения“ (натяжения), четко определенное Гераклитом
                                и тесно связанной
                                с жизненной и духовной силой.
                            </p>
                            <p className="textIndent">
                                Benoist отмечает, что лук и стрелы, как атрибуты Аполлона,
                                олицетворяют
                                энергию солнца, его лучи, мощь улучшения и очищения».
                            </p>
                        </Accordion.Content>

                        <Accordion.Title active={this.state.activeIndex === 4} index={4} onClick={this.handleClick}>
                            <div className="dropdownFlex">
                                Стрелы
                                <Icon name='dropdown'/>
                            </div>
                        </Accordion.Title>
                        <Accordion.Content active={this.state.activeIndex === 4}>
                            <p className="textIndent">
                                Стрелы обычно символизируют свет высшей силы. И в Древней Греции, и в доколумбовой
                                Америке они обозначали солнечные лучи.
                            </p>
                        </Accordion.Content>

                        <Accordion.Title active={this.state.activeIndex === 5} index={5} onClick={this.handleClick}>
                            <div className="dropdownFlex">
                                Боевой молот
                                <Icon name='dropdown'/>
                            </div>
                        </Accordion.Title>
                        <Accordion.Content active={this.state.activeIndex === 5}>
                            <p className="textIndent">
                                Древнейшее древковое дробящее оружие, функционально аналогичное булаве.
                            </p>
                            <p className="textIndent">
                                В позднее
                                Средневековье —
                                разновидности универсального древкового оружия, имеющего на боевой части в различных
                                сочетаниях молоток,
                                клюв, топорик и предназначающегося для нанесения дробящих, рубящих и колющих ударов.
                            </p>
                            <p className="textIndent">
                                Самый известный боевой молот, носящий имя собственное — Мьёлльнир, мифический молот
                                Тора,
                                ставший религиозным символом, амулетом и геральдической эмблемой.
                            </p>
                        </Accordion.Content>

                        <Accordion.Title active={this.state.activeIndex === 6} index={6} onClick={this.handleClick}>
                            <div className="dropdownFlex">
                                Клевец
                                <Icon name='dropdown'/>
                            </div>
                        </Accordion.Title>
                        <Accordion.Content active={this.state.activeIndex === 6}>
                            <p className="textIndent">
                                Односторонний клювовидный выступ на холодном оружии для нанесения точечного удара,
                                впоследствии
                                на Руси развившийся в боевой молот с таким клювом (молот-клевец, «молот с клювом
                                сокола»),
                                имевший ударную часть в форме клюва, плоского, гранёного или круглого в сечении, который
                                мог
                                быть разной длины, чаще в разной степени изогнутым книзу. Обычно клюв был скомбинирован
                                с молотком,
                                реже — с топориком.
                            </p>
                            <p className="textIndent">
                                На Руси применялись только короткодревковые разновидности, тогда как
                                в Западной
                                и Центральной Европе, а также на Дальнем Востоке были в ходу и длиннодревковые типы
                                такого оружия,
                                такие, как люцернский молот.
                            </p>
                        </Accordion.Content>

                        <Accordion.Title active={this.state.activeIndex === 7} index={7} onClick={this.handleClick}>
                            <div className="dropdownFlex">
                                Кама
                                <Icon name='dropdown'/>
                            </div>
                        </Accordion.Title>
                        <Accordion.Content active={this.state.activeIndex === 7}>
                            <p className="textIndent">
                                Вид холодного оружия, распространённый на Окинаве. Представляет собой короткое изогнутое
                                лезвие,
                                насаженное на короткую рукоять перпендикулярно ей. Он более похож на косу, чем на серп.
                            </p>
                            <p className="textIndent">
                                Его
                                прототипом был сельскохозяйственный инструмент — серп для уборки риса, который приобрёл
                                боевое
                                значение после аннексии Окинавы Японией и ввода запрета на традиционное холодное оружие.
                            </p>
                            <p className="textIndent">
                                Применяется подобно европейскому клевцу, но благодаря наличию лезвия может ещё рубить и
                                резать;
                                наиболее эффективно в ближнем бою. Также возможно применение в качестве метательного
                                оружия.
                            </p>
                        </Accordion.Content>

                        <Accordion.Title active={this.state.activeIndex === 8} index={8} onClick={this.handleClick}>
                            <div className="dropdownFlex">
                                Шлем
                                <Icon name='dropdown'/>
                            </div>
                        </Accordion.Title>
                        <Accordion.Content active={this.state.activeIndex === 8}>
                            <p className="textIndent">
                                В Первобытном мире защитные головные уборы делались из дерева, бересты, сплетённых
                                прутьев, кожи,
                                а также шкур животных. После того, как искусство обработки металла в древних
                                цивилизациях достигло
                                достаточного уровня, они получили возможность изготавливать металлические шлемы.
                            </p>
                            <p className="textIndent">
                                Древнейшие шлемы,
                                сделанные из меди и золота, найдены в царских гробницах Ура и датируются 3 тысячелетием
                                до н. э..
                                Однако подобные изделия были слишком дорогими, поэтому долгое время оставались
                                недоступными
                                большинству воинов. Например, в Древнем Египте для защиты головы воины носили круглые
                                шапочки
                                из кожи или льна, иногда усиленные металлическими пластинами. По этой же причине
                                неметаллические
                                защитные наголовья применялись и гораздо позднее разными народами; например, в Средние
                                века среди
                                кочевников бытовала так называемая шапка бумажная.
                            </p>
                            <p className="textIndent">
                                Железные шлемы впервые появились в
                                VIII—VII
                                веках до н. э. в Урарту и Ассирии и имели сфероконическую шеломовидную форму. Однако
                                получить
                                преобладание над бронзовыми железные шлемы в разных регионах смогли получить лишь в 1
                                тысячелетии нашей эры.
                            </p>
                        </Accordion.Content>

                        <Accordion.Title active={this.state.activeIndex === 9} index={9} onClick={this.handleClick}>
                            <div className="dropdownFlex">
                                Щит
                                <Icon name='dropdown'/>
                            </div>
                        </Accordion.Title>
                        <Accordion.Content active={this.state.activeIndex === 9}>
                            <p className="textIndent">
                                Вид вооружения, предназначенный для защиты от холодного ручного и метательного оружия и
                                в какой-то
                                степени — от огнестрельного.
                            </p>
                            <p className="textIndent">
                                Щиты появились в глубокой древности, однако уже к Позднему Средневековью их значение
                                уменьшилось
                                по причине совершенствования доспехов и развития фехтования. С распространением
                                огнестрельного оружия
                                щиты утратили боевую ценность. Тем не менее, в последующее время в странах Европы имело
                                место
                                изготовление декоративных щитов (которые являлись репликой средневековых щитов, но не
                                были
                                предназначены для практического использования — они служили для украшения помещений в
                                замках и
                                дворцах аристократии).
                            </p>
                        </Accordion.Content>

                        <Accordion.Title active={this.state.activeIndex === 10} index={10} onClick={this.handleClick}>
                            <div className="dropdownFlex">
                                Бригантина (доспех)
                                <Icon name='dropdown'/>
                            </div>
                        </Accordion.Title>
                        <Accordion.Content active={this.state.activeIndex === 10}>
                            <p className="textIndent">
                                Доспех из пластин, наклёпанных под суконную или стеганную льняную основу.
                            </p>
                            <p className="textIndent">
                                Основа
                                рыцарских
                                бригантин нередко покрывалась бархатом или другими дорогими и красивыми тканями, иногда
                                с гербами,
                                а заклёпкам придавалась декоративная форма.
                            </p>
                            <p className="textIndent">
                                Бригантина, изначально возникнув в XIII—XIV веках как элемент военного снаряжения,
                                доступный
                                только для феодалов, к началу XV века получила широкое распространение, став типичным
                                доспехом пехотинца.
                            </p>
                        </Accordion.Content>

                        <Accordion.Title active={this.state.activeIndex === 11} index={11} onClick={this.handleClick}>
                            <Icon name='dropdown'/>
                            Кольчуга
                        </Accordion.Title>
                        <Accordion.Content active={this.state.activeIndex === 11}>
                            <p className="textIndent">
                                Доспех, сплетённый из железных колец, металлическая сеть для защиты от поражения
                                холодным оружием.
                                Носила (в зависимости от разновидности) различные названия: кольчуга, панцирь, байдана,
                                яцерин.
                            </p>
                            <p className="textIndent">
                                Использовались разные виды кольчуг — от кольчужной рубахи, прикрывавшей только туловище
                                и плечи
                                до полных хауберков (hauberk), покрывавших тело полностью, с головы до ног.
                            </p>
                            <p className="textIndent">
                                Кольчуги получили широкое распространение как в Европе, так и в Азии благодаря простой
                                технологии
                                изготовления. Чтобы изготовить кольчугу требовалось только несколько килограммов железа,
                                устройство для вытяжки проволоки и терпение для однообразной работы по изготовлению из
                                проволоки
                                колец и плетению из колец самой кольчуги (для кольчужной рубахи это несколько сотен
                                человеко-часов,
                                не учитывая время изготовления проволоки или ковки колец индивидуально).
                            </p>
                            <p className="textIndent">
                                После
                                изготовления такой
                                доспех мог служить практически вечно — при его повреждении было достаточно залатать
                                кольчугу
                                пригоршней новых колец.
                            </p>
                        </Accordion.Content>

                        <Accordion.Title active={this.state.activeIndex === 12} index={12} onClick={this.handleClick}>
                            <div className="dropdownFlex">
                                Латный доспех
                                <Icon name='dropdown'/>
                            </div>
                        </Accordion.Title>
                        <Accordion.Content active={this.state.activeIndex === 12}>
                            <p className="textIndent">
                                Изделие, доспех из различных по форме и размеру металлических пластин, откованных по
                                форме частей
                                тела воина и лошади, для их защиты.
                            </p>
                            <p className="textIndent">
                                Полный латный доспех использовался с конца XIV — начала XV века по конец XVI века. До
                                этого рыцари
                                надевали перед боем стальной шлем и кольчугу, начиная с XIII века дополнявшиеся англ.
                                coat of plates —
                                ранней бригантиной, представлявшей собой сюрко, усиленное подкладкой из металлических
                                пластин.
                            </p>
                            <p className="textIndent">
                                В XIV
                                веке появились классические бригантины, проэволюционировавшие к концу века в латную
                                кирасу (в XIII
                                веке кирасой назывался нагрудник из вываренной кожи). И в том же XIV веке появилась
                                латная защита
                                конечностей, изначально носившаяся с бригантиной.
                            </p>
                        </Accordion.Content>

                        <Accordion.Title active={this.state.activeIndex === 13} index={13} onClick={this.handleClick}>
                            <div className="dropdownFlex">
                                <Icon name='dropdown'/>
                                Наплечники
                            </div>
                        </Accordion.Title>
                        <Accordion.Content active={this.state.activeIndex === 13}>
                            <p className="textIndent">
                                Часть доспеха, имела полукруглую или изогнутую форму, защищала плечо и шею носителя, а
                                также
                                идентифицировала человека. Делалась целиком из металла, очень редко содержала в себе
                                кожу.
                            </p><p className="textIndent">
                            Возникли в XV веке. Гербовые наплечники (ailettes) носились рыцарями до появления
                            настоящих
                            металлических наплечников. В связи с тем что они, как и щиты того времени, были сделаны
                            из дерева
                            и кожи, они носились в основном на турнирах и парадах, и в отличие от настоящих погон
                            служили
                            лишь для ношения гербов.
                        </p>
                        </Accordion.Content>

                        <Accordion.Title active={this.state.activeIndex === 14} index={14} onClick={this.handleClick}>
                            <div className="dropdownFlex">
                                Наручи
                                <Icon name='dropdown'/>
                            </div>
                        </Accordion.Title>
                        <Accordion.Content active={this.state.activeIndex === 14}>
                            <p className="textIndent">
                                Часть доспехов, защищающая руки от кисти до локтя.
                            </p><p className="textIndent">
                            Словом наручи, на Руси (в России), также назывались запястья, поручи и широкий браслет,
                            закреплявший рукава одежды.
                        </p><p className="textIndent">
                            Простейшие наручи изготавливались по шинному типу и представляли собой металлические
                            пластины,
                            закреплённые на кожаной основе. Однако они уступали цельнометаллическим наручам,
                            появившимся,
                            вероятно, в Западной Азии. Наиболее совершенными являются наручи трубчатого типа. Такой
                            наруч
                            состоит из двух сильно изогнутых пластин — верхней (локотник) и нижней (черевец). Эти
                            пластины
                            могли соединяться шарнирно, а закрываться с помощью ремешков и пряжек.
                        </p>
                        </Accordion.Content>

                        <Accordion.Title active={this.state.activeIndex === 15} index={15} onClick={this.handleClick}>
                            <div className="dropdownFlex">
                                Кольчужные перчатки
                                <Icon name='dropdown'/>
                            </div>
                        </Accordion.Title>
                        <Accordion.Content active={this.state.activeIndex === 15}>
                            <p className="textIndent">
                                Для защиты рук к XII веку были изобретены кольчужные рукава, оканчивающиеся кольчужными
                                рукавицами
                                или, реже, перчатками с отдельными пальцами.
                            </p>
                            <p className="textIndent">
                                Разрез между рукавом и рукавицей позволял
                                извлекать
                                из кольчуги кисть руки в небоевой обстановке.
                            </p>
                            <p className="textIndent">
                                Использование кольчужных рукавиц
                                продолжалось до
                                XIV века, когда они были вытеснены латными рукавицами.
                            </p>
                        </Accordion.Content>

                        <Accordion.Title active={this.state.activeIndex === 16} index={16} onClick={this.handleClick}>
                            <div className="dropdownFlex">
                                Латные перчатки
                                <Icon name='dropdown'/>
                            </div>
                        </Accordion.Title>
                        <Accordion.Content active={this.state.activeIndex === 16}>
                            <p className="textIndent">
                                Появились к середине XIV века, а за характерную форму носили прозвище «песочные часы».
                                Так как
                                представляли собой раструб в форме песочных часов, к которому крепились пальцы с защитой
                                из мелких чешуек.
                            </p>
                            <p className="textIndent">
                                В начале XV века были заметно потеснены появившимися в то время латными рукавицами,
                                способными
                                выдержать благодаря крупным пластинам прямой удар мечом по пальцам. Некоторые рукавицы
                                были способны
                                выдержать даже прямое попадание по большому пальцу, так как у них его защита состояла не
                                из двух и
                                более пластин, а одной единственной толстой пластины ложившейся «мостом» поверх крупных
                                пластин при
                                смыкании перчатки.
                            </p>
                        </Accordion.Content>

                        <Accordion.Title active={this.state.activeIndex === 17} index={17} onClick={this.handleClick}>
                            <div className="dropdownFlex">
                                Сабатон
                                <Icon name='dropdown'/>
                            </div>
                        </Accordion.Title>
                        <Accordion.Content active={this.state.activeIndex === 17}>
                            <p className="textIndent">
                                Латный ботинок. Крепился к наголеннику.
                            </p>
                            <p className="textIndent">
                                Первые латные сабатоны появились в Италии в
                                середине
                                XIV века и состояли из 4-5 сегментов, а по форме копировали тогдашнюю обувь, то есть
                                имели
                                короткий острый носок.
                            </p>
                            <p className="textIndent">
                                В XV веке в миланских и готических доспехах сабатоны делались с
                                длинным
                                острым носком, который для ходьбы отстёгивался.
                            </p>
                            <p className="textIndent"> В противоположность им сабатоны
                                максимилиановских
                                доспехов копировали тогдашнюю моду на обувь и делались широкими и тупыми, их за это
                                называли
                                «медвежьи лапы».
                            </p>
                            <p className="textIndent">
                                Более поздние сабатоны делались с круглым либо слегка заострённым
                                носком, и
                                тоже недлинные.
                            </p>
                            <p className="textIndent">
                                Вышли из употребления вместе с наголенниками во второй половине XVI
                                века.
                            </p>
                        </Accordion.Content>

                        <Accordion.Title active={this.state.activeIndex === 18} index={18} onClick={this.handleClick}>
                            <div className="dropdownFlex">
                                Наголенник
                                <Icon name='dropdown'/>
                            </div>
                        </Accordion.Title>
                        <Accordion.Content active={this.state.activeIndex === 18}>
                            <p className="textIndent">
                                Латная защита голени.
                            </p>
                            <p className="textIndent">
                                Первые наголенники появились в первой половине XIII века и
                                ковались из одной пластины,
                                привязывавшейся к голени шнурами.
                            </p>
                            <p className="textIndent">
                                В середине XIV века появились двухстворчатые
                                наголенники, части которых
                                соединялись снаружи петлями, а изнутри ремнями с пряжками. Конструктивно такой
                                наголенник выполнялся
                                анатомической формы, повторяя контуры ноги владельца. Снизу к нему на защёлке мог
                                крепиться латный сапог —
                                сабатон.
                            </p>
                            <p className="textIndent">
                                Наголенник также мог выполняться частью поножа, и тогда он крепился на шарнирах
                                к сегментному
                                наколеннику.
                            </p>
                            <p className="textIndent">
                                Конструкция наголенников не претерпела серьёзных изменений до второй
                                половины XVI века,
                                когда они вышли из употребления вместе с латными сапогами.
                            </p>
                        </Accordion.Content>

                        <Accordion.Title active={this.state.activeIndex === 19} index={19} onClick={this.handleClick}>
                            <div className="dropdownFlex">
                                Поножи
                                <Icon name='dropdown'/>
                            </div>
                        </Accordion.Title>
                        <Accordion.Content active={this.state.activeIndex === 19}>
                            <p className="textIndent">
                                Часть доспехов, которая защищает переднюю часть ноги от колена до щиколотки.
                            </p>
                            <p className="textIndent">
                                Согласно библейской
                                легенде, поножи были частью доспехов Голиафа во время его битвы с Давидом.
                            </p>
                            <p className="textIndent">
                                Поножи
                                получили широкое
                                распространение в античном мире. Применялись, в частности, древнегреческими воинами
                                (гоплитами),
                                а также римскими легионерами времен республики. Также поножи были распространены в
                                Средние века и
                                часто входили в стандартный комплект доспехов, наравне с наручами.
                            </p>
                            <p className="textIndent">
                                На Руси назывались бутурлыками (батарлыгами) и были в основном парадным вооружением.
                                Налядвенник —
                                ножной доспех, защищавший бедро от пояса до колена
                            </p>
                        </Accordion.Content>

                        <Accordion.Title active={this.state.activeIndex === 20} index={20} onClick={this.handleClick}>
                            <div className="dropdownFlex">
                                Магический свиток
                                <Icon name='dropdown'/>
                            </div>
                        </Accordion.Title>
                        <Accordion.Content active={this.state.activeIndex === 20}>
                            <p className="textIndent">
                                Позволяет сотворить заклинание с этого свитка на развитом уровне навыка
                                (если, конечно, уровень навыка героя не выше).
                            </p>
                            <p className="textIndent">
                                Этот пергаментный свиток полностью описывает ритуал заклинания, его мана-фактуру,
                                правильную
                                транскрипцию и необходимые пассы. Если герой будет держать этот свиток в левой руке, то
                                сможет
                                зачитывать это заклинание.
                            </p>
                        </Accordion.Content>
                    </Accordion>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        someWindow: state
    }
};

const mapDispatchToProps = (dispatch) => {
    return {}
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FAQ);