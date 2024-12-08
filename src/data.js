
export const quizzes = [
    {
        id: 1,
        course: 'Ciencia', //'Ciencia
        module: 'Módulo 1', // Modulo 1
        schedule: 'viernes-intensivo', //'viernes intensivo matutino',
        instructor: 'Mariana Guanda', //'Mariana Guanda',
        title: 'Conceptos básicos',
        questions: [
            {
                id: 1,
                mainQuestion: '¿Cuál es el planeta más grande del sistema solar?',
                correctAnswer: 'a', // choice letter
                choices: {
                    a: 'Júpiter',
                    b: 'Saturno',
                    c: 'Neptuno',
                    d: 'Urano'
                }
            },
            {
                id: 2,
                mainQuestion: '¿Qué es lo que se mide con la escala de Richter?',
                correctAnswer: 'b', // choice letter
                choices: {
                    a: 'La velocidad del sonido',
                    b: 'La magnitud de los terremotos',
                    c: 'La intensidad de los huracanes',
                    d: 'La temperatura en grados Fahrenheit'
                }
            },
            {
                id: 3,
                mainQuestion: '¿Cuántos satélites naturales tiene la tierra?',
                correctAnswer: 'a', // choice letter
                choices: {
                    a: '1',
                    b: '3',
                    c: '2',
                    d: '0'
                }
            },
            {
                id: 4,
                mainQuestion: '¿Qué planeta se encuentra más cercano al sol?',
                correctAnswer: 'b', // choice letter
                choices: {
                    a: 'Venus',
                    b: 'Mercurio',
                    c: 'Marte',
                    d: 'Tierra'
                }
            },
        ],
        templateId: 'cuestionario',
        image: '/assets/ciencia.png',
        gradient: 'from-purple-500 to-pink-500',
        wallpaperId: "classic",
        isMinutes: 'notMinutes',
        timerMinutes: "",
        timerSeconds: "",
        isSound: "off",
        isShowAnswers: true
    },
    {
        id: 2,
        course: 'Tecnología', //'Tecnología
        module: 'Módulo 1', // Modulo 1
        schedule: 'viernes-intensivo', //'viernes intensivo matutino',
        instructor: 'Mariana Guanda', //'Mariana Guanda',
        title: 'Informática',
        questions: [
            {
                id: 1,
                mainQuestion: '¿Quién es el creador del sistema operativo Linux?',
                correctAnswer: 'c', // choice letter
                choices: {
                    a: 'Steve Jobs',
                    b: 'Bill Gates',
                    c: 'Linus Torvalds',
                    d: 'Mark Zuckerberg'
                }
            },
            {
                id: 2,
                mainQuestion: '¿Cuál es el navegador web más utilizado en el mundo?',
                correctAnswer: 'd', // choice letter
                choices: {
                    a: 'Safari',
                    b: 'Internet Explorer',
                    c: 'Firefox',
                    d: 'Google Chrome'
                }
            },
        ],
        templateId: 'cuestionario',
        image: '/assets/tecnología.png',
        gradient: 'from-lime-400 to-teal-700',
        wallpaperId: "classic",
        isMinutes: 'notMinutes',
        timerMinutes: "",
        timerSeconds: "",
        isSound: "off",
        isShowAnswers: false
    },

    {
        id: 3,
        course: 'Filosofía', //'Tecnología
        module: 'Módulo 1', // Modulo 1
        schedule: 'viernes-intensivo', //'viernes intensivo matutino',
        instructor: 'Mariana Guanda', //'Mariana Guanda',
        title: 'Teoría',
        questions: [
            {
                id: 1,
                mainQuestion: '¿Quién es el creador del sistema operativo Linux?',
                correctAnswer: 'c', // choice letter
                choices: {
                    a: 'Steve Jobs',
                    b: 'Bill Gates',
                    c: 'Linus Torvalds',
                    d: 'Mark Zuckerberg'
                }
            },
            {
                id: 2,
                mainQuestion: '¿Cuál es el navegador web más utilizado en el mundo?',
                correctAnswer: 'd', // choice letter
                choices: {
                    a: 'Safari',
                    b: 'Internet Explorer',
                    c: 'Firefox',
                    d: 'Google Chrome'
                }
            },
        ],
        templateId: 'cuestionario',
        image: '/assets/filosofía.png',
        gradient: 'from-red-400 to-zinc-400',
        wallpaperId: "classic",
        isMinutes: 'notMinutes',
        timerMinutes: "",
        timerSeconds: "",
        isSound: "off",
        isShowAnswers: false
    },
    {
        id: 4,
        course: 'Deportes', //'Ciencia
        module: 'Módulo 1', // Modulo 1
        schedule: 'viernes-intensivo', //'viernes intensivo matutino',
        instructor: 'Mariana Guanda', //'Mariana Guanda',
        title: 'Fútbol',
        questions: [
            {
                id: 1,
                mainQuestion: '¿Cuál es el planeta más grande del sistema solar?',
                correctAnswer: 'a', // choice letter
                choices: {
                    a: 'Júpiter',
                    b: 'Saturno',
                    c: 'Neptuno',
                    d: 'Urano'
                }
            },
            {
                id: 2,
                mainQuestion: '¿Qué es lo que se mide con la escala de Richter?',
                correctAnswer: 'a', // choice letter
                choices: {
                    a: 'La velocidad del sonido',
                    b: 'La magnitud de los terremotos',
                    c: 'La intensidad de los huracanes',
                    d: 'La temperatura en grados Fahrenheit'
                }
            },
        ],
        templateId: 'cuestionario',
        image: '/assets/deportes.png',
        gradient: 'from-lime-500 to-tea-500',
        wallpaperId: "classic",
        isMinutes: 'notMinutes',
        timerMinutes: "",
        timerSeconds: "",
        isSound: "off",
        isShowAnswers: false
    },
    {
        id: 5,
        course: 'Geografía', //'Ciencia
        module: 'Módulo 1', // Modulo 1
        schedule: 'viernes-intensivo', //'viernes intensivo matutino',
        instructor: 'Mariana Guanda', //'Mariana Guanda',
        title: 'Océanos',
        questions: [
            {
                id: 1,
                mainQuestion: '¿Cuál es el planeta más grande del sistema solar?',
                correctAnswer: 'a', // choice letter
                choices: {
                    a: 'Júpiter',
                    b: 'Saturno',
                    c: 'Neptuno',
                    d: 'Urano'
                }
            },
            {
                id: 2,
                mainQuestion: '¿Qué es lo que se mide con la escala de Richter?',
                correctAnswer: 'a', // choice letter
                choices: {
                    a: 'La velocidad del sonido',
                    b: 'La magnitud de los terremotos',
                    c: 'La intensidad de los huracanes',
                    d: 'La temperatura en grados Fahrenheit'
                }
            },
        ],
        templateId: 'cuestionario',
        image: '/assets/geografía.png',
        gradient: 'from-cyan-200 to-lime-200',
        wallpaperId: "classic",
        isMinutes: 'notMinutes',
        timerMinutes: "",
        timerSeconds: "",
        isSound: "off",
        isShowAnswers: false
    },
    {
        id: 6,
        course: 'Historia', //'Tecnología
        module: 'Módulo 1', // Modulo 1
        schedule: 'viernes-intensivo', //'viernes intensivo matutino',
        instructor: 'Mariana Guanda', //'Mariana Guanda',
        title: 'Historia de Venezuela',
        questions: [
            {
                id: 1,
                mainQuestion: '¿Quién es el creador del sistema operativo Linux?',
                correctAnswer: 'c', // choice letter
                choices: {
                    a: 'Steve Jobs',
                    b: 'Bill Gates',
                    c: 'Linus Torvalds',
                    d: 'Mark Zuckerberg'
                }
            },
            {
                id: 2,
                mainQuestion: '¿Cuál es el navegador web más utilizado en el mundo?',
                correctAnswer: 'd', // choice letter
                choices: {
                    a: 'Safari',
                    b: 'Internet Explorer',
                    c: 'Firefox',
                    d: 'Google Chrome'
                }
            },
        ],
        templateId: 'cuestionario',
        image: '/assets/historia.png',
        gradient: 'from-sky-300 to-indigo-900',
        wallpaperId: "classic",
        isMinutes: 'notMinutes',
        timerMinutes: "",
        timerSeconds: "",
        isSound: "off",
        isShowAnswers: false
    },
    {
        id: 7,
        course: 'Literatura', //'Ciencia
        module: 'Módulo 1', // Modulo 1
        schedule: 'viernes-intensivo', //'viernes intensivo matutino',
        instructor: 'Mariana Guanda', //'Mariana Guanda',
        title: 'Ortografía',
        questions: [
            {
                id: 1,
                mainQuestion: '¿Cuál es el planeta más grande del sistema solar?',
                correctAnswer: 'a', // choice letter
                choices: {
                    a: 'Júpiter',
                    b: 'Saturno',
                    c: 'Neptuno',
                    d: 'Urano'
                }
            },
            {
                id: 2,
                mainQuestion: '¿Qué es lo que se mide con la escala de Richter?',
                correctAnswer: 'a', // choice letter
                choices: {
                    a: 'La velocidad del sonido',
                    b: 'La magnitud de los terremotos',
                    c: 'La intensidad de los huracanes',
                    d: 'La temperatura en grados Fahrenheit'
                }
            },
        ],
        templateId: 'cuestionario',
        image: '/assets/literatura.png',
        gradient: 'from-amber-400 to-emerald-600',
        wallpaperId: "classic",
        isMinutes: 'notMinutes',
        timerMinutes: "",
        timerSeconds: "",
        isSound: "off",
        isShowAnswers: false
    },
];