// PDF File Mappings (relative to web server root)
// フォルダの場合はfiles配列でファイル一覧を定義
const pdfPaths = {
    abacus: {
        f0: {
            isFolder: true,
            basePath: '/assets/soroban/abacus-circuit/f0/',
            files: [
                { name: 'Catly版 本番形式001-072', file: 'Catly-F0full001-072.pdf' },
                { name: 'Catly版 ミニ001-030', file: 'CatlyF0mini-A4saisu-001-030.pdf' },
                { name: 'ザ春合宿2022版', file: 'F0-sa-spring-camp2022.pdf' },
                { name: 'ピコ版 第1-24回', file: 'F0-hi-ko-1-24-with-answers.pdf' },
                { name: 'ピコ版 第25-48回', file: 'F0-hi-ko-25-48-with-answers.pdf' },
                { name: 'F0ミニ001-010', file: 'F0mini001-010.pdf' }
            ]
        },
        f1: {
            isFolder: true,
            basePath: '/assets/soroban/abacus-circuit/f1/',
            files: [
                { name: 'Catly版 本番形式001-072', file: 'CatlyF1full001-072.pdf' },
                { name: 'Catly版 ミニ001-040', file: 'CatlyF1mini-A4saisu-001-040.pdf' },
                { name: 'ザ春合宿2022版', file: 'F1-sa-spring-camp2022.pdf' },
                { name: 'ピコ版 第1-24回', file: 'F1-hi-ko-1-24-with-answers.pdf' },
                { name: 'ピコ版 第25-48回', file: 'F1-hi-ko-25-48-with-answers.pdf' },
                { name: 'ピコ版 第49-72回', file: 'F1-hi-ko-49-72-with-answers.pdf' },
                { name: 'ピコ版 第73-80回', file: 'F1-hi-ko-73-80-with-answers.pdf' },
                { name: 'F1ミニ001-040', file: 'F1mini001-040.pdf' }
            ]
        },
        f2: {
            isFolder: true,
            basePath: '/assets/soroban/abacus-circuit/f2/',
            files: [
                { name: 'Catly版 本番形式001-060', file: 'CatlyF2full001-060.pdf' },
                { name: 'ザ春合宿2022版', file: 'F2-spring-camp2022.pdf' },
                { name: 'ピコ版 第2集問題', file: 'F2-hi-ko-2problems24.pdf' },
                { name: 'ピコ版 第2集解答', file: 'F2-pico-2volanswers.pdf' }
            ]
        },
        past: {
            isFolder: true,
            basePath: '/assets/soroban/abacus-circuit/past-exams/',
            files: [
                { name: '第283回（解答付）', file: '283-with-answers.pdf' },
                { name: '第284回（解答付）', file: '284-with-answers.pdf' },
                { name: '第285回（解答付）', file: '285-with-answers.pdf' },
                { name: '第286回（解答付）', file: 'PDF286-with-answers.pdf' },
                { name: '第287回（解答付）', file: '287-with-answers.pdf' },
                { name: '第288回（解答付）', file: '288-with-answers.pdf' },
                { name: '第289回（解答付）', file: '289-with-answers.pdf' },
                { name: '第290回（解答付）', file: '290-with-answers.pdf' },
                { name: '第291回', file: '291.pdf' },
                { name: '第292回', file: '292.pdf' },
                { name: '第293回', file: '293.pdf' },
                { name: '第294回', file: '294.pdf' },
                { name: '第295回', file: '295.pdf' },
                { name: '第300回', file: '300.pdf' },
                { name: '第305回', file: '305.pdf' },
                { name: '第310回', file: '310.pdf' },
                { name: '第315回', file: '315.pdf' },
                { name: '第320回', file: '320.pdf' },
                { name: '第322回', file: '322.pdf' }
            ]
        },
        level: {
            isFolder: true,
            basePath: '/assets/soroban/abacus-circuit/level-practice/',
            files: [
                { name: 'かけ算桁別', file: 'kakezan-digit-practice', isSubfolder: true },
                { name: 'わり算桁別', file: 'warizan-digit-practice', isSubfolder: true },
                { name: '見取り暗算桁別', file: 'mitori-anzan-digit-practice', isSubfolder: true },
                { 
                    name: '見取り算（分割練習）', 
                    isSubfolder: true,
                    subfolders: [
                        { name: '縦4段', file: 'mitori-split-practice/vertical-4col', isSubfolder: true },
                        { name: '縦3段', file: 'mitori-split-practice/vertical-3col', isSubfolder: true }
                    ]
                },
                { name: '見取り算（珠算級準拠）', file: 'mitori-shuzan-level', isSubfolder: true }
            ]
        },
        color: {
            isFolder: true,
            basePath: '/assets/soroban/abacus-circuit/color-contest/',
            files: [
                { name: '①F2カラコン 001-060', file: '①F2colorcon001-060.pdf' },
                { name: '②黄カラコン 001-060', file: '②yellowcolorcon001-060.pdf' },
                { name: '③緑カラコン 001-060', file: '③greencolorcon001-060.pdf' },
                { name: '④赤カラコン 001-060', file: '④redcolorcon001-060.pdf' },
                { name: '⑤青カラコン 001-060', file: '⑤bluecolorcon001-060.pdf' },
                { name: '⑥黒カラコン 001-060', file: '⑥blackcolorcon001-060.pdf' },
                { name: '⑦金カラコン 001-060', file: '⑦goldcolorcon001-060.pdf' },
                { name: '⑧難カラコン 001-060', file: '⑧hardcolorcon001-060.pdf' },
                { name: 'Lv.1 F2 001-020', file: 'colorcon-Lv.1-F2-001-020.pdf' },
                { name: 'Lv.2 黄 001-020', file: 'colorcon-Lv.2-yellow-001-020.pdf' },
                { name: 'Lv.3 緑 001-020', file: 'colorcon-Lv.3-green-001-020.pdf' },
                { name: 'Lv.4 赤 001-020', file: 'colorcon-Lv.4-red-001-020.pdf' },
                { name: 'Lv.5 青 001-020', file: 'colorcon-Lv.5-blue-001-020.pdf' },
                { name: 'Lv.6 黒 001-020', file: 'colorcon-Lv.6-black-001-020.pdf' },
                { name: 'Lv.7 金 001-020', file: 'colorcon-Lv.7-gold-001-020.pdf' },
                { name: 'Lv.8 難 001-020', file: 'colorcon-Lv.8-hard-001-020.pdf' },
                { name: 'Lv.9 激 001-020', file: 'colorcon-Lv.9-extreme-001-020.pdf' },
                { name: 'Lv.10 変 001-020', file: 'colorcon-Lv.10-special-001-020.pdf' },
                { name: 'Lv.11 狂 001-020', file: 'colorcon-Lv.11-insane-001-020.pdf' },
                { name: 'Lv.12 神 001-020', file: 'colorcon-Lv.12-god-001-020.pdf' }
            ]
        }
    },
    sorocon: {
        '2024': '/assets/sorocon-practice/sorocon-past/sorocon2024mainproblems.pdf',
        '2022-2023': '/assets/sorocon-practice/sorocon-past/sorocon2022-2023mainproblems.pdf',
        '2018-2021': '/assets/sorocon-practice/sorocon-past/soroconpast2021-2018.pdf',
        '2015-2017': '/assets/sorocon-practice/sorocon-past/soroconpast2017-2015.pdf',
        'mitori': {
            isFolder: true,
            basePath: '/assets/sorocon-practice/mitori-digit/',
            files: [
                { name: '5桁10口', file: 'mitori_5keta_10kuchi.pdf' },
                { name: '6桁10口', file: 'mitori_6keta_10kuchi.pdf' },
                { name: '9桁10口', file: 'mitori_9keta_10kuchi.pdf' },
                { name: '10桁10口', file: 'mitori_10keta_10kuchi.pdf' }
            ]
        },
        'kake': {
            isFolder: true,
            basePath: '/assets/sorocon-practice/kake-digit/',
            files: [
                { name: '3桁×2桁 (1)', file: '3-2_1.pdf' },
                { name: '3桁×2桁 (2)', file: '3-2_2.pdf' },
                { name: '3桁×3桁 (1)', file: '3-3_1.pdf' },
                { name: '3桁×3桁 (2)', file: '3-3_2.pdf' },
                { name: '4桁×3桁 (1)', file: '4-3_1.pdf' },
                { name: '4桁×3桁 (2)', file: '4-3_2.pdf' },
                { name: '4桁×4桁 (1)', file: '4-4_1.pdf' },
                { name: '4桁×4桁 (2)', file: '4-4_2.pdf' },
                { name: '5桁×4桁 (1)', file: '5-4_1.pdf' },
                { name: '5桁×4桁 (2)', file: '5-4_2.pdf' },
                { name: '5桁×5桁 (1)', file: '5-5_1.pdf' },
                { name: '5桁×5桁 (2)', file: '5-5_2.pdf' },
                { name: '6桁×5桁 (1)', file: '6-5_1.pdf' },
                { name: '6桁×5桁 (2)', file: '6-5_2.pdf' }
            ]
        },
        'wari': {
            isFolder: true,
            basePath: '/assets/sorocon-practice/wari-digit/',
            files: [
                { name: '2桁÷2桁 (1)', file: 'wari_2-2_1.pdf' },
                { name: '2桁÷2桁 (2)', file: 'wari_2-2_2.pdf' },
                { name: '3桁÷2桁 (1)', file: 'wari_2-3_1.pdf' },
                { name: '3桁÷2桁 (2)', file: 'wari_2-3_2.pdf' },
                { name: '3桁÷3桁 (1)', file: 'wari_3-3_1.pdf' },
                { name: '3桁÷3桁 (2)', file: 'wari_3-3_2.pdf' },
                { name: '4桁÷3桁 (1)', file: 'wari_3-4_1.pdf' },
                { name: '4桁÷3桁 (2)', file: 'wari_3-4_2.pdf' },
                { name: '4桁÷4桁 (1)', file: 'wari_4-4_1.pdf' },
                { name: '4桁÷4桁 (2)', file: 'wari_4-4_2.pdf' },
                { name: '4桁÷4桁 (3)', file: 'wari_4-4_3.pdf' },
                { name: '5桁÷4桁', file: 'wari_4-5.pdf' },
                { name: '5桁÷5桁 (1)', file: 'wari_5-5_1.pdf' },
                { name: '5桁÷5桁 (2)', file: 'wari_5-5_2.pdf' },
                { name: '6桁÷5桁 (1)', file: 'wari_5-6_1.pdf' },
                { name: '6桁÷5桁 (2)', file: 'wari_5-6_2.pdf' }
            ]
        }
    },
    anzan: {
        '2024': '/assets/soroban/anzan-contest/past/national-anzancontest2024mainproblems.pdf',
        '2023': '/assets/soroban/anzan-contest/past/national-anzancontest2023mainproblems.pdf',
        '2022': '/assets/soroban/anzan-contest/past/national-anzancontest2022mainproblems.pdf',
        'collection1': '/assets/soroban/anzan-contest/prints/national-anzancontest1vol.pdf',
        'collection2': '/assets/soroban/anzan-contest/prints/national-anzancontest2vol.pdf',
        'past': '/assets/soroban/anzan-contest/past/past2016-2021-answers.pdf',
        'half': '/assets/soroban/anzan-contest/prints/anconhalf2024.pdf'
    },
    answer: {
        'sorocon': '/assets/soroban/anzan-contest/prints/anconevent-answerssheet.pdf',
        'anzan': '/assets/soroban/anzan-contest/prints/yomiagetestanswerssheet.pdf'
    }
};

// Audio File Mappings - filename to Google Drive file ID
// Full mapping is in audio-gdrive-mapping.js (loaded separately)
// Complete mapping for all 295 audio files
const audioFilenames = {
    'sorocon_yomiage': {
        1: 'そろコン読上予選-1.mp3',
        2: 'そろコン読上予選-2.mp3',
        3: 'そろコン読上予選-3.mp3',
        4: 'そろコン読上予選-4.mp3',
        5: 'そろコン読上予選-5.mp3',
        6: 'そろコン読上予選-6.mp3',
        7: 'そろコン読上予選-7.mp3',
        8: 'そろコン読上予選-8.mp3',
        9: 'そろコン読上予選-9.mp3',
        10: 'そろコン読上予選-10.mp3',
        11: 'そろコン読上予選-11.mp3',
        12: 'そろコン読上予選-12.mp3',
        13: 'そろコン読上予選-13.mp3',
        14: 'そろコン読上予選-14.mp3',
        15: 'そろコン読上予選-15.mp3',
        16: 'そろコン読上予選-16.mp3',
        17: 'そろコン読上予選-17.mp3',
        18: 'そろコン読上予選-18.mp3',
        19: 'そろコン読上予選-19.mp3',
        20: 'そろコン読上予選-20.mp3',
    },
    'sorocon_yomian': {
        1: 'そろコンよみあん予選-1.mp3',
        2: 'そろコンよみあん予選-2.mp3',
        3: 'そろコンよみあん予選-3.mp3',
        4: 'そろコンよみあん予選-4.mp3',
        5: 'そろコンよみあん予選-5.mp3',
        6: 'そろコンよみあん予選-6.mp3',
        7: 'そろコンよみあん予選-7.mp3',
        8: 'そろコンよみあん予選-8.mp3',
        9: 'そろコンよみあん予選-9.mp3',
        10: 'そろコンよみあん予選-10.mp3',
        11: 'そろコンよみあん予選-11.mp3',
        12: 'そろコンよみあん予選-12.mp3',
        13: 'そろコンよみあん予選-13.mp3',
        14: 'そろコンよみあん予選-14.mp3',
        15: 'そろコンよみあん予選-15.mp3',
        16: 'そろコンよみあん予選-16.mp3',
        17: 'そろコンよみあん予選-17.mp3',
        18: 'そろコンよみあん予選-18.mp3',
        19: 'そろコンよみあん予選-19.mp3',
        20: 'そろコンよみあん予選-20.mp3',
    },
    'speed_30sec': {
        1: '【30】読上7-16桁-1.mp3',
        2: '【30】読上7-16桁-2.mp3',
        3: '【30】読上7-16桁-3.mp3',
        4: '【30】読上7-16桁-4.mp3',
        5: '【30】読上7-16桁-5.mp3',
        6: '【30】読上7-16桁-6.mp3',
    },
    'speed_35sec': {
        1: '【35】読上7-16桁-1.mp3',
        2: '【35】読上7-16桁-2.mp3',
        3: '【35】読上7-16桁-3.mp3',
        4: '【35】読上7-16桁-4.mp3',
        5: '【35】読上7-16桁-5.mp3',
    },
    'speed_35-40sec': {
        1: '【35-40】読上7-16桁-1【マイナス】.mp3',
    },
    'speed_40sec': {
        1: '【40】読上7-16桁-1.mp3',
        2: '【40】読上7-16桁-2.mp3',
    },
    'speed_40sec_minus': {
        1: '【40】読上7-16桁-1【マイナス】.mp3',
    },
    'speed_50sec': {
        1: '【50】読上7-16桁-1【マイナス】.mp3',
        2: '【50】読上7-16桁-2【マイナス】.mp3',
    },
    'yomiage_7-16keta': {
        1: '読上7-16桁-1.mp3',
        2: '読上7-16桁-2.m4a',
        3: '読上7-16桁-3.m4a',
        4: '読上7-16桁-4.mp3',
    },
    'yomiage_7-15keta': {
        1: '読上7-15桁-1.mp3',
        2: '読上7-15桁-2.mp3',
        3: '読上7-15桁-3.m4a',
        4: '読上7-15桁-4.mp3',
        5: '読上7-15桁-5.mp3',
        6: '読上7-15桁-6.m4a',
        7: '読上7-15桁-7.mp3',
        8: '読上7-15桁-8.mp3',
        9: '読上7-15桁-9.mp3',
    },
    'yomiage_7-14keta': {
        1: '読上7-14桁-1.mp3',
        2: '読上7-14桁-2.mp3',
        3: '読上7-14桁-3.mp3',
        4: '読上7-14桁-4.m4a',
        5: '読上7-14桁-5.mp3',
        6: '読上7-14桁-6.mp3',
        7: '読上7-14桁-7.m4a',
        8: '読上7-14桁-8.mp3',
        9: '読上7-14桁-9.mp3',
    },
    'yomiage_7-13keta': {
        1: '読上7-13桁-1.mp3',
        2: '読上7-13桁-2.m4a',
        3: '読上7-13桁-3.mp3',
        4: '読上7-13桁-4.m4a',
        5: '読上7-13桁-5.m4a',
        6: '読上7-13桁-6.mp3',
        7: '読上7-13桁-7.m4a',
        8: '読上7-13桁-8.m4a',
        9: '読上7-13桁-9.mp3',
    },
    'yomiage_7-12keta': {
        1: '読上7-12桁-1.mp3',
        2: '読上7-12桁-2.m4a',
        3: '読上7-12桁-3.m4a',
        4: '読上7-12桁-4.m4a',
        5: '読上7-12桁-5.m4a',
        6: '読上7-12桁-6.m4a',
        7: '読上7-12桁-7.m4a',
        8: '読上7-12桁-8.mp3',
        9: '読上7-12桁-9.mp3',
    },
    'yomiage_7-11keta': {
        1: '読上7-11桁-1.m4a',
        2: '読上7-11桁-2.m4a',
        3: '読上7-11桁-3.m4a',
        4: '読上7-11桁-4.mp3',
        5: '読上7-11桁-5.m4a',
        6: '読上7-11桁-6.m4a',
        7: '読上7-11桁-7.m4a',
        8: '読上7-11桁-8.mp3',
        9: '読上7-11桁-9.mp3',
    },
    'yomiage_5-10keta': {
        1: '読上5-10桁-1.mp3',
        2: '読上5-10桁-2.mp3',
        3: '読上5-10桁-3.mp3',
        4: '読上5-10桁-4.m4a',
        5: '読上5-10桁-5.m4a',
        6: '読上5-10桁-6.mp3',
        7: '読上5-10桁-7.m4a',
        8: '読上5-10桁-8.mp3',
        9: '読上5-10桁-9.mp3',
    },
    'yomiage_5-9keta': {
        1: '読上5-9桁-1.m4a',
        2: '読上5-9桁-2.m4a',
        3: '読上5-9桁-3.m4a',
        4: '読上5-9桁-4.m4a',
        5: '読上5-9桁-5.m4a',
        6: '読上5-9桁-6.m4a',
        7: '読上5-9桁-7.mp3',
        8: '読上5-9桁-8.mp3',
        9: '読上5-9桁-9.mp3',
    },
    'yomiage_5-8keta': {
        1: '読上5-8桁-1.m4a',
        2: '読上5-8桁-2.m4a',
        3: '読上5-8桁-3.m4a',
        4: '読上5-8桁-4.m4a',
        5: '読上5-8桁-5.mp3',
        6: '読上5-8桁-6.mp3',
        7: '読上5-8桁-7.mp3',
    },
    'yomiage_4-7keta': {
        1: '読上4-7桁-1.m4a',
        2: '読上4-7桁-2.m4a',
        3: '読上4-7桁-3.m4a',
        4: '読上4-7桁-4.m4a',
        5: '読上4-7桁-5.mp3',
        6: '読上4-7桁-6.mp3',
        7: '読上4-7桁-7.mp3',
    },
    'yomiage_3-6keta': {
        1: '読上3-6桁-1.m4a',
        2: '読上3-6桁-2.m4a',
        3: '読上3-6桁-3.m4a',
        4: '読上3-6桁-4.m4a',
        5: '読上3-6桁-5.mp3',
        6: '読上3-6桁-6.mp3',
        7: '読上3-6桁-7.mp3',
    },
    'yomiage_3-5keta': {
        1: '読上3-5桁-1.m4a',
        2: '読上3-5桁-2.m4a',
        3: '読上3-5桁-3.m4a',
        4: '読上3-5桁-4.m4a',
        5: '読上3-5桁-5.mp3',
        6: '読上3-5桁-6.mp3',
        7: '読上3-5桁-7.mp3',
    },
    'yomiage_2-3keta': {
        1: '読上2-3桁-1.mp3',
        2: '読上2-3桁-2.m4a',
        3: '読上2-3桁-3.m4a',
        4: '読上2-3桁-4.m4a',
        5: '読上2-3桁-5.mp3',
        6: '読上2-3桁-6.mp3',
        7: '読上2-3桁-7.mp3',
    },
    'yomian_6-10keta': {
        1: 'よみあん6-10桁-1.m4a',
        2: 'よみあん6-10桁-2.m4a',
        3: 'よみあん6-10桁-3.mp3',
        4: 'よみあん6-10桁-4.mp3',
        5: 'よみあん6-10桁-5.m4a',
        6: 'よみあん6-10桁-6.m4a',
    },
    'yomian_5-9keta': {
        1: 'よみあん5-9桁-1.m4a',
        2: 'よみあん5-9桁-2.mp3',
        3: 'よみあん5-9桁-3.m4a',
        4: 'よみあん5-9桁-4.m4a',
        5: 'よみあん5-9桁-5.m4a',
        6: 'よみあん5-9桁-6.mp3',
        7: 'よみあん5-9桁-7.mp3',
        8: 'よみあん5-9桁-8.m4a',
        9: 'よみあん5-9桁-9.m4a',
        10: 'よみあん5-9桁-10.m4a',
        11: 'よみあん5-9桁-11.m4a',
        12: 'よみあん5-9桁-12.m4a',
    },
    'yomian_5-8keta': {
        1: 'よみあん5-8桁-1.m4a',
        2: 'よみあん5-8桁-2.m4a',
        3: 'よみあん5-8桁-3.m4a',
        4: 'よみあん5-8桁-4.m4a',
        5: 'よみあん5-8桁-5.mp3',
        6: 'よみあん5-8桁-6.mp3',
        7: 'よみあん5-8桁-7.m4a',
        8: 'よみあん5-8桁-8.m4a',
        9: 'よみあん5-8桁-9.mp3',
        10: 'よみあん5-8桁-10.m4a',
        11: 'よみあん5-8桁-11.mp3',
        12: 'よみあん5-8桁-12.m4a',
    },
    'yomian_4-7keta': {
        1: 'よみあん4-7桁-1.mp3',
        2: 'よみあん4-7桁-2.m4a',
        3: 'よみあん4-7桁-3.m4a',
        4: 'よみあん4-7桁-4.m4a',
        5: 'よみあん4-7桁-5.m4a',
        6: 'よみあん4-7桁-6.m4a',
        7: 'よみあん4-7桁-7.m4a',
        8: 'よみあん4-7桁-8.m4a',
        9: 'よみあん4-7桁-9.m4a',
        10: 'よみあん4-7桁-10.m4a',
        11: 'よみあん4-7桁-11.m4a',
        12: 'よみあん4-7桁-12.m4a',
    },
    'yomian_4-6keta': {
        1: 'よみあん4-6桁-1.mp3',
        2: 'よみあん4-6桁-2.mp3',
        3: 'よみあん4-6桁-3.mp3',
        4: 'よみあん4-6桁-4.m4a',
        5: 'よみあん4-6桁-5.m4a',
        6: 'よみあん4-6桁-6.m4a',
        7: 'よみあん4-6桁-7.m4a',
        8: 'よみあん4-6桁-8.m4a',
        9: 'よみあん4-6桁-9.m4a',
        10: 'よみあん4-6桁-10.m4a',
        11: 'よみあん4-6桁-11.mp3',
        12: 'よみあん4-6桁-12.mp3',
    },
    'yomian_3-5keta': {
        1: 'よみあん3-5桁-1.mp3',
        2: 'よみあん3-5桁-2.mp3',
        3: 'よみあん3-5桁-3.mp3',
        4: 'よみあん3-5桁-4.m4a',
        5: 'よみあん3-5桁-5.m4a',
        6: 'よみあん3-5桁-6.m4a',
        7: 'よみあん3-5桁-7.m4a',
        8: 'よみあん3-5桁-8.m4a',
        9: 'よみあん3-5桁-9.m4a',
        10: 'よみあん3-5桁-10.m4a',
        11: 'よみあん3-5桁-11.m4a',
        12: 'よみあん3-5桁-12.m4a',
    },
    'yomian_3-4keta': {
        1: 'よみあん3-4桁-1.m4a',
        2: 'よみあん3-4桁-2.m4a',
        3: 'よみあん3-4桁-3.m4a',
        4: 'よみあん3-4桁-4.m4a',
        5: 'よみあん3-4桁-5.m4a',
        6: 'よみあん3-4桁-6.mp3',
        7: 'よみあん3-4桁-7.mp3',
    },
    'yomian_2-4keta': {
        1: 'よみあん2-4桁-1.m4a',
        2: 'よみあん2-4桁-2.m4a',
        3: 'よみあん2-4桁-3.m4a',
        4: 'よみあん2-4桁-4.mp3',
        5: 'よみあん2-4桁-5.m4a',
        6: 'よみあん2-4桁-6.m4a',
        7: 'よみあん2-4桁-7.m4a',
    },
    'yomian_2-3keta': {
        1: 'よみあん2-3桁-1.m4a',
        2: 'よみあん2-3桁-2.m4a',
        3: 'よみあん2-3桁-3.m4a',
        4: 'よみあん2-3桁-4.m4a',
        5: 'よみあん2-3桁-5.m4a',
        6: 'よみあん2-3桁-6.mp3',
        7: 'よみあん2-3桁-7.m4a',
    },
    'yomian_2keta': {
        1: 'よみあん2桁-1.m4a',
        2: 'よみあん2桁-2.m4a',
        3: 'よみあん2桁-3.m4a',
        4: 'よみあん2桁-4.m4a',
        5: 'よみあん2桁-5.m4a',
        6: 'よみあん2桁-6.m4a',
        7: 'よみあん2桁-7.m4a',
    },
    'yomian_1-2keta': {
        1: 'よみあん1-2桁-1.m4a',
        2: 'よみあん1-2桁-2.m4a',
        3: 'よみあん1-2桁-3.m4a',
        4: 'よみあん1-2桁-4.m4a',
        5: 'よみあん1-2桁-5.m4a',
        6: 'よみあん1-2桁-6.m4a',
        7: 'よみあん1-2桁-7.m4a',
    },
    'yukkuri_sorocon': {
        1: '【ゆっくり】そろコン読上予選-1.mp3',
        2: '【ゆっくり】そろコン読上予選-2.mp3',
        3: '【ゆっくり】そろコン読上予選-3.mp3',
        4: '【ゆっくり】そろコン読上予選-4.mp3',
        5: '【ゆっくり】そろコン読上予選-5.mp3',
        6: '【ゆっくり】そろコン読上予選-6.mp3',
        7: '【ゆっくり】そろコン読上予選-7.mp3',
        8: '【ゆっくり】そろコン読上予選-8.mp3',
        9: '【ゆっくり】そろコン読上予選-9.mp3',
        10: '【ゆっくり】そろコン読上予選-10.mp3',
        11: '【ゆっくり】そろコン読上予選-11.mp3',
        12: '【ゆっくり】そろコン読上予選-12.mp3',
        13: '【ゆっくり】そろコン読上予選-13.mp3',
        14: '【ゆっくり】そろコン読上予選-14.mp3',
        15: '【ゆっくり】そろコン読上予選-15.mp3',
    },
    'yukkuri_5-8keta': {
        1: '【ゆっくり】読上5-8桁-1.m4a',
        2: '【ゆっくり】読上5-8桁-2.m4a',
        3: '【ゆっくり】読上5-8桁-3.m4a',
        4: '【ゆっくり】読上5-8桁-4.mp3',
    },
    'yukkuri_4-7keta': {
        1: '【ゆっくり】読上4-7桁-1.m4a',
        2: '【ゆっくり】読上4-7桁-2.m4a',
        3: '【ゆっくり】読上4-7桁-3.m4a',
        4: '【ゆっくり】読上4-7桁-4.mp3',
    },
    'yukkuri_3-6keta': {
        1: '【ゆっくり】読上3-6桁-1.m4a',
        2: '【ゆっくり】読上3-6桁-2.m4a',
        3: '【ゆっくり】読上3-6桁-3.m4a',
        4: '【ゆっくり】読上3-6桁-4.m4a',
    },
    'yukkuri_3-5keta': {
        1: '【ゆっくり】読上3-5桁-1.m4a',
        2: '【ゆっくり】読上3-5桁-2.m4a',
        3: '【ゆっくり】読上3-5桁-3.m4a',
        4: '【ゆっくり】読上3-5桁-4.m4a',
    },
    'yukkuri_2-3keta': {
        1: '【ゆっくり】読上2-3桁-1.m4a',
        2: '【ゆっくり】読上2-3桁-2.m4a',
        3: '【ゆっくり】読上2-3桁-3.mp3',
        4: '【ゆっくり】読上2-3桁-4.mp3',
    },
};

// Audio category labels for UI
const audioCategoryLabels = {
    'sorocon_yomiage': 'そろコン読上予選',
    'sorocon_yomian': 'そろコンよみあん予選',
    'speed_30sec': '30秒（7-16桁）',
    'speed_35sec': '35秒（7-16桁）',
    'speed_35-40sec': '35-40秒【マイナス】',
    'speed_40sec': '40秒（7-16桁）',
    'speed_40sec_minus': '40秒【マイナス】',
    'speed_50sec': '50秒【マイナス】',
    'yomiage_7-16keta': '読上 7-16桁',
    'yomiage_7-15keta': '読上 7-15桁',
    'yomiage_7-14keta': '読上 7-14桁',
    'yomiage_7-13keta': '読上 7-13桁',
    'yomiage_7-12keta': '読上 7-12桁',
    'yomiage_7-11keta': '読上 7-11桁',
    'yomiage_5-10keta': '読上 5-10桁',
    'yomiage_5-9keta': '読上 5-9桁',
    'yomiage_5-8keta': '読上 5-8桁',
    'yomiage_4-7keta': '読上 4-7桁',
    'yomiage_3-6keta': '読上 3-6桁',
    'yomiage_3-5keta': '読上 3-5桁',
    'yomiage_2-3keta': '読上 2-3桁',
    'yomian_6-10keta': 'よみあん 6-10桁',
    'yomian_5-9keta': 'よみあん 5-9桁',
    'yomian_5-8keta': 'よみあん 5-8桁',
    'yomian_4-7keta': 'よみあん 4-7桁',
    'yomian_4-6keta': 'よみあん 4-6桁',
    'yomian_3-5keta': 'よみあん 3-5桁',
    'yomian_3-4keta': 'よみあん 3-4桁',
    'yomian_2-4keta': 'よみあん 2-4桁',
    'yomian_2-3keta': 'よみあん 2-3桁',
    'yomian_2keta': 'よみあん 2桁',
    'yomian_1-2keta': 'よみあん 1-2桁',
    'yukkuri_sorocon': 'ゆっくり そろコン読上',
    'yukkuri_5-8keta': 'ゆっくり 5-8桁',
    'yukkuri_4-7keta': 'ゆっくり 4-7桁',
    'yukkuri_3-6keta': 'ゆっくり 3-6桁',
    'yukkuri_3-5keta': 'ゆっくり 3-5桁',
    'yukkuri_2-3keta': 'ゆっくり 2-3桁',
};

// Audio category groups for organized display
const audioCategoryGroups = {
    'そろコン予選': ['sorocon_yomiage', 'sorocon_yomian'],
    '速度別読み上げ': ['speed_30sec', 'speed_35sec', 'speed_35-40sec', 'speed_40sec', 'speed_40sec_minus', 'speed_50sec'],
    '読み上げ算': ['yomiage_7-16keta', 'yomiage_7-15keta', 'yomiage_7-14keta', 'yomiage_7-13keta', 'yomiage_7-12keta', 'yomiage_7-11keta', 'yomiage_5-10keta', 'yomiage_5-9keta', 'yomiage_5-8keta', 'yomiage_4-7keta', 'yomiage_3-6keta', 'yomiage_3-5keta', 'yomiage_2-3keta'],
    'よみあん': ['yomian_6-10keta', 'yomian_5-9keta', 'yomian_5-8keta', 'yomian_4-7keta', 'yomian_4-6keta', 'yomian_3-5keta', 'yomian_3-4keta', 'yomian_2-4keta', 'yomian_2-3keta', 'yomian_2keta', 'yomian_1-2keta'],
    'ゆっくり': ['yukkuri_sorocon', 'yukkuri_5-8keta', 'yukkuri_4-7keta', 'yukkuri_3-6keta', 'yukkuri_3-5keta', 'yukkuri_2-3keta'],
};

// Helper function to get Google Drive direct download URL
function getGDriveAudioUrl(filename) {
    if (typeof audioGDriveMapping !== 'undefined' && audioGDriveMapping[filename]) {
        const fileId = audioGDriveMapping[filename];
        return `https://drive.google.com/uc?export=download&id=${fileId}`;
    }
    return null;
}

// Open PDF Function
function openPDF(category, type, name = '') {
    const pathData = pdfPaths[category][type];
    
    if (!pathData) {
        alert('PDFファイルが見つかりません');
        return;
    }

    // Show loading state
    if (event && event.target) event.target.classList.add('loading');

    // フォルダの場合（ファイル一覧がある場合）
    if (typeof pathData === 'object' && pathData.isFolder) {
        showPdfSelector(category, type, pathData);
        if (event && event.target) event.target.classList.remove('loading');
        return;
    }

    // 文字列でフォルダパスの場合（未対応）
    if (typeof pathData === 'string' && pathData.endsWith('/')) {
        alert(`このフォルダはまだファイル一覧が設定されていません。\n${pathData}`);
        if (event && event.target) event.target.classList.remove('loading');
        return;
    }
    
    // 単一ファイルの場合
    const path = typeof pathData === 'string' ? pathData : pathData.file;
    
    // 履歴に追加
    if (!name) name = `${category} - ${type}`;
    addToHistory(category, type, name);
    
    // Open PDF in new tab（Vercelでは日本語URLをそのまま使用）
    const newWindow = window.open(path, '_blank');
    
    if (!newWindow) {
        alert(`PDFを開きます:\n${path}\n\nポップアップがブロックされた場合は、ブラウザの設定を確認してください。`);
    }

    // Remove loading state
    setTimeout(() => {
        if (event && event.target) event.target.classList.remove('loading');
    }, 500);
}

// 現在表示中のPDFセレクターのデータを保持
let currentPdfSelectorData = null;

// PDFファイル選択モーダルを表示
function showPdfSelector(category, type, pathData, parentPath = '') {
    // 既存のモーダルがあれば削除
    const existing = document.getElementById('pdf-selector-modal');
    if (existing) existing.remove();
    
    // データを保持
    currentPdfSelectorData = pathData;
    currentPdfSelectorData.parentPath = parentPath;
    
    const modal = document.createElement('div');
    modal.id = 'pdf-selector-modal';
    modal.className = 'modal';
    
    const typeLabel = {
        'f0': 'F0プリント',
        'f1': 'F1プリント',
        'f2': 'F2プリント',
        'past': '過去問題',
        'level': '桁別練習',
        'color': '色別カラコン',
        'mitori': '見取り桁別',
        'kake': 'かけ算桁別',
        'wari': 'わり算桁別'
    }[type] || type;
    
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h3>📄 ${typeLabel}</h3>
                <button class="modal-close" onclick="closePdfSelector()">✕</button>
            </div>
            <div class="modal-body">
                <div class="pdf-file-list">
                    ${renderFileList(pathData.files, pathData.basePath)}
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
}

// ファイル一覧をレンダリング（サブフォルダ対応）
function renderFileList(files, basePath) {
    return files.map((f, i) => {
        // サブフォルダ（子フォルダあり）の場合
        if (f.subfolders) {
            return `
                <div class="subfolder-group">
                    <button class="action-btn subfolder-btn" onclick="toggleSubfolder(this)">
                        📁 ${f.name}
                        <span class="expand-icon">▶</span>
                    </button>
                    <div class="subfolder-content" style="display: none;">
                        ${f.subfolders.map((sub, j) => `
                            <button class="action-btn pdf-file-btn subfolder-item" 
                                    onclick="openSubfolderPdfs('${basePath}', '${sub.file}', '${sub.name}')">
                                📂 ${sub.name}
                            </button>
                        `).join('')}
                    </div>
                </div>
            `;
        }
        // サブフォルダへのリンク（PDFリストを持つフォルダ）
        else if (f.isSubfolder) {
            return `
                <button class="action-btn pdf-file-btn" 
                        onclick="openSubfolderPdfs('${basePath}', '${f.file}', '${f.name}')">
                    📂 ${f.name}
                </button>
            `;
        }
        // 通常のPDFファイル
        else {
            const fullPath = basePath + f.file;
            const favKey = `pdf-${fullPath}`;
            const isFav = favorites.some(fav => fav.key === favKey);
            return `
                <div class="pdf-file-row">
                    <button class="action-btn pdf-file-btn" 
                            onclick="openPdfFileByIndex(${i})">
                        📄 ${f.name}
                    </button>
                    <span class="fav-icon ${isFav ? 'active' : ''}" 
                          data-fav-key="${favKey}"
                          onclick="toggleFavorite('pdf', '${fullPath}', '${f.name}')">
                        ${isFav ? '⭐' : '☆'}
                    </span>
                </div>
            `;
        }
    }).join('');
}

// サブフォルダの展開/折りたたみ
function toggleSubfolder(btn) {
    const content = btn.nextElementSibling;
    const icon = btn.querySelector('.expand-icon');
    
    if (content.style.display === 'none') {
        content.style.display = 'block';
        icon.textContent = '▼';
        btn.classList.add('expanded');
    } else {
        content.style.display = 'none';
        icon.textContent = '▶';
        btn.classList.remove('expanded');
    }
}

// サブフォルダ内のPDFリストを取得して表示
function openSubfolderPdfs(basePath, subPath, folderName) {
    const fullPath = basePath + subPath + '/';
    
    // サブフォルダ内のPDFを動的に取得（実際はサーバーからフェッチが必要だが、今は静的に定義）
    // 今回はフォルダをそのまま開く
    closePdfSelector();
    
    // フォルダ内のPDFを表示する新しいモーダル
    showSubfolderContents(fullPath, folderName);
}

// サブフォルダの内容を表示
async function showSubfolderContents(folderPath, folderName) {
    // 既存のモーダルがあれば削除
    const existing = document.getElementById('pdf-selector-modal');
    if (existing) existing.remove();
    
    const modal = document.createElement('div');
    modal.id = 'pdf-selector-modal';
    modal.className = 'modal';
    
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h3>📂 ${folderName}</h3>
                <button class="modal-close" onclick="closePdfSelector()">✕</button>
            </div>
            <div class="modal-body">
                <div class="pdf-file-list" id="subfolder-file-list">
                    <p>読み込み中...</p>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // フォルダ内のPDFを取得（index.htmlから取得を試みる）
    try {
        const response = await fetch(folderPath);
        if (response.ok) {
            const html = await response.text();
            // Vercelはディレクトリリスティングしないので、ファイル名パターンで推測
            // 実際は事前定義が必要
        }
    } catch (e) {
        // フェッチ失敗時
    }
    
    // 静的に定義されたファイルリストを使用
    const fileList = getSubfolderFiles(folderPath);
    const container = document.getElementById('subfolder-file-list');
    
    if (fileList.length === 0) {
        container.innerHTML = '<p>ファイルが見つかりません</p>';
    } else {
        container.innerHTML = fileList.map(file => {
            const fullPath = folderPath + file.file;
            const favKey = `pdf-${fullPath}`;
            const isFav = favorites.some(fav => fav.key === favKey);
            return `
                <div class="pdf-file-row">
                    <button class="action-btn pdf-file-btn" 
                            onclick="openDirectPdf('${fullPath}', '${file.name}')">
                        📄 ${file.name}
                    </button>
                    <span class="fav-icon ${isFav ? 'active' : ''}" 
                          data-fav-key="${favKey}"
                          onclick="toggleFavorite('pdf', '${fullPath}', '${file.name}')">
                        ${isFav ? '⭐' : '☆'}
                    </span>
                </div>
            `;
        }).join('');
    }
}

// サブフォルダのファイルリストを取得（静的定義）
function getSubfolderFiles(folderPath) {
    // level-practiceのサブフォルダ用ファイルリスト
    const subfolderMappings = {
        '/assets/soroban/abacus-circuit/level-practice/kakezan-digit-practice/': [
            { name: '1×1 均等', file: '1-1even.pdf' },
            { name: '1×1 均等2', file: '1-1even2.pdf' },
            { name: '1×1 均等3', file: '1-1even3.pdf' },
            { name: '2×1 均等', file: '2-1even.pdf' },
            { name: '2×1 均等2', file: '2-1even2.pdf' },
            { name: '2×1 均等3', file: '2-1even3.pdf' },
            { name: '2×2 均等', file: '2-2even.pdf' },
            { name: '2×2 均等2', file: '2-2even2.pdf' },
            { name: '2×2 均等3', file: '2-2even3.pdf' },
            { name: '3×1 均等', file: '3-1even.pdf' },
            { name: '3×1 均等2', file: '3-1even2.pdf' },
            { name: '3×1 均等3', file: '3-1even3.pdf' },
            { name: '3×2 均等', file: '3-2even.pdf' },
            { name: '3×2 均等 (桁反転)', file: '3-2even-dflip.pdf' },
            { name: '3×2 均等2', file: '3-2even2.pdf' },
            { name: '3×2 均等3', file: '3-2even3.pdf' },
            { name: '3×3 均等', file: '3-3even.pdf' },
            { name: '3×3 均等 (2列)', file: '3-3even-2col.pdf' },
            { name: '3×3 均等2', file: '3-3even2.pdf' },
            { name: '3×3 均等2 (2列)', file: '3-3even2-2col.pdf' },
            { name: '3×3 均等3', file: '3-3even3.pdf' },
            { name: '3×3 均等3 (2列)', file: '3-3even3-2col.pdf' },
            { name: '4×3 均等 (2列)', file: '4-3even-2col.pdf' },
            { name: '4×3 均等 (2列・桁反転)', file: '4-3even-2coldflip.pdf' },
            { name: '4×3 均等2 (2列)', file: '4-3even2-2col.pdf' },
            { name: '4×3 均等3 (2列)', file: '4-3even3-2col.pdf' },
            { name: '4×4 均等 (2列)', file: '4-4even-2col.pdf' },
            { name: '4×4 均等2 (2列)', file: '4-4even2-2col.pdf' },
            { name: '4×4 均等3 (2列)', file: '4-4even3-2col.pdf' },
            { name: '4×4 同数字 (2列)', file: '4-4same-digit-2col.pdf' },
            { name: '5×4 均等 (2列)', file: '5-4even-2col.pdf' },
            { name: '5×4 均等 (2列・桁反転)', file: '5-4even-2coldflip.pdf' },
            { name: '5×4 均等2 (2列)', file: '5-4even2-2col.pdf' },
            { name: '5×4 均等3 (2列)', file: '5-4even3-2col.pdf' },
            { name: '5×4 同数字 (2列)', file: '5-4same-digit-2col.pdf' },
            { name: '5×5 均等 (2列)', file: '5-5even-2col.pdf' },
            { name: '5×5 均等2 (2列)', file: '5-5even2-2col.pdf' },
            { name: '5×5 均等3 (2列)', file: '5-5even3-2col.pdf' },
            { name: '5×5 同数字 (2列)', file: '5-5same-digit-2col.pdf' },
            { name: '6×5 均等 (2列)', file: '6-5even-2col.pdf' },
            { name: '6×5 均等2 (2列)', file: '6-5even2-2col.pdf' },
            { name: '6×5 均等3 (2列)', file: '6-5even3-2col.pdf' },
            { name: '6×5 同数字 (2列)', file: '6-5same-digit-2col.pdf' },
            { name: '6×6 均等 (2列)', file: '6-6even-2col.pdf' },
            { name: '6×6 均等2 (2列)', file: '6-6even2-2col.pdf' },
            { name: '6×6 均等3 (2列)', file: '6-6even3-2col.pdf' },
            { name: '6×6 同数字 (2列)', file: '6-6same-digit-2col.pdf' },
            { name: '7×6 均等 (2列)', file: '7-6even-2col.pdf' },
            { name: '7×6 均等2 (2列)', file: '7-6even2-2col.pdf' },
            { name: '7×6 均等3 (2列)', file: '7-6even3-2col.pdf' },
            { name: '7×6 同数字 (2列)', file: '7-6same-digit-2col.pdf' }
        ],
        '/assets/soroban/abacus-circuit/level-practice/warizan-digit-practice/': [
            { name: '1×1 均等', file: '1-1even.pdf' },
            { name: '1×1 均等2', file: '1-1even2.pdf' },
            { name: '1×1 均等3', file: '1-1even3.pdf' },
            { name: '1×2 均等', file: '1-2even.pdf' },
            { name: '1×2 均等2', file: '1-2even2.pdf' },
            { name: '1×2 均等3', file: '1-2even3.pdf' },
            { name: '1×3 均等', file: '1-3even.pdf' },
            { name: '1×3 均等2', file: '1-3even2.pdf' },
            { name: '1×3 均等3', file: '1-3even3.pdf' },
            { name: '2×2 均等', file: '2-2even.pdf' },
            { name: '2×2 均等2', file: '2-2even2.pdf' },
            { name: '2×2 均等3', file: '2-2even3.pdf' },
            { name: '2×3 均等', file: '2-3even.pdf' },
            { name: '2×3 均等2', file: '2-3even2.pdf' },
            { name: '2×3 均等3', file: '2-3even3.pdf' },
            { name: '2×3 同数字', file: '2-3same-digit.pdf' },
            { name: '3×2 均等', file: '3-2even.pdf' },
            { name: '3×2 均等2', file: '3-2even2.pdf' },
            { name: '3×2 均等3', file: '3-2even3.pdf' },
            { name: '3×3 均等', file: '3-3even.pdf' },
            { name: '3×3 均等 (2列)', file: '3-3even-2col.pdf' },
            { name: '3×3 均等2', file: '3-3even2.pdf' },
            { name: '3×3 均等2 (2列)', file: '3-3even2-2col.pdf' },
            { name: '3×3 均等3', file: '3-3even3.pdf' },
            { name: '3×3 均等3 (2列)', file: '3-3even3-2col.pdf' },
            { name: '3×3 同数字', file: '3-3same-digit.pdf' },
            { name: '3×3 同数字 (2列)', file: '3-3same-digit-2col.pdf' },
            { name: '3×4 均等', file: '3-4even.pdf' },
            { name: '3×4 均等 (2列)', file: '3-4even-2col.pdf' },
            { name: '3×4 均等2', file: '3-4even2.pdf' },
            { name: '3×4 均等2 (2列)', file: '3-4even2-2col.pdf' },
            { name: '3×4 均等3', file: '3-4even3.pdf' },
            { name: '3×4 均等3 (2列)', file: '3-4even3-2col.pdf' },
            { name: '3×4 同数字', file: '3-4same-digit.pdf' },
            { name: '3×4 同数字 (2列)', file: '3-4same-digit-2col.pdf' },
            { name: '4×4 均等 (2列)', file: '4-4even-2col.pdf' },
            { name: '4×4 均等2 (2列)', file: '4-4even2-2col.pdf' },
            { name: '4×4 均等3 (2列)', file: '4-4even3-2col.pdf' },
            { name: '4×4 同数字 (2列)', file: '4-4same-digit-2col.pdf' },
            { name: '4×5 均等 (2列)', file: '4-5even-2col.pdf' },
            { name: '4×5 均等2 (2列)', file: '4-5even2-2col.pdf' },
            { name: '4×5 均等3 (2列)', file: '4-5even3-2col.pdf' },
            { name: '4×5 同数字 (2列)', file: '4-5same-digit-2col.pdf' },
            { name: '5×5 均等 (2列)', file: '5-5even-2col.pdf' },
            { name: '5×5 均等2 (2列)', file: '5-5even2-2col.pdf' },
            { name: '5×5 均等3 (2列)', file: '5-5even3-2col.pdf' },
            { name: '5×5 同数字 (2列)', file: '5-5same-digit-2col.pdf' },
            { name: '5×6 均等 (2列)', file: '5-6even-2col.pdf' },
            { name: '5×6 均等2 (2列)', file: '5-6even2-2col.pdf' },
            { name: '5×6 均等3 (2列)', file: '5-6even3-2col.pdf' },
            { name: '5×6 同数字 (2列)', file: '5-6same-digit-2col.pdf' },
            { name: '6×6 均等 (2列)', file: '6-6even-2col.pdf' },
            { name: '6×6 均等2 (2列)', file: '6-6even2-2col.pdf' },
            { name: '6×6 均等3 (2列)', file: '6-6even3-2col.pdf' },
            { name: '6×6 同数字 (2列)', file: '6-6same-digit-2col.pdf' }
        ],
        '/assets/soroban/abacus-circuit/level-practice/mitori-anzan-digit-practice/': [
            { name: '2桁5口 ミックス1', file: '2d5r-mixeven1.pdf' },
            { name: '2桁5口 ミックス2', file: '2d5r-mixeven2.pdf' },
            { name: '2桁5口 ミックス3', file: '2d5r-mixeven3.pdf' },
            { name: '2桁7口 ミックス1', file: '2d7r-mixeven1.pdf' },
            { name: '2桁7口 ミックス2', file: '2d7r-mixeven2.pdf' },
            { name: '2桁7口 ミックス3', file: '2d7r-mixeven3.pdf' },
            { name: '2桁10口 ミックス1', file: '2d10r-mixeven1.pdf' },
            { name: '2桁10口 ミックス2', file: '2d10r-mixeven2.pdf' },
            { name: '2桁10口 ミックス3', file: '2d10r-mixeven3.pdf' },
            { name: '2桁12口 ミックス1', file: '2d12r-mixeven1.pdf' },
            { name: '2桁12口 ミックス2', file: '2d12r-mixeven2.pdf' },
            { name: '2桁12口 ミックス3', file: '2d12r-mixeven3.pdf' },
            { name: '2桁15口 ミックス1', file: '2d15r-mixeven1.pdf' },
            { name: '2桁15口 ミックス2', file: '2d15r-mixeven2.pdf' },
            { name: '2桁15口 ミックス3', file: '2d15r-mixeven3.pdf' },
            { name: '3桁5口 ミックス1', file: '3d5r-mixeven1.pdf' },
            { name: '3桁5口 ミックス2', file: '3d5r-mixeven2.pdf' },
            { name: '3桁5口 ミックス3', file: '3d5r-mixeven3.pdf' },
            { name: '3桁7口 ミックス1', file: '3d7r-mixeven1.pdf' },
            { name: '3桁7口 ミックス2', file: '3d7r-mixeven2.pdf' },
            { name: '3桁7口 ミックス3', file: '3d7r-mixeven3.pdf' },
            { name: '3桁10口 ミックス1', file: '3d10r-mixeven1.pdf' },
            { name: '3桁10口 ミックス2', file: '3d10r-mixeven2.pdf' },
            { name: '3桁10口 ミックス3', file: '3d10r-mixeven3.pdf' },
            { name: '3桁15口 ミックス1', file: '3d15r-mixeven1.pdf' },
            { name: '3桁15口 ミックス2', file: '3d15r-mixeven2.pdf' },
            { name: '3桁15口 ミックス3', file: '3d15r-mixeven3.pdf' },
            { name: '3桁20口 ミックス1', file: '3d20r-mixeven1.pdf' },
            { name: '3桁20口 ミックス2', file: '3d20r-mixeven2.pdf' },
            { name: '3桁20口 ミックス3', file: '3d20r-mixeven3.pdf' },
            { name: '4桁5口 ミックス1', file: '4d5r-mixeven1.pdf' },
            { name: '4桁5口 ミックス2', file: '4d5r-mixeven2.pdf' },
            { name: '4桁5口 ミックス3', file: '4d5r-mixeven3.pdf' },
            { name: '4桁7口 ミックス1', file: '4d7r-mixeven1.pdf' },
            { name: '4桁7口 ミックス2', file: '4d7r-mixeven2.pdf' },
            { name: '4桁7口 ミックス3', file: '4d7r-mixeven3.pdf' },
            { name: '4桁10口 ミックス1', file: '4d10r-mixeven1.pdf' },
            { name: '4桁10口 ミックス2', file: '4d10r-mixeven2.pdf' },
            { name: '4桁10口 ミックス3', file: '4d10r-mixeven3.pdf' },
            { name: '4桁15口 ミックス1', file: '4d15r-mixeven1.pdf' },
            { name: '4桁15口 ミックス2', file: '4d15r-mixeven2.pdf' },
            { name: '4桁15口 ミックス3', file: '4d15r-mixeven3.pdf' },
            { name: '4桁20口 ミックス1', file: '4d20r-mixeven1.pdf' },
            { name: '4桁20口 ミックス2', file: '4d20r-mixeven2.pdf' },
            { name: '4桁20口 ミックス3', file: '4d20r-mixeven3.pdf' }
        ],
        '/assets/soroban/abacus-circuit/level-practice/mitori-shuzan-level/': [
            { name: '9級 (1)', file: 'mitorizzan-9kyu1.pdf' },
            { name: '9級 (2)', file: 'mitorizzan-9kyu2.pdf' },
            { name: '9級 (3)', file: 'mitorizzan-9kyu3.pdf' },
            { name: '8&7級 (1)', file: 'mitorizzan-8and7kyu1.pdf' },
            { name: '8&7級 (2)', file: 'mitorizzan-8and7kyu2.pdf' },
            { name: '8&7級 (3)', file: 'mitorizzan-8and7kyu3.pdf' },
            { name: '6級 (1)', file: 'mitorizzan-6kyu1.pdf' },
            { name: '6級 (2)', file: 'mitorizzan-6kyu2.pdf' },
            { name: '6級 (3)', file: 'mitorizzan-6kyu3.pdf' },
            { name: '5級 (1)', file: 'mitorizzan-5kyu1.pdf' },
            { name: '5級 (2)', file: 'mitorizzan-5kyu2.pdf' },
            { name: '5級 (3)', file: 'mitorizzan-5kyu3.pdf' },
            { name: '4級 (1)', file: 'mitorizzan-4kyu1.pdf' },
            { name: '4級 (2)', file: 'mitorizzan-4kyu2.pdf' },
            { name: '4級 (3)', file: 'mitorizzan-4kyu3.pdf' },
            { name: '3級 (1)', file: 'mitorizzan-3kyu1.pdf' },
            { name: '3級 (2)', file: 'mitorizzan-3kyu2.pdf' },
            { name: '3級 (3)', file: 'mitorizzan-3kyu3.pdf' },
            { name: '2級 (1)', file: 'mitorizzan-2kyu1.pdf' },
            { name: '2級 (2)', file: 'mitorizzan-2kyu2.pdf' },
            { name: '2級 (3)', file: 'mitorizzan-2kyu3.pdf' },
            { name: '1級 (1)', file: 'mitorizzan-1kyu1.pdf' },
            { name: '1級 (2)', file: 'mitorizzan-1kyu2.pdf' },
            { name: '1級 (3)', file: 'mitorizzan-1kyu3.pdf' },
            { name: '段位3-6 (1)', file: 'mitorizzan-coli3-61.pdf' },
            { name: '段位4-6 (1)', file: 'mitorizzan-coli4-61.pdf' },
            { name: '段位4-7 (1)', file: 'mitorizzan-coli4-71.pdf' },
            { name: '段位5-8 (1)', file: 'mitorizzan-coli5-81.pdf' },
            { name: '段位6-9 (1)', file: 'mitorizzan-coli6-91.pdf' }
        ],
        '/assets/soroban/abacus-circuit/level-practice/mitori-split-practice/vertical-4col/': [
            { name: '6桁10口 (1)', file: '6d10r-1.pdf' },
            { name: '6桁10口 (2)', file: '6d10r-2.pdf' },
            { name: '6桁10口 (3)', file: '6d10r-3.pdf' },
            { name: '8桁10口 (1)', file: '8d10r-1.pdf' },
            { name: '8桁10口 (2)', file: '8d10r-2.pdf' },
            { name: '8桁10口 (3)', file: '8d10r-3.pdf' },
            { name: '9桁10口 (1)', file: '9d10r-1.pdf' },
            { name: '9桁10口 (2)', file: '9d10r-2.pdf' },
            { name: '9桁10口 (3)', file: '9d10r-3.pdf' },
            { name: '10桁10口 (1)', file: '10d10r-1.pdf' },
            { name: '10桁10口 (2)', file: '10d10r-2.pdf' },
            { name: '10桁10口 (3)', file: '10d10r-3.pdf' }
        ],
        '/assets/soroban/abacus-circuit/level-practice/mitori-split-practice/vertical-3col/': [
            { name: '4桁10口 3段', file: '4d10r-mixed3col.pdf' },
            { name: '4桁10口 3段 (2)', file: '4d10r-mixed3col-2.pdf' },
            { name: '4桁10口 3段 (3)', file: '4d10r-mixed3col-3.pdf' },
            { name: '4桁10口 3段 (4)', file: '4d10r-mixed3col-4.pdf' },
            { name: '4桁10口 3段 (5)', file: '4d10r-mixed3col-5.pdf' },
            { name: '4桁10口 3段 (6)', file: '4d10r-mixed3col-6.pdf' },
            { name: '4桁10口 3段 (7)', file: '4d10r-mixed3col-7.pdf' },
            { name: '4桁10口 3段 (8)', file: '4d10r-mixed3col-8.pdf' },
            { name: '4桁10口 3段 (9)', file: '4d10r-mixed3col-9.pdf' },
            { name: '5桁10口 3段', file: '5d10r-mixed3col.pdf' },
            { name: '5桁10口 3段 (2)', file: '5d10r-mixed3col-2.pdf' },
            { name: '5桁10口 3段 (3)', file: '5d10r-mixed3col-3.pdf' },
            { name: '6桁10口 3段', file: '6d10r-mixed3col.pdf' },
            { name: '6桁10口 3段 (2)', file: '6d10r-mixed3col-2.pdf' },
            { name: '6桁10口 3段 (3)', file: '6d10r-mixed3col-3.pdf' },
            { name: '7桁10口 3段', file: '7d10r-mixed3col.pdf' },
            { name: '7桁10口 3段 (2)', file: '7d10r-mixed3col-2.pdf' },
            { name: '7桁10口 3段 (3)', file: '7d10r-mixed3col-3.pdf' },
            { name: '8桁10口 3段', file: '8d10r-mixed3col.pdf' },
            { name: '8桁10口 3段 (2)', file: '8d10r-mixed3col-2.pdf' },
            { name: '8桁10口 3段 (3)', file: '8d10r-mixed3col-3.pdf' },
            { name: '9桁10口 3段', file: '9d10r-mixed3col.pdf' },
            { name: '9桁10口 3段 (2)', file: '9d10r-mixed3col-2.pdf' },
            { name: '9桁10口 3段 (3)', file: '9d10r-mixed3col-3.pdf' },
            { name: '10桁10口 3段', file: '10d10r-mixed3col.pdf' },
            { name: '10桁10口 3段 (2)', file: '10d10r-mixed3col-2.pdf' },
            { name: '10桁10口 3段 (3)', file: '10d10r-mixed3col-3.pdf' }
        ]
    };
    
    return subfolderMappings[folderPath] || [];
}

// 直接PDFを開く
function openDirectPdf(path, name) {
    addToHistory('pdf', path, name);
    const newWindow = window.open(path, '_blank');
    if (!newWindow) {
        alert(`PDFを開きます:\n${name}\n\nポップアップがブロックされた場合は、ブラウザの設定を確認してください。`);
    }
    closePdfSelector();
}

// PDFファイル選択モーダルを閉じる
function closePdfSelector() {
    const modal = document.getElementById('pdf-selector-modal');
    if (modal) modal.remove();
    currentPdfSelectorData = null;
}

// インデックスでPDFファイルを開く
function openPdfFileByIndex(index) {
    if (!currentPdfSelectorData || !currentPdfSelectorData.files[index]) {
        alert('ファイルが見つかりません');
        return;
    }
    
    const fileInfo = currentPdfSelectorData.files[index];
    const basePath = currentPdfSelectorData.basePath;
    
    // Vercelでは日本語URLをエンコードせずにそのまま使用
    const fullPath = basePath + fileInfo.file;
    
    // 履歴に追加
    addToHistory('pdf', fileInfo.file, fileInfo.name);
    
    // 開く
    const newWindow = window.open(fullPath, '_blank');
    
    if (!newWindow) {
        alert(`PDFを開きます:\n${fileInfo.name}\n\nポップアップがブロックされた場合は、ブラウザの設定を確認してください。`);
    }
    
    closePdfSelector();
}

// Play Audio Function
function playAudio(duration, number) {
    const filename = audioFilenames[duration] && audioFilenames[duration][number];
    
    if (!filename) {
        alert('音声ファイルが見つかりません');
        return;
    }

    const audioUrl = getGDriveAudioUrl(filename);
    
    if (!audioUrl) {
        alert(`音声ファイルのマッピングが見つかりません:\n${filename}`);
        return;
    }

    const player = document.getElementById('audio-player');
    const audioElement = document.getElementById('audio-element');
    const trackName = document.getElementById('current-track');

    // Set track info
    const name = `${duration} 問題-${number}`;
    trackName.textContent = `🎵 ${name}`;

    // 履歴に追加
    addToHistory('audio', `${duration}-${number}`, name);

    // Set audio source from Google Drive
    audioElement.src = audioUrl;

    // Show player
    player.classList.remove('hidden');

    // Play audio
    audioElement.play().catch(err => {
        alert(`音声の再生に失敗しました:\n${filename}\n\nGoogle Driveの共有設定を確認してください。`);
        console.error('Audio playback error:', err);
    });

    // Scroll to player
    player.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

// Close Player Function
function closePlayer() {
    const player = document.getElementById('audio-player');
    const audioElement = document.getElementById('audio-element');

    // Stop audio
    audioElement.pause();
    audioElement.currentTime = 0;

    // Hide player
    player.classList.add('hidden');
}

// ========================================
// 音声セレクター機能
// ========================================

// 音声セレクターモーダルを表示
function showAudioSelector() {
    // 既存のモーダルがあれば削除
    const existing = document.getElementById('audio-selector-modal');
    if (existing) existing.remove();

    const modal = document.createElement('div');
    modal.id = 'audio-selector-modal';
    modal.className = 'modal';

    let content = `
        <div class="modal-content audio-selector-content">
            <div class="modal-header">
                <h3>🎵 音声ファイル選択</h3>
                <button class="close-btn" onclick="closeAudioSelector()">✕</button>
            </div>
            <div class="audio-selector-body">
    `;

    // カテゴリグループごとに表示
    for (const [groupName, categories] of Object.entries(audioCategoryGroups)) {
        content += `<div class="audio-group">`;
        content += `<h4 class="audio-group-title">${groupName}</h4>`;
        content += `<div class="audio-category-list">`;

        for (const cat of categories) {
            const label = audioCategoryLabels[cat] || cat;
            const count = Object.keys(audioFilenames[cat] || {}).length;
            content += `
                <button class="audio-category-btn" onclick="showAudioNumbers('${cat}')">
                    ${label} <span class="audio-count">(${count})</span>
                </button>
            `;
        }

        content += `</div></div>`;
    }

    content += `
            </div>
        </div>
    `;

    modal.innerHTML = content;
    document.body.appendChild(modal);
    modal.style.display = 'flex';
}

// 音声番号選択モーダルを表示
function showAudioNumbers(category) {
    const existing = document.getElementById('audio-numbers-modal');
    if (existing) existing.remove();

    const modal = document.createElement('div');
    modal.id = 'audio-numbers-modal';
    modal.className = 'modal';

    const label = audioCategoryLabels[category] || category;
    const files = audioFilenames[category] || {};
    const numbers = Object.keys(files).map(n => parseInt(n)).sort((a, b) => a - b);

    let content = `
        <div class="modal-content audio-numbers-content">
            <div class="modal-header">
                <h3>🎵 ${label}</h3>
                <button class="close-btn" onclick="closeAudioNumbers()">✕</button>
            </div>
            <div class="audio-numbers-body">
                <div class="audio-numbers-grid">
    `;

    for (const num of numbers) {
        content += `
            <button class="audio-number-btn" onclick="playAudioAndClose('${category}', ${num})">
                問題 ${num}
            </button>
        `;
    }

    content += `
                </div>
                <button class="back-btn" onclick="closeAudioNumbers()">← カテゴリに戻る</button>
            </div>
        </div>
    `;

    modal.innerHTML = content;
    document.body.appendChild(modal);
    modal.style.display = 'flex';
}

// 音声を再生してモーダルを閉じる
function playAudioAndClose(category, number) {
    closeAudioNumbers();
    closeAudioSelector();
    playAudio(category, number);
}

// 音声セレクターを閉じる
function closeAudioSelector() {
    const modal = document.getElementById('audio-selector-modal');
    if (modal) modal.remove();
}

// 音声番号選択を閉じる
function closeAudioNumbers() {
    const modal = document.getElementById('audio-numbers-modal');
    if (modal) modal.remove();
}

// ========================================
// お気に入り機能（Firebase対応）
// ========================================
let favorites = JSON.parse(localStorage.getItem('soroban-favorites') || '[]');

// Firestoreからお気に入りを読み込み
async function loadFavoritesAndRender() {
    if (typeof loadFavoritesFromFirestore === 'function') {
        const loaded = await loadFavoritesFromFirestore();
        if (loaded && loaded.length > 0) {
            favorites = loaded;
            localStorage.setItem('soroban-favorites', JSON.stringify(favorites));
        }
    }
    renderFavorites();
    // お気に入りアイコンの状態を更新
    favorites.forEach(fav => {
        updateFavoriteButton(fav.key, true);
    });
}

async function toggleFavorite(category, type, name) {
    const key = `${category}-${type}`;
    const index = favorites.findIndex(f => f.key === key);
    
    if (index > -1) {
        // 削除
        favorites.splice(index, 1);
        updateFavoriteButton(key, false);
        // Firestoreからも削除
        if (typeof removeFavoriteFromFirestore === 'function') {
            removeFavoriteFromFirestore(key);
        }
    } else {
        // 追加
        const newFav = { key, category, type, name, timestamp: Date.now() };
        favorites.push(newFav);
        updateFavoriteButton(key, true);
        // Firestoreにも保存
        if (typeof addFavoriteToFirestore === 'function') {
            addFavoriteToFirestore(newFav);
        }
    }
    
    localStorage.setItem('soroban-favorites', JSON.stringify(favorites));
    renderFavorites();
}

function updateFavoriteButton(key, isFavorite) {
    const icon = document.querySelector(`[data-fav-key="${key}"]`);
    if (icon) {
        icon.textContent = isFavorite ? '⭐' : '☆';
        icon.classList.toggle('active', isFavorite);
    }
}

function renderFavorites() {
    const container = document.getElementById('favorites-list');
    if (!container) return;
    
    if (favorites.length === 0) {
        container.innerHTML = '<p class="empty-state">お気に入りはまだありません</p>';
        return;
    }
    
    container.innerHTML = favorites.map(fav => `
        <button class="action-btn favorite-item" onclick="openFromFavorite('${fav.category}', '${fav.type}')">
            ${fav.name}
            <span class="remove-fav" onclick="event.stopPropagation(); toggleFavorite('${fav.category}', '${fav.type}', '${fav.name}')">✕</span>
        </button>
    `).join('');
}

function openFromFavorite(category, type) {
    if (category === 'audio') {
        const [duration, number] = type.split('-');
        playAudio(duration, number);
    } else if (category === 'pdf') {
        // 直接PDFパスを開く（お気に入りから）
        window.open(type, '_blank');
    } else {
        openPDF(category, type);
    }
}

// ========================================
// 履歴機能（Firebase対応）
// ========================================
let history = JSON.parse(localStorage.getItem('soroban-history') || '[]');

// Firestoreから履歴を読み込み
async function loadHistoryAndRender() {
    if (typeof loadHistoryFromFirestore === 'function') {
        const loaded = await loadHistoryFromFirestore();
        if (loaded && loaded.length > 0) {
            history = loaded;
            localStorage.setItem('soroban-history', JSON.stringify(history));
        }
    }
    renderHistory();
}

async function addToHistory(category, type, name) {
    const key = `${category}-${type}`;
    
    // 重複を削除
    history = history.filter(h => h.key !== key);
    
    // 先頭に追加
    const newItem = { key, category, type, name, timestamp: Date.now() };
    history.unshift(newItem);
    
    // 最大10件まで保持
    if (history.length > 10) {
        history = history.slice(0, 10);
    }
    
    localStorage.setItem('soroban-history', JSON.stringify(history));
    renderHistory();
    
    // Firestoreにも保存
    if (typeof addHistoryToFirestore === 'function') {
        addHistoryToFirestore(newItem);
    }
}

function renderHistory() {
    const container = document.getElementById('history-list');
    if (!container) return;
    
    if (history.length === 0) {
        container.innerHTML = '<p class="empty-state">履歴はまだありません</p>';
        return;
    }
    
    container.innerHTML = history.map(item => {
        const date = new Date(item.timestamp);
        const timeStr = `${date.getMonth()+1}/${date.getDate()} ${date.getHours()}:${String(date.getMinutes()).padStart(2,'0')}`;
        
        return `
            <button class="action-btn history-item" onclick="openFromHistory('${item.category}', '${item.type}')">
                <span class="history-name">${item.name}</span>
                <span class="history-time">${timeStr}</span>
            </button>
        `;
    }).join('');
}

function openFromHistory(category, type) {
    openFromFavorite(category, type); // 同じロジック
}

function clearHistory() {
    if (confirm('履歴をすべて削除しますか？')) {
        history = [];
        localStorage.setItem('soroban-history', JSON.stringify(history));
        renderHistory();
    }
}

// Service Worker Registration (PWA support)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(reg => console.log('Service Worker registered'))
            .catch(err => console.log('Service Worker registration failed:', err));
    });
}

// Add haptic feedback for iOS devices
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.action-btn');
    
    buttons.forEach(button => {
        button.addEventListener('touchstart', () => {
            // iOS haptic feedback
            if (window.navigator && window.navigator.vibrate) {
                window.navigator.vibrate(10);
            }
        });
    });
    
    // お気に入りと履歴を初期表示
    renderFavorites();
    renderHistory();
    
    // お気に入りアイコンの初期状態を設定
    favorites.forEach(fav => {
        updateFavoriteButton(fav.key, true);
    });
});

// Prevent zoom on double-tap (iOS)
let lastTouchEnd = 0;
document.addEventListener('touchend', (event) => {
    const now = Date.now();
    if (now - lastTouchEnd <= 300) {
        event.preventDefault();
    }
    lastTouchEnd = now;
}, false);

// ========================================
// アバカスサーキット記録機能（Firebase連携）
// ========================================

// ローカルキャッシュ用
const RECORDS_KEY = 'soroban-abacus-records';
let abacusRecords = JSON.parse(localStorage.getItem(RECORDS_KEY) || '[]');

// Firebaseから記録を読み込んで表示
async function loadRecordsAndRender() {
    try {
        const records = await loadRecordsFromFirestore();
        if (records && records.length > 0) {
            abacusRecords = records;
            localStorage.setItem(RECORDS_KEY, JSON.stringify(abacusRecords));
            console.log('Loaded from Firebase:', records.length);
        }
    } catch (error) {
        console.error('Firebase load error:', error);
    }
    renderRecords();
}

// 同期ボタン用
async function syncFromSheets() {
    const btn = event.target;
    btn.textContent = '🔄 同期中...';
    btn.disabled = true;
    
    try {
        await loadRecordsAndRender();
        btn.textContent = '✅ 完了';
        setTimeout(() => {
            btn.textContent = '🔄 同期';
            btn.disabled = false;
        }, 1500);
    } catch (error) {
        btn.textContent = '❌ エラー';
        setTimeout(() => {
            btn.textContent = '🔄 同期';
            btn.disabled = false;
        }, 1500);
    }
}

// 設定モーダル（Firebase版は不要だが互換性のため残す）
function showGasUrlModal() {
    alert('Firebase同期が有効です。\n設定は不要です！');
}

// タイマー関連
let timerInterval = null;
let timerSeconds = 0;
let timerRunning = false;
const TIMER_DURATION = 5 * 60; // 5分

// 記録モーダルを開く
function openRecordModal() {
    const modal = document.getElementById('record-modal');
    if (modal) {
        modal.classList.remove('hidden');
        resetTimer();
        document.getElementById('record-answered').value = '';
        document.getElementById('record-wrong').value = '';
        document.getElementById('record-score').textContent = '-';
    }
}

// 記録モーダルを閉じる
function closeRecordModal() {
    const modal = document.getElementById('record-modal');
    if (modal) {
        modal.classList.add('hidden');
        stopTimer();
    }
}

// タイマー開始
function startTimer() {
    if (timerRunning) return;
    
    timerRunning = true;
    document.getElementById('timer-start').classList.add('hidden');
    document.getElementById('timer-stop').classList.remove('hidden');
    
    timerInterval = setInterval(() => {
        timerSeconds++;
        updateTimerDisplay();
        
        // 5分経過で自動停止
        if (timerSeconds >= TIMER_DURATION) {
            stopTimer();
            alert('5分経過しました！');
        }
    }, 1000);
}

// タイマー停止
function stopTimer() {
    timerRunning = false;
    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
    }
    document.getElementById('timer-start').classList.remove('hidden');
    document.getElementById('timer-stop').classList.add('hidden');
}

// タイマーリセット
function resetTimer() {
    stopTimer();
    timerSeconds = 0;
    updateTimerDisplay();
}

// タイマー表示更新
function updateTimerDisplay() {
    const mins = Math.floor(timerSeconds / 60);
    const secs = timerSeconds % 60;
    const display = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    document.getElementById('timer-display').textContent = display;
    
    // 残り時間も表示
    const remaining = TIMER_DURATION - timerSeconds;
    const remMins = Math.floor(remaining / 60);
    const remSecs = remaining % 60;
    document.getElementById('timer-remaining').textContent = 
        `残り ${remMins}:${String(remSecs).padStart(2, '0')}`;
}

// スコア計算
function calculateScore() {
    const answered = parseInt(document.getElementById('record-answered').value) || 0;
    const wrong = parseInt(document.getElementById('record-wrong').value) || 0;
    
    // 点数計算: (解答数 - 間違い数) × 2（1問2点）
    const score = Math.max(0, (answered - wrong) * 2);
    document.getElementById('record-score').textContent = score;
    return score;
}

// 記録を保存
async function saveRecord() {
    const type = document.getElementById('record-type').value;
    const answered = parseInt(document.getElementById('record-answered').value) || 0;
    const wrong = parseInt(document.getElementById('record-wrong').value) || 0;
    
    if (answered === 0) {
        alert('解答数を入力してください');
        return;
    }
    
    const score = calculateScore();
    
    const record = {
        id: Date.now().toString(),
        date: new Date().toISOString(),
        type: type,
        answered: answered,
        wrong: wrong,
        score: score,
        timeSec: timerSeconds
    };
    
    // ローカルに保存
    abacusRecords.unshift(record);
    if (abacusRecords.length > 100) {
        abacusRecords = abacusRecords.slice(0, 100);
    }
    localStorage.setItem(RECORDS_KEY, JSON.stringify(abacusRecords));
    
    // Firebaseにも保存（バックグラウンド）
    if (typeof saveRecordToFirestore === 'function') {
        saveRecordToFirestore(record);
    }
    
    closeRecordModal();
    renderRecords();
    alert(`記録を保存しました！\n${getTypeLabel(type)}: ${score}点`);
}

// 種目ラベル取得
function getTypeLabel(type) {
    const labels = {
        'multiplication': 'かけ算',
        'division': 'わり算',
        'mitori': '見取り算'
    };
    return labels[type] || type;
}

// 種目の色
function getTypeColor(type) {
    const colors = {
        'multiplication': '#FF6384',
        'division': '#36A2EB',
        'mitori': '#4BC0C0'
    };
    return colors[type] || '#9966FF';
}

// グラフインスタンス
let scoreChart = null;

// グラフを更新
function updateChart() {
    const canvas = document.getElementById('score-chart');
    if (!canvas) return;
    
    const filter = document.getElementById('chart-type-filter')?.value || 'all';
    
    // フィルタリング
    let filteredRecords = abacusRecords;
    if (filter !== 'all') {
        filteredRecords = abacusRecords.filter(r => r.type === filter);
    }
    
    // 日付でソート（古い順）
    const sortedRecords = [...filteredRecords].sort((a, b) => 
        new Date(a.date) - new Date(b.date)
    ).slice(-20); // 直近20件
    
    if (sortedRecords.length === 0) {
        if (scoreChart) {
            scoreChart.destroy();
            scoreChart = null;
        }
        return;
    }
    
    // データ準備
    const labels = sortedRecords.map(r => {
        const d = new Date(r.date);
        return `${d.getMonth()+1}/${d.getDate()}`;
    });
    
    let datasets;
    
    if (filter === 'all') {
        // 種目別に分ける
        const types = ['multiplication', 'division', 'mitori'];
        datasets = types.map(type => {
            const typeRecords = sortedRecords.filter(r => r.type === type);
            if (typeRecords.length === 0) return null;
            
            return {
                label: getTypeLabel(type),
                data: sortedRecords.map(r => r.type === type ? r.score : null),
                borderColor: getTypeColor(type),
                backgroundColor: getTypeColor(type) + '40',
                tension: 0.3,
                spanGaps: true,
                pointRadius: 4,
                pointHoverRadius: 6
            };
        }).filter(d => d !== null);
    } else {
        datasets = [{
            label: getTypeLabel(filter),
            data: sortedRecords.map(r => r.score),
            borderColor: getTypeColor(filter),
            backgroundColor: getTypeColor(filter) + '40',
            fill: true,
            tension: 0.3,
            pointRadius: 4,
            pointHoverRadius: 6
        }];
    }
    
    // 既存のチャートを破棄
    if (scoreChart) {
        scoreChart.destroy();
    }
    
    // 新しいチャートを作成
    scoreChart = new Chart(canvas, {
        type: 'line',
        data: { labels, datasets },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: filter === 'all',
                    position: 'top',
                    labels: { 
                        color: '#fff',
                        boxWidth: 12,
                        padding: 8,
                        font: { size: 11 }
                    }
                },
                tooltip: {
                    callbacks: {
                        label: (ctx) => `${ctx.dataset.label}: ${ctx.raw}点`
                    }
                }
            },
            scales: {
                x: {
                    ticks: { color: '#aaa', font: { size: 10 } },
                    grid: { color: 'rgba(255,255,255,0.1)' }
                },
                y: {
                    beginAtZero: true,
                    ticks: { color: '#aaa', font: { size: 10 } },
                    grid: { color: 'rgba(255,255,255,0.1)' }
                }
            }
        }
    });
}

// 記録一覧を表示
function renderRecords() {
    const container = document.getElementById('records-list');
    if (!container) return;
    
    if (abacusRecords.length === 0) {
        container.innerHTML = '<p class="empty-state">記録はまだありません</p>';
        return;
    }
    
    // 最新10件を表示
    const recentRecords = abacusRecords.slice(0, 10);
    
    container.innerHTML = recentRecords.map(record => {
        const date = new Date(record.date);
        const dateStr = `${date.getMonth()+1}/${date.getDate()}`;
        const mins = Math.floor(record.timeSec / 60);
        const secs = record.timeSec % 60;
        const timeStr = `${mins}:${String(secs).padStart(2, '0')}`;
        
        return `
            <div class="record-item">
                <div class="record-header">
                    <span class="record-type">${getTypeLabel(record.type)}</span>
                    <span class="record-date">${dateStr}</span>
                </div>
                <div class="record-body">
                    <span class="record-score">${record.score}点</span>
                    <span class="record-detail">
                        ${record.answered}問中${record.answered - record.wrong}問正解
                        (${timeStr})
                    </span>
                </div>
            </div>
        `;
    }).join('');
    
    // 統計も更新
    renderStats();
    
    // グラフも更新
    updateChart();
}

// 統計表示
function renderStats() {
    const statsContainer = document.getElementById('records-stats');
    if (!statsContainer) return;
    
    if (abacusRecords.length === 0) {
        statsContainer.innerHTML = '';
        return;
    }
    
    // 種目別の統計
    const types = ['multiplication', 'division', 'mitori'];
    const stats = types.map(type => {
        const typeRecords = abacusRecords.filter(r => r.type === type);
        if (typeRecords.length === 0) return null;
        
        const scores = typeRecords.map(r => r.score);
        const best = Math.max(...scores);
        const avg = Math.round(scores.reduce((a, b) => a + b, 0) / scores.length);
        
        return {
            type: type,
            count: typeRecords.length,
            best: best,
            avg: avg
        };
    }).filter(s => s !== null);
    
    statsContainer.innerHTML = `
        <div class="stats-grid">
            ${stats.map(s => `
                <div class="stat-card">
                    <div class="stat-type">${getTypeLabel(s.type)}</div>
                    <div class="stat-best">最高: ${s.best}点</div>
                    <div class="stat-avg">平均: ${s.avg}点</div>
                    <div class="stat-count">${s.count}回</div>
                </div>
            `).join('')}
        </div>
    `;
}

// 記録をクリア（ローカルのみ、Sheetsは残る）
function clearRecords() {
    if (confirm('ローカルの記録を削除しますか？\n（Google Sheetsのデータは残ります）')) {
        abacusRecords = [];
        localStorage.setItem(RECORDS_KEY, JSON.stringify(abacusRecords));
        renderRecords();
    }
}

// Google Sheets同期ボタン
function syncFromSheets() {
    if (!GAS_URL) {
        showGasUrlModal();
        return;
    }
    loadRecordsFromSheets();
    alert('Google Sheetsから同期しました');
}

// 初期化時に記録を表示
document.addEventListener('DOMContentLoaded', () => {
    renderRecords();
    // Firebaseが初期化されたら自動で読み込む（firebase-config.jsで処理）
});
