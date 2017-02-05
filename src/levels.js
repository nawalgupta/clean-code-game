const levels = [{
    "name": "hello",
    "instruction": "Найди и исправь все стилевые ошибки в коде. Кликай мышкой по ошибкам.\nКаждая найденная ошибка: +1 балл.",
    "learning": true,
    "code": `void Main()
{
    Console.WriteLine("Enter your name: ");
    var {{veryBadVariableName_clickIt}} = Console.ReadLine();
    Console.WriteLine("Hello, " + {{veryBadVariableName_clickIt}});
}`,
    "bugs": {
        "veryBadVariableName_clickIt": {
            "type": "naming",
            "replace": "name",
            "description": "Длинное и ужасное имя переменной!"
        }
    }
}, {
    "name": "GetThem",
    "instruction": "Качественно выбранные имена — то что делает ваш код понятнее!",
    "learning": true,
    "code": "List<Position> {{GetThem}}(List<Cell> {{theBigList}})\n{\n\tvar {{list1}} = new List<Position>();\n\tforeach (var cell in {{theBigList}})\n\t{\n\t\tif (cell.IsEmpty) \n\t\t\t{{list1}}.Add(cell.Position);\n\t}\n\treturn {{list1}};\n}",
    "bugs": {
        "GetThem": {
            "type": "naming",
            "replace": "GetEmptyPositions",
            "description": "Не используйте местоимения в именах. Это совсем не добавляет понятности."
        },
        "list1": {
            "type": "naming",
            "replace": "emptyPositions",
            "description": "Имя должно отражать семантику, а не тип переменной. Имена вида s, list, array не дают полезной информации читателю."
        },
        "theBigList": {
            "type": "naming",
            "replace": "allCells",
            "description": "Имя должно отражать семантику, а не тип переменной. Имена вида s, list, array не дают полезной информации читателю."
        }
    }
}, {
    "name": "ViewsPerSecond",
    "instruction": "А что ещё, кроме качественных имен может сделать код понятнее?",
    "learning": true,
    "code": "double GetViewsPerSecond(IEnumerable<PageView> views, DateTime {{t}})\n{\n\tvar {{n}} = {{86400}};\n\tvar viewsCount = views.Count(v => v.Timestamp.Date == {{t}});\n\treturn (double)viewsCount / {{n}};\n}",
    "bugs": {
        "86400": {
            "type": "other",
            "replace": "24 * 60 * 60",
            "description": "Иногда, арифметические выражения понятнее, чем значение этого выражения.\nЗапись 24 * 60 * 60 проще проверить на корректность, чем 86400."
        },
        "t": {
            "type": "naming",
            "replace": "date",
            "description": "В именах стоит отражать существенные особенности. \nНапример, если переменная типа DateTime хранит только дату, можно назвать ее date."
        },
        "n": {
            "type": "naming",
            "replace": "secondsInDay",
            "description": "Имя переменной должно отражать семантику. \nСтарайтесь избегать однобуквенных имен. Общее правило: чем больше область видимости — тем подробнее должно быть имя."
        }
    }
}, {
    "name": "rstr",
    "instruction": "Осторожнее — начиная с этого уровня, за каждый неверный клик и каждую подсказку вы будете терять один балл!",
    "code": "var {{rstr}} = Console.ReadLine();\nvar {{flag}} = false;\nfor(var charIndex = 0; charIndex < {{rstr}}.Length; charIndex++)\n{\n\tif ({{flag}} || {{rstr}}[charIndex] != '\\\\')\n\t\tConsole.Write({{rstr}}[charIndex]);\n\t{{flag}} = {{rstr}}[charIndex] == '\\\\';\n}",
    "bugs": {
        "rstr": {
            "replace": "line",
            "type": "naming",
            "description": "Избегайте труднпрзнсимых имен и кодирования, понятного лишь вам."
        },
        "flag": {
            "replace": "escaped",
            "type": "naming",
            "description": "Не называйте булевы переменные flag, f и подобными именами.\nУ каждого \"флага\" есть смысл, который и нужно отразить в имени."
        }
    }
}, {
    "name": "bigrams",
    "instruction": "Придерживайтесь общепринятого стиля именования для текущего языка программирования.",
    "code": "List<string> GetBigrams(IList<string> words)\n{\n\tvar {{colBigrams}} = words.Count - 1;\n\tvar {{bigrams_list}} = new string[{{colBigrams}}];\n\tfor (var {{I}} = 0; {{I}} < {{colBigrams}}; {{I}}++)\n\t\t{{bigrams_list}}[{{I}}] = words[{{I}}] + \" \" + words[{{I}} + 1];\n\treturn {{bigrams_list}}.Distinct().ToList();\n}",
    "bugs": {
        "I": {
            "replace": "i",
            "type": "naming",
            "description": "В C# имена локальных переменных принято начинать с маленькой буквы.\nНарушение таких, казалось бы, несущественных правил часто сильно раздражает опытных программистов."
        },
        "colBigrams": {
            "replace": "bigramsCount",
            "type": "naming",
            "description": "Не используйте русские слова в именах (если только вы не программируете на 1C).\nЧитая код, программисты ожидают видеть английские имена, \nпоэтому написанные транслитом русские слова могут быть восприняты неправильно.\nНапример, в данном случае col (количество) легко спутать с сокращением от слова column."
        },
        "bigrams_list": {
            "type": "naming",
            "replace": "bigrams",
            "description": "В C# для составных имен принято использовать стиль CamelCase, и не использовать snake_case."
        }
    }
}, {
    "name": "arg",
    "instruction": "В имени нужно отражать полезный для понимания смысл и стараться избегать слов заместителей с неопределенным смыслом.",
    "code": "static void Main(string[] args)\n{\n\tvar {{arg}} = args.Length > 0 ? args[0] : defaultFilename;\n\tDateTime lastWriteTime = new FileInfo({{arg}}).LastWriteTime;\n\tbool {{check}} = lastWriteTime > DateTime.Now - TimeSpan.FromSeconds(1);\n\t{{Handle}}({{arg}}, {{check}});\n\tConsole.WriteLine(lastWriteTime);\n}",
    "bugs": {
        "arg": {
            "replace": "inputFile",
            "type": "naming",
            "description": "Отражайте в имени то, что важно при дальнейшем использовании.\nВ данном случае то, что это имя входного файла важнее того, что оно получено из аргументов командной строки."
        },
        "check": {
            "replace": "recentlyModified",
            "type": "naming",
            "description": "Имя 'check' почти всегда можно улучшить. Сообщите в имени, что именно проверяется."
        },
        "Handle": {
            "type": "methods",
            "replace": "ConvertFileToJson",
            "description": "Handle — слово заместитель, не добавляющее смысла. В чем именно заключается \"обработка\"? Отразите это в имени вместо слова Handle."
        }
    }
}, {
    "name": "manager",
    "instruction": "Продолжаем охоту на слова без смысла.",
    "code": "public interface {{IPriceManager}}\n{\n\tJson JsonFromXml(XmlDocument prices);\n\tXmlDocument XmlFromJson(Json prices);\n}",
    "bugs": {
        "IPriceManager": {
            "type": "naming",
            "replace": "IPriceFormatConverter",
            "description": "Manager — слово заместитель, не добавляющее смысла. Часто его можно заменить на что-то более осмысленное.\nНапример, менеджер по продажам может стать продавцом консультантом."
        }
    }
}, {
    "name": "CopyChars",
    "instruction": "Проблемы с именами в этом коде очевидны. Но тут есть кое-что еще!",
    "code": "void CopyChars(char[] {{array1}}, char[] {{array2}})\n{\n\t{{//copy arrays item by item.\n\t}}for(var i = 0; i < {{array1}}.Length; i++)\n\t\t{{array2}}[i] = {{array1}}[i];\n}",
    "bugs": {
        "array1": {
            "replace": "source",
            "type": "naming",
            "description": "Имена с номерами на конце — это антипаттерн.\nВместо добавления номеров старайтесь отразить в именах суть различия."
        },
        "array2": {
            "replace": "destination",
            "type": "naming",
            "description": "Функцию с непонятными именами аргументов неудобно использовать."
        },
        "//copy": {
            "replace": "",
            "type": "comments",
            "description": "Нет смысла писать комментарии, повторяющие код."
        }
    }
}, {
    "name": "English",
    "instruction": "В составных именах очень легко случайно продемонстрировать незнание английского :-)",
    "code": "private string {{directoryInput}};\n\nprivate string outputDirectory;\n\npublic enum {{QualityRender}} \n{\n\tHigh,\n\tMedium,\n\tLow\n}\n",
    "bugs": {
        "QualityRender": {
            "type": "naming",
            "replace": "RenderQuality",
            "description": "Нарушение правильного порядка слов в составных именах — частая ошибка программистов \nсо слабым знанием английского.\nКачество рендера — это QualityOfRender или просто RenderQuality."
        },
        "directoryInput": {
            "type": "naming",
            "replace": "inputDirectory",
            "description": "directoryInput с английского — это ввод директории. Входная директория — это inputDirectory."
        }
    }
}, {
    "name": "ShareIfYouLike",
    "instruction": "Автору будет приятно, если вы поделитесь ссылкой на эту игру с коллегами.\nЗаранее спасибо! :-)",
    "code": "if (you.Like(this.Game))\n{\n\tyou.Tweet();\n\tyou.Post();\n\tyou.Share();\n}\nelse\n{\n\tyou.{{H4Te_AUth0R()}};\n}\n",
    "bugs": {
        "H4Te_AUth0R()": {
            "type": "naming",
            "replace": "EmailAuthor(\"pe@kontur.ru\")",
            "description": "Ненависть — плохое чувство! :-)"
        }
    }
}, {
    "name": "Chessboard",
    "instruction": "Время закрепить все полученные на предыдущих уровнях знания!",
    "code": "enum {{ColorCell}}\n{ \n\tBlack, \n\tWhite\n}\n\nclass Chessboard \n{\n\tprivate {{ColorCell}}[,] {{array}};\n\tprivate int {{m_brdSz}};\n\n\tpublic Chessboard(int {{n}}) \n\t{\n\t\tthis.{{m_brdSz}} = {{n}};\n\t\tthis.{{array}} = new {{ColorCell}}[{{m_brdSz}},{{m_brdSz}}];\n\t\t{{//Fill board with black and white colors}}\n\t\tfor(var {{a}} = 0; {{a}} < {{m_brdSz}}; {{a}}++)\n\t\t\tfor(var {{b}} = 0; {{b}} < {{m_brdSz}}; {{b}}++) \n\t\t\t{\n\t\t\t\tbool isBlack = ({{a}} + {{b}}) % 2 == 0;\n\t\t\t\t{{array}}[{{a}}, {{b}}] = isBlack ? {{ColorCell}}.Black : {{ColorCell}}.White;\n\t\t\t}\n\t}\n}\n",
    "bugs": {
        "//Fill": {
            "type": "comments",
            "replace": "",
            "description": "Комментарии повторяющие код не имеют смысла."
        },
        "ColorCell": {
            "type": "naming",
            "replace": "CellColor",
            "description": "Нарушение правильного для английского языка порядка слов в составных именах — частая ошибка программистов \nсо слабым знанием английского.\nColorCell — это цветная клетка, а цвет клетки — CellColor.\nНе путайте — не вводите в замешательство читающих."
        },
        "n": {
            "type": "naming",
            "replace": "size",
            "description": "В данном контексте, n может обозначать как размер шахматной доски, так и количество фигур на доске или номер доски.\nИмя size устранит эту неоднозначность."
        },
        "m_brdSz": {
            "type": "naming",
            "replace": "size",
            "description": "Не используйте закодированные или труднопроизносимые имена. Вам их придется произносить или хотя бы мысленно проговаривать!"
        },
        "array": {
            "type": "naming",
            "replace": "cellColors",
            "description": "Имя должно отражать семантику, а не тип переменной. Имена вида s, list, array не дают полезной информации читателю."
        },
        "a": {
            "type": "naming",
            "replace": "y",
            "description": "Для обозначения координат вместо i, j и a, b лучше использовать предсказуемые и понятные x, y. "
        },
        "b": {
            "type": "naming",
            "replace": "x",
            "description": "Избегайте необходимости мысленного декодирования при чтении кода."
        }
    }
}, {
    "name": "Initialization",
    "instruction": "Переменные и классы — это сущности, а методы — действия. Имейте это в виду!",
    "code": "public void {{Initialization}}(int boardSize)\n{\n\tLog(\"Board initialization...\");\n\tthis.piecesCount = 0;\n\tthis.board = {{Board}}(boardSize, boardSize);\n\tLog(\"Board initialization finished\");\n}",
    "bugs": {
        "Initialization": {
            "type": "methods",
            "replace": "InitializeBoard",
            "description": "Методы — это действия, называйте их глаголами или глагольными фразами."
        },
        "Board": {
            "type": "methods",
            "replace": "CreateBoard",
            "description": "Методы — это действия, называйте их глаголами или глагольными фразами."
        }
    }
}, {
    "name": "GetSet",
    "instruction": "Имена должны выполнять обещания и не вводить читателя в замешательство.",
    "code": "void {{GetFactory}}()\n{\n\tvar user = Environment.UserName;\n\tthis.factory = {{FactoryCreator}}(user);\n}\n\nTimeSpan GetTimeout()\n{\n\treturn this.timeout;\n}\n\nvoid {{SetTimeout}}()\n{\n\tvar sectionName = systemName + \"/timeout\";\n\tthis.timeout = ReadSettings(sectionName).Timeout;\n}",
    "bugs": {
        "GetFactory": {
            "type": "methods",
            "replace": "InitFactory",
            "description": "Методы GetXXX, CreateXXX, ReadXXX должны возвращать результат.\nvoid-методы, инициализирующие поля класса лучше так не называть."
        },
        "FactoryCreator": {
            "type": "methods",
            "replace": "CreateFactory",
            "description": "Методы — это действия, называйте их глаголами или глагольными фразами."
        },
        "SetTimeout": {
            "type": "methods",
            "replace": "InitTimeoutFromSettings",
            "description": "Методы SetXXX должны принимать устанавливаемое значение в качестве аргумента. \nМетоды без аргументов лучше так не называть."
        }
    }
}, {
    "name": "SplitMethod",
    "instruction": "Имена переменных и методов тут в порядке. Но не только это делает код хорошим!",
    "code": "void Main(string[] args)\n{\n\tstring[] inputLines = File.ReadAllLines(args[0]);\n\tstring outputPath = args[1];\n\tif (Directory.Exists(outputPath))\n\t\toutputPath = Path.Combine(outputPath, Path.GetFileName(args[0]));\n\t{{\n\t//Convert file}}\n\tvar escapedLines = inputLines.Select(s => s.Replace(@\"\", @\"\\\"));\n\tvar outputText = string.Join(\"\\n\", escapedLines);\n\tFile.WriteAllText(outputPath, outputText);\n\tConsole.WriteLine(\"{0} characters\", outputText.Length);\n}",
    "bugs": {
        "//Convert": {
            "type": "methods",
            "replace": "ConvertFile(inputLines, outputPath);\n}\n\nvoid ConvertFile(IEnumerable<string> inputLines, string outputPath)\n{",
            "description": "Вместо комментария, разделяющего код на две фазы, стоит сделать настоящее разделение кода на методы.\nКаждый метод должен делать ровно одну вещь. Если вы можете естественным образом разбить один метод на два — сделайте это!\n"
        }
    }
}, {
    "name": "CommentExplainCode",
    "instruction": "Крохотные методы в одну-две строки часто могут значительно повысить читаемость кода.",
    "code": "{{//If employee deserves full benefits}}\nif ({{employee.IsHourly() && employee.Age > 65 || employee.HasSpecialReward}}))\n\tPay(employee, fullBenefitsAmount); {{//Pay largeAmount}}\nelse\n\tPay(employee, reducedAmount);",
    "bugs": {
        "//Pay": {
            "type": "comments",
            "replace": "",
            "description": "Комментарии повторяющие код не нужны. Они легко могут устареть!"
        },
        "employee.IsHourly()": {
            "type": "methods",
            "replace": "employee.DeservesFullBenefits()",
            "description": "Сложные булевы выражения стоит выделять в методы или вспомогательные переменные, давая им говорящие названия. Это улучшит читаемость."
        },
        "//If": {
            "type": "comments",
            "replace": "",
            "description": "Вместо поясняющего комментария лучше изменить код так, чтобы в комментарии не было нужды."
        }
    }
}, {
    "name": "endComments",
    "instruction": "Как вы уже поняли, далеко не все комментарии полезны!",
    "code": "void Main(string[] args)\n{\n\ttry\n\t{\n\t\tvar linesCount = 0;\n\t\tvar charsCount = 0;\n\t\tvar lines = File.ReadAllLines(args[0]);\n\t\tforeach(var line in lines)\n\t\t{\n\t\t\tlinesCount++;\n\t\t\tcharsCount += line.Length;\n\t\t} {{//foreach}}\n\t\tConsole.WriteLine(\"linesCount = \" + linesCount);\n\t\tConsole.WriteLine(\"charsCount = \" + charsCount);\n\t} {{//try}}\n\tcatch (Exception e)\n\t{\n\t\tConsole.WriteLine(\"Error: \" + e.Message);\n\t} {{//catch}}\n}",
    "bugs": {
        "//foreach": {
            "type": "comments",
            "replace": "",
            "description": "Комментарии вида 'конец цикла', 'конец функции' и подобные бессмысленны. "
        },
        "//try": {
            "type": "comments",
            "replace": "",
            "description": "Для коротких функций такие комментарии не нужны, а длинные функции лучше разбить на несколько более коротких."
        },
        "//catch": {
            "type": "comments",
            "replace": "",
            "description": "Современные среды разработки и программистские редакторы умеют подсвечивать парные скобки. Это надежнее таких комментариев."
        }
    }
}, {
    "name": "nameInsteadOfComment",
    "instruction": "Но не спешите удалять все комментарии из вашего кода. Бывают и полезные!",
    "code": "//format matched: hh:mm:ss, MMM dd, yyyy\nprivate Regex timeRegex = new Regex(@\"\\d*:\\d*:\\d*, \\w* \\d*, \\d*\");\n\nResponder {{GetResponder(); //Returns the Responder being tested.}}",
    "bugs": {
        "GetResponder();": {
            "type": "naming",
            "replace": "GetTestResponder();",
            "description": "Если появляется желание написать поясняющий комментарий к методу, стоит вместо этого постараться придумать более удачное имя методу."
        }
    }
}, {
    "name": "ExplainCompare",
    "instruction": "Хорошие комментарии должны объяснять намерения программиста в тех случаях, когда их сложно выразить непосредственно кодом.",
    "code": "{{//comparison of this and other object}}\npublic int CompareTo(object o)\n{\n\tvar other = o as WikiPagePath;\n\tif(other != null)\n\t{\n\t\t{{//compares concatenated names of this and others}}\n\t\tstring thisNames = string.Join(\"\", this.Names);\n\t\tstring otherNames = string.Join(\"\", other.Names);\n\t\treturn thisNames.CompareTo(otherNames);\n\t}\n\treturn 1; // WikiPagePath should be greater than any other wrong type.\n} {{//end of CompareTo}}",
    "bugs": {
        "//compares": {
            "type": "comments",
            "replace": "",
            "description": "Комментарии дословно повторяющие код бессмысленны."
        },
        "//comparison": {
            "type": "comments",
            "replace": "",
            "description": "Бессмысленно писать в комментарии то, что итак понятно из названия метода."
        },
        "//end": {
            "type": "comments",
            "replace": "",
            "description": "Комментарии вида 'конец цикла', 'конец функции' и подобные бессмысленны. \nДля коротких функций они не нужны, а длинные функции лучше разбить на несколько более коротких, вместо написания таких комментариев."
        }
    }
}, {
    "name": "XMLDoc",
    "instruction": "А что вы думаете о спец-комментариях — XML-документации и комментариях с историей изменений файла?",
    "code": "{{/*Changes (from 11-Oct-2011)\n* --------------------------\n* 12-Sep-2011 : Fix bug\n* 11-Oct-2011 : Move implementation to another file\n* 05-Nov-2011 : Add XML comments \n*/\n}}namespace Logger\n{\n\t///<summary>Implement Logger to provide customized event filtering</summary>\n\t///<remarks>\n\t///<para>\n\t///Users should implement this interface to implement customized logging\n\t///event filtering. Note that <see cref=\"Logger.Repository.Hierarchy.Logger\"/>\n\t///and <see cref=\"Logger.Appender.AppenderSkeleton\"/>, the parent class of all\n\t///standard appenders, have built-in filtering rules. It is suggested that you\n\t///first use and understand the built-in rules before rushing to write\n\t///your own custom filters.\n\t///</para>\n\t///</remarks>\n\tpublic interface IFilter : IOptionHandler\n\t{\n\t\t{{///<summary>Make a decision about logging event.</summary>\n\t\t///<param name=\"loggingEvent\">The LoggingEvent to decide upon</param>\n\t\t///<returns>The decision of the filter</returns>}}\n\t\tFilterDecision Decide(LoggingEvent loggingEvent);\n\n\t\t{{///<summary>Property to get and set the next filter</summary>\n\t\t///<value>The next filter in chain</value>\n\t\t}}IFilter NextInChain { get; set; }\n\t}\n}",
    "bugs": {
        "///<summary>Make": {
            "type": "comments",
            "replace": "",
            "description": "XML-комментарии не несущие новой информации бесполезны."
        },
        "///<summary>Property": {
            "type": "comments",
            "replace": "",
            "description": "Не пишите XML-комментарий только для того, чтобы он был. В наличии комментария должен быть какой-то смысл."
        },
        "/*Changes": {
            "type": "comments",
            "replace": "",
            "description": "Когда-то очень давно был смысл писать комментарии с историей изменения файла.\nНо сейчас вместо таких комментариев лучше использовать систему контроля версий и писать понятные сообщения к коммитам."
        }
    }
}, {
    "name": "collision",
    "instruction": "Время закрепить освоенные знания!",
    "code": "{{///<summary>Обрабатывает столкновение героя с врагом</summary>}}\nvoid {{CollisionHandler}}(GameObject hero, GameObject enemy)\n{\n\t{{//If hero and enemy collided\n\tif ((hero.X-enemy.X)*(hero.X-enemy.X) + (hero.Y-enemy.Y)*(hero.Y-enemy.Y) \n\t\t< (hero.Radius + enemy.Radius)*(hero.Radius + enemy.Radius))}}\n\t{\n\t\thero.Life--;\n\t\tif (!hero.IsAlive && OnHeroDeath != null) {{//нужно оповестить подписчиков}}\n\t\t\tOnHeroDeath(hero);\n\t}\n}",
    "bugs": {
        "///<summary>Обрабатывает": {
            "type": "comments",
            "replace": "",
            "description": "XML-комментарии бессмысленны, если не несут новую информацию."
        },
        "CollisionHandler": {
            "type": "methods",
            "replace": "HandleCollision",
            "description": "Методы — это действия, называйте их глаголами или глагольными фразами."
        },
        "//If": {
            "type": "comments",
            "replace": "if (Collided(hero, enemy))",
            "description": "Не используйте комментарии там, где можно выделить метод с говорящим именем."
        },
        "//нужно": {
            "type": "comments",
            "replace": "",
            "description": "Комментарии дословно повторяющие код бессмысленны."
        }
    }
}, {
    "name": "LoadMap",
    "instruction": "Последний уровень! По законам жанра тут должно быть много кода!",
    "code": "///<param name=\"path\">\n/// Path to file or directory with map description. \n/// If path is a path to directory, file default.map is used.\n///</param>\nGameMap LoadMap(string path)\n{\n\tvar {{Filename}} = Directory.Exists(path) \n\t\t? Path.Combine(path, \"default.map\") \n\t\t: path;\n\tvar lines = File.ReadAllLines({{Filename}});\n\tvar height = lines.Length;\n\tvar width = lines[0].Length;\n\t{{//Initialize map}}\n\tvar map = new GameMap(width, height{{) \n\t\t\t\t{\n\t\t\t\t\tScore = 0,\n\t\t\t\t\tHeroLifesCount = 3,\n\t\t\t\t\tTime = 0,\n\t\t\t\t}; }}\n\tfor(var y=0; y<height; y++)\n\t\tfor(var x=0; x<{{lines[0].Length}}; x++)\n\t\t{\n\t\t\t{{//============Select object to put in (x, y) cell;\n\t\t\tGameObject obj = null;\n\t\t\tswitch (lines[y][x])\n\t\t\t{\n\t\t\t\tcase 'H': \n\t\t\t\t\tobj = new Hero();\n\t\t\t\t\tbreak;\n\t\t\t\tcase '#':\n\t\t\t\t\tobj = new Wall();\n\t\t\t\t\tbreak;\n\t\t\t\tcase 'M':\n\t\t\t\t\tobj = new Monster();\n\t\t\t\t\tbreak;\n\t\t\t}\n\t\t\t//============Put created object on map}}\n\t\t\tmap.Put(x, y, obj);\n\t\t}\n\treturn map;\n}",
    "bugs": {
        "Filename": {
            "type": "naming",
            "replace": "filename",
            "description": "В C# локальные переменные принято называть с маленькой буквы."
        },
        "lines[0].Length": {
            "type": "other",
            "replace": "width",
            "description": "Устраняйте дублирование. Это делает код  понятнее и надежнее."
        },
        "//Initialize": {
            "type": "comments",
            "replace": "",
            "description": "При виде комментария, разделяющего метод на смысловые части, стоит вынести эти смысловые части в отдельные методы."
        },
        ")": {
            "type": "methods",
            "replace": ");",
            "description": "Логику инициализации полей карты лучше переместить в конструктор класса карты."
        },
        "//============Select": {
            "type": "methods",
            "replace": "var obj = CreateGameObjectFromChar(lines[y][x]);",
            "description": "Разделительные комментарии вроде такого часто показывают, что программист поленился выделить вспомогательный метод."
        }
    }
}];

export default levels;
