import React, {useEffect, useRef, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import AddIcon from '@material-ui/icons/Add';
// import SouthWestIcon from '@mui/icons-material/SouthWest';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import biglinemobile from "../image/img_38.png";
import owntreep from "../image/img_36.png";
import phone from "../image/img_95.png";
import sms from "../image/img_96.png";
import write from "../image/img_97.png";
import {useLocation} from "react-router-dom";





const useStyles = makeStyles((theme) => ({
    circleIcon: {
        borderRadius: 0, // Начальное значение border-radius для эффекта перехода
        transition: 'border-radius 0.3s', // Добавляем плавный эффект перехода для border-radius
        '&:hover': {
            borderRadius: '50%', // Изменяем border-radius при наведении для создания эффекта круглой формы
        },
    },
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        flexBasis: '33.33%',
        flexShrink: 0,
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
    },
    line: {
        borderTop: '2px solid #ccc',
        margin: '0px 0px 25px 5px', // Увеличиваем вертикальный отступ
        width: '100%',
        backgroundColor: '#5E6976', // Устанавливаем белый цвет для линии
    },
}));



export default function Faq() {
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const activeSection = params.get("section"); // Получаем значение параметра "section" из URL
    const supportRef = useRef(null);

    useEffect(() => {
        if (activeSection === "support" && supportRef.current) {
            setTimeout(() => {
                supportRef.current.scrollIntoView({behavior: "smooth"});
            }, 0);

        }
    }, [activeSection]);
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
    const [panelNumber, setPanelNumber] = React.useState(1); // Хранит текущий номер панели

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const handlePanelChange = (panel) => {
        setPanelNumber(panel);
    };


    // Состояния для копирования
    const [copiedEmail, setCopiedEmail] = useState(false);
    const [copiedPhone, setCopiedPhone] = useState(false);

    const emailRef = useRef(null);
    const phoneRef = useRef(null);

    useEffect(() => {
        const copyEmail = () => {
            const textToCopy = 'support@nloto.ru';
            navigator.clipboard.writeText(textToCopy)
                .then(() => {
                    setCopiedEmail(true);
                    setTimeout(() => setCopiedEmail(false), 1000);
                })
                .catch((err) => console.error('Unable to copy to clipboard', err));
        };

        const copyPhone = () => {
            const textToCopy = '8 800 333-7-333';
            navigator.clipboard.writeText(textToCopy)
                .then(() => {
                    setCopiedPhone(true);
                    setTimeout(() => setCopiedPhone(false), 1000);
                })
                .catch((err) => console.error('Unable to copy to clipboard', err));
        };

        const emailElement = emailRef.current;
        const phoneElement = phoneRef.current;

        if (emailElement) {
            emailElement.addEventListener('click', copyEmail);
        }
        if (phoneElement) {
            phoneElement.addEventListener('click', copyPhone);
        }

        return () => {
            if (emailElement) {
                emailElement.removeEventListener('click', copyEmail);
            }
            if (phoneElement) {
                phoneElement.removeEventListener('click', copyPhone);
            }
        };
    }, []);


    return (

        <div className={`centered-container ${classes.root}`}>

            <Accordion
                expanded={expanded === 'panel1'}
                onChange={handleChange('panel1')}
            >
                <AccordionSummary
                    expandIcon={expanded === 'panel1' ? <ExpandMoreIcon/> : <ExpandMoreIcon/>}
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    <Typography className={classes.heading}>
                        <b className={'heading-id'}></b> <p className={'heading-name'}>Кто является организатором и заказчиком акции?</p>
                    </Typography>
                </AccordionSummary>
                <AccordionDetails style={{color: expanded === 'panel1' ? '#5E6976' : '#5E6976'}}>
                    <Typography>
                        {expanded === 'panel1' && <div className={classes.line}></div>}
                        Организатором Акции, то есть лицом проводящим Акцию от собственного имени, является Общество с ограниченной ответственностью «БЭЙКЕР ПРОМОУШЕН», ИНН: 9722019695, КПП: 772201001. юр. адрес: 109316, г. Москва, ул. Талалихина, д. 41, стр. 9, этаж 6 офис 108, электронный адрес для связи с Организатором info@nloto-promo.ru. Организатор Акции действует в интересах и по заданию ООО «Спортивные Лотереи».
                        Заказчиком Акции, определяющим объект для рекламирования и осуществляющим финансирование призового фонда, а также реализующим условия Акции совместно с Организатором, является общество с ограниченной ответственностью «Спортивные Лотереи», ИНН: 5003133760, КПП:504301001, юр. Адрес: 142210, Московская область, г. Серпухов, пер. Клубный, д.1/2, помещ.203.
                    </Typography>
                </AccordionDetails>

            </Accordion>
            <Accordion
                expanded={expanded === 'panel2'}
                onChange={handleChange('panel2')}
                className={classes.hoverEffect}
            >
                <AccordionSummary
                    expandIcon={
                        expanded === 'panel2' ? <ExpandMoreIcon/> : <ExpandMoreIcon/>
                    }
                    aria-controls="panel2-content"
                    id="panel2-header"
                >
                    <Typography className={classes.heading}>
                        <b className={'heading-id'}></b> <p className={'heading-name'}>Кто может принимать участие в акции?</p>
                    </Typography>
                </AccordionSummary>
                <AccordionDetails style={{color: expanded === 'panel2' ? '#5E6976' : '#5E6976'}}>
                    <Typography>
                        {expanded === 'panel2' && <div className={classes.line}></div>}
                        Участником акции «Ваш билетик» может стать физическое лицо, достигшее 18-ти летнего возраста, совершающее действия, необходимые для участия в акции согласно настоящим Правилам (заключивший Договор с Организатором на участие в Акции).
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion
                expanded={expanded === 'panel3'}
                onChange={handleChange('panel3')}
                className={classes.hoverEffect}
            >
                <AccordionSummary
                    expandIcon={
                        expanded === 'panel3' ? <ExpandMoreIcon/> : <ExpandMoreIcon/>
                    }
                    aria-controls="panel2-content"
                    id="panel2-header"
                >
                    <Typography className={classes.heading}>
                        <b className={'heading-id'}></b> <p className={'heading-name'}>Какие лотерейные билеты участвуют в акции?</p>
                    </Typography>
                </AccordionSummary>
                <AccordionDetails style={{color: expanded === 'panel3' ? '#5E6976' : '#5E6976'}}>
                    <Typography>
                        {expanded === 'panel3' && <div className={classes.line}></div>}

                        Лотерейные билеты «Мечталлион», «Лавина призов», «12 Добрых дел», «Великолепная 8», «Пятая скорость», «Трижды три», «Форсаж-75»


                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion
                expanded={expanded === 'panel4'}
                onChange={handleChange('panel4')}
                className={classes.hoverEffect}
            >
                <AccordionSummary
                    expandIcon={
                        expanded === 'panel4' ? <ExpandMoreIcon/> : <ExpandMoreIcon/>
                    }
                    aria-controls="panel2-content"
                    id="panel2-header"
                >
                    <Typography className={classes.heading}>
                        <b className={'heading-id'}></b> <p className={'heading-name'}>Где необходимо приобрести лотерейный билет для участия в акции?</p>
                    </Typography>
                </AccordionSummary>
                <AccordionDetails style={{color: expanded === 'panel4' ? '#5E6976' : '#5E6976'}}>
                    <Typography>
                        {expanded === 'panel4' && <div className={classes.line}></div>}
                        В акции участвуют лотерейные билеты приобретенные в отделениях Почты России следующих городов: Москва, Санкт-Петербург, Краснодар, Екатеринбург
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion
                expanded={expanded === 'panel5'}
                onChange={handleChange('panel5')}
                className={classes.hoverEffect}
            >
                <AccordionSummary
                    expandIcon={
                        expanded === 'panel5' ? <ExpandMoreIcon/> : <ExpandMoreIcon/>
                    }
                    aria-controls="panel2-content"
                    id="panel2-header"
                >
                    <Typography className={classes.heading}>
                        <b className={'heading-id'}></b> <p className={'heading-name'}>Сколько билетов может принимать участие в акции? </p>
                    </Typography>
                </AccordionSummary>
                <AccordionDetails style={{color: expanded === 'panel5' ? '#5E6976' : '#5E6976'}}>
                    <Typography>
                        {expanded === 'panel5' && <div className={classes.line}></div>}
                        В акции участвуют лотерейные билеты на общую сумму не менее 300 рублей, приобретенные в отделениях «Почты России».
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion
                expanded={expanded === 'panel6'}
                onChange={handleChange('panel6')}
                className={classes.hoverEffect}
            >
                <AccordionSummary
                    expandIcon={
                        expanded === 'panel6' ? <ExpandMoreIcon/> : <ExpandMoreIcon/>
                    }
                    aria-controls="panel2-content"
                    id="panel2-header"
                >
                    <Typography className={classes.heading}>
                        <b className={'heading-id'}></b> <p className={'heading-name'}>Каковы сроки проведения акции «Ваш билетик»?</p>
                    </Typography>
                </AccordionSummary>
                <AccordionDetails style={{color: expanded === 'panel6' ? '#5E6976' : '#5E6976'}}>
                    <Typography>
                        {expanded === 'panel6' && <div className={classes.line}></div>}
                        Общий срок проведения акции «Ваш билетик» с «1» сентября 2024г. по «30» ноября 2024г. Период покупки лотерейных билетов для участия в акции происходит с «1» сентября 2024г. по «30» октября 2024г.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion
                expanded={expanded === 'panel7'}
                onChange={handleChange('panel7')}
                className={classes.hoverEffect}
            >
                <AccordionSummary
                    expandIcon={
                        expanded === 'panel7' ? <ExpandMoreIcon/> : <ExpandMoreIcon/>
                    }
                    aria-controls="panel2-content"
                    id="panel2-header"
                >
                    <Typography className={classes.heading}>
                        <b className={'heading-id'}></b> <p className={'heading-name'}>В чем заключается акция и как принять в ней участие?</p>
                    </Typography>
                </AccordionSummary>
                <AccordionDetails style={{color: expanded === 'panel4' ? '#5E6976' : '#5E6976'}}>
                    <Typography>
                        {expanded === 'panel7' && <div className={classes.line}></div>}
                        Для участия в акции Вам необходимо в период с «1» сентября 2024г. по «30» октября 2024г.
                        приобрести лотерейные билеты «Мечталлион», «Лавина призов», «12 Добрых дел», «Великолепная 8», «Пятая скорость», «Трижды три», «Форсаж-75» на сумму не менее 300 рублей в отделениях Почты
                        России из следующих городов-участников: Москва, Санкт-Петербург Краснодар, Екатеринбург. Далее
                        зарегистрировать приобретенные билеты в акции «Ваш билетик». Для этого необходимо:
                        <br></br>- перейти на промо-сайт акции https://nloto-promo.ru/;
                        <br></br>- пройти регистрацию, то есть создать Личный кабинет на промо-сайт
                        https://nloto-promo.ru/, указав номер мобильного телефона и приняв согласие на обработку
                        персональных данных, установленных настоящими Правилами;
                        <br></br>- зарегистрировать приобретенные билеты на главной странице промо-акции и/или в
                        созданном личном кабинете, нажав на кнопку «Зарегистрировать билет». При этом, если лотерейный
                        билет приобретен с указанием номера мобильного телефона, то регистрировать билет не нужно. После
                        регистрации и/или авторизации он автоматически появится в вашем Личном кабинете. Если лотерейный
                        билет без указания номера мобильного телефона, то после регистрации и/или авторизации на
                        промо-сайте https://nloto-promo.ru/ на главной странице промо-акции и/или в созданном личном
                        кабинете нажмите на кнопку «Зарегистрировать билет» и введите номер лотерейного билета. Номер
                        лотерейного билета указан на оборотной стороны самого билета под штрих-кодом, а также на чеке
                        продажи.
                        <br></br>
                        <br></br>
                        За регистрацию лотерейных билетов на сумму не менее 300 рублей испытайте удачу в рулетке с
                        подарками в вашем личном кабинете на промо сайте акции https://nloto-promo.ru/.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion
                expanded={expanded === 'panel8'}
                onChange={handleChange('panel8')}
                className={classes.hoverEffect}
            >
                <AccordionSummary
                    expandIcon={
                        expanded === 'panel8' ? <ExpandMoreIcon/> : <ExpandMoreIcon/>
                    }
                    aria-controls="panel2-content"
                    id="panel2-header"
                >
                    <Typography className={classes.heading}>
                        <b className={'heading-id'}></b> <p className={'heading-name'}>Какие призы разыгрываются в акции?</p>
                    </Typography>
                </AccordionSummary>
                <AccordionDetails style={{color: expanded === 'panel4' ? '#5E6976' : '#5E6976'}}>
                    <Typography>
                        {expanded === 'panel8' && <div className={classes.line}></div>}
                        За регистрацию лотерейных билетов на сумму не менее 300 рублей Вы становитесь участником розыгрыша гарантированных призов. За участие в розыгрышах рулетки с подарками вы получите промокод* на лотерейный билет для участия в будущих тиражах от «Национальная Лотерея».
                        <br></br>*Для применения промокода перейдите на сайт nloto.ru из вашего личного кабинета на сайте акции. Пройдите авторизацию и/или регистрацию. При необходимости подтвердите Email и в разделе «Мои билеты» вы увидите приз-лотерейный билет, зарегистрированный на ближайший тираж.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion
                expanded={expanded === 'panel9'}
                onChange={handleChange('panel9')}
                className={classes.hoverEffect}
            >
                <AccordionSummary
                    expandIcon={
                        expanded === 'panel9' ? <ExpandMoreIcon/> : <ExpandMoreIcon/>
                    }
                    aria-controls="panel2-content"
                    id="panel2-header"
                >
                    <Typography className={classes.heading}>
                        <b className={'heading-id'}></b> <p className={'heading-name'}>Возможно ли выиграть несколько призов?</p>
                    </Typography>
                </AccordionSummary>
                <AccordionDetails style={{color: expanded === 'panel4' ? '#5E6976' : '#5E6976'}}>
                    <Typography>
                        {expanded === 'panel9' && <div className={classes.line}></div>}
                        Да, за каждую регистрацию на промо сайте акции https://nloto-promo.ru/ приобретенных лотерейных билетов в отделениях Почты России на сумму не менее 300 рублей, открывается возможность в прокрутке колеса с гарантированными призами.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion
                expanded={expanded === 'panel10'}
                onChange={handleChange('panel10')}
                className={classes.hoverEffect}
            >
                <AccordionSummary
                    expandIcon={
                        expanded === 'panel10' ? <ExpandMoreIcon/> : <ExpandMoreIcon/>
                    }
                    aria-controls="panel2-content"
                    id="panel2-header"
                >
                    <Typography className={classes.heading}>
                        <b className={'heading-id'}></b> <p className={'heading-name'}>Как возможно узнать о выигрыше?</p>
                    </Typography>
                </AccordionSummary>
                <AccordionDetails style={{color: expanded === 'panel4' ? '#5E6976' : '#5E6976'}}>
                    <Typography>
                        {expanded === 'panel10' && <div className={classes.line}></div>}
                        За участие в розыгрышах рулетки с подарками вы получите промокод на лотерейный билет для участия в будущих тиражах от «Национальная Лотерея». Промокод будет отображаться в Личном кабинете на промо-сайте https://nloto-promo.ru/. Для его получения необходимо авторизоваться на сайте, перейти в Личный кабинет и нажать на кнопку  «Получить билет».  Далее перейдите на сайт nloto.ru, при необходимости пройти авторизацию и/или регистрацию, подтвердить Email, если ранее был не подтвержден, и в разделе «Мои билеты» вы увидите лотерейный билет, зарегистрированный на ближайший тираж.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion
                expanded={expanded === 'panel11'}
                onChange={handleChange('panel11')}
                className={classes.hoverEffect}
            >
                <AccordionSummary
                    expandIcon={
                        expanded === 'panel11' ? <ExpandMoreIcon/> : <ExpandMoreIcon/>
                    }
                    aria-controls="panel2-content"
                    id="panel2-header"
                >
                    <Typography className={classes.heading}>
                        <b className={'heading-id'}></b> <p className={'heading-name'}>В течение какого времени возможно активировать промокод на лотерейный билет?</p>
                    </Typography>
                </AccordionSummary>
                <AccordionDetails style={{color: expanded === 'panel4' ? '#5E6976' : '#5E6976'}}>
                    <Typography>
                        {expanded === 'panel11' && <div className={classes.line}></div>}
                        Активировать промокод возможно  с «1» сентября 2024г. по «30» октября 2024г.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion
                expanded={expanded === 'panel12'}
                onChange={handleChange('panel12')}
                className={classes.hoverEffect}
            >
                <AccordionSummary
                    expandIcon={
                        expanded === 'panel12' ? <ExpandMoreIcon/> : <ExpandMoreIcon/>
                    }
                    aria-controls="panel2-content"
                    id="panel2-header"
                >
                    <Typography className={classes.heading}>
                        <b className={'heading-id'}></b> <p className={'heading-name'}>Возможно ли обменять приз на денежные средства?</p>
                    </Typography>
                </AccordionSummary>
                <AccordionDetails style={{color: expanded === 'panel4' ? '#5E6976' : '#5E6976'}}>
                    <Typography>
                        {expanded === 'panel12' && <div className={classes.line}></div>}
                        Нет, обмен приза на деньги невозможен.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion
                expanded={expanded === 'panel13'}
                onChange={handleChange('panel13')}
                className={classes.hoverEffect}
            >
                <AccordionSummary
                    expandIcon={
                        expanded === 'panel13' ? <ExpandMoreIcon/> : <ExpandMoreIcon/>
                    }
                    aria-controls="panel2-content"
                    id="panel2-header"
                >
                    <Typography className={classes.heading}>
                        <b className={'heading-id'}></b> <p className={'heading-name'}>Почему не удается зарегистрировать билет в акции?</p>
                    </Typography>
                </AccordionSummary>
                <AccordionDetails style={{color: expanded === 'panel4' ? '#5E6976' : '#5E6976'}}>
                    <Typography>
                        {expanded === 'panel13' && <div className={classes.line}></div>}
                        Лотерейный билет не может быть зарегистрирован в акции, если
                        <br></br>
                        - покупка билета произведена не в период действия акции с «1» сентября 2024г. по «30» октября
                        2024г.;
                        <br></br>
                        - покупка билета произведена не в отделениях Почты России следующих городов-участников: Москва,
                        Санкт-Петербург, Краснодар, Екатеринбург;
                        <br></br>
                        - при покупке был указан номер мобильного телефона не соответствующий номеру, на который создан
                        Личный кабинет на промо-сайте https://nloto-promo.ru/. Проверьте корректность ввода номера
                        билета или при регистрации нового профиля введите номер телефона, который был указан при
                        покупке;
                        <br></br>
                        - при покупке лотерейного билета была допущена ошибка в номере мобильного телефона. Для решения
                        обратитесь в поддержку support@nloto.ru или позвоните по телефону 8 800 333-7-333;
                        <br></br>
                        - продажа билета не состоялась. Тут необходимо проверить корректность ввода номера лотерейного
                        билета. Если он корректный, но ошибка при регистрации в акции повторилась, то для решения
                        обратитесь в поддержку support@nloto.ru или позвоните по телефону 8 800 333-7-333.

                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion
                expanded={expanded === 'panel14'}
                onChange={handleChange('panel14')}
                className={classes.hoverEffect}
            >
                <AccordionSummary
                    expandIcon={
                        expanded === 'panel14' ? <ExpandMoreIcon/> : <ExpandMoreIcon/>
                    }
                    aria-controls="panel2-content"
                    id="panel2-header"
                >
                    <Typography className={classes.heading}>
                        <b className={'heading-id'}></b> <p className={'heading-name'}>Какой срок действия у моего подарка в розыгруше с рулеткой? </p>
                    </Typography>
                </AccordionSummary>
                <AccordionDetails style={{color: expanded === 'panel4' ? '#5E6976' : '#5E6976'}}>
                    <Typography>
                        {expanded === 'panel14' && <div className={classes.line}></div>}
                        Сроки действия промокода на лотерейный билет: с «1» сентября 2024г. по «30» ноября 2024г. включительно.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion
                expanded={expanded === 'panel15'}
                onChange={handleChange('panel15')}
                className={classes.hoverEffect}
            >
                <AccordionSummary
                    expandIcon={
                        expanded === 'panel15' ? <ExpandMoreIcon/> : <ExpandMoreIcon/>
                    }
                    aria-controls="panel2-content"
                    id="panel2-header"
                >
                    <Typography className={classes.heading}>
                        <b className={'heading-id'}></b> <p className={'heading-name'}>Где можно ознакомиться с Правилами Акции? </p>
                    </Typography>
                </AccordionSummary>
                <AccordionDetails style={{color: expanded === 'panel4' ? '#5E6976' : '#5E6976'}}>
                    <Typography>
                        {expanded === 'panel15' && <div className={classes.line}></div>}
                        С подробными правилами акции можно ознакомиться на сайте акции: https://nloto-promo.ru/, а также в отделениях Почты России городов-участников: Москва, Санкт-Петербург, Краснодар, Екатеринбург.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion
                expanded={expanded === 'panel16'}
                onChange={handleChange('panel16')}
                className={classes.hoverEffect}
            >
                <AccordionSummary
                    expandIcon={
                        expanded === 'panel16' ? <ExpandMoreIcon/> : <ExpandMoreIcon/>
                    }
                    aria-controls="panel2-content"
                    id="panel2-header"
                >
                    <Typography className={classes.heading}>
                        <b className={'heading-id'}></b> <p className={'heading-name'}>Что делать, если не найден ответ на вопрос? </p>
                    </Typography>
                </AccordionSummary>
                <AccordionDetails style={{color: expanded === 'panel4' ? '#5E6976' : '#5E6976'}}>
                    <Typography>
                        {expanded === 'panel16' && <div className={classes.line}></div>}
                        Мы всегда будем рады вам помочь, для этого позвоните по номеру 8 800 333-7-333 (звонок бесплатный на территории РФ) или напишите на support@nloto.ru, поддержка 24/7.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            {/*<div className={'example-all-test'}>*/}
            {/*    <a className={'winners-all-a faq'} href={'faq'}>Все вопросы</a>*/}
            {/*</div>*/}
            <div className={'question-block faq-bonus1'} id={'support'} ref={supportRef}>
                Не нашли ответа на интересующий
                Вас вопрос?
            </div>
            <div className={'question-block faq-bonus2'}>
                Мы будем рады вам помочь! Вы можете:
            </div>
            <div className="container-question-help">
                <div className="column-help">
                    <img src={phone} alt="Image 1"/>
                    Позвонить по номеру <a className={'question-color'} href="tel:88003337333" target="_blank">8 800 333-7-333</a>
                    <br></br>
                    <a className={'question-color-second'}>24/7 Звонок по России бесплатный</a>
                    {copiedPhone && <div className="copied-notification">Телефон скопирован!</div>}
                </div>
                <div className="column-help">
                    <img src={sms} alt="Image 2"/>
                    Написать в чат на сайте <a href={'https://nloto.ru/'} target="_blank"  className={'question-color'}>nloto.ru</a>
                    <br></br>
                    <a className={'question-color-second'}>Поддержка 24/7</a>

                </div>
                <div className="column-help third">
                    <img src={write} alt="Image 3"/>
                    Написать на <a className={'question-color'} href={'mailto:support@nloto.ru'} target="_blank">support@nloto.ru</a>
                    {copiedEmail && <div className="copied-notification">Почта скопирована!</div>}
                </div>
            </div>

        </div>
    );
}