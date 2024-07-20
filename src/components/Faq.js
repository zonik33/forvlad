import React from 'react';
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

    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
    const [panelNumber, setPanelNumber] = React.useState(1); // Хранит текущий номер панели

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const handlePanelChange = (panel) => {
        setPanelNumber(panel);
    };

    return (

        <div className={`centered-container ${classes.root}`}>

            {/*<img className={'bottle-float-left-mobile bigline-mobile'} src={biglinemobile}/>*/}
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
                        <b className={'heading-id'}></b> <p className={'heading-name'}>Кто является организатором
                        Акции?</p>
                    </Typography>
                </AccordionSummary>
                <AccordionDetails style={{color: expanded === 'panel1' ? '#5E6976' : '#5E6976'}}>
                    <Typography>
                        {expanded === 'panel1' && <div className={classes.line}></div>}
                        Организатором Акции является Общество с ограниченной ответственностью «Орандж»
                    </Typography>
                </AccordionDetails>

            </Accordion>
            <Accordion
                expanded={expanded === 'panel2'}
                onChange={handleChange('panel2')}
                className={classes.hoverEffect} // Применяем эффект hover на весь аккордеон
            >
                <AccordionSummary
                    expandIcon={
                        expanded === 'panel2' ? <ExpandMoreIcon/> : <ExpandMoreIcon/>
                    }
                    aria-controls="panel2-content"
                    id="panel2-header"
                >
                    <Typography className={classes.heading}>
                        <b className={'heading-id'}></b> <p className={'heading-name'}>Где я могу прочесть правила
                        Акции?</p>
                    </Typography>
                </AccordionSummary>
                <AccordionDetails style={{color: expanded === 'panel2' ? '#5E6976' : '#5E6976'}}>
                    <Typography>
                        {expanded === 'panel2' && <div className={classes.line}></div>}
                        Организатором Акции является Общество с ограниченной ответственностью «Орандж»
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion
                expanded={expanded === 'panel3'}
                onChange={handleChange('panel3')}
                className={classes.hoverEffect} // Применяем эффект hover на весь аккордеон
            >
                <AccordionSummary
                    expandIcon={
                        expanded === 'panel3' ? <ExpandMoreIcon/> : <ExpandMoreIcon/>
                    }
                    aria-controls="panel2-content"
                    id="panel2-header"
                >
                    <Typography className={classes.heading}>
                        <b className={'heading-id'}></b> <p className={'heading-name'}>Какая продукция участвует в
                        Акции?</p>
                    </Typography>
                </AccordionSummary>
                <AccordionDetails style={{color: expanded === 'panel3' ? '#5E6976' : '#5E6976'}}>
                    <Typography>
                        {expanded === 'panel3' && <div className={classes.line}></div>}

                        Организатором Акции является Общество с ограниченной ответственностью «Орандж»


                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion
                expanded={expanded === 'panel4'}
                onChange={handleChange('panel4')}
                className={classes.hoverEffect} // Применяем эффект hover на весь аккордеон
            >
                <AccordionSummary
                    expandIcon={
                        expanded === 'panel4' ? <ExpandMoreIcon/> : <ExpandMoreIcon/>
                    }
                    aria-controls="panel2-content"
                    id="panel2-header"
                >
                    <Typography className={classes.heading}>
                        <b className={'heading-id'}></b> <p className={'heading-name'}>Сроки проведения Акции?</p>
                    </Typography>
                </AccordionSummary>
                <AccordionDetails style={{color: expanded === 'panel4' ? '#5E6976' : '#5E6976'}}>
                    <Typography>
                        {expanded === 'panel4' && <div className={classes.line}></div>}
                        Организатором Акции является Общество с ограниченной ответственностью «Орандж»
                    </Typography>
                </AccordionDetails>
            </Accordion>
            {/*<div className={'example-all-test'}>*/}
            {/*    <a className={'winners-all-a faq'} href={'faq'}>Все вопросы</a>*/}
            {/*</div>*/}
            <div className={'question-block faq-bonus1'} id={'support'}>
                Не нашли ответа на интересующий
                <br></br>Вас вопрос?
            </div>
            <div className={'question-block faq-bonus2'}>
                Мы будем рады вам помочь! Вы можете:
            </div>
            <div className="container-question-help">
                <div className="column-help">
                    <img src={phone} alt="Image 1"/>
                    Позвонить по номеру 8 800 333-7-333
                    <br></br>
                    24/7 Звонок по России бесплатный
                </div>
                <div className="column-help">
                    <img src={sms} alt="Image 2"/>
                    Написать в чат на сайте nloto.ru
                    <br></br>
                    Поддержка 24/7
                </div>
                <div className="column-help">
                    <img src={write} alt="Image 3"/>
                    Написать на support@nloto.ru
                </div>
            </div>

        </div>
    );
}