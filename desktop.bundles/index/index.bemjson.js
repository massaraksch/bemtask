module.exports = {
    block : 'page',
    js: true,
    title : 'Резюме',
    favicon : '/favicon.ico',
    head : [
        { elem : 'meta', attrs : { name : 'description', content : '' } },
        { elem : 'meta', attrs : { name : 'viewport', content : 'width=device-width, initial-scale=1' } },
        { elem : 'css', url : 'index.min.css' }
    ],
    scripts: [{ elem : 'js', url : 'index.min.js' }],
    mods : { theme : 'islands' },
    content: [
        {   block : 'about',
            title: 'ДОБРОВОЛЬСКАЯ ЕЛЕНА ВЛАДИМИРОВНА',
            about:  [
                { 
                    email: 'email: 79046047117@yandex.ru',
                    skype: 'skype: yelena.dobrovolskaya' 
                }            
            ]
	       },
        {
            block: 'education',
            js: true,
            mix: { block: 'sections-js' },
            title: 'ОБРАЗОВАНИЕ',
            education:  [
                
                { 
                    year: 2016,
                    university: 'Московский технологический институт',
                    department: 'Информатика и вычислительная техника, технологии разработки мобильных приложений'
                },
                { 
                    year: 2003,
                    university: 'Академия народного хозяйства при Правительстве РФ',
                    department: 'Программа подготовки управленческих кадров ("Президентская программа"), менеджмент организации'
                },
                { 
                    year: 1999,
                    university: 'Иркутский государственный лингвистический университет',
                    department: 'Факультет английского языка, филология (диплом с отличием)'
                }
            ]
        },
        {
            block: 'job',
            js: true,
            mix: { block: 'sections-js' },
            title: 'ОПЫТ РАБОТЫ',
            job:  [
                { 
                    year: 'Ноябрь 2012 — по настоящее время',
                    company: 'SDL Russia (г. Санкт-Петербург)',
                    position: 'Внештатный переводчик',
                    description: 'Обязанности: локализация и перевод с английского языка (специализация: информационные технологии).'
                },
                { 
                    year: 'Июнь 2007 — февраль 2013',
                    company: 'ЗАО "ПЕТЕР-СЕРВИС" (г. Санкт-Петербург)',
                    position: 'Переводчик',
                    description: 'Обязанности: локализация программных продуктов и перевод документации на английский язык.'
                },
                { 
                    year: 'Август 2004 — декабрь 2005',
                    company: 'ООО "Химволокно" (г. Иркутск)',
                    position: 'Руководитель отдела сбыта',
                    description: 'Обязанности: организация каналов поставок ПЭТ от южнокорейских поставщиков на российские предприятия.'
                },
                { 
                    year: 'Июль 2002 — август 2004',
                    company: 'Главное управление социальной защиты населения администрации Иркутской области',
                    position: 'Ведущий специалист отдела анализа и прогнозирования, территориального развития и целевых программ',
                    description: 'Обязанности: разработка и мониторинг программ территориального развития.'
                },
                { 
                    year: 'Сентябрь 2001 — май 2002',
                    company: 'ООО "Корона-Сервис" (г. Иркутск)',
                    position: 'Переводчик',
                    description: 'Обязанности: письменный и устный последовательный перевод.'
                },
                { 
                    year: 'Сентябрь 1999 — июль 2001',
                    company: 'Иркутский государственный лингвистический университет',
                    position: 'Ассистент кафедры теории и практики перевода',
                    description: 'Обязанности: проведение семинаров по теории и практике перевода.'
                }
            ]
        },
        {
            block: 'skills',
            js: true,
            mix: { block: 'sections-js' },
            title: 'НАВЫКИ И УМЕНИЯ',
            skills:  [
                { desc: '— Письменный перевод с английского на русский (специализация: информационные технологии).' },
                { desc: '— Локализация программных продуктов и веб-сайтов.' },
                { desc: '— Опыт использования средств автоматизации переводов и инструментов для локализации программ: SDLX 2007, SDL Trados 2007, SDL Trados Studio 2009, SDL Trados Studio 2011, SDL Trados Studio 2014, HyperHUB и Language Localizator.' },
                { desc: '— Опыт работы с системами контроля версий: CVS.' },
                { desc: '— Навыки работы с компьютером: Windows XP, 7 и 8, Ubuntu 14.04, Mac OS X.' },
                { desc: '— Базовые знания HTML, CSS, JavaScript, drupal.' },
                { desc: '— В процессе изучения: Git, ООП, Objective-C, xCode, iOS SDK.' }
            ]
        }
        
        ]
    }
