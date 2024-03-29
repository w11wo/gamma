export function getBiblePlan() {
    return db
}

let db = {
    1: ["1", "Gn. 1", "Ps. 104", "Pr. 8", "Jn. 1", "Eph. 1"],
    2: ["2", "Gn. 2", "Ps. 8", "Pr. 3", "Jn. 2", "Eph. 2"],
    3: ["3", "Gn. 3", "Ps. 38", "Pr. 9", "Jn. 3", "Eph. 3"],
    4: ["4", "Gn. 4-5", "Ps. 4", "Pr. 19:1-3", "Jn. 4", "Eph. 4"],
    5: ["5", "Gn. 6-8", "Ps. 53", "Pr. 19:4-7", "Jn. 5", "Eph. 5"],
    6: ["6", "Gn. 9-11", "Ps. 33", "Pr. 19:8-12", "Jn. 6", "Eph. 6"],
    7: ["7", "Gn. 12-14", "Ps. 110", "Pr. 19:13-14", "Jn. 7", "Ga. 1"],
    8: ["8", "Gn. 15-17", "Ps. 147", "Pr. 19:15-17", "Jn. 8", "Ga. 2"],
    9: ["9", "Gn. 18-20", "Ps. 25", "Pr. 19:18-20", "Jn. 9", "Ga. 3"],
    10: ["10", "Gn. 21-22", "Ps. 23", "Pr. 19:21-23", "Jn. 10", "Ga. 4"],
    11: ["11", "Gn. 23-24", "Ps. 113", "Pr. 19:24-25", "Jn. 11", "Ga. 5"],
    12: ["12", "Gn. 25-26", "Ps. 6", "Pr. 19:26-27", "Jn. 12", "Ga. 6"],
    13: ["13", "Gn. 27-28", "Ps. 41", "Pr. 19:28-29", "Jn. 13", "Ro. 1"],
    14: ["14", "Gn. 29-30", "Ps. 113", "Pr. 24:1-12", "Jn. 14", "Ro. 2"],
    15: ["15", "Gn. 31", "Ps. 14", "Pr. 24:13-22", "Jn. 15", "Ro. 3"],
    16: ["16", "Gn. 32-34", "Ps. 32", "Pr. 24:23-26", "Jn. 16", "Ro. 4"],
    17: ["17", "Gn. 35-36", "Ps. 33", "Pr. 24:27-29", "Jn. 17", "Ro. 5"],
    18: ["18", "Gn. 37-38", "Ps. 55", "Pr. 24:30-34", "Jn. 18", "Ro. 6"],
    19: ["19", "Gn. 39-41", "Ps. 27", "Pr. 25:1-7", "Jn. 19", "Ro. 7"],
    20: ["20", "Gn. 42-43", "Ps. 140", "Pr. 25:8-10", "Jn. 20", "Ro. 8"],
    21: ["21", "Gn. 44-45", "Ps. 65", "Pr. 25:11-14", "Jn. 21", "Ro. 9"],
    22: ["22", "Gn. 46-47", "Ps. 16", "Pr. 25:15-17", "Mk. 1", "Ro. 10"],
    23: ["23", "Gn. 48-49", "Ps. 127", "Pr. 25:18-20", "Mk. 2", "Ro. 11"],
    24: ["24", "Gn. 50", "Ps. 105", "Pr. 25:21-22", "Mk. 3", "Ro. 12"],
    25: ["25", "Ex. 1-2", "Ps. 94", "Pr. 25:23-25", "Mk. 4", "Ro. 13"],
    26: ["26", "Ex. 3-4", "Ps. 29", "Pr. 25:26-28", "Mk. 5", "Ro. 14"],
    27: ["27", "Ex. 5-6", "Ps. 36", "Pr. 5", "Mk. 6", "Ro. 15"],
    28: ["28", "Ex. 7-8", "Ps. 96", "Pr. 23:1-5", "Mk. 7", "Ro. 16"],
    29: ["29", "Ex. 9-10", "Ps. 111", "Pr. 23:6-8", "Mk. 8", "Jd."],
    30: ["30", "Ex. 11-13", "Ps. 105", "Pr. 23:9-11", "Mk. 9", "2 Pe. 1"],
    31: ["31", "Ex. 14-15", "Ps. 97", "Pr. 23:12-18", "Mk. 10", "2 Pe. 2"],
    32: ["32", "Ex. 16-18", "Ps. 78", "Pr. 23:19-28", "Mk. 11", "2 Pe. 3"],
    33: ["33", "Ex. 19-20", "Ps. 119:1-24", "Pr. 23:29-35", "Mk. 12", "1 Pe. 1"],
    34: ["34", "Ex. 21", "Ps. 119:25-56", "Pr. 10:1-5", "Mk. 13", "1 Pe. 2"],
    35: ["35", "Ex. 22", "Ps. 119:57-104", "Pr. 10:6-10", "Mk. 14", "1 Pe. 3"],
    36: ["36", "Ex. 23", "Ps. 119:105-136", "Pr. 10:11-14", "Mk. 15", "1 Pe. 4"],
    37: ["37", "Ex. 24-25", "Ps. 119:137-176", "Pr. 10:15-17", "Mk. 16", "1 Pe. 5"],
    38: ["38", "Ex. 26", "Ps. 103", "Pr. 10:18-22", "Lk. 1", "1 Th. 1"],
    39: ["39", "Ex. 27", "Ps. 109", "Pr. 10:23-26", "Lk. 2", "1 Th. 2"],
    40: ["40", "Ex. 28-29", "Ps. 124", "Pr. 10:27-30", "Lk. 3", "1 Th. 3"],
    41: ["41", "Ex. 30-31", "Ps. 146", "Pr. 10:31-32", "Lk. 4", "1 Th. 4"],
    42: ["42", "Ex. 32-33", "Ps. 81", "Pr. 2", "Lk. 5", "1 Th. 5"],
    43: ["43", "Ex. 34", "Ps. 2", "Pr. 15:1-4", "Lk. 6", "Heb. 1"],
    44: ["44", "Ex. 35-36", "Ps. 8", "Pr. 15:5-7", "Lk. 7", "Heb. 2"],
    45: ["45", "Ex. 37-38", "Ps. 95", "Pr. 15:8-9", "Lk. 8", "Heb. 3"],
    46: ["46", "Ex. 39", "Ps. 57", "Pr. 15:10-12", "Lk. 9", "Heb. 4"],
    47: ["47", "Ex. 40", "Ps. 107", "Pr. 15:13-15", "Lk. 10", "Heb. 5"],
    48: ["48", "", "Catch up Day", "", "", ""],
    49: ["49", "Lv. 1-3", "Ps. 5", "Pr. 15:16-17", "Lk. 11", "Heb. 6"],
    50: ["50", "Lv. 4-5", "Ps. 110", "Pr. 15:18-19", "Lk. 12", "Heb. 7"],
    51: ["51", "Lv. 6-7", "Ps. 133", "Pr. 15:20-21", "Lk. 13", "Heb. 8"],
    52: ["52", "Lv. 8-9", "Ps. 99", "Pr. 15:22-24", "Lk. 14", "Heb. 9"],
    53: ["53", "Lv. 10", "Ps. 40", "Pr. 15:25-29", "Lk. 15", "Heb. 10"],
    54: ["54", "Lv. 11-12", "Ps. 48", "Pr. 15:30-33", "Lk. 16", "Heb. 11"],
    55: ["55", "Lv. 13", "Ps. 76", "Pr. 3:1-12", "Lk. 17", "Heb. 12"],
    56: ["56", "Lv. 14", "Ps. 118", "Pr. 3:13-35", "Lk. 18", "Heb. 13"],
    57: ["57", "Lv. 15", "Ps. 50", "Pr. 12:1-4", "Lk. 19", "Phm."],
    58: ["58", "Lv. 16", "Ps. 32", "Pr. 12:5-8", "Lk. 20", "2 Th. 1"],
    59: ["59", "Lv. 17-18", "Ps. 10", "Pr. 12:9-10", "Lk. 21", "2 Th. 2"],
    60: ["60", "Lv. 19", "Ps. 84", "Pr. 12:11-14", "Lk. 22", "2 Th. 3"],
    61: ["61", "Lv. 20", "Ps. 38", "Pr. 12:15-16", "Lk. 23", "1 Jn. 1"],
    62: ["62", "Lv. 21-22", "Ps. 15", "Pr. 12:17-20", "Lk. 24", "1 Jn. 2"],
    63: ["63", "Lv. 23", "Ps. 42", "Pr. 12:21-23", "Mt. 1", "1 Jn. 3"],
    64: ["64", "Lv. 24", "Ps. 68", "Pr. 12:24-28", "Mt. 2", "1 Jn. 4"],
    65: ["65", "Lv. 25", "Ps. 74", "Pr. 22:1-2", "Mt. 3", "1 Jn. 5"],
    66: ["66", "Lv. 26", "Ps. 91", "Pr. 22:3-5", "Mt. 4", "Jas. 1"],
    67: ["67", "Lv. 27", "Ps. 37", "Pr. 22:6-7", "Mt. 5", "Jas. 2"],
    68: ["68", "Nb. 1-2", "Ps. 145", "Pr. 22:8-9", "Mt. 6", "Jas. 3"],
    69: ["69", "Nb. 3-4", "Ps. 148", "Pr. 22:10-11", "Mt. 7", "Jas. 4"],
    70: ["70", "Nb. 5-6", "Ps. 28", "Pr. 22:12-13", "Mt. 8", "Jas. 5"],
    71: ["71", "Nb. 7", "Ps. 11", "Pr. 22:14-16", "Mt. 9", "1 Co. 1"],
    72: ["72", "Nb. 8-10", "Ps. 46", "Pr. 22:17-29", "Mt. 10", "1 Co. 2"],
    73: ["73", "Nb. 11-12", "Ps. 70", "Pr. 1:1-19", "Mt. 11", "1 Co. 3"],
    74: ["74", "Nb. 13-14", "Ps. 90", "Pr. 1:20-33", "Mt. 12", "1 Co. 4"],
    75: ["75", "Nb. 15", "Ps. 26", "Pr. 18:1-3", "Mt. 13", "1 Co. 5"],
    76: ["76", "Nb. 16", "Ps. 13", "Pr. 18:4-8", "Mt. 14", "1 Co. 6"],
    77: ["77", "Nb. 17-19", "Ps. 121", "Pr. 18:9-11", "Mt. 15", "1 Co. 7"],
    78: ["78", "Nb. 20-21", "Ps. 95", "Pr. 18:12-13", "Mt. 16", "1 Co. 8"],
    79: ["79", "Nb. 22-24", "Ps. 67", "Pr. 18:14-16", "Mt. 17", "1 Co. 9"],
    80: ["80", "Nb. 25-27", "Ps. 106", "Pr. 18:17-19", "Mt. 18", "1 Co. 10"],
    81: ["81", "Nb. 28-29", "Ps. 59", "Pr. 18:20-21", "Mt. 19", "1 Co. 11"],
    82: ["82", "Nb. 30-32", "Ps. 14", "Pr. 18:22-24", "Mt. 20", "1 Co. 12"],
    83: ["83", "Nb. 33", "Ps. 118", "Pr. 13:1-3", "Mt. 21", "1 Co. 13"],
    84: ["84", "Nb. 34-36", "Ps. 27", "Pr. 13:4-6", "Mt. 22", "1 Co. 14"],
    85: ["85", "", "", "Catch up Day", "", ""],
    86: ["86", "Dt. 1", "Ps. 56", "Pr. 13:7-11", "Mt. 23", "1 Co. 15"],
    87: ["87", "Dt. 2", "Ps. 136", "Pr. 13:12-14", "Mt. 24", "1 Co. 16"],
    88: ["88", "Dt. 3", "Ps. 135", "Pr. 13:15-16", "Mt. 25", "Php. 1"],
    89: ["89", "Dt. 4", "Ps. 114", "Pr. 13:17-18", "Mt. 26", "Php. 2"],
    90: ["90", "Dt. 5", "Ps. 19", "Pr. 13:19-21", "Mt. 27", "Php. 3"],
    91: ["91", "Dt. 6", "Ps. 78", "Pr. 13:22-25", "Mt. 28", "Php. 4"],
    92: ["92", "Dt. 7-8", "Ps. 17", "Pr. 11:1-3", "Mk. 1", "2 Co. 1"],
    93: ["93", "Dt. 9-10", "Ps. 115", "Pr. 11:4-7", "Mk. 2", "2 Co. 2"],
    94: ["94", "Dt. 11", "Ps. 104", "Pr. 11:8-11", "Mk. 3", "2 Co. 3"],
    95: ["95", "Dt. 12-13", "Ps. 116", "Pr. 11:12-13", "Mk. 4", "2 Co. 4"],
    96: ["96", "Dt. 14-15", "Ps. 39", "Pr. 11:14-15", "Mk. 5", "2 Co. 5"],
    97: ["97", "Dt. 16-17", "Ps. 60", "Pr. 11:16-19", "Mk. 6", "2 Co. 6"],
    98: ["98", "Dt. 18", "Ps. 102", "Pr. 11:20-21", "Mk. 7", "2 Co. 7"],
    99: ["99", "Dt. 19-20", "Ps. 143", "Pr. 11:22-23", "Mk. 8", "2 Co. 8"],
    100: ["100", "Dt. 21", "Ps. 112", "Pr. 11:24-28", "Mk. 9", "2 Co. 9"],
    101: ["101", "Dt. 22-23", "Ps. 119:1-24", "Pr. 11:29-31", "Mk. 10", "2 Co. 10"],
    102: ["102", "Dt. 24-25", "Ps. 119:25-56", "Pr. 28:1-2", "Mk. 11", "2 Co. 11"],
    103: ["103", "Dt. 26-27", "Ps. 119:57-104", "Pr. 28:3-4", "Mk. 12", "2 Co. 12"],
    104: ["104", "Dt. 28", "Ps. 119:105-136", "Pr. 28:5-6", "Mk. 13", "2 Co. 13"],
    105: ["105", "Dt. 29-30", "Ps. 119:137-176", "Pr. 28:7-8", "Mk. 14", "Col. 1"],
    106: ["106", "Dt. 31", "Ps. 139", "Pr. 28:9-10", "Mk. 15", "Col. 2"],
    107: ["107", "Dt. 32", "Ps. 25", "Pr. 28:11-12", "Mk. 16", "Col. 3"],
    108: ["108", "Dt. 33-34", "Ps. 90", "Pr. 28:13-14", "Lk. 1", "Col. 4"],
    109: ["109", "", "", "Catch up Day", "", ""],
    110: ["110", "Jos. 1-2", "Ps. 135", "Pr. 28:15-16", "Lk. 2", "2 Tm. 1"],
    111: ["111", "Jos. 3-5", "Ps. 114", "Pr. 28:17-18", "Lk. 3", "2 Tm. 2"],
    112: ["112", "Jos. 6-7", "Ps. 9", "Pr. 28:19-20", "Lk. 4", "2 Tm. 3"],
    113: ["113", "Jos. 8-9", "Ps. 30", "Pr. 28:21-22", "Lk. 5", "2 Tm. 4"],
    114: ["114", "Jos. 10-11", "Ps. 150", "Pr. 28:23-25", "Lk. 6", "Tit. 1"],
    115: ["115", "Jos. 12-14", "Ps. 121", "Pr. 28:26-28", "Lk. 7", "Tit. 2"],
    116: ["116", "Jos. 15-17", "Ps. 129", "Pr. 14:1-4", "Lk. 8", "Tit. 3"],
    117: ["117", "Jos. 18-19", "Ps. 8", "Pr. 14:5-9", "Lk. 9", "1 Tm. 1"],
    118: ["118", "Jos. 20-21", "Ps. 144", "Pr. 14:10-13", "Lk. 10", "1 Tm. 2"],
    119: ["119", "Jos. 22", "Ps. 101", "Pr. 14:14-17", "Lk. 11", "1 Tm. 3"],
    120: ["120", "Jos. 23-24", "Ps. 18", "Pr. 14:18-21", "Lk. 12", "1 Tm. 4"],
    121: ["121", "Jdg. 1-3", "Ps. 81", "Pr. 14:22-25", "Lk. 13", "1 Tm. 5"],
    122: ["122", "Jdg. 4-5", "Ps. 54", "Pr. 14:26-28", "Lk. 14", "1 Tm. 6"],
    123: ["123", "Jdg. 6-8", "Ps. 20", "Pr. 14:29-30", "Lk. 15", "2 Jn."],
    124: ["124", "Jdg. 9", "Ps. 142", "Pr. 14:31-32", "Lk. 16", "3 Jn."],
    125: ["125", "Jdg. 10-12", "Ps. 58", "Pr. 14:33-35", "Lk. 17", "Ga. 1"],
    126: ["126", "Jdg. 13-14", "Ps. 136", "Pr. 9", "Lk. 18", "Ga. 2"],
    127: ["127", "Jdg. 15-16", "Ps. 43", "Pr. 7", "Lk. 19", "Ga. 3"],
    128: ["128", "Jdg. 17-18", "Ps. 53", "Pr. 1:1-19", "Lk. 20", "Ga. 4"],
    129: ["129", "Jdg. 19-21", "Ps. 106", "Pr. 1:20-33", "Lk. 21", "Ga. 5"],
    130: ["130", "", "Catch up Day", "", "", ""],
    131: ["131", "Ru. 1-4", "Ps. 128", "Pr. 31", "Lk. 22", "Ga. 6"],
    132: ["132", "1 Sa. 1-3", "Ps. 31", "Pr. 23:1-5", "Lk. 23", "Phm."],
    133: ["133", "1 Sa. 4-7", "Ps. 99", "Pr. 23:6-8", "Lk. 24", "Jd."],
    134: ["134", "1 Sa. 8", "Ps. 109", "Pr. 23:9-11", "Jn. 1", "Acts 1"],
    135: ["135", "1 Sa. 9-11", "Ps. 16", "Pr. 23:12-18", "Jn. 2", "Acts 2"],
    136: ["136", "1 Sa. 12-13", "Ps. 44", "Pr. 23:19-28", "Jn. 3", "Acts 3"],
    137: ["137", "1 Sa. 14", "Ps. 64", "Pr. 23:29-35", "Jn. 4", "Acts 4"],
    138: ["138", "1 Sa. 15", "Ps. 40", "Pr. 21:1-3", "Jn. 5", "Acts 5"],
    139: ["139", "1 Sa. 16", "Ps. 39", "Pr. 21:4-6", "Jn. 6", "Acts 6"],
    140: ["140", "1 Sa. 17", "Ps. 9", "Pr. 21:7-9", "Jn. 7", "Acts 7"],
    141: ["141", "1 Sa. 18", "Ps. 11", "Pr. 21:10-13", "Jn. 8", "Acts 8"],
    142: ["142", "1 Sa. 19", "Ps. 59", "Pr. 21:14-15", "Jn. 9", "Acts 9"],
    143: ["143", "1 Sa. 20", "Ps. 26", "Pr. 21:16-18", "Jn. 10", "Acts 10"],
    144: ["144", "1 Sa. 21", "Ps. 34", "Pr. 21:19-20", "Jn. 11", "Acts 11"],
    145: ["145", "1 Sa. 22", "Ps. 52", "Pr. 21:21-23", "Jn. 12", "Acts 12"],
    146: ["146", "1 Sa. 23", "Ps. 54", "Pr. 21:24-26", "Jn. 13", "Acts 13"],
    147: ["147", "1 Sa. 24", "Ps. 57", "Pr. 21:27-29", "Jn. 14", "Acts 14"],
    148: ["148", "1 Sa. 25", "Ps. 19", "Pr. 21:30-31", "Jn. 15", "Acts 15"],
    149: ["149", "1 Sa. 26-27", "Ps. 7", "Pr. 2", "Jn. 16", "Acts 16"],
    150: ["150", "1 Sa. 28", "Ps. 31", "Pr. 4", "Jn. 17", "Acts 17"],
    151: ["151", "1 Sa. 29-31", "Ps. 18", "Pr. 3:1-12", "Jn. 18", "Acts 18"],
    152: ["152", "2 Sa. 1", "Ps. 4", "Pr. 3:13-35", "Jn. 19", "Acts 19"],
    153: ["153", "2 Sa. 2-4", "Ps. 101", "Pr. 6:1-5", "Jn. 20", "Acts 20"],
    154: ["154", "2 Sa. 5-6", "Ps. 24", "Pr. 6:6-11", "Jn. 21", "Acts 21"],
    155: ["155", "2 Sa. 7", "Ps. 132", "Pr. 6:12-15", "Mt. 1", "Acts 22"],
    156: ["156", "2 Sa. 8-10", "Ps. 60", "Pr. 6:16-19", "Mt. 2", "Acts 23"],
    157: ["157", "2 Sa. 11-12", "Ps. 51", "Pr. 6:20-35", "Mt. 3", "Acts 24"],
    158: ["158", "2 Sa. 13-14", "Ps. 6", "Pr. 16:1-4", "Mt. 4", "Acts 25"],
    159: ["159", "2 Sa. 15", "Ps. 3", "Pr. 16:5-6", "Mt. 5", "Acts 26"],
    160: ["160", "2 Sa. 16", "Ps. 63", "Pr. 16:7-9", "Mt. 6", "Acts 27"],
    161: ["161", "2 Sa. 17", "Ps. 31", "Pr. 16:10-15", "Mt. 7", "Acts 28"],
    162: ["162", "2 Sa. 18", "Ps. 27", "Pr. 16:16-17", "Mt. 8", "Rev. 1"],
    163: ["163", "2 Sa. 19", "Ps. 92", "Pr. 16:18-19", "Mt. 9", "Rev. 2"],
    164: ["164", "2 Sa. 20-21", "Ps. 36", "Pr. 16:20-25", "Mt. 10", "Rev. 3"],
    165: ["165", "2 Sa. 22", "Ps. 144", "Pr. 16:26-30", "Mt. 11", "Rev. 4"],
    166: ["166", "2 Sa. 23-24", "Ps. 138", "Pr. 16:31-33", "Mt. 12", "Rev. 5"],
    167: ["167", "", "", "Catch up Day", "", ""],
    168: ["168", "1 Kgs. 1", "Ps. 47", "Ecc. 1", "Mt. 13", "Rev. 6"],
    169: ["169", "1 Kgs. 2", "Ps. 37", "Ecc. 2", "Mt. 14", "Rev. 7"],
    170: ["170", "1 Kgs. 3", "Ps. 1", "Ecc. 3", "Mt. 15", "Rev. 8"],
    171: ["171", "1 Kgs. 4", "Ps. 71", "Ecc. 4", "Mt. 16", "Rev. 9"],
    172: ["172", "1 Kgs. 5-6", "Ps. 147", "Ecc. 5-6", "Mt. 17", "Rev. 10"],
    173: ["173", "1 Kgs. 7", "Ps. 145", "Ecc. 7", "Mt. 18", "Rev. 11"],
    174: ["174", "1 Kgs. 8", "Ps. 30", "Ecc. 8", "Mt. 19", "Rev. 12"],
    175: ["175", "1 Kgs. 9-10", "Ps. 49", "Ecc. 9", "Mt. 20", "Rev. 13"],
    176: ["176", "1 Kgs. 11", "Ps. 93", "Ecc. 10", "Mt. 21", "Rev. 14"],
    177: ["177", "1 Kgs. 12", "Ps. 110", "Ecc. 11-12", "Mt. 22", "Rev. 15"],
    178: ["178", "1 Kgs. 13-14", "Ps. 141", "Pr. 29:1-2", "Mt. 23", "Rev. 16"],
    179: ["179", "1 Kgs. 15-16", "Ps. 12", "Pr. 29:3-5", "Mt. 24", "Rev. 17"],
    180: ["180", "1 Kgs. 17-18", "Ps. 111", "Pr. 29:6-8", "Mt. 25", "Rev. 18"],
    181: ["181", "1 Kgs. 19-20", "Ps. 42", "Pr. 29:9-11", "Mt. 26", "Rev. 19"],
    182: ["182", "1 Kgs. 21", "Ps. 22", "Pr. 29:12-14", "Mt. 27", "Rev. 20"],
    183: ["183", "1 Kgs. 22", "Ps. 75", "Pr. 29:15-17", "Mt. 28", "Rev. 21"],
    184: ["184", "2 Kgs. 1-2", "Ps. 98", "Pr. 29:18-21", "Lk. 1", "Rev. 22"],
    185: ["185", "2 Kgs. 3-4", "Ps. 32", "Pr. 29:22-23", "Lk. 2", "2 Jn."],
    186: ["186", "2 Kgs. 5", "Ps. 96", "Pr. 29:24-27", "Lk. 3", "Ro. 1"],
    187: ["187", "2 Kgs. 6-7", "Ps. 62", "Pr. 20:1-4", "Lk. 4", "Ro. 2"],
    188: ["188", "2 Kgs. 8, Am. 1-2", "Ps. 5", "Pr. 20:5-6", "Lk. 5", "Ro. 3"],
    189: ["189", "2 Kgs. 9, Am. 3-4", "Ps. 58", "Pr. 20:7-11", "Lk. 6", "Ro. 4"],
    190: ["190", "2 Kgs. 10, Am. 5-6", "Ps. 94", "Pr. 20:12-13", "Lk. 7", "Ro. 5"],
    191: ["191", "2 Kgs. 11-12, Am. 7", "Ps. 12", "Pr. 20:14-17", "Lk. 8", "Ro. 6"],
    192: ["192", "2 Kgs. 13-14, Am. 8-9", "Ps. 108", "Pr. 20:18-21", "Lk. 9", "Ro. 7"],
    193: ["193", "Jnh. 1-4", "Ps. 91", "Pr. 20:22-25", "Lk. 10", "Ro. 8"],
    194: ["194", "2 Kgs. 15, Hos. 1-3", "Ps. 46", "Pr. 20:26-28", "Lk. 11", "Ro. 9"],
    195: ["195", "Hos. 4-5", "Ps. 52", "Pr. 20:29-30", "Lk. 12", "Ro. 10"],
    196: ["196", "Hos. 6-8", "Ps. 19", "Pr. 21:1-3", "Lk. 13", "Ro. 11"],
    197: ["197", "Hos. 9-10", "Ps. 123", "Pr. 21:4-6", "Lk. 14", "Ro. 12"],
    198: ["198", "Hos. 11-12", "Ps. 66", "Pr. 21:7-9", "Lk. 15", "Ro. 13"],
    199: ["199", "Hos. 13-14", "Ps. 88", "Pr. 21:10-13", "Lk. 16", "Ro. 14"],
    200: ["200", "Mc. 1-3", "Ps. 117", "Pr. 21:14-15", "Lk. 17", "Ro. 15"],
    201: ["201", "Mc. 4-5", "Ps. 149", "Pr. 21:16-18", "Lk. 18", "Ro. 16"],
    202: ["202", "Mc. 6-7", "Ps. 130", "Pr. 21:19-20", "Lk. 19", "Eph. 1"],
    203: ["203", "", "", "Catch up Day", "", ""],
    204: ["204", "Is. 1-2", "Ps. 131", "Pr. 21:21-23", "Lk. 20", "Eph. 2"],
    205: ["205", "Is. 3-5", "Ps. 3", "Pr. 21:24-26", "Lk. 21", "Eph. 3"],
    206: ["206", "Is. 6", "Ps. 68", "Pr. 21:27-29", "Lk. 22", "Eph. 4"],
    207: ["207", "2 Kgs. 16, Is. 7-8", "Ps. 83", "Pr. 21:30-31", "Lk. 23", "Eph. 5"],
    208: ["208", "2 Kgs. 17, Is. 9-10", "Ps. 2", "Pr. 13:1-3", "Lk. 24", "Eph. 6"],
    209: ["209", "Is. 11-12", "Ps. 89", "Pr. 13:4-6", "Mk. 1", "3 Jn."],
    210: ["210", "Is. 13-14", "Ps. 100", "Pr. 13:7-11", "Mk. 2", "Php. 1"],
    211: ["211", "Is. 15-17", "Ps. 138", "Pr. 13:12-14", "Mk. 3", "Php. 2"],
    212: ["212", "Is. 18-19", "Ps. 29", "Pr. 13:15-16", "Mk. 4", "Php. 3"],
    213: ["213", "Is. 20-22", "Ps. 13", "Pr. 13:17-18", "Mk. 5", "Php. 4"],
    214: ["214", "Is. 23-24", "Ps. 120", "Pr. 13:19-21", "Mk. 6", "2 Co. 1"],
    215: ["215", "Is. 25-26", "Ps. 98", "Pr. 13:22-25", "Mk. 7", "2 Co. 2"],
    216: ["216", "Is. 27-28", "Ps. 118", "Pr. 6:1-5", "Mk. 8", "2 Co. 3"],
    217: ["217", "Is. 29-30", "Ps. 127", "Pr. 6:6-11", "Mk. 9", "2 Co. 4"],
    218: ["218", "Is. 31-32", "Ps. 65", "Pr. 6:12-15", "Mk. 10", "2 Co. 5"],
    219: ["219", "Is. 33-35", "Ps. 121", "Pr. 6:16-19", "Mk. 11", "2 Co. 6"],
    220: ["220", "Is. 36-37", "Ps. 80", "Pr. 6:20-35", "Mk. 12", "2 Co. 7"],
    221: ["221", "Is. 38-39", "Ps. 76", "Pr. 11:1-3", "Mk. 13", "2 Co. 8"],
    222: ["222", "Is. 40-41", "Ps. 112", "Pr. 11:4-7", "Mk. 14", "2 Co. 9"],
    223: ["223", "Is. 42-43", "Ps. 72", "Pr. 11:8-11", "Mk. 15", "2 Co. 10"],
    224: ["224", "Is. 44-45", "Ps. 47", "Pr. 11:12-13", "Mk. 16", "2 Co. 11"],
    225: ["225", "Is. 46-47", "Ps. 115", "Pr. 11:14-15", "Jn. 1", "2 Co. 12"],
    226: ["226", "Is. 48-49", "Ps. 69", "Pr. 11:16-19", "Jn. 2", "2 Co. 13"],
    227: ["227", "Is. 50-51", "Ps. 42", "Pr. 11:20-21", "Jn. 3", "1 Pe. 1"],
    228: ["228", "Is. 52-53", "Ps. 22", "Pr. 11:22-23", "Jn. 4", "1 Pe. 2"],
    229: ["229", "Is. 54-55", "Ps. 34", "Pr. 11:24-28", "Jn. 5", "1 Pe. 3"],
    230: ["230", "Is. 56-57", "Ps. 24", "Pr. 11:29-31", "Jn. 6", "1 Pe. 4"],
    231: ["231", "Is. 58-59", "Ps. 55", "Pr. 16:1-4", "Jn. 7", "1 Pe. 5"],
    232: ["232", "Is. 60-61", "Ps. 146", "Pr. 16:5-6", "Jn. 8", "1 Th. 1"],
    233: ["233", "Is. 62-64", "Ps. 150", "Pr. 16:7-9", "Jn. 9", "1 Th. 2"],
    234: ["234", "Is. 65-66", "Ps. 82", "Pr. 16:10-15", "Jn. 10", "1 Th. 3"],
    235: ["235", "", "Catch up Day", "", "", ""],
    236: ["236", "2 Kgs. 18-19", "Ps. 46", "Pr. 16:16-17", "Jn. 11", "1 Th. 4"],
    237: ["237", "Na. 1-3", "Ps. 125", "Pr. 16:18-19", "Jn. 12", "1 Th. 5"],
    238: ["238", "2 Kgs. 20-21", "Ps. 21", "Pr. 16:20-25", "Jn. 13", "1 Jn. 1"],
    239: ["239", "Hab. 1-3", "Ps. 10", "Pr. 16:26-30", "Jn. 14", "1 Jn. 2"],
    240: ["240", "2 Kgs. 22-23", "Ps. 19", "Pr. 16:31-33", "Jn. 15", "1 Jn. 3"],
    241: ["241", "Zep. 1-3", "Ps. 149", "Pr. 26:1-3", "Jn. 16", "1 Jn. 4"],
    242: ["242", "2 Kgs. 24-25", "Ps. 79", "Pr. 26:4-5", "Jn. 17", "1 Jn. 5"],
    243: ["243", "Lam. 1-2", "Ps. 77", "Pr. 26:6-8", "Jn. 18", "2 Pe. 1"],
    244: ["244", "Lam. 3-5", "Ps. 137", "Pr. 26:9-12", "Jn. 19", "2 Pe. 2"],
    245: ["245", "Jer. 1-2", "Ps. 90", "Pr. 26:13-16", "Jn. 20", "2 Pe. 3"],
    246: ["246", "Jer. 3-4", "Ps. 15", "Pr. 26:17-19", "Jn. 21", "1 Tm. 1"],
    247: ["247", "Jer. 5-6", "Ps. 133", "Pr. 26:20-23", "Mt. 1", "1 Tm. 2"],
    248: ["248", "Jer. 7-8", "Ps. 61", "Pr. 26:24-28", "Mt. 2", "1 Tm. 3"],
    249: ["249", "Jer. 9-10", "Ps. 25", "Pr. 5", "Mt. 3", "1 Tm. 4"],
    250: ["250", "Jer. 11-12", "Ps. 142", "Pr. 15:1-4", "Mt. 4", "1 Tm. 5"],
    251: ["251", "Jer. 13-14", "Ps. 48", "Pr. 15:5-7", "Mt. 5", "1 Tm. 6"],
    252: ["252", "Jer. 15", "Ps. 45", "Pr. 15:8-9", "Mt. 6", "Heb. 1"],
    253: ["253", "Jer. 16-17", "Ps. 6", "Pr. 15:10-12", "Mt. 7", "Heb. 2"],
    254: ["254", "Jer. 18-20", "Ps. 95", "Pr. 15:13-15", "Mt. 8", "Heb. 3"],
    255: ["255", "Jer. 21-22", "Ps. 126", "Pr. 15:16-17", "Mt. 9", "Heb. 4"],
    256: ["256", "Jer. 23", "Ps. 138", "Pr. 15:18-19", "Mt. 10", "Heb. 5"],
    257: ["257", "Jer. 24-26", "Ps. 122", "Pr. 15:20-21", "Mt. 11", "Heb. 6"],
    258: ["258", "Jer. 27-29", "Ps. 84", "Pr. 15:22-24", "Mt. 12", "Heb. 7"],
    259: ["259", "Jer. 30-31", "Ps. 85", "Pr. 15:25-29", "Mt. 13", "Heb. 8"],
    260: ["260", "Jer. 32-33", "Ps. 89", "Pr. 15:30-33", "Mt. 14", "Heb. 9"],
    261: ["261", "Jer. 34-35", "Ps. 63", "Pr. 17:1-2", "Mt. 15", "Heb. 10"],
    262: ["262", "Jer. 36", "Ps. 62", "Pr. 17:3-5", "Mt. 16", "Heb. 11"],
    263: ["263", "Jer. 37-38", "Ps. 143", "Pr. 17:6-8", "Mt. 17", "Heb. 12"],
    264: ["264", "Jer. 39-41", "Ps. 79", "Pr. 17:9-10", "Mt. 18", "Heb. 13"],
    265: ["265", "Jer. 42-44", "Ps. 123", "Pr. 17:11-12", "Mt. 19", "Col. 1"],
    266: ["266", "Jer. 45-47", "Ps. 87", "Pr. 17:13-14", "Mt. 20", "Col. 2"],
    267: ["267", "Jer. 48", "Ps. 8", "Pr. 17:15-16", "Mt. 21", "Col. 3"],
    268: ["268", "Jer. 49", "Ps. 82", "Pr. 17:17-18", "Mt. 22", "Col. 4"],
    269: ["269", "Jer. 50", "Ps. 85", "Pr. 17:19-22", "Mt. 23", "2 Th. 1"],
    270: ["270", "Jer. 51", "Ps. 134", "Pr. 17:23-26", "Mt. 24", "2 Th. 2"],
    271: ["271", "Jer. 52", "Ps. 74", "Pr. 17:27-28", "Mt. 25", "2 Th. 3"],
    272: ["272", "Ob.", "Ps. 137", "Pr. 2", "Mt. 26", "Jas. 1"],
    273: ["273", "", "", "Catch up Day", "", ""],
    274: ["274", "Jb. 1-3", "Ps. 27", "Pr. 3:1-12", "Mt. 27", "Jas. 2"],
    275: ["275", "Jb. 4-5", "Ps. 107", "Pr. 3:13-35", "Mt. 28", "Jas. 3"],
    276: ["276", "Jb. 6-7", "Ps. 17", "Pr. 27:1-4", "Mk. 1", "Jas. 4"],
    277: ["277", "Jb. 8-10", "Ps. 43", "Pr. 27:5-7", "Mk. 2", "Jas. 5"],
    278: ["278", "Jb. 11-14", "Ps. 71", "Pr. 27:8-10", "Mk. 3", "1 Co. 1"],
    279: ["279", "Jb. 15-17", "Ps. 102", "Pr. 27:11-13", "Mk. 4", "1 Co. 2"],
    280: ["280", "Jb. 18-19", "Ps. 88", "Pr. 27:14-16", "Mk. 5", "1 Co. 3"],
    281: ["281", "Jb. 20-21", "Ps. 73", "Pr. 27:17-19", "Mk. 6", "1 Co. 4"],
    282: ["282", "Jb. 22-24", "Ps. 139", "Pr. 27:20-22", "Mk. 7", "1 Co. 5"],
    283: ["283", "Jb. 25-28", "Ps. 49", "Pr. 27:23-27", "Mk. 8", "1 Co. 6"],
    284: ["284", "Jb. 29-30", "Ps. 112", "Pr. 12:1-4", "Mk. 9", "1 Co. 7"],
    285: ["285", "Jb. 31-32", "Ps. 141", "Pr. 12:5-8", "Mk. 10", "1 Co. 8"],
    286: ["286", "Jb. 33-34", "Ps. 130", "Pr. 12:9-10", "Mk. 11", "1 Co. 9"],
    287: ["287", "Jb. 35-37", "Ps. 24", "Pr. 12:11-14", "Mk. 12", "1 Co. 10"],
    288: ["288", "Jb. 38-39", "Ps. 145", "Pr. 12:15-16", "Mk. 13", "1 Co. 11"],
    289: ["289", "Jb. 40-42", "Ps. 103", "Pr. 12:17-20", "Mk. 14", "1 Co. 12"],
    290: ["290", "1 Ch. 1-3", "Ps. 97", "Pr. 12:21-23", "Mk. 15", "1 Co. 13"],
    291: ["291", "1 Ch. 4-6", "Ps. 61", "Pr. 12:24-28", "Mk. 16", "1 Co. 14"],
    292: ["292", "1 Ch. 7-9", "Ps. 134", "Pr. 29:1-2", "Lk. 1", "1 Co. 15"],
    293: ["293", "1 Ch. 10-12", "Ps. 35", "Pr. 29:3-5", "Lk. 2", "1 Co. 16"],
    294: ["294", "1 Ch. 13-15", "Ps. 108", "Pr. 29:6-8", "Lk. 3", "2 Tm. 1"],
    295: ["295", "1 Ch. 16-17", "Ps. 89", "Pr. 29:9-11", "Lk. 4", "2 Tm. 2"],
    296: ["296", "1 Ch. 18-20", "Ps. 20", "Pr. 29:12-14", "Lk. 5", "2 Tm. 3"],
    297: ["297", "1 Ch. 21-22", "Ps. 51", "Pr. 29:15-17", "Lk. 6", "2 Tm. 4"],
    298: ["298", "1 Ch. 23-25", "Ps. 56", "Pr. 29:18-21", "Lk. 7", "Tit. 1"],
    299: ["299", "1 Ch. 26-27", "Ps. 86", "Pr. 29:22-23", "Lk. 8", "Tit. 2"],
    300: ["300", "1 Ch. 28-29", "Ps. 72", "Pr. 29:24-27", "Lk. 9", "Tit. 3"],
    301: ["301", "", "Catch up Day", "", "", ""],
    302: ["302", "2 Ch. 1", "Ps. 92", "Pr. 1", "Lk. 10", "Acts 1"],
    303: ["303", "2 Ch. 2", "Ps. 84", "Song 1", "Lk. 11", "Acts 2"],
    304: ["304", "2 Ch. 3-5", "Ps. 132", "Song 2", "Lk. 12", "Acts 3"],
    305: ["305", "2 Ch. 6-7", "Ps. 6", "Song 3", "Lk. 13", "Acts 4"],
    306: ["306", "2 Ch. 8-9", "Ps. 2", "Song 4", "Lk. 14", "Acts 5"],
    307: ["307", "2 Ch. 10-12", "Ps. 1", "Song 5", "Lk. 15", "Acts 6"],
    308: ["308", "2 Ch. 13", "Ps. 3", "Song 6", "Lk. 16", "Acts 7"],
    309: ["309", "2 Ch. 14-17", "Ps. 63", "Song 7", "Lk. 17", "Acts 8"],
    310: ["310", "2 Ch. 18-20", "Ps. 131", "Song 8", "Lk. 18", "Acts 9"],
    311: ["311", "2 Ch. 21-24", "Ps. 117", "Pr. 20:1-4", "Lk. 19", "Acts 10"],
    312: ["312", "2 Ch. 25-26", "Ps. 110", "Pr. 20:5-6", "Lk. 20", "Acts 11"],
    313: ["313", "2 Ch. 27-28", "Ps. 64", "Pr. 20:7-11", "Lk. 21", "Acts 12"],
    314: ["314", "2 Ch. 29-31", "Ps. 48", "Pr. 20:12-13", "Lk. 22", "Acts 13"],
    315: ["315", "2 Ch. 32-33", "Ps. 124", "Pr. 20:14-17", "Lk. 23", "Acts 14"],
    316: ["316", "2 Ch. 34-35", "Ps. 61", "Pr. 20:18-21", "Lk. 24", "Acts 15"],
    317: ["317", "2 Ch. 36", "Ps. 44", "Pr. 20:22-25", "Jn. 1", "Acts 16"],
    318: ["318", "Jol. 1,2", "Ps. 50", "Pr. 20:26-28", "Jn. 2", "Acts 17"],
    319: ["319", "Jol. 3", "Ps. 21", "Pr. 20:29-30", "Jn. 3", "Acts 18"],
    320: ["320", "", "Catch up Day", "", "", ""],
    321: ["321", "Ezk. 1-5", "Ps. 67", "Pr. 28:1-2", "Jn. 4", "Acts 19"],
    322: ["322", "Ezk. 6-7", "Ps. 140", "Pr. 28:3-4", "Jn. 5", "Acts 20"],
    323: ["323", "Ezk. 8-11", "Ps. 13", "Pr. 28:5-6", "Jn. 6", "Acts 21"],
    324: ["324", "Ezk. 12-14", "Ps. 15", "Pr. 28:7-8", "Jn. 7", "Acts 22"],
    325: ["325", "Ezk. 15-17", "Ps. 133", "Pr. 28:9-10", "Jn. 8", "Acts 23"],
    326: ["326", "Ezk. 18-19", "Ps. 75", "Pr. 28:11-12", "Jn. 9", "Acts 24"],
    327: ["327", "Ezk. 20-21", "Ps. 23", "Pr. 28:13-14", "Jn. 10", "Acts 25"],
    328: ["328", "Ezk. 22-24", "Ps. 130", "Pr. 28:15-16", "Jn. 11", "Acts 26"],
    329: ["329", "Ezk. 25-26", "Ps. 93", "Pr. 28:17-18", "Jn. 12", "Acts 27"],
    330: ["330", "Ezk. 27-28", "Ps. 41", "Pr. 28:19-20", "Jn. 13", "Acts 28"],
    331: ["331", "Ezk. 29-30", "Ps. 70", "Pr. 28:21-22", "Jn. 14", "Rev. 1"],
    332: ["332", "Ezk. 31-32", "Ps. 35", "Pr. 28:23-25", "Jn. 15", "Rev. 2"],
    333: ["333", "Ezk. 33-34", "Ps. 139", "Pr. 28:26-28", "Jn. 16", "Rev. 3"],
    334: ["334", "Ezk. 35-36", "Ps. 103", "Pr. 8", "Jn. 17", "Rev. 4"],
    335: ["335", "Ezk. 37-39", "Ps. 132", "Pr. 24:1-12", "Jn. 18", "Rev. 5"],
    336: ["336", "Ezk. 40-41", "Ps. 69", "Pr. 24:13-22", "Jn. 19", "Rev. 6"],
    337: ["337", "Ezk. 42-44", "Ps. 86", "Pr. 24:23-26", "Jn. 20", "Rev. 7"],
    338: ["338", "Ezk. 45-46", "Ps. 116", "Pr. 24:27-29", "Jn. 21", "Rev. 8"],
    339: ["339", "Ezk. 47-48", "Ps. 73", "Pr. 24:30-34", "Mt. 1", "Rev. 9"],
    340: ["340", "", "", "Catch up Day", "", ""],
    341: ["341", "Da. 1-2", "Ps. 148", "Pr. 11:1-3", "Mt. 2", "Rev. 10"],
    342: ["342", "Da. 3-4", "Ps. 47", "Pr. 11:4-7", "Mt. 3", "Rev. 11"],
    343: ["343", "Da. 5-6", "Ps. 91", "Pr. 11:8-11", "Mt. 4", "Rev. 12"],
    344: ["344", "Da. 7", "Ps. 145", "Pr. 11:12-13", "Mt. 5", "Rev. 13"],
    345: ["345", "Da. 8-9", "Ps. 83", "Pr. 11:14-15", "Mt. 6", "Rev. 14"],
    346: ["346", "Da. 10-12", "Ps. 127", "Pr. 11:16-19", "Mt. 7", "Rev. 15"],
    347: ["347", "Ez. 1-3", "Ps. 80", "Pr. 11:20-21", "Mt. 8", "Rev. 16"],
    348: ["348", "Ez. 4-6", "Ps. 129", "Pr. 11:22-23", "Mt. 9", "Rev. 17"],
    349: ["349", "Ez. 7-8", "Ps. 87", "Pr. 11:24-28", "Mt. 10", "Rev. 18"],
    350: ["350", "Ez. 9-10", "Ps. 106", "Pr. 11:29-31", "Mt. 11", "Rev. 19"],
    351: ["351", "Hg. 1-3", "Ps. 45", "Pr. 6:1-5", "Mt. 12", "Rev. 20"],
    352: ["352", "Ne. 1-3", "Ps. 100", "Pr. 6:6-11", "Mt. 13", "Rev. 21"],
    353: ["353", "Ne. 4-5", "Ps. 120", "Pr. 6:12-15", "Mt. 14", "Rev. 22"],
    354: ["354", "Ne. 6-8", "Ps. 28", "Pr. 6:16-19", "Mt. 15", "Eph. 1"],
    355: ["355", "Ne. 9-10", "Ps. 66", "Pr. 6:20-35", "Mt. 16", "Eph. 2"],
    356: ["356", "Ne. 11-12", "Ps. 122", "Pr. 4", "Mt. 17", "Eph. 3"],
    357: ["357", "Ne. 13", "Ps. 126", "Pr. 30", "Mt. 18", "Eph. 4"],
    358: ["358", "Es. 1-2", "Ps. 128", "Pr. 31", "Mt. 19", "Eph. 5"],
    359: ["359", "Es. 3-7", "Ps. 7", "Pr. 23:1-5", "Mt. 20", "Eph. 6"],
    360: ["360", "Es. 8-10", "Ps. 23", "Pr. 23:6-8", "Mt. 21", "1 Pe. 1"],
    361: ["361", "Zec. 1-6", "Ps. 118", "Pr. 23:9-11", "Mt. 22", "1 Pe. 2"],
    362: ["362", "Zec. 7-10", "Ps. 125", "Pr. 23:12-18", "Mt. 23", "1 Pe. 3"],
    363: ["363", "Zec. 11-14", "Ps. 16", "Pr. 23:19-28", "Mt. 24", "1 Pe. 4"],
    364: ["364", "Mal. 1-4", "Ps. 77", "Pr. 23:29-35", "Mt. 25", "1 Pe. 5"],
    365: ["365", "", "Catch up Day: Mt. 26-28", "", "", ""],
}