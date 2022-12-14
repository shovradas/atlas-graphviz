const scenarioBasic = {
    "scenarioName": "Basic Scenario",
    "supervisorAmount": 1,
    "atlasTimes": {
        "cleanup_time": 0.041864871978759766,
        "execution_time": 0.6497535705566406,
        "preparation_time": 0.5038516521453857
    },
    "trustLog": [
        {
            "agent": "B",
            "date_time": "2022-12-09 12:42:33:946895",
            "exec_time": "0.09905505180358887",
            "other_agent": "A",
            "resource_id": "http://example.com/Redecentralization_of_the_Web",
            "trust_value": "0.25"
        },
        {
            "agent": "B",
            "date_time": "2022-12-09 12:42:34:070706",
            "exec_time": "0.07228302955627441",
            "other_agent": "A",
            "resource_id": "http://example.com/Web_of_Things",
            "trust_value": "0.5"
        },
        {
            "agent": "B",
            "date_time": "2022-12-09 12:42:34:164515",
            "exec_time": "0.054683685302734375",
            "other_agent": "A",
            "resource_id": "http://example.com/Web_Assembly",
            "trust_value": "0.75"
        },
        {
            "agent": "B",
            "date_time": "2022-12-09 12:42:34:244179",
            "exec_time": "0.05110764503479004",
            "other_agent": "C",
            "resource_id": "http://example.com/Semantic_Web_and_Linked_Open_Data",
            "trust_value": "0.5"
        },
        {
            "agent": "B",
            "date_time": "2022-12-09 12:42:34:340896",
            "exec_time": "0.05858898162841797",
            "other_agent": "C",
            "resource_id": "http://example.com/Redecentralization_of_the_Web",
            "trust_value": "0.3125"
        },
        {
            "agent": "B",
            "date_time": "2022-12-09 12:42:34:434434",
            "exec_time": "0.05586552619934082",
            "other_agent": "C",
            "resource_id": "http://example.com/Web-based_learning",
            "trust_value": "0.25"
        }
    ],
    "agentsLog": {
        "A": [],
        "B": [
            {
                "date_time": "2022-12-09 12:42:33:860841",
                "metric_str": "content_trust.direct_experience",
                "other_agent": "A",
                "resource_id": "http://example.com/Redecentralization_of_the_Web",
                "trust_value": "0.0"
            },
            {
                "date_time": "2022-12-09 12:42:33:891357",
                "metric_str": "content_trust.recommendation",
                "other_agent": "A",
                "resource_id": "http://example.com/Redecentralization_of_the_Web",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-09 12:42:33:931893",
                "metric_str": "content_trust.popularity",
                "other_agent": "A",
                "resource_id": "http://example.com/Redecentralization_of_the_Web",
                "trust_value": "0.5"
            },
            {
                "date_time": "2022-12-09 12:42:34:009422",
                "metric_str": "content_trust.direct_experience",
                "other_agent": "A",
                "resource_id": "http://example.com/Web_of_Things",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-09 12:42:34:024426",
                "metric_str": "content_trust.recommendation",
                "other_agent": "A",
                "resource_id": "http://example.com/Web_of_Things",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-09 12:42:34:049605",
                "metric_str": "content_trust.popularity",
                "other_agent": "A",
                "resource_id": "http://example.com/Web_of_Things",
                "trust_value": "0.5"
            },
            {
                "date_time": "2022-12-09 12:42:34:118896",
                "metric_str": "content_trust.direct_experience",
                "other_agent": "A",
                "resource_id": "http://example.com/Web_Assembly",
                "trust_value": "1.0"
            },
            {
                "date_time": "2022-12-09 12:42:34:130941",
                "metric_str": "content_trust.recommendation",
                "other_agent": "A",
                "resource_id": "http://example.com/Web_Assembly",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-09 12:42:34:149472",
                "metric_str": "content_trust.popularity",
                "other_agent": "A",
                "resource_id": "http://example.com/Web_Assembly",
                "trust_value": "0.5"
            },
            {
                "date_time": "2022-12-09 12:42:34:199647",
                "metric_str": "content_trust.direct_experience",
                "other_agent": "C",
                "resource_id": "http://example.com/Semantic_Web_and_Linked_Open_Data",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-09 12:42:34:208608",
                "metric_str": "content_trust.recommendation",
                "other_agent": "C",
                "resource_id": "http://example.com/Semantic_Web_and_Linked_Open_Data",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-09 12:42:34:229658",
                "metric_str": "content_trust.popularity",
                "other_agent": "C",
                "resource_id": "http://example.com/Semantic_Web_and_Linked_Open_Data",
                "trust_value": "0.5"
            },
            {
                "date_time": "2022-12-09 12:42:34:291338",
                "metric_str": "content_trust.direct_experience",
                "other_agent": "C",
                "resource_id": "http://example.com/Redecentralization_of_the_Web",
                "trust_value": "0.125"
            },
            {
                "date_time": "2022-12-09 12:42:34:302498",
                "metric_str": "content_trust.recommendation",
                "other_agent": "C",
                "resource_id": "http://example.com/Redecentralization_of_the_Web",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-09 12:42:34:324029",
                "metric_str": "content_trust.popularity",
                "other_agent": "C",
                "resource_id": "http://example.com/Redecentralization_of_the_Web",
                "trust_value": "0.5"
            },
            {
                "date_time": "2022-12-09 12:42:34:384198",
                "metric_str": "content_trust.direct_experience",
                "other_agent": "C",
                "resource_id": "http://example.com/Web-based_learning",
                "trust_value": "0.0"
            },
            {
                "date_time": "2022-12-09 12:42:34:394191",
                "metric_str": "content_trust.recommendation",
                "other_agent": "C",
                "resource_id": "http://example.com/Web-based_learning",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-09 12:42:34:412807",
                "metric_str": "content_trust.popularity",
                "other_agent": "C",
                "resource_id": "http://example.com/Web-based_learning",
                "trust_value": "0.5"
            }
        ],
        "C": [],
        "D": []
    }
}

const scenarioLinks100 = {
    "scenarioName": "Test Run A 100",
    "supervisorAmount": 1,
    "atlasTimes": {
        "cleanup_time": 0.255237340927124,
        "execution_time": 149.38660264015198,
        "preparation_time": 9.95374345779419
    },
    "trustLog": [
        {
            "agent": "E",
            "date_time": "2023-01-13T15:16:53.267Z",
            "exec_time": "2.065690040588379",
            "other_agent": "I",
            "resource_id": "31012207-6aca-4e9a-aad4-89ceb0e374fa",
            "trust_value": "0.07217312096499766"
        },
        {
            "agent": "E",
            "date_time": "2023-01-13T15:22:38.525Z",
            "exec_time": "0.1181950569152832",
            "other_agent": "H",
            "resource_id": "7f18710c-5ec5-430e-b9dd-5d7d8333f662",
            "trust_value": "-1.0"
        },
        {
            "agent": "I",
            "date_time": "2023-01-13T15:11:38.898Z",
            "exec_time": "0.18166112899780273",
            "other_agent": "D",
            "resource_id": "c12af18e-135b-4908-92b5-9bbab4d6521e",
            "trust_value": "-1.0"
        },
        {
            "agent": "E",
            "date_time": "2023-01-13T15:13:24.289Z",
            "exec_time": "2.91098690032959",
            "other_agent": "G",
            "resource_id": "b3b962fa-4e6b-4594-a130-e37b5137cb85",
            "trust_value": "0.23669934222095879"
        },
        {
            "agent": "J",
            "date_time": "2023-01-13T15:21:44.315Z",
            "exec_time": "0.10221076011657715",
            "other_agent": "A",
            "resource_id": "4d999183-86ad-4f17-812b-66c7d1576e3d",
            "trust_value": "-1.0"
        },
        {
            "agent": "A",
            "date_time": "2023-01-13T15:15:25.453Z",
            "exec_time": "1.3976185321807861",
            "other_agent": "I",
            "resource_id": "ea285fc0-9fa4-4461-8c6a-ea8e31b69cc5",
            "trust_value": "0.09253860922873296"
        },
        {
            "agent": "I",
            "date_time": "2023-01-13T15:21:36.280Z",
            "exec_time": "1.1512985229492188",
            "other_agent": "F",
            "resource_id": "3cef966d-0082-4596-9fa4-a33daadf531d",
            "trust_value": "-0.004882978309988295"
        },
        {
            "agent": "G",
            "date_time": "2023-01-13T15:16:14.020Z",
            "exec_time": "1.505758285522461",
            "other_agent": "I",
            "resource_id": "e4fb53da-ba46-420e-b5ef-1189ec550fa4",
            "trust_value": "0.2392799589147844"
        },
        {
            "agent": "H",
            "date_time": "2023-01-13T15:16:51.422Z",
            "exec_time": "0.878922700881958",
            "other_agent": "F",
            "resource_id": "f57b765d-1671-452a-b170-310d83f261c4",
            "trust_value": "0.14705399636238697"
        },
        {
            "agent": "A",
            "date_time": "2023-01-13T15:13:24.463Z",
            "exec_time": "0.642688512802124",
            "other_agent": "G",
            "resource_id": "ceb35ced-5606-4167-9acf-4ebf3d3b5d80",
            "trust_value": "0.22508433181156687"
        },
        {
            "agent": "F",
            "date_time": "2023-01-13T15:10:55.119Z",
            "exec_time": "0.7096033096313477",
            "other_agent": "D",
            "resource_id": "079b73b6-b7a6-4314-b200-60046e7e15dd",
            "trust_value": "0.21636528813322306"
        },
        {
            "agent": "I",
            "date_time": "2023-01-13T15:11:00.337Z",
            "exec_time": "0.6130475997924805",
            "other_agent": "J",
            "resource_id": "e1a70885-d17a-4db4-b284-b461801bff4c",
            "trust_value": "-0.011276949230118476"
        },
        {
            "agent": "E",
            "date_time": "2023-01-13T15:18:03.873Z",
            "exec_time": "0.10657811164855957",
            "other_agent": "B",
            "resource_id": "e9becdd4-73f1-4f37-a763-a5826e9449b3",
            "trust_value": "-1.0"
        },
        {
            "agent": "G",
            "date_time": "2023-01-13T15:17:05.380Z",
            "exec_time": "1.5977344512939453",
            "other_agent": "I",
            "resource_id": "be855c09-9a76-4eef-b8a9-5f8a57b9dc4a",
            "trust_value": "0.21608802380586573"
        },
        {
            "agent": "H",
            "date_time": "2023-01-13T15:14:08.047Z",
            "exec_time": "1.5631067752838135",
            "other_agent": "F",
            "resource_id": "388560bf-eef0-42af-bbde-4933c639bec6",
            "trust_value": "0.049499813629853374"
        },
        {
            "agent": "G",
            "date_time": "2023-01-13T15:21:16.744Z",
            "exec_time": "0.09497213363647461",
            "other_agent": "H",
            "resource_id": "6cb2e9c9-2456-4575-bf01-067bb7ca2c51",
            "trust_value": "-1.0"
        },
        {
            "agent": "E",
            "date_time": "2023-01-13T15:12:59.719Z",
            "exec_time": "0.1014256477355957",
            "other_agent": "I",
            "resource_id": "67f35f30-d23f-4ec7-97fe-6a0622cc4643",
            "trust_value": "-1.0"
        },
        {
            "agent": "F",
            "date_time": "2023-01-13T15:13:30.621Z",
            "exec_time": "1.5481224060058594",
            "other_agent": "E",
            "resource_id": "e64f0231-c7f2-41e3-a262-b6f61a58a934",
            "trust_value": "0.1415190078755929"
        },
        {
            "agent": "J",
            "date_time": "2023-01-13T15:10:30.993Z",
            "exec_time": "1.426814317703247",
            "other_agent": "H",
            "resource_id": "4a0b2de7-8a71-4273-add7-626e0c4dd8a1",
            "trust_value": "0.28487634117242167"
        },
        {
            "agent": "G",
            "date_time": "2023-01-13T15:18:36.267Z",
            "exec_time": "0.11770176887512207",
            "other_agent": "C",
            "resource_id": "dbe97540-0827-4db5-b6b0-511e5217b62c",
            "trust_value": "-1.0"
        },
        {
            "agent": "E",
            "date_time": "2023-01-13T15:20:39.352Z",
            "exec_time": "1.6301052570343018",
            "other_agent": "H",
            "resource_id": "15b1cc47-d52d-41dd-a397-fd55c836db3e",
            "trust_value": "0.2246733490308394"
        },
        {
            "agent": "G",
            "date_time": "2023-01-13T15:25:17.875Z",
            "exec_time": "0.9189012050628662",
            "other_agent": "I",
            "resource_id": "4e33ea3b-3422-4d9a-965c-000b47e2a5f0",
            "trust_value": "0.1792213731997723"
        },
        {
            "agent": "C",
            "date_time": "2023-01-13T15:15:11.291Z",
            "exec_time": "1.1508290767669678",
            "other_agent": "D",
            "resource_id": "0a102c9f-45a9-4a5b-9206-3262d4be4781",
            "trust_value": "0.2218787719112006"
        },
        {
            "agent": "E",
            "date_time": "2023-01-13T15:25:04.926Z",
            "exec_time": "0.1426849365234375",
            "other_agent": "G",
            "resource_id": "af8ec117-e19c-4b0b-b809-d7afa1737a30",
            "trust_value": "-1.0"
        },
        {
            "agent": "F",
            "date_time": "2023-01-13T15:17:33.500Z",
            "exec_time": "0.09647846221923828",
            "other_agent": "D",
            "resource_id": "3fa939f6-ee0c-4ae1-9af8-234b72004176",
            "trust_value": "-1.0"
        },
        {
            "agent": "H",
            "date_time": "2023-01-13T15:24:01.751Z",
            "exec_time": "0.9003846645355225",
            "other_agent": "F",
            "resource_id": "df865ede-54af-4338-84fc-56491ad4e159",
            "trust_value": "0.1885233123478526"
        },
        {
            "agent": "C",
            "date_time": "2023-01-13T15:23:42.271Z",
            "exec_time": "1.1729724407196045",
            "other_agent": "E",
            "resource_id": "4baae5f0-d52c-44fd-88c4-c41720e8e501",
            "trust_value": "0.019434851311468892"
        },
        {
            "agent": "J",
            "date_time": "2023-01-13T15:18:07.239Z",
            "exec_time": "1.2232279777526855",
            "other_agent": "E",
            "resource_id": "b5910899-aea7-4cdf-b974-fd3f9367ffc2",
            "trust_value": "0.23559141975697412"
        },
        {
            "agent": "J",
            "date_time": "2023-01-13T15:25:59.374Z",
            "exec_time": "0.09887075424194336",
            "other_agent": "D",
            "resource_id": "0dd38d06-9eda-4659-b116-f60627fc5093",
            "trust_value": "-1.0"
        },
        {
            "agent": "E",
            "date_time": "2023-01-13T15:26:06.901Z",
            "exec_time": "1.4880542755126953",
            "other_agent": "I",
            "resource_id": "3dbbae25-6e16-44ab-b388-74d26c1d4f53",
            "trust_value": "0.15728299624294217"
        },
        {
            "agent": "B",
            "date_time": "2023-01-13T15:22:44.416Z",
            "exec_time": "6.714640378952026",
            "other_agent": "A",
            "resource_id": "e767e7e8-ad0b-4424-b01d-2209d6527529",
            "trust_value": "0.25940785713139614"
        },
        {
            "agent": "B",
            "date_time": "2023-01-13T15:11:02.727Z",
            "exec_time": "4.699311971664429",
            "other_agent": "E",
            "resource_id": "39de0ea0-cea1-477a-a987-28eeb1a48fff",
            "trust_value": "0.18008364692862447"
        },
        {
            "agent": "J",
            "date_time": "2023-01-13T15:22:54.367Z",
            "exec_time": "0.139786958694458",
            "other_agent": "F",
            "resource_id": "e977db3c-cae3-4e59-8dba-9c27a8d5128f",
            "trust_value": "-1.0"
        },
        {
            "agent": "E",
            "date_time": "2023-01-13T15:15:32.259Z",
            "exec_time": "0.09276533126831055",
            "other_agent": "D",
            "resource_id": "8b4f5e64-2db6-4317-9a15-41b9910b844d",
            "trust_value": "-1.0"
        },
        {
            "agent": "B",
            "date_time": "2023-01-13T15:24:45.569Z",
            "exec_time": "1.0283865928649902",
            "other_agent": "D",
            "resource_id": "ab8109b4-120c-4124-9786-f55aa2b962f4",
            "trust_value": "0.2399049866731192"
        },
        {
            "agent": "A",
            "date_time": "2023-01-13T15:26:18.267Z",
            "exec_time": "0.7378766536712646",
            "other_agent": "I",
            "resource_id": "c1151814-0924-4494-bcef-817a48d04c52",
            "trust_value": "0.10040327027040678"
        },
        {
            "agent": "H",
            "date_time": "2023-01-13T15:11:27.424Z",
            "exec_time": "0.8324458599090576",
            "other_agent": "C",
            "resource_id": "71ca86a9-fc27-4c9b-9f66-02a51a171256",
            "trust_value": "0.09426433284573758"
        },
        {
            "agent": "G",
            "date_time": "2023-01-13T15:17:48.696Z",
            "exec_time": "1.0918025970458984",
            "other_agent": "I",
            "resource_id": "be4ae04f-68cc-42a9-a24d-2712fa18d7eb",
            "trust_value": "0.23300963202535024"
        },
        {
            "agent": "D",
            "date_time": "2023-01-13T15:27:10.632Z",
            "exec_time": "1.2291126251220703",
            "other_agent": "B",
            "resource_id": "133a2c3a-bdb7-468e-bc04-0400e217ec6e",
            "trust_value": "0.16309572120847432"
        },
        {
            "agent": "A",
            "date_time": "2023-01-13T15:26:04.178Z",
            "exec_time": "0.6116294860839844",
            "other_agent": "D",
            "resource_id": "ccdf38d3-2584-4e17-a58d-e08bc1bcfb01",
            "trust_value": "0.1477092951058426"
        },
        {
            "agent": "J",
            "date_time": "2023-01-13T15:25:33.283Z",
            "exec_time": "1.6306238174438477",
            "other_agent": "D",
            "resource_id": "4fc687a4-b359-4e30-a866-55d3f4e28980",
            "trust_value": "0.18256873799614262"
        },
        {
            "agent": "A",
            "date_time": "2023-01-13T15:10:56.057Z",
            "exec_time": "0.7971651554107666",
            "other_agent": "G",
            "resource_id": "441ef62e-00de-481f-b1e4-8ede9f6f9c9f",
            "trust_value": "0.21256005619601528"
        },
        {
            "agent": "A",
            "date_time": "2023-01-13T15:17:00.165Z",
            "exec_time": "0.08832812309265137",
            "other_agent": "J",
            "resource_id": "19ff4048-bcfc-43ee-9821-b29c39618434",
            "trust_value": "-1.0"
        },
        {
            "agent": "I",
            "date_time": "2023-01-13T15:21:59.616Z",
            "exec_time": "0.9492740631103516",
            "other_agent": "G",
            "resource_id": "c2f8cba2-9f03-47a7-9c0f-d0d58d8a1615",
            "trust_value": "0.17704116604474926"
        },
        {
            "agent": "J",
            "date_time": "2023-01-13T15:26:04.877Z",
            "exec_time": "0.8459670543670654",
            "other_agent": "D",
            "resource_id": "48a7d157-f13b-455a-a70b-4fd91af1fd8d",
            "trust_value": "0.33213418823703594"
        },
        {
            "agent": "E",
            "date_time": "2023-01-13T15:16:53.841Z",
            "exec_time": "0.1856691837310791",
            "other_agent": "H",
            "resource_id": "ab1e8eb4-b8e2-4a43-9563-565196832386",
            "trust_value": "-1.0"
        },
        {
            "agent": "C",
            "date_time": "2023-01-13T15:18:44.780Z",
            "exec_time": "0.7847561836242676",
            "other_agent": "B",
            "resource_id": "0322374a-7270-4787-b539-1f72cf5fd62d",
            "trust_value": "-0.06933405162360923"
        },
        {
            "agent": "G",
            "date_time": "2023-01-13T15:24:44.920Z",
            "exec_time": "0.08380651473999023",
            "other_agent": "A",
            "resource_id": "f88781b4-f659-400c-b24d-9b2b1d472946",
            "trust_value": "-1.0"
        },
        {
            "agent": "C",
            "date_time": "2023-01-13T15:13:53.211Z",
            "exec_time": "0.0804436206817627",
            "other_agent": "B",
            "resource_id": "6a635ac8-491d-41a9-b9f0-1720a9e1cbe9",
            "trust_value": "-1.0"
        },
        {
            "agent": "F",
            "date_time": "2023-01-13T15:20:22.996Z",
            "exec_time": "0.0907447338104248",
            "other_agent": "A",
            "resource_id": "844e832c-91de-4009-91e6-aac5aa9ee738",
            "trust_value": "-1.0"
        },
        {
            "agent": "B",
            "date_time": "2023-01-13T15:24:11.531Z",
            "exec_time": "0.8851687908172607",
            "other_agent": "A",
            "resource_id": "0642eddd-085d-48e6-ab44-6ad42ff10533",
            "trust_value": "0.16568617716668763"
        },
        {
            "agent": "A",
            "date_time": "2023-01-13T15:24:17.555Z",
            "exec_time": "0.7347488403320312",
            "other_agent": "I",
            "resource_id": "e97ca905-4d61-4d96-b6c8-20bdc4d9d7c2",
            "trust_value": "0.06272285438300708"
        },
        {
            "agent": "I",
            "date_time": "2023-01-13T15:22:43.808Z",
            "exec_time": "1.3472175598144531",
            "other_agent": "B",
            "resource_id": "235788ca-6ed2-40b5-af26-467ea0f62b60",
            "trust_value": "0.26290051041188833"
        },
        {
            "agent": "C",
            "date_time": "2023-01-13T15:14:12.920Z",
            "exec_time": "1.595883846282959",
            "other_agent": "J",
            "resource_id": "69dc482c-aaf0-4db5-8d7f-213abd8ee2c7",
            "trust_value": "0.010759326585331552"
        },
        {
            "agent": "E",
            "date_time": "2023-01-13T15:14:09.964Z",
            "exec_time": "0.33768200874328613",
            "other_agent": "C",
            "resource_id": "404270bf-4058-4340-9aad-bdc9942305ab",
            "trust_value": "-1.0"
        },
        {
            "agent": "J",
            "date_time": "2023-01-13T15:16:51.548Z",
            "exec_time": "4.385582447052002",
            "other_agent": "F",
            "resource_id": "2b98e5e7-ce67-460e-9f6c-a2a21c433133",
            "trust_value": "0.2574619657114418"
        },
        {
            "agent": "G",
            "date_time": "2023-01-13T15:22:19.579Z",
            "exec_time": "0.2052927017211914",
            "other_agent": "C",
            "resource_id": "2a788cb3-4a5a-4d28-88aa-f5c5b4d14569",
            "trust_value": "-1.0"
        },
        {
            "agent": "J",
            "date_time": "2023-01-13T15:18:34.144Z",
            "exec_time": "0.25757908821105957",
            "other_agent": "B",
            "resource_id": "e1c76099-bcb7-480f-87ee-4f1e226f5819",
            "trust_value": "-1.0"
        },
        {
            "agent": "H",
            "date_time": "2023-01-13T15:15:08.016Z",
            "exec_time": "3.02799654006958",
            "other_agent": "I",
            "resource_id": "d6a977ac-a8f7-456a-b5eb-4b36d2dcdfbb",
            "trust_value": "0.0909649418134669"
        },
        {
            "agent": "E",
            "date_time": "2023-01-13T15:17:57.424Z",
            "exec_time": "3.0049149990081787",
            "other_agent": "I",
            "resource_id": "31c67a49-a9dc-4026-aa99-451b9fd16ab2",
            "trust_value": "0.16274354492742502"
        },
        {
            "agent": "F",
            "date_time": "2023-01-13T15:13:08.792Z",
            "exec_time": "2.075821876525879",
            "other_agent": "E",
            "resource_id": "6a011967-4879-4be2-821d-4984213bfb69",
            "trust_value": "0.012746601285766287"
        },
        {
            "agent": "G",
            "date_time": "2023-01-13T15:11:25.330Z",
            "exec_time": "0.18033719062805176",
            "other_agent": "F",
            "resource_id": "3f709ed4-2ba9-41b7-baa7-8604e830ed40",
            "trust_value": "-1.0"
        },
        {
            "agent": "G",
            "date_time": "2023-01-13T15:11:30.286Z",
            "exec_time": "0.1999516487121582",
            "other_agent": "C",
            "resource_id": "a95e5c03-431c-450c-b51e-fe2b181cefcc",
            "trust_value": "-1.0"
        },
        {
            "agent": "H",
            "date_time": "2023-01-13T15:25:00.398Z",
            "exec_time": "0.15913677215576172",
            "other_agent": "E",
            "resource_id": "00a367b5-4412-41eb-acdc-24fe7e447193",
            "trust_value": "-1.0"
        },
        {
            "agent": "G",
            "date_time": "2023-01-13T15:19:14.361Z",
            "exec_time": "0.14859509468078613",
            "other_agent": "D",
            "resource_id": "d8ecefa4-6f7e-4195-879d-c6bcefcbc295",
            "trust_value": "-1.0"
        },
        {
            "agent": "F",
            "date_time": "2023-01-13T15:27:17.095Z",
            "exec_time": "0.700117826461792",
            "other_agent": "H",
            "resource_id": "d3bdc308-75bc-438a-90f2-a0d0f2a1924e",
            "trust_value": "0.1153444414244948"
        },
        {
            "agent": "F",
            "date_time": "2023-01-13T15:22:49.037Z",
            "exec_time": "1.1127464771270752",
            "other_agent": "A",
            "resource_id": "558b587b-76d0-4e63-bbcb-25aa46fb2627",
            "trust_value": "0.18239473132673972"
        },
        {
            "agent": "A",
            "date_time": "2023-01-13T15:23:34.934Z",
            "exec_time": "1.3262732028961182",
            "other_agent": "D",
            "resource_id": "48ce2e18-b6e1-408a-a112-6a64e7405e02",
            "trust_value": "0.20194337176996247"
        },
        {
            "agent": "B",
            "date_time": "2023-01-13T15:25:35.845Z",
            "exec_time": "1.2338323593139648",
            "other_agent": "J",
            "resource_id": "aaf1076d-7e1c-4380-8ca4-46976c007535",
            "trust_value": "0.19301813095734202"
        },
        {
            "agent": "G",
            "date_time": "2023-01-13T15:19:48.000Z",
            "exec_time": "1.1106369495391846",
            "other_agent": "E",
            "resource_id": "c29c19d8-3de7-4ad9-8260-fcf3abd2cd4f",
            "trust_value": "0.24193758263342233"
        },
        {
            "agent": "D",
            "date_time": "2023-01-13T15:13:50.940Z",
            "exec_time": "0.10212540626525879",
            "other_agent": "B",
            "resource_id": "166cf2c4-e540-4821-885e-b6fd50da4c95",
            "trust_value": "-1.0"
        },
        {
            "agent": "E",
            "date_time": "2023-01-13T15:15:23.540Z",
            "exec_time": "1.5044748783111572",
            "other_agent": "F",
            "resource_id": "a348c8fc-e075-4c80-820e-e098612c4cd8",
            "trust_value": "0.19887517717284392"
        },
        {
            "agent": "I",
            "date_time": "2023-01-13T15:20:04.045Z",
            "exec_time": "0.7261447906494141",
            "other_agent": "A",
            "resource_id": "12386d1b-8d8b-40fb-bb2b-adf444440dec",
            "trust_value": "-0.050820758407409315"
        },
        {
            "agent": "J",
            "date_time": "2023-01-13T15:27:13.383Z",
            "exec_time": "1.0044903755187988",
            "other_agent": "A",
            "resource_id": "570babbd-0397-4c51-87d9-e207e19231ba",
            "trust_value": "0.27381704457564704"
        },
        {
            "agent": "I",
            "date_time": "2023-01-13T15:14:13.365Z",
            "exec_time": "0.753795862197876",
            "other_agent": "C",
            "resource_id": "dbdc4394-e023-429a-b84e-10b7be9f96c8",
            "trust_value": "-0.02720978277342859"
        },
        {
            "agent": "I",
            "date_time": "2023-01-13T15:18:01.326Z",
            "exec_time": "0.7420446872711182",
            "other_agent": "A",
            "resource_id": "14067f16-12f9-40f4-822d-b6ae15ca38e9",
            "trust_value": "0.12887610032098373"
        },
        {
            "agent": "F",
            "date_time": "2023-01-13T15:26:51.549Z",
            "exec_time": "0.08217835426330566",
            "other_agent": "A",
            "resource_id": "dfb5dc07-bec3-4888-9fc5-69d4c2df6b56",
            "trust_value": "-1.0"
        },
        {
            "agent": "F",
            "date_time": "2023-01-13T15:16:58.376Z",
            "exec_time": "0.9586782455444336",
            "other_agent": "J",
            "resource_id": "11306aa6-78c0-425f-8754-24091a98e72e",
            "trust_value": "0.31856089103659074"
        },
        {
            "agent": "E",
            "date_time": "2023-01-13T15:26:15.678Z",
            "exec_time": "1.1424484252929688",
            "other_agent": "C",
            "resource_id": "77ce1453-b11b-4cc8-8511-187a17ea87e1",
            "trust_value": "0.3083527953508711"
        },
        {
            "agent": "G",
            "date_time": "2023-01-13T15:20:01.180Z",
            "exec_time": "0.0983428955078125",
            "other_agent": "F",
            "resource_id": "1bfbdd59-7f66-4ea5-90d5-75bd586bec6c",
            "trust_value": "-1.0"
        },
        {
            "agent": "C",
            "date_time": "2023-01-13T15:23:56.500Z",
            "exec_time": "0.7858896255493164",
            "other_agent": "E",
            "resource_id": "5c785637-57da-4812-961a-cb205c3a50c4",
            "trust_value": "0.1575233638226862"
        },
        {
            "agent": "F",
            "date_time": "2023-01-13T15:26:50.425Z",
            "exec_time": "0.8076925277709961",
            "other_agent": "H",
            "resource_id": "7727b51f-d122-42d3-92f0-34b9f5e2aec2",
            "trust_value": "0.24698622570918802"
        },
        {
            "agent": "H",
            "date_time": "2023-01-13T15:18:10.368Z",
            "exec_time": "1.032653570175171",
            "other_agent": "J",
            "resource_id": "f6f3e6c6-02ae-43f6-aff8-b9c762e626e7",
            "trust_value": "0.0692397067079173"
        },
        {
            "agent": "C",
            "date_time": "2023-01-13T15:14:28.789Z",
            "exec_time": "0.17450428009033203",
            "other_agent": "F",
            "resource_id": "0c5c6da6-c89d-425b-b63b-fad7b1ad95fc",
            "trust_value": "-1.0"
        },
        {
            "agent": "J",
            "date_time": "2023-01-13T15:18:26.944Z",
            "exec_time": "1.4419822692871094",
            "other_agent": "I",
            "resource_id": "44648993-314f-466b-989b-4765cfdf5c44",
            "trust_value": "0.09845329489903135"
        },
        {
            "agent": "C",
            "date_time": "2023-01-13T15:13:11.504Z",
            "exec_time": "0.9915692806243896",
            "other_agent": "J",
            "resource_id": "0fc0929d-b3e6-4553-8929-5a96b6552636",
            "trust_value": "0.046852373813458414"
        },
        {
            "agent": "A",
            "date_time": "2023-01-13T15:25:12.057Z",
            "exec_time": "0.1520371437072754",
            "other_agent": "J",
            "resource_id": "ab47e586-89ae-4932-88cf-dae7e24e483e",
            "trust_value": "-1.0"
        },
        {
            "agent": "J",
            "date_time": "2023-01-13T15:21:48.229Z",
            "exec_time": "0.10071897506713867",
            "other_agent": "C",
            "resource_id": "677d1e8d-e82f-4401-9567-3a440346eaa2",
            "trust_value": "-1.0"
        },
        {
            "agent": "F",
            "date_time": "2023-01-13T15:21:10.408Z",
            "exec_time": "1.2836008071899414",
            "other_agent": "I",
            "resource_id": "9b64a3c9-97d8-4c5e-8190-f622306eafa7",
            "trust_value": "0.13636682212706208"
        },
        {
            "agent": "H",
            "date_time": "2023-01-13T15:12:05.390Z",
            "exec_time": "0.8099336624145508",
            "other_agent": "E",
            "resource_id": "940a5072-39e6-431e-afce-9e0497d4a6cf",
            "trust_value": "0.13144020208457646"
        },
        {
            "agent": "E",
            "date_time": "2023-01-13T15:24:18.764Z",
            "exec_time": "0.11466717720031738",
            "other_agent": "B",
            "resource_id": "c5d8d143-aa75-44b4-ba0c-93d4227cde36",
            "trust_value": "-1.0"
        },
        {
            "agent": "G",
            "date_time": "2023-01-13T15:18:30.079Z",
            "exec_time": "0.14518141746520996",
            "other_agent": "B",
            "resource_id": "299ecd20-2fa0-4761-9d49-6bb82a4919c4",
            "trust_value": "-1.0"
        },
        {
            "agent": "A",
            "date_time": "2023-01-13T15:26:21.732Z",
            "exec_time": "0.8340215682983398",
            "other_agent": "F",
            "resource_id": "7aa6c1be-c212-4b1e-90ee-3079bbed5d32",
            "trust_value": "0.2785247328638029"
        },
        {
            "agent": "D",
            "date_time": "2023-01-13T15:19:03.154Z",
            "exec_time": "0.08193087577819824",
            "other_agent": "B",
            "resource_id": "823c3a0d-cd16-45b7-9522-7b7c6a410433",
            "trust_value": "-1.0"
        },
        {
            "agent": "I",
            "date_time": "2023-01-13T15:12:35.717Z",
            "exec_time": "0.1773383617401123",
            "other_agent": "B",
            "resource_id": "b9afb8d7-e691-421d-9cb6-87d6200a2725",
            "trust_value": "-1.0"
        },
        {
            "agent": "A",
            "date_time": "2023-01-13T15:18:31.840Z",
            "exec_time": "0.8176536560058594",
            "other_agent": "J",
            "resource_id": "7579ec1c-9dd3-4f87-9123-fd3612a097bc",
            "trust_value": "0.12493461841977238"
        },
        {
            "agent": "G",
            "date_time": "2023-01-13T15:13:00.489Z",
            "exec_time": "0.14836740493774414",
            "other_agent": "D",
            "resource_id": "36479877-46b7-4811-bdf7-640d2cfc3e71",
            "trust_value": "-1.0"
        },
        {
            "agent": "B",
            "date_time": "2023-01-13T15:28:05.793Z",
            "exec_time": "1.1915175914764404",
            "other_agent": "G",
            "resource_id": "2c0c0d80-69d5-4ee7-9cd7-5722881ca2a0",
            "trust_value": "0.10927783673552609"
        },
        {
            "agent": "B",
            "date_time": "2023-01-13T15:24:48.010Z",
            "exec_time": "1.1223161220550537",
            "other_agent": "H",
            "resource_id": "ad569311-5ef8-4da4-af91-6aeb91784285",
            "trust_value": "0.22214891701671996"
        },
        {
            "agent": "D",
            "date_time": "2023-01-13T15:23:27.841Z",
            "exec_time": "0.13150525093078613",
            "other_agent": "E",
            "resource_id": "fbd08837-3a21-44ac-a756-6757a40146dc",
            "trust_value": "-1.0"
        }
    ],
    "agentsLog": {
        "A": [
            {
                "date_time": "2022-12-13 16:09:41:942813",
                "metric_str": "content_trust.bias",
                "other_agent": "I",
                "resource_id": "ea285fc0-9fa4-4461-8c6a-ea8e31b69cc5",
                "trust_value": "-0.3195588641063014"
            },
            {
                "date_time": "2022-12-13 16:09:41:946352",
                "metric_str": "content_trust.specificity",
                "other_agent": "I",
                "resource_id": "ea285fc0-9fa4-4461-8c6a-ea8e31b69cc5",
                "trust_value": "0.3013708268726485"
            },
            {
                "date_time": "2022-12-13 16:09:41:999278",
                "metric_str": "content_trust.likelihood",
                "other_agent": "I",
                "resource_id": "ea285fc0-9fa4-4461-8c6a-ea8e31b69cc5",
                "trust_value": "-0.642893405686263"
            },
            {
                "date_time": "2022-12-13 16:09:42:025951",
                "metric_str": "content_trust.incentive",
                "other_agent": "I",
                "resource_id": "ea285fc0-9fa4-4461-8c6a-ea8e31b69cc5",
                "trust_value": "-0.9355096596662047"
            },
            {
                "date_time": "2022-12-13 16:09:42:104371",
                "metric_str": "content_trust.deception",
                "other_agent": "I",
                "resource_id": "ea285fc0-9fa4-4461-8c6a-ea8e31b69cc5",
                "trust_value": "0.9577640613344625"
            },
            {
                "date_time": "2022-12-13 16:09:42:153295",
                "metric_str": "content_trust.age",
                "other_agent": "I",
                "resource_id": "ea285fc0-9fa4-4461-8c6a-ea8e31b69cc5",
                "trust_value": "1.0"
            },
            {
                "date_time": "2022-12-13 16:09:42:173934",
                "metric_str": "content_trust.authority",
                "other_agent": "I",
                "resource_id": "ea285fc0-9fa4-4461-8c6a-ea8e31b69cc5",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:09:42:197662",
                "metric_str": "content_trust.topic",
                "other_agent": "I",
                "resource_id": "ea285fc0-9fa4-4461-8c6a-ea8e31b69cc5",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:09:42:220352",
                "metric_str": "content_trust.provenance",
                "other_agent": "I",
                "resource_id": "ea285fc0-9fa4-4461-8c6a-ea8e31b69cc5",
                "trust_value": "1.0"
            },
            {
                "date_time": "2022-12-13 16:09:42:255646",
                "metric_str": "content_trust.direct_experience",
                "other_agent": "I",
                "resource_id": "ea285fc0-9fa4-4461-8c6a-ea8e31b69cc5",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:09:42:845460",
                "metric_str": "content_trust.recommendation",
                "other_agent": "I",
                "resource_id": "ea285fc0-9fa4-4461-8c6a-ea8e31b69cc5",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:09:42:952940",
                "metric_str": "content_trust.related_resources",
                "other_agent": "I",
                "resource_id": "ea285fc0-9fa4-4461-8c6a-ea8e31b69cc5",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:09:43:030121",
                "metric_str": "content_trust.user_expertise",
                "other_agent": "I",
                "resource_id": "ea285fc0-9fa4-4461-8c6a-ea8e31b69cc5",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:09:43:163315",
                "metric_str": "content_trust.popularity",
                "other_agent": "I",
                "resource_id": "ea285fc0-9fa4-4461-8c6a-ea8e31b69cc5",
                "trust_value": "0.5"
            },
            {
                "date_time": "2022-12-13 16:09:47:570787",
                "metric_str": "content_trust.bias",
                "other_agent": "G",
                "resource_id": "ceb35ced-5606-4167-9acf-4ebf3d3b5d80",
                "trust_value": "-0.21867768484935812"
            },
            {
                "date_time": "2022-12-13 16:09:47:572789",
                "metric_str": "content_trust.specificity",
                "other_agent": "G",
                "resource_id": "ceb35ced-5606-4167-9acf-4ebf3d3b5d80",
                "trust_value": "0.47405676232880056"
            },
            {
                "date_time": "2022-12-13 16:09:47:593448",
                "metric_str": "content_trust.likelihood",
                "other_agent": "G",
                "resource_id": "ceb35ced-5606-4167-9acf-4ebf3d3b5d80",
                "trust_value": "-0.5329863535103476"
            },
            {
                "date_time": "2022-12-13 16:09:47:640926",
                "metric_str": "content_trust.incentive",
                "other_agent": "G",
                "resource_id": "ceb35ced-5606-4167-9acf-4ebf3d3b5d80",
                "trust_value": "-0.3576931461529913"
            },
            {
                "date_time": "2022-12-13 16:09:47:668318",
                "metric_str": "content_trust.deception",
                "other_agent": "G",
                "resource_id": "ceb35ced-5606-4167-9acf-4ebf3d3b5d80",
                "trust_value": "0.8394274133376811"
            },
            {
                "date_time": "2022-12-13 16:09:47:691503",
                "metric_str": "content_trust.age",
                "other_agent": "G",
                "resource_id": "ceb35ced-5606-4167-9acf-4ebf3d3b5d80",
                "trust_value": "1.0"
            },
            {
                "date_time": "2022-12-13 16:09:47:715679",
                "metric_str": "content_trust.authority",
                "other_agent": "G",
                "resource_id": "ceb35ced-5606-4167-9acf-4ebf3d3b5d80",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:09:47:765998",
                "metric_str": "content_trust.topic",
                "other_agent": "G",
                "resource_id": "ceb35ced-5606-4167-9acf-4ebf3d3b5d80",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:09:47:788650",
                "metric_str": "content_trust.provenance",
                "other_agent": "G",
                "resource_id": "ceb35ced-5606-4167-9acf-4ebf3d3b5d80",
                "trust_value": "1.0"
            },
            {
                "date_time": "2022-12-13 16:09:47:823453",
                "metric_str": "content_trust.direct_experience",
                "other_agent": "G",
                "resource_id": "ceb35ced-5606-4167-9acf-4ebf3d3b5d80",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:09:47:937126",
                "metric_str": "content_trust.recommendation",
                "other_agent": "G",
                "resource_id": "ceb35ced-5606-4167-9acf-4ebf3d3b5d80",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:09:48:011853",
                "metric_str": "content_trust.related_resources",
                "other_agent": "G",
                "resource_id": "ceb35ced-5606-4167-9acf-4ebf3d3b5d80",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:09:48:039690",
                "metric_str": "content_trust.user_expertise",
                "other_agent": "G",
                "resource_id": "ceb35ced-5606-4167-9acf-4ebf3d3b5d80",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:09:48:139426",
                "metric_str": "content_trust.popularity",
                "other_agent": "G",
                "resource_id": "ceb35ced-5606-4167-9acf-4ebf3d3b5d80",
                "trust_value": "1.0"
            },
            {
                "date_time": "2022-12-13 16:10:31:205851",
                "metric_str": "content_trust.bias",
                "other_agent": "I",
                "resource_id": "c1151814-0924-4494-bcef-817a48d04c52",
                "trust_value": "0.2752924838009927"
            },
            {
                "date_time": "2022-12-13 16:10:31:210417",
                "metric_str": "content_trust.specificity",
                "other_agent": "I",
                "resource_id": "c1151814-0924-4494-bcef-817a48d04c52",
                "trust_value": "-0.447467008162971"
            },
            {
                "date_time": "2022-12-13 16:10:31:265553",
                "metric_str": "content_trust.likelihood",
                "other_agent": "I",
                "resource_id": "c1151814-0924-4494-bcef-817a48d04c52",
                "trust_value": "0.14507469572174747"
            },
            {
                "date_time": "2022-12-13 16:10:31:300328",
                "metric_str": "content_trust.incentive",
                "other_agent": "I",
                "resource_id": "c1151814-0924-4494-bcef-817a48d04c52",
                "trust_value": "-0.8365614606454543"
            },
            {
                "date_time": "2022-12-13 16:10:31:332165",
                "metric_str": "content_trust.deception",
                "other_agent": "I",
                "resource_id": "c1151814-0924-4494-bcef-817a48d04c52",
                "trust_value": "-0.256061085181555"
            },
            {
                "date_time": "2022-12-13 16:10:31:365930",
                "metric_str": "content_trust.age",
                "other_agent": "I",
                "resource_id": "c1151814-0924-4494-bcef-817a48d04c52",
                "trust_value": "1.0"
            },
            {
                "date_time": "2022-12-13 16:10:31:400833",
                "metric_str": "content_trust.authority",
                "other_agent": "I",
                "resource_id": "c1151814-0924-4494-bcef-817a48d04c52",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:10:31:472990",
                "metric_str": "content_trust.topic",
                "other_agent": "I",
                "resource_id": "c1151814-0924-4494-bcef-817a48d04c52",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:10:31:512283",
                "metric_str": "content_trust.provenance",
                "other_agent": "I",
                "resource_id": "c1151814-0924-4494-bcef-817a48d04c52",
                "trust_value": "1.0"
            },
            {
                "date_time": "2022-12-13 16:10:31:549128",
                "metric_str": "content_trust.direct_experience",
                "other_agent": "I",
                "resource_id": "c1151814-0924-4494-bcef-817a48d04c52",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:10:31:680822",
                "metric_str": "content_trust.recommendation",
                "other_agent": "I",
                "resource_id": "c1151814-0924-4494-bcef-817a48d04c52",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:10:31:712606",
                "metric_str": "content_trust.related_resources",
                "other_agent": "I",
                "resource_id": "c1151814-0924-4494-bcef-817a48d04c52",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:10:31:753883",
                "metric_str": "content_trust.user_expertise",
                "other_agent": "I",
                "resource_id": "c1151814-0924-4494-bcef-817a48d04c52",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:10:31:829385",
                "metric_str": "content_trust.popularity",
                "other_agent": "I",
                "resource_id": "c1151814-0924-4494-bcef-817a48d04c52",
                "trust_value": "0.5"
            },
            {
                "date_time": "2022-12-13 16:10:36:313517",
                "metric_str": "content_trust.bias",
                "other_agent": "D",
                "resource_id": "ccdf38d3-2584-4e17-a58d-e08bc1bcfb01",
                "trust_value": "0.7067200845314925"
            },
            {
                "date_time": "2022-12-13 16:10:36:317102",
                "metric_str": "content_trust.specificity",
                "other_agent": "D",
                "resource_id": "ccdf38d3-2584-4e17-a58d-e08bc1bcfb01",
                "trust_value": "-0.7852769632982066"
            },
            {
                "date_time": "2022-12-13 16:10:36:346245",
                "metric_str": "content_trust.likelihood",
                "other_agent": "D",
                "resource_id": "ccdf38d3-2584-4e17-a58d-e08bc1bcfb01",
                "trust_value": "-0.7181500185890419"
            },
            {
                "date_time": "2022-12-13 16:10:36:371469",
                "metric_str": "content_trust.incentive",
                "other_agent": "D",
                "resource_id": "ccdf38d3-2584-4e17-a58d-e08bc1bcfb01",
                "trust_value": "0.3109618330208723"
            },
            {
                "date_time": "2022-12-13 16:10:36:398320",
                "metric_str": "content_trust.deception",
                "other_agent": "D",
                "resource_id": "ccdf38d3-2584-4e17-a58d-e08bc1bcfb01",
                "trust_value": "0.90102793194285"
            },
            {
                "date_time": "2022-12-13 16:10:36:430602",
                "metric_str": "content_trust.age",
                "other_agent": "D",
                "resource_id": "ccdf38d3-2584-4e17-a58d-e08bc1bcfb01",
                "trust_value": "1.0"
            },
            {
                "date_time": "2022-12-13 16:10:36:455485",
                "metric_str": "content_trust.authority",
                "other_agent": "D",
                "resource_id": "ccdf38d3-2584-4e17-a58d-e08bc1bcfb01",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:10:36:513373",
                "metric_str": "content_trust.topic",
                "other_agent": "D",
                "resource_id": "ccdf38d3-2584-4e17-a58d-e08bc1bcfb01",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:10:36:532648",
                "metric_str": "content_trust.provenance",
                "other_agent": "D",
                "resource_id": "ccdf38d3-2584-4e17-a58d-e08bc1bcfb01",
                "trust_value": "1.0"
            },
            {
                "date_time": "2022-12-13 16:10:36:562993",
                "metric_str": "content_trust.direct_experience",
                "other_agent": "D",
                "resource_id": "ccdf38d3-2584-4e17-a58d-e08bc1bcfb01",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:10:36:669288",
                "metric_str": "content_trust.recommendation",
                "other_agent": "D",
                "resource_id": "ccdf38d3-2584-4e17-a58d-e08bc1bcfb01",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:10:36:748002",
                "metric_str": "content_trust.related_resources",
                "other_agent": "D",
                "resource_id": "ccdf38d3-2584-4e17-a58d-e08bc1bcfb01",
                "trust_value": "-0.7096314458832305"
            },
            {
                "date_time": "2022-12-13 16:10:36:783287",
                "metric_str": "content_trust.user_expertise",
                "other_agent": "D",
                "resource_id": "ccdf38d3-2584-4e17-a58d-e08bc1bcfb01",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:10:36:831307",
                "metric_str": "content_trust.popularity",
                "other_agent": "D",
                "resource_id": "ccdf38d3-2584-4e17-a58d-e08bc1bcfb01",
                "trust_value": "0.5"
            },
            {
                "date_time": "2022-12-13 16:10:39:215898",
                "metric_str": "content_trust.bias",
                "other_agent": "G",
                "resource_id": "441ef62e-00de-481f-b1e4-8ede9f6f9c9f",
                "trust_value": "-0.31179247033889057"
            },
            {
                "date_time": "2022-12-13 16:10:39:218428",
                "metric_str": "content_trust.specificity",
                "other_agent": "G",
                "resource_id": "441ef62e-00de-481f-b1e4-8ede9f6f9c9f",
                "trust_value": "-0.3266096357799926"
            },
            {
                "date_time": "2022-12-13 16:10:39:245144",
                "metric_str": "content_trust.likelihood",
                "other_agent": "G",
                "resource_id": "441ef62e-00de-481f-b1e4-8ede9f6f9c9f",
                "trust_value": "0.39856832129529285"
            },
            {
                "date_time": "2022-12-13 16:10:39:270019",
                "metric_str": "content_trust.incentive",
                "other_agent": "G",
                "resource_id": "441ef62e-00de-481f-b1e4-8ede9f6f9c9f",
                "trust_value": "0.09437975365086171"
            },
            {
                "date_time": "2022-12-13 16:10:39:311506",
                "metric_str": "content_trust.deception",
                "other_agent": "G",
                "resource_id": "441ef62e-00de-481f-b1e4-8ede9f6f9c9f",
                "trust_value": "-0.17270759242266953"
            },
            {
                "date_time": "2022-12-13 16:10:39:348764",
                "metric_str": "content_trust.age",
                "other_agent": "G",
                "resource_id": "441ef62e-00de-481f-b1e4-8ede9f6f9c9f",
                "trust_value": "1.0"
            },
            {
                "date_time": "2022-12-13 16:10:39:399257",
                "metric_str": "content_trust.authority",
                "other_agent": "G",
                "resource_id": "441ef62e-00de-481f-b1e4-8ede9f6f9c9f",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:10:39:506202",
                "metric_str": "content_trust.topic",
                "other_agent": "G",
                "resource_id": "441ef62e-00de-481f-b1e4-8ede9f6f9c9f",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:10:39:597670",
                "metric_str": "content_trust.provenance",
                "other_agent": "G",
                "resource_id": "441ef62e-00de-481f-b1e4-8ede9f6f9c9f",
                "trust_value": "1.0"
            },
            {
                "date_time": "2022-12-13 16:10:39:670962",
                "metric_str": "content_trust.direct_experience",
                "other_agent": "G",
                "resource_id": "441ef62e-00de-481f-b1e4-8ede9f6f9c9f",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:10:39:799968",
                "metric_str": "content_trust.recommendation",
                "other_agent": "G",
                "resource_id": "441ef62e-00de-481f-b1e4-8ede9f6f9c9f",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:10:39:825775",
                "metric_str": "content_trust.related_resources",
                "other_agent": "G",
                "resource_id": "441ef62e-00de-481f-b1e4-8ede9f6f9c9f",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:10:39:867396",
                "metric_str": "content_trust.user_expertise",
                "other_agent": "G",
                "resource_id": "441ef62e-00de-481f-b1e4-8ede9f6f9c9f",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:10:39:960237",
                "metric_str": "content_trust.popularity",
                "other_agent": "G",
                "resource_id": "441ef62e-00de-481f-b1e4-8ede9f6f9c9f",
                "trust_value": "1.0"
            },
            {
                "date_time": "2022-12-13 16:10:40:262020",
                "metric_str": "content_trust.bias",
                "other_agent": "J",
                "resource_id": "19ff4048-bcfc-43ee-9821-b29c39618434",
                "trust_value": "0.41361366450738424"
            },
            {
                "date_time": "2022-12-13 16:10:40:264035",
                "metric_str": "content_trust.specificity",
                "other_agent": "J",
                "resource_id": "19ff4048-bcfc-43ee-9821-b29c39618434",
                "trust_value": "-0.2887030063582843"
            },
            {
                "date_time": "2022-12-13 16:10:40:291242",
                "metric_str": "content_trust.likelihood",
                "other_agent": "J",
                "resource_id": "19ff4048-bcfc-43ee-9821-b29c39618434",
                "trust_value": "0.23600174152868925"
            },
            {
                "date_time": "2022-12-13 16:10:40:325559",
                "metric_str": "content_trust.incentive",
                "other_agent": "J",
                "resource_id": "19ff4048-bcfc-43ee-9821-b29c39618434",
                "trust_value": "0.1255249608458071"
            },
            {
                "date_time": "2022-12-13 16:10:47:073781",
                "metric_str": "content_trust.bias",
                "other_agent": "I",
                "resource_id": "e97ca905-4d61-4d96-b6c8-20bdc4d9d7c2",
                "trust_value": "-0.8226564779642165"
            },
            {
                "date_time": "2022-12-13 16:10:47:075293",
                "metric_str": "content_trust.specificity",
                "other_agent": "I",
                "resource_id": "e97ca905-4d61-4d96-b6c8-20bdc4d9d7c2",
                "trust_value": "-0.44646295504612876"
            },
            {
                "date_time": "2022-12-13 16:10:47:097331",
                "metric_str": "content_trust.likelihood",
                "other_agent": "I",
                "resource_id": "e97ca905-4d61-4d96-b6c8-20bdc4d9d7c2",
                "trust_value": "-0.8790734534981706"
            },
            {
                "date_time": "2022-12-13 16:10:47:127041",
                "metric_str": "content_trust.incentive",
                "other_agent": "I",
                "resource_id": "e97ca905-4d61-4d96-b6c8-20bdc4d9d7c2",
                "trust_value": "-0.0662261387845482"
            },
            {
                "date_time": "2022-12-13 16:10:47:158840",
                "metric_str": "content_trust.deception",
                "other_agent": "I",
                "resource_id": "e97ca905-4d61-4d96-b6c8-20bdc4d9d7c2",
                "trust_value": "0.4232128390615568"
            },
            {
                "date_time": "2022-12-13 16:10:47:193677",
                "metric_str": "content_trust.age",
                "other_agent": "I",
                "resource_id": "e97ca905-4d61-4d96-b6c8-20bdc4d9d7c2",
                "trust_value": "1.0"
            },
            {
                "date_time": "2022-12-13 16:10:47:228566",
                "metric_str": "content_trust.authority",
                "other_agent": "I",
                "resource_id": "e97ca905-4d61-4d96-b6c8-20bdc4d9d7c2",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:10:47:317427",
                "metric_str": "content_trust.topic",
                "other_agent": "I",
                "resource_id": "e97ca905-4d61-4d96-b6c8-20bdc4d9d7c2",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:10:47:341129",
                "metric_str": "content_trust.provenance",
                "other_agent": "I",
                "resource_id": "e97ca905-4d61-4d96-b6c8-20bdc4d9d7c2",
                "trust_value": "1.0"
            },
            {
                "date_time": "2022-12-13 16:10:47:380429",
                "metric_str": "content_trust.direct_experience",
                "other_agent": "I",
                "resource_id": "e97ca905-4d61-4d96-b6c8-20bdc4d9d7c2",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:10:47:509761",
                "metric_str": "content_trust.recommendation",
                "other_agent": "I",
                "resource_id": "e97ca905-4d61-4d96-b6c8-20bdc4d9d7c2",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:10:47:640003",
                "metric_str": "content_trust.related_resources",
                "other_agent": "I",
                "resource_id": "e97ca905-4d61-4d96-b6c8-20bdc4d9d7c2",
                "trust_value": "-0.13244644407170614"
            },
            {
                "date_time": "2022-12-13 16:10:47:692010",
                "metric_str": "content_trust.user_expertise",
                "other_agent": "I",
                "resource_id": "e97ca905-4d61-4d96-b6c8-20bdc4d9d7c2",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:10:47:759116",
                "metric_str": "content_trust.popularity",
                "other_agent": "I",
                "resource_id": "e97ca905-4d61-4d96-b6c8-20bdc4d9d7c2",
                "trust_value": "0.5"
            },
            {
                "date_time": "2022-12-13 16:11:21:404634",
                "metric_str": "content_trust.bias",
                "other_agent": "D",
                "resource_id": "48ce2e18-b6e1-408a-a112-6a64e7405e02",
                "trust_value": "0.1154625328623462"
            },
            {
                "date_time": "2022-12-13 16:11:21:407234",
                "metric_str": "content_trust.specificity",
                "other_agent": "D",
                "resource_id": "48ce2e18-b6e1-408a-a112-6a64e7405e02",
                "trust_value": "0.7899923949605949"
            },
            {
                "date_time": "2022-12-13 16:11:21:514850",
                "metric_str": "content_trust.likelihood",
                "other_agent": "D",
                "resource_id": "48ce2e18-b6e1-408a-a112-6a64e7405e02",
                "trust_value": "-0.6809439989744825"
            },
            {
                "date_time": "2022-12-13 16:11:21:618914",
                "metric_str": "content_trust.incentive",
                "other_agent": "D",
                "resource_id": "48ce2e18-b6e1-408a-a112-6a64e7405e02",
                "trust_value": "-0.4253497274044413"
            },
            {
                "date_time": "2022-12-13 16:11:21:649158",
                "metric_str": "content_trust.deception",
                "other_agent": "D",
                "resource_id": "48ce2e18-b6e1-408a-a112-6a64e7405e02",
                "trust_value": "-0.29651339987977576"
            },
            {
                "date_time": "2022-12-13 16:11:21:682445",
                "metric_str": "content_trust.age",
                "other_agent": "D",
                "resource_id": "48ce2e18-b6e1-408a-a112-6a64e7405e02",
                "trust_value": "1.0"
            },
            {
                "date_time": "2022-12-13 16:11:21:738997",
                "metric_str": "content_trust.authority",
                "other_agent": "D",
                "resource_id": "48ce2e18-b6e1-408a-a112-6a64e7405e02",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:11:21:877049",
                "metric_str": "content_trust.topic",
                "other_agent": "D",
                "resource_id": "48ce2e18-b6e1-408a-a112-6a64e7405e02",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:11:21:974009",
                "metric_str": "content_trust.provenance",
                "other_agent": "D",
                "resource_id": "48ce2e18-b6e1-408a-a112-6a64e7405e02",
                "trust_value": "1.0"
            },
            {
                "date_time": "2022-12-13 16:11:22:025507",
                "metric_str": "content_trust.direct_experience",
                "other_agent": "D",
                "resource_id": "48ce2e18-b6e1-408a-a112-6a64e7405e02",
                "trust_value": "-0.023934680030289313"
            },
            {
                "date_time": "2022-12-13 16:11:22:263204",
                "metric_str": "content_trust.recommendation",
                "other_agent": "D",
                "resource_id": "48ce2e18-b6e1-408a-a112-6a64e7405e02",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:11:22:417137",
                "metric_str": "content_trust.related_resources",
                "other_agent": "D",
                "resource_id": "48ce2e18-b6e1-408a-a112-6a64e7405e02",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:11:22:474205",
                "metric_str": "content_trust.user_expertise",
                "other_agent": "D",
                "resource_id": "48ce2e18-b6e1-408a-a112-6a64e7405e02",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:11:22:555495",
                "metric_str": "content_trust.popularity",
                "other_agent": "D",
                "resource_id": "48ce2e18-b6e1-408a-a112-6a64e7405e02",
                "trust_value": "0.5"
            },
            {
                "date_time": "2022-12-13 16:11:47:651016",
                "metric_str": "content_trust.bias",
                "other_agent": "J",
                "resource_id": "ab47e586-89ae-4932-88cf-dae7e24e483e",
                "trust_value": "-0.6580866445110403"
            },
            {
                "date_time": "2022-12-13 16:11:47:655019",
                "metric_str": "content_trust.specificity",
                "other_agent": "J",
                "resource_id": "ab47e586-89ae-4932-88cf-dae7e24e483e",
                "trust_value": "0.17514257181738024"
            },
            {
                "date_time": "2022-12-13 16:11:47:704399",
                "metric_str": "content_trust.likelihood",
                "other_agent": "J",
                "resource_id": "ab47e586-89ae-4932-88cf-dae7e24e483e",
                "trust_value": "0.3926132512397058"
            },
            {
                "date_time": "2022-12-13 16:11:47:760059",
                "metric_str": "content_trust.incentive",
                "other_agent": "J",
                "resource_id": "ab47e586-89ae-4932-88cf-dae7e24e483e",
                "trust_value": "0.1697020666343665"
            },
            {
                "date_time": "2022-12-13 16:11:54:032155",
                "metric_str": "content_trust.bias",
                "other_agent": "F",
                "resource_id": "7aa6c1be-c212-4b1e-90ee-3079bbed5d32",
                "trust_value": "0.338878798056486"
            },
            {
                "date_time": "2022-12-13 16:11:54:035155",
                "metric_str": "content_trust.specificity",
                "other_agent": "F",
                "resource_id": "7aa6c1be-c212-4b1e-90ee-3079bbed5d32",
                "trust_value": "0.46588578719252616"
            },
            {
                "date_time": "2022-12-13 16:11:54:063895",
                "metric_str": "content_trust.likelihood",
                "other_agent": "F",
                "resource_id": "7aa6c1be-c212-4b1e-90ee-3079bbed5d32",
                "trust_value": "-0.3086345849891885"
            },
            {
                "date_time": "2022-12-13 16:11:54:092289",
                "metric_str": "content_trust.incentive",
                "other_agent": "F",
                "resource_id": "7aa6c1be-c212-4b1e-90ee-3079bbed5d32",
                "trust_value": "0.3287865398952299"
            },
            {
                "date_time": "2022-12-13 16:11:54:130161",
                "metric_str": "content_trust.deception",
                "other_agent": "F",
                "resource_id": "7aa6c1be-c212-4b1e-90ee-3079bbed5d32",
                "trust_value": "0.8633457174323274"
            },
            {
                "date_time": "2022-12-13 16:11:54:158273",
                "metric_str": "content_trust.age",
                "other_agent": "F",
                "resource_id": "7aa6c1be-c212-4b1e-90ee-3079bbed5d32",
                "trust_value": "1.0"
            },
            {
                "date_time": "2022-12-13 16:11:54:190174",
                "metric_str": "content_trust.authority",
                "other_agent": "F",
                "resource_id": "7aa6c1be-c212-4b1e-90ee-3079bbed5d32",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:11:54:325869",
                "metric_str": "content_trust.topic",
                "other_agent": "F",
                "resource_id": "7aa6c1be-c212-4b1e-90ee-3079bbed5d32",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:11:54:361674",
                "metric_str": "content_trust.provenance",
                "other_agent": "F",
                "resource_id": "7aa6c1be-c212-4b1e-90ee-3079bbed5d32",
                "trust_value": "1.0"
            },
            {
                "date_time": "2022-12-13 16:11:54:412294",
                "metric_str": "content_trust.direct_experience",
                "other_agent": "F",
                "resource_id": "7aa6c1be-c212-4b1e-90ee-3079bbed5d32",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:11:54:554277",
                "metric_str": "content_trust.recommendation",
                "other_agent": "F",
                "resource_id": "7aa6c1be-c212-4b1e-90ee-3079bbed5d32",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:11:54:669856",
                "metric_str": "content_trust.related_resources",
                "other_agent": "F",
                "resource_id": "7aa6c1be-c212-4b1e-90ee-3079bbed5d32",
                "trust_value": "-0.4554978270650817"
            },
            {
                "date_time": "2022-12-13 16:11:54:713268",
                "metric_str": "content_trust.user_expertise",
                "other_agent": "F",
                "resource_id": "7aa6c1be-c212-4b1e-90ee-3079bbed5d32",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:11:54:795096",
                "metric_str": "content_trust.popularity",
                "other_agent": "F",
                "resource_id": "7aa6c1be-c212-4b1e-90ee-3079bbed5d32",
                "trust_value": "1.0"
            },
            {
                "date_time": "2022-12-13 16:11:56:573595",
                "metric_str": "content_trust.bias",
                "other_agent": "J",
                "resource_id": "7579ec1c-9dd3-4f87-9123-fd3612a097bc",
                "trust_value": "-0.03494654695878241"
            },
            {
                "date_time": "2022-12-13 16:11:56:578642",
                "metric_str": "content_trust.specificity",
                "other_agent": "J",
                "resource_id": "7579ec1c-9dd3-4f87-9123-fd3612a097bc",
                "trust_value": "-0.8860523191083247"
            },
            {
                "date_time": "2022-12-13 16:11:56:601966",
                "metric_str": "content_trust.likelihood",
                "other_agent": "J",
                "resource_id": "7579ec1c-9dd3-4f87-9123-fd3612a097bc",
                "trust_value": "-0.5478409179419481"
            },
            {
                "date_time": "2022-12-13 16:11:56:622424",
                "metric_str": "content_trust.incentive",
                "other_agent": "J",
                "resource_id": "7579ec1c-9dd3-4f87-9123-fd3612a097bc",
                "trust_value": "-0.32833223144660906"
            },
            {
                "date_time": "2022-12-13 16:11:56:651685",
                "metric_str": "content_trust.deception",
                "other_agent": "J",
                "resource_id": "7579ec1c-9dd3-4f87-9123-fd3612a097bc",
                "trust_value": "0.6405219806810936"
            },
            {
                "date_time": "2022-12-13 16:11:56:680171",
                "metric_str": "content_trust.age",
                "other_agent": "J",
                "resource_id": "7579ec1c-9dd3-4f87-9123-fd3612a097bc",
                "trust_value": "1.0"
            },
            {
                "date_time": "2022-12-13 16:11:56:708185",
                "metric_str": "content_trust.authority",
                "other_agent": "J",
                "resource_id": "7579ec1c-9dd3-4f87-9123-fd3612a097bc",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:11:56:795460",
                "metric_str": "content_trust.topic",
                "other_agent": "J",
                "resource_id": "7579ec1c-9dd3-4f87-9123-fd3612a097bc",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:11:56:822172",
                "metric_str": "content_trust.provenance",
                "other_agent": "J",
                "resource_id": "7579ec1c-9dd3-4f87-9123-fd3612a097bc",
                "trust_value": "1.0"
            },
            {
                "date_time": "2022-12-13 16:11:56:878702",
                "metric_str": "content_trust.direct_experience",
                "other_agent": "J",
                "resource_id": "7579ec1c-9dd3-4f87-9123-fd3612a097bc",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:11:57:014693",
                "metric_str": "content_trust.recommendation",
                "other_agent": "J",
                "resource_id": "7579ec1c-9dd3-4f87-9123-fd3612a097bc",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:11:57:053030",
                "metric_str": "content_trust.related_resources",
                "other_agent": "J",
                "resource_id": "7579ec1c-9dd3-4f87-9123-fd3612a097bc",
                "trust_value": "0.1477092951058426"
            },
            {
                "date_time": "2022-12-13 16:11:57:104028",
                "metric_str": "content_trust.user_expertise",
                "other_agent": "J",
                "resource_id": "7579ec1c-9dd3-4f87-9123-fd3612a097bc",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:11:57:247726",
                "metric_str": "content_trust.popularity",
                "other_agent": "J",
                "resource_id": "7579ec1c-9dd3-4f87-9123-fd3612a097bc",
                "trust_value": "1.0"
            }
        ],
        "B": [
            {
                "date_time": "2022-12-13 16:10:16:024757",
                "metric_str": "content_trust.bias",
                "other_agent": "A",
                "resource_id": "e767e7e8-ad0b-4424-b01d-2209d6527529",
                "trust_value": "0.23184741931007835"
            },
            {
                "date_time": "2022-12-13 16:10:16:028831",
                "metric_str": "content_trust.specificity",
                "other_agent": "A",
                "resource_id": "e767e7e8-ad0b-4424-b01d-2209d6527529",
                "trust_value": "0.6554744771328322"
            },
            {
                "date_time": "2022-12-13 16:10:16:124381",
                "metric_str": "content_trust.likelihood",
                "other_agent": "A",
                "resource_id": "e767e7e8-ad0b-4424-b01d-2209d6527529",
                "trust_value": "0.6211916617839461"
            },
            {
                "date_time": "2022-12-13 16:10:16:151102",
                "metric_str": "content_trust.incentive",
                "other_agent": "A",
                "resource_id": "e767e7e8-ad0b-4424-b01d-2209d6527529",
                "trust_value": "-0.22663891325252128"
            },
            {
                "date_time": "2022-12-13 16:10:16:190384",
                "metric_str": "content_trust.deception",
                "other_agent": "A",
                "resource_id": "e767e7e8-ad0b-4424-b01d-2209d6527529",
                "trust_value": "0.9310263443313582"
            },
            {
                "date_time": "2022-12-13 16:10:16:340313",
                "metric_str": "content_trust.age",
                "other_agent": "A",
                "resource_id": "e767e7e8-ad0b-4424-b01d-2209d6527529",
                "trust_value": "1.0"
            },
            {
                "date_time": "2022-12-13 16:10:16:420534",
                "metric_str": "content_trust.authority",
                "other_agent": "A",
                "resource_id": "e767e7e8-ad0b-4424-b01d-2209d6527529",
                "trust_value": "1.0"
            },
            {
                "date_time": "2022-12-13 16:10:17:089697",
                "metric_str": "content_trust.topic",
                "other_agent": "A",
                "resource_id": "e767e7e8-ad0b-4424-b01d-2209d6527529",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:10:17:567993",
                "metric_str": "content_trust.provenance",
                "other_agent": "A",
                "resource_id": "e767e7e8-ad0b-4424-b01d-2209d6527529",
                "trust_value": "0.33333333333333326"
            },
            {
                "date_time": "2022-12-13 16:10:19:369318",
                "metric_str": "content_trust.direct_experience",
                "other_agent": "A",
                "resource_id": "e767e7e8-ad0b-4424-b01d-2209d6527529",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:10:20:888679",
                "metric_str": "content_trust.recommendation",
                "other_agent": "A",
                "resource_id": "e767e7e8-ad0b-4424-b01d-2209d6527529",
                "trust_value": "0.12319938850816563"
            },
            {
                "date_time": "2022-12-13 16:10:21:092723",
                "metric_str": "content_trust.related_resources",
                "other_agent": "A",
                "resource_id": "e767e7e8-ad0b-4424-b01d-2209d6527529",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:10:21:607246",
                "metric_str": "content_trust.user_expertise",
                "other_agent": "A",
                "resource_id": "e767e7e8-ad0b-4424-b01d-2209d6527529",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:10:22:553343",
                "metric_str": "content_trust.popularity",
                "other_agent": "A",
                "resource_id": "e767e7e8-ad0b-4424-b01d-2209d6527529",
                "trust_value": "0.8333333333333335"
            },
            {
                "date_time": "2022-12-13 16:10:23:353064",
                "metric_str": "content_trust.bias",
                "other_agent": "E",
                "resource_id": "39de0ea0-cea1-477a-a987-28eeb1a48fff",
                "trust_value": "0.5393698154061828"
            },
            {
                "date_time": "2022-12-13 16:10:23:357584",
                "metric_str": "content_trust.specificity",
                "other_agent": "E",
                "resource_id": "39de0ea0-cea1-477a-a987-28eeb1a48fff",
                "trust_value": "-0.24665872991871907"
            },
            {
                "date_time": "2022-12-13 16:10:23:670319",
                "metric_str": "content_trust.likelihood",
                "other_agent": "E",
                "resource_id": "39de0ea0-cea1-477a-a987-28eeb1a48fff",
                "trust_value": "0.30795794335784255"
            },
            {
                "date_time": "2022-12-13 16:10:23:807602",
                "metric_str": "content_trust.incentive",
                "other_agent": "E",
                "resource_id": "39de0ea0-cea1-477a-a987-28eeb1a48fff",
                "trust_value": "0.070360229107445"
            },
            {
                "date_time": "2022-12-13 16:10:23:867284",
                "metric_str": "content_trust.deception",
                "other_agent": "E",
                "resource_id": "39de0ea0-cea1-477a-a987-28eeb1a48fff",
                "trust_value": "0.9442240153953725"
            },
            {
                "date_time": "2022-12-13 16:10:23:992980",
                "metric_str": "content_trust.age",
                "other_agent": "E",
                "resource_id": "39de0ea0-cea1-477a-a987-28eeb1a48fff",
                "trust_value": "1.0"
            },
            {
                "date_time": "2022-12-13 16:10:24:032876",
                "metric_str": "content_trust.authority",
                "other_agent": "E",
                "resource_id": "39de0ea0-cea1-477a-a987-28eeb1a48fff",
                "trust_value": "1.0"
            },
            {
                "date_time": "2022-12-13 16:10:24:097495",
                "metric_str": "content_trust.topic",
                "other_agent": "E",
                "resource_id": "39de0ea0-cea1-477a-a987-28eeb1a48fff",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:10:24:257092",
                "metric_str": "content_trust.provenance",
                "other_agent": "E",
                "resource_id": "39de0ea0-cea1-477a-a987-28eeb1a48fff",
                "trust_value": "-0.33333333333333337"
            },
            {
                "date_time": "2022-12-13 16:10:25:428210",
                "metric_str": "content_trust.direct_experience",
                "other_agent": "E",
                "resource_id": "39de0ea0-cea1-477a-a987-28eeb1a48fff",
                "trust_value": "-0.22572489387576367"
            },
            {
                "date_time": "2022-12-13 16:10:27:299680",
                "metric_str": "content_trust.recommendation",
                "other_agent": "E",
                "resource_id": "39de0ea0-cea1-477a-a987-28eeb1a48fff",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:10:27:621842",
                "metric_str": "content_trust.related_resources",
                "other_agent": "E",
                "resource_id": "39de0ea0-cea1-477a-a987-28eeb1a48fff",
                "trust_value": "-0.47779203932847003"
            },
            {
                "date_time": "2022-12-13 16:10:27:698613",
                "metric_str": "content_trust.user_expertise",
                "other_agent": "E",
                "resource_id": "39de0ea0-cea1-477a-a987-28eeb1a48fff",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:10:27:901338",
                "metric_str": "content_trust.popularity",
                "other_agent": "E",
                "resource_id": "39de0ea0-cea1-477a-a987-28eeb1a48fff",
                "trust_value": "0.8333333333333335"
            },
            {
                "date_time": "2022-12-13 16:10:29:827184",
                "metric_str": "content_trust.bias",
                "other_agent": "D",
                "resource_id": "ab8109b4-120c-4124-9786-f55aa2b962f4",
                "trust_value": "0.5486751062618065"
            },
            {
                "date_time": "2022-12-13 16:10:29:870638",
                "metric_str": "content_trust.specificity",
                "other_agent": "D",
                "resource_id": "ab8109b4-120c-4124-9786-f55aa2b962f4",
                "trust_value": "-0.18614869559497804"
            },
            {
                "date_time": "2022-12-13 16:10:29:909492",
                "metric_str": "content_trust.likelihood",
                "other_agent": "D",
                "resource_id": "ab8109b4-120c-4124-9786-f55aa2b962f4",
                "trust_value": "0.16503045730705468"
            },
            {
                "date_time": "2022-12-13 16:10:29:943246",
                "metric_str": "content_trust.incentive",
                "other_agent": "D",
                "resource_id": "ab8109b4-120c-4124-9786-f55aa2b962f4",
                "trust_value": "0.5470827212127569"
            },
            {
                "date_time": "2022-12-13 16:10:29:971180",
                "metric_str": "content_trust.deception",
                "other_agent": "D",
                "resource_id": "ab8109b4-120c-4124-9786-f55aa2b962f4",
                "trust_value": "0.6064979829474788"
            },
            {
                "date_time": "2022-12-13 16:10:30:007021",
                "metric_str": "content_trust.age",
                "other_agent": "D",
                "resource_id": "ab8109b4-120c-4124-9786-f55aa2b962f4",
                "trust_value": "1.0"
            },
            {
                "date_time": "2022-12-13 16:10:30:038822",
                "metric_str": "content_trust.authority",
                "other_agent": "D",
                "resource_id": "ab8109b4-120c-4124-9786-f55aa2b962f4",
                "trust_value": "1.0"
            },
            {
                "date_time": "2022-12-13 16:10:30:114507",
                "metric_str": "content_trust.topic",
                "other_agent": "D",
                "resource_id": "ab8109b4-120c-4124-9786-f55aa2b962f4",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:10:30:140715",
                "metric_str": "content_trust.provenance",
                "other_agent": "D",
                "resource_id": "ab8109b4-120c-4124-9786-f55aa2b962f4",
                "trust_value": "0.33333333333333326"
            },
            {
                "date_time": "2022-12-13 16:10:30:209796",
                "metric_str": "content_trust.direct_experience",
                "other_agent": "D",
                "resource_id": "ab8109b4-120c-4124-9786-f55aa2b962f4",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:10:30:525522",
                "metric_str": "content_trust.recommendation",
                "other_agent": "D",
                "resource_id": "ab8109b4-120c-4124-9786-f55aa2b962f4",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:10:30:568060",
                "metric_str": "content_trust.related_resources",
                "other_agent": "D",
                "resource_id": "ab8109b4-120c-4124-9786-f55aa2b962f4",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:10:30:620102",
                "metric_str": "content_trust.user_expertise",
                "other_agent": "D",
                "resource_id": "ab8109b4-120c-4124-9786-f55aa2b962f4",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:10:30:782486",
                "metric_str": "content_trust.popularity",
                "other_agent": "D",
                "resource_id": "ab8109b4-120c-4124-9786-f55aa2b962f4",
                "trust_value": "0.6666666666666665"
            },
            {
                "date_time": "2022-12-13 16:10:45:918368",
                "metric_str": "content_trust.bias",
                "other_agent": "A",
                "resource_id": "0642eddd-085d-48e6-ab44-6ad42ff10533",
                "trust_value": "0.2190362523806253"
            },
            {
                "date_time": "2022-12-13 16:10:45:922392",
                "metric_str": "content_trust.specificity",
                "other_agent": "A",
                "resource_id": "0642eddd-085d-48e6-ab44-6ad42ff10533",
                "trust_value": "-0.983386626585605"
            },
            {
                "date_time": "2022-12-13 16:10:45:949788",
                "metric_str": "content_trust.likelihood",
                "other_agent": "A",
                "resource_id": "0642eddd-085d-48e6-ab44-6ad42ff10533",
                "trust_value": "-0.07184905017363707"
            },
            {
                "date_time": "2022-12-13 16:10:45:992183",
                "metric_str": "content_trust.incentive",
                "other_agent": "A",
                "resource_id": "0642eddd-085d-48e6-ab44-6ad42ff10533",
                "trust_value": "0.2844987675473769"
            },
            {
                "date_time": "2022-12-13 16:10:46:027325",
                "metric_str": "content_trust.deception",
                "other_agent": "A",
                "resource_id": "0642eddd-085d-48e6-ab44-6ad42ff10533",
                "trust_value": "0.8721495386159861"
            },
            {
                "date_time": "2022-12-13 16:10:46:052603",
                "metric_str": "content_trust.age",
                "other_agent": "A",
                "resource_id": "0642eddd-085d-48e6-ab44-6ad42ff10533",
                "trust_value": "1.0"
            },
            {
                "date_time": "2022-12-13 16:10:46:082883",
                "metric_str": "content_trust.authority",
                "other_agent": "A",
                "resource_id": "0642eddd-085d-48e6-ab44-6ad42ff10533",
                "trust_value": "1.0"
            },
            {
                "date_time": "2022-12-13 16:10:46:133346",
                "metric_str": "content_trust.topic",
                "other_agent": "A",
                "resource_id": "0642eddd-085d-48e6-ab44-6ad42ff10533",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:10:46:159728",
                "metric_str": "content_trust.provenance",
                "other_agent": "A",
                "resource_id": "0642eddd-085d-48e6-ab44-6ad42ff10533",
                "trust_value": "0.0"
            },
            {
                "date_time": "2022-12-13 16:10:46:195651",
                "metric_str": "content_trust.direct_experience",
                "other_agent": "A",
                "resource_id": "0642eddd-085d-48e6-ab44-6ad42ff10533",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:10:46:442848",
                "metric_str": "content_trust.recommendation",
                "other_agent": "A",
                "resource_id": "0642eddd-085d-48e6-ab44-6ad42ff10533",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:10:46:543197",
                "metric_str": "content_trust.related_resources",
                "other_agent": "A",
                "resource_id": "0642eddd-085d-48e6-ab44-6ad42ff10533",
                "trust_value": "0.3044228985269053"
            },
            {
                "date_time": "2022-12-13 16:10:46:584771",
                "metric_str": "content_trust.user_expertise",
                "other_agent": "A",
                "resource_id": "0642eddd-085d-48e6-ab44-6ad42ff10533",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:10:46:743296",
                "metric_str": "content_trust.popularity",
                "other_agent": "A",
                "resource_id": "0642eddd-085d-48e6-ab44-6ad42ff10533",
                "trust_value": "0.8333333333333335"
            },
            {
                "date_time": "2022-12-13 16:11:23:613444",
                "metric_str": "content_trust.bias",
                "other_agent": "J",
                "resource_id": "aaf1076d-7e1c-4380-8ca4-46976c007535",
                "trust_value": "0.20580747067173832"
            },
            {
                "date_time": "2022-12-13 16:11:23:621014",
                "metric_str": "content_trust.specificity",
                "other_agent": "J",
                "resource_id": "aaf1076d-7e1c-4380-8ca4-46976c007535",
                "trust_value": "0.28592001302179515"
            },
            {
                "date_time": "2022-12-13 16:11:23:707288",
                "metric_str": "content_trust.likelihood",
                "other_agent": "J",
                "resource_id": "aaf1076d-7e1c-4380-8ca4-46976c007535",
                "trust_value": "-0.713766382344954"
            },
            {
                "date_time": "2022-12-13 16:11:23:801156",
                "metric_str": "content_trust.incentive",
                "other_agent": "J",
                "resource_id": "aaf1076d-7e1c-4380-8ca4-46976c007535",
                "trust_value": "-0.5801886409488941"
            },
            {
                "date_time": "2022-12-13 16:11:23:839939",
                "metric_str": "content_trust.deception",
                "other_agent": "J",
                "resource_id": "aaf1076d-7e1c-4380-8ca4-46976c007535",
                "trust_value": "0.7882518261680496"
            },
            {
                "date_time": "2022-12-13 16:11:23:920397",
                "metric_str": "content_trust.age",
                "other_agent": "J",
                "resource_id": "aaf1076d-7e1c-4380-8ca4-46976c007535",
                "trust_value": "1.0"
            },
            {
                "date_time": "2022-12-13 16:11:23:970474",
                "metric_str": "content_trust.authority",
                "other_agent": "J",
                "resource_id": "aaf1076d-7e1c-4380-8ca4-46976c007535",
                "trust_value": "1.0"
            },
            {
                "date_time": "2022-12-13 16:11:24:045378",
                "metric_str": "content_trust.topic",
                "other_agent": "J",
                "resource_id": "aaf1076d-7e1c-4380-8ca4-46976c007535",
                "trust_value": "0.20118443177937917"
            },
            {
                "date_time": "2022-12-13 16:11:24:074142",
                "metric_str": "content_trust.provenance",
                "other_agent": "J",
                "resource_id": "aaf1076d-7e1c-4380-8ca4-46976c007535",
                "trust_value": "-0.19999999999999996"
            },
            {
                "date_time": "2022-12-13 16:11:24:119024",
                "metric_str": "content_trust.direct_experience",
                "other_agent": "J",
                "resource_id": "aaf1076d-7e1c-4380-8ca4-46976c007535",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:11:24:420435",
                "metric_str": "content_trust.recommendation",
                "other_agent": "J",
                "resource_id": "aaf1076d-7e1c-4380-8ca4-46976c007535",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:11:24:562531",
                "metric_str": "content_trust.related_resources",
                "other_agent": "J",
                "resource_id": "aaf1076d-7e1c-4380-8ca4-46976c007535",
                "trust_value": "0.9764239622970705"
            },
            {
                "date_time": "2022-12-13 16:11:24:602270",
                "metric_str": "content_trust.user_expertise",
                "other_agent": "J",
                "resource_id": "aaf1076d-7e1c-4380-8ca4-46976c007535",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:11:24:781698",
                "metric_str": "content_trust.popularity",
                "other_agent": "J",
                "resource_id": "aaf1076d-7e1c-4380-8ca4-46976c007535",
                "trust_value": "0.8333333333333335"
            },
            {
                "date_time": "2022-12-13 16:11:58:771660",
                "metric_str": "content_trust.bias",
                "other_agent": "G",
                "resource_id": "2c0c0d80-69d5-4ee7-9cd7-5722881ca2a0",
                "trust_value": "-0.2964512328645901"
            },
            {
                "date_time": "2022-12-13 16:11:58:773627",
                "metric_str": "content_trust.specificity",
                "other_agent": "G",
                "resource_id": "2c0c0d80-69d5-4ee7-9cd7-5722881ca2a0",
                "trust_value": "-0.5674631327220401"
            },
            {
                "date_time": "2022-12-13 16:11:58:804009",
                "metric_str": "content_trust.likelihood",
                "other_agent": "G",
                "resource_id": "2c0c0d80-69d5-4ee7-9cd7-5722881ca2a0",
                "trust_value": "-0.49776755170915066"
            },
            {
                "date_time": "2022-12-13 16:11:58:832733",
                "metric_str": "content_trust.incentive",
                "other_agent": "G",
                "resource_id": "2c0c0d80-69d5-4ee7-9cd7-5722881ca2a0",
                "trust_value": "0.40563894836812775"
            },
            {
                "date_time": "2022-12-13 16:11:58:873090",
                "metric_str": "content_trust.deception",
                "other_agent": "G",
                "resource_id": "2c0c0d80-69d5-4ee7-9cd7-5722881ca2a0",
                "trust_value": "0.8679078704570564"
            },
            {
                "date_time": "2022-12-13 16:11:58:910005",
                "metric_str": "content_trust.age",
                "other_agent": "G",
                "resource_id": "2c0c0d80-69d5-4ee7-9cd7-5722881ca2a0",
                "trust_value": "1.0"
            },
            {
                "date_time": "2022-12-13 16:11:58:945788",
                "metric_str": "content_trust.authority",
                "other_agent": "G",
                "resource_id": "2c0c0d80-69d5-4ee7-9cd7-5722881ca2a0",
                "trust_value": "1.0"
            },
            {
                "date_time": "2022-12-13 16:11:59:047418",
                "metric_str": "content_trust.topic",
                "other_agent": "G",
                "resource_id": "2c0c0d80-69d5-4ee7-9cd7-5722881ca2a0",
                "trust_value": "0.19246985189647936"
            },
            {
                "date_time": "2022-12-13 16:11:59:088899",
                "metric_str": "content_trust.provenance",
                "other_agent": "G",
                "resource_id": "2c0c0d80-69d5-4ee7-9cd7-5722881ca2a0",
                "trust_value": "0.19999999999999996"
            },
            {
                "date_time": "2022-12-13 16:11:59:135458",
                "metric_str": "content_trust.direct_experience",
                "other_agent": "G",
                "resource_id": "2c0c0d80-69d5-4ee7-9cd7-5722881ca2a0",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:11:59:389010",
                "metric_str": "content_trust.recommendation",
                "other_agent": "G",
                "resource_id": "2c0c0d80-69d5-4ee7-9cd7-5722881ca2a0",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:11:59:550341",
                "metric_str": "content_trust.related_resources",
                "other_agent": "G",
                "resource_id": "2c0c0d80-69d5-4ee7-9cd7-5722881ca2a0",
                "trust_value": "0.2399049866731192"
            },
            {
                "date_time": "2022-12-13 16:11:59:602340",
                "metric_str": "content_trust.user_expertise",
                "other_agent": "G",
                "resource_id": "2c0c0d80-69d5-4ee7-9cd7-5722881ca2a0",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:11:59:895557",
                "metric_str": "content_trust.popularity",
                "other_agent": "G",
                "resource_id": "2c0c0d80-69d5-4ee7-9cd7-5722881ca2a0",
                "trust_value": "0.8333333333333335"
            },
            {
                "date_time": "2022-12-13 16:12:00:642695",
                "metric_str": "content_trust.bias",
                "other_agent": "H",
                "resource_id": "ad569311-5ef8-4da4-af91-6aeb91784285",
                "trust_value": "0.8235631663433793"
            },
            {
                "date_time": "2022-12-13 16:12:00:646871",
                "metric_str": "content_trust.specificity",
                "other_agent": "H",
                "resource_id": "ad569311-5ef8-4da4-af91-6aeb91784285",
                "trust_value": "0.24603457601812817"
            },
            {
                "date_time": "2022-12-13 16:12:00:687207",
                "metric_str": "content_trust.likelihood",
                "other_agent": "H",
                "resource_id": "ad569311-5ef8-4da4-af91-6aeb91784285",
                "trust_value": "0.47120483354851994"
            },
            {
                "date_time": "2022-12-13 16:12:00:734594",
                "metric_str": "content_trust.incentive",
                "other_agent": "H",
                "resource_id": "ad569311-5ef8-4da4-af91-6aeb91784285",
                "trust_value": "0.7642057181310129"
            },
            {
                "date_time": "2022-12-13 16:12:00:765594",
                "metric_str": "content_trust.deception",
                "other_agent": "H",
                "resource_id": "ad569311-5ef8-4da4-af91-6aeb91784285",
                "trust_value": "0.7578748489244307"
            },
            {
                "date_time": "2022-12-13 16:12:00:796951",
                "metric_str": "content_trust.age",
                "other_agent": "H",
                "resource_id": "ad569311-5ef8-4da4-af91-6aeb91784285",
                "trust_value": "1.0"
            },
            {
                "date_time": "2022-12-13 16:12:00:878048",
                "metric_str": "content_trust.authority",
                "other_agent": "H",
                "resource_id": "ad569311-5ef8-4da4-af91-6aeb91784285",
                "trust_value": "1.0"
            },
            {
                "date_time": "2022-12-13 16:12:01:055578",
                "metric_str": "content_trust.topic",
                "other_agent": "H",
                "resource_id": "ad569311-5ef8-4da4-af91-6aeb91784285",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:12:01:098021",
                "metric_str": "content_trust.provenance",
                "other_agent": "H",
                "resource_id": "ad569311-5ef8-4da4-af91-6aeb91784285",
                "trust_value": "-0.19999999999999996"
            },
            {
                "date_time": "2022-12-13 16:12:01:215732",
                "metric_str": "content_trust.direct_experience",
                "other_agent": "H",
                "resource_id": "ad569311-5ef8-4da4-af91-6aeb91784285",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:12:01:469131",
                "metric_str": "content_trust.recommendation",
                "other_agent": "H",
                "resource_id": "ad569311-5ef8-4da4-af91-6aeb91784285",
                "trust_value": "-0.8703245847356097"
            },
            {
                "date_time": "2022-12-13 16:12:01:505869",
                "metric_str": "content_trust.related_resources",
                "other_agent": "H",
                "resource_id": "ad569311-5ef8-4da4-af91-6aeb91784285",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:12:01:552329",
                "metric_str": "content_trust.user_expertise",
                "other_agent": "H",
                "resource_id": "ad569311-5ef8-4da4-af91-6aeb91784285",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:12:01:704544",
                "metric_str": "content_trust.popularity",
                "other_agent": "H",
                "resource_id": "ad569311-5ef8-4da4-af91-6aeb91784285",
                "trust_value": "0.6666666666666665"
            }
        ],
        "C": [
            {
                "date_time": "2022-12-13 16:10:03:151330",
                "metric_str": "content_trust.bias",
                "other_agent": "D",
                "resource_id": "0a102c9f-45a9-4a5b-9206-3262d4be4781",
                "trust_value": "0.8946823480236341"
            },
            {
                "date_time": "2022-12-13 16:10:03:154329",
                "metric_str": "content_trust.specificity",
                "other_agent": "D",
                "resource_id": "0a102c9f-45a9-4a5b-9206-3262d4be4781",
                "trust_value": "0.5475469504877799"
            },
            {
                "date_time": "2022-12-13 16:10:03:200218",
                "metric_str": "content_trust.likelihood",
                "other_agent": "D",
                "resource_id": "0a102c9f-45a9-4a5b-9206-3262d4be4781",
                "trust_value": "-0.10843763879256052"
            },
            {
                "date_time": "2022-12-13 16:10:03:241022",
                "metric_str": "content_trust.incentive",
                "other_agent": "D",
                "resource_id": "0a102c9f-45a9-4a5b-9206-3262d4be4781",
                "trust_value": "0.40581430767325255"
            },
            {
                "date_time": "2022-12-13 16:10:03:271263",
                "metric_str": "content_trust.deception",
                "other_agent": "D",
                "resource_id": "0a102c9f-45a9-4a5b-9206-3262d4be4781",
                "trust_value": "0.8341396115792867"
            },
            {
                "date_time": "2022-12-13 16:10:03:328517",
                "metric_str": "content_trust.age",
                "other_agent": "D",
                "resource_id": "0a102c9f-45a9-4a5b-9206-3262d4be4781",
                "trust_value": "1.0"
            },
            {
                "date_time": "2022-12-13 16:10:03:350733",
                "metric_str": "content_trust.authority",
                "other_agent": "D",
                "resource_id": "0a102c9f-45a9-4a5b-9206-3262d4be4781",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:10:03:378996",
                "metric_str": "content_trust.topic",
                "other_agent": "D",
                "resource_id": "0a102c9f-45a9-4a5b-9206-3262d4be4781",
                "trust_value": "0.15344619426240064"
            },
            {
                "date_time": "2022-12-13 16:10:03:403699",
                "metric_str": "content_trust.provenance",
                "other_agent": "D",
                "resource_id": "0a102c9f-45a9-4a5b-9206-3262d4be4781",
                "trust_value": "-1.0"
            },
            {
                "date_time": "2022-12-13 16:10:03:452646",
                "metric_str": "content_trust.direct_experience",
                "other_agent": "D",
                "resource_id": "0a102c9f-45a9-4a5b-9206-3262d4be4781",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:10:03:951902",
                "metric_str": "content_trust.recommendation",
                "other_agent": "D",
                "resource_id": "0a102c9f-45a9-4a5b-9206-3262d4be4781",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:10:04:065233",
                "metric_str": "content_trust.related_resources",
                "other_agent": "D",
                "resource_id": "0a102c9f-45a9-4a5b-9206-3262d4be4781",
                "trust_value": "0.8221212509150024"
            },
            {
                "date_time": "2022-12-13 16:10:04:093988",
                "metric_str": "content_trust.user_expertise",
                "other_agent": "D",
                "resource_id": "0a102c9f-45a9-4a5b-9206-3262d4be4781",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:10:04:167510",
                "metric_str": "content_trust.popularity",
                "other_agent": "D",
                "resource_id": "0a102c9f-45a9-4a5b-9206-3262d4be4781",
                "trust_value": "1.0"
            },
            {
                "date_time": "2022-12-13 16:10:07:637296",
                "metric_str": "content_trust.bias",
                "other_agent": "E",
                "resource_id": "4baae5f0-d52c-44fd-88c4-c41720e8e501",
                "trust_value": "0.6812944522674935"
            },
            {
                "date_time": "2022-12-13 16:10:07:642288",
                "metric_str": "content_trust.specificity",
                "other_agent": "E",
                "resource_id": "4baae5f0-d52c-44fd-88c4-c41720e8e501",
                "trust_value": "-0.1034897399080319"
            },
            {
                "date_time": "2022-12-13 16:10:07:683146",
                "metric_str": "content_trust.likelihood",
                "other_agent": "E",
                "resource_id": "4baae5f0-d52c-44fd-88c4-c41720e8e501",
                "trust_value": "-0.9412341461105416"
            },
            {
                "date_time": "2022-12-13 16:10:07:715918",
                "metric_str": "content_trust.incentive",
                "other_agent": "E",
                "resource_id": "4baae5f0-d52c-44fd-88c4-c41720e8e501",
                "trust_value": "0.6719440368478915"
            },
            {
                "date_time": "2022-12-13 16:10:07:751355",
                "metric_str": "content_trust.deception",
                "other_agent": "E",
                "resource_id": "4baae5f0-d52c-44fd-88c4-c41720e8e501",
                "trust_value": "0.11478981809779798"
            },
            {
                "date_time": "2022-12-13 16:10:07:791687",
                "metric_str": "content_trust.age",
                "other_agent": "E",
                "resource_id": "4baae5f0-d52c-44fd-88c4-c41720e8e501",
                "trust_value": "1.0"
            },
            {
                "date_time": "2022-12-13 16:10:07:819433",
                "metric_str": "content_trust.authority",
                "other_agent": "E",
                "resource_id": "4baae5f0-d52c-44fd-88c4-c41720e8e501",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:10:07:891088",
                "metric_str": "content_trust.topic",
                "other_agent": "E",
                "resource_id": "4baae5f0-d52c-44fd-88c4-c41720e8e501",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:10:07:929944",
                "metric_str": "content_trust.provenance",
                "other_agent": "E",
                "resource_id": "4baae5f0-d52c-44fd-88c4-c41720e8e501",
                "trust_value": "-1.0"
            },
            {
                "date_time": "2022-12-13 16:10:07:993438",
                "metric_str": "content_trust.direct_experience",
                "other_agent": "E",
                "resource_id": "4baae5f0-d52c-44fd-88c4-c41720e8e501",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:10:08:480333",
                "metric_str": "content_trust.recommendation",
                "other_agent": "E",
                "resource_id": "4baae5f0-d52c-44fd-88c4-c41720e8e501",
                "trust_value": "-0.815367993266372"
            },
            {
                "date_time": "2022-12-13 16:10:08:642417",
                "metric_str": "content_trust.related_resources",
                "other_agent": "E",
                "resource_id": "4baae5f0-d52c-44fd-88c4-c41720e8e501",
                "trust_value": "0.19822885488799247"
            },
            {
                "date_time": "2022-12-13 16:10:08:687253",
                "metric_str": "content_trust.user_expertise",
                "other_agent": "E",
                "resource_id": "4baae5f0-d52c-44fd-88c4-c41720e8e501",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:10:08:750799",
                "metric_str": "content_trust.popularity",
                "other_agent": "E",
                "resource_id": "4baae5f0-d52c-44fd-88c4-c41720e8e501",
                "trust_value": "1.0"
            },
            {
                "date_time": "2022-12-13 16:10:43:693987",
                "metric_str": "content_trust.bias",
                "other_agent": "B",
                "resource_id": "0322374a-7270-4787-b539-1f72cf5fd62d",
                "trust_value": "0.08889086685066472"
            },
            {
                "date_time": "2022-12-13 16:10:43:697176",
                "metric_str": "content_trust.specificity",
                "other_agent": "B",
                "resource_id": "0322374a-7270-4787-b539-1f72cf5fd62d",
                "trust_value": "-0.9828838262982176"
            },
            {
                "date_time": "2022-12-13 16:10:43:722388",
                "metric_str": "content_trust.likelihood",
                "other_agent": "B",
                "resource_id": "0322374a-7270-4787-b539-1f72cf5fd62d",
                "trust_value": "-0.4838337356172131"
            },
            {
                "date_time": "2022-12-13 16:10:43:759451",
                "metric_str": "content_trust.incentive",
                "other_agent": "B",
                "resource_id": "0322374a-7270-4787-b539-1f72cf5fd62d",
                "trust_value": "0.5474182486606882"
            },
            {
                "date_time": "2022-12-13 16:10:43:788077",
                "metric_str": "content_trust.deception",
                "other_agent": "B",
                "resource_id": "0322374a-7270-4787-b539-1f72cf5fd62d",
                "trust_value": "-0.2996607409996874"
            },
            {
                "date_time": "2022-12-13 16:10:43:829361",
                "metric_str": "content_trust.age",
                "other_agent": "B",
                "resource_id": "0322374a-7270-4787-b539-1f72cf5fd62d",
                "trust_value": "1.0"
            },
            {
                "date_time": "2022-12-13 16:10:43:858056",
                "metric_str": "content_trust.authority",
                "other_agent": "B",
                "resource_id": "0322374a-7270-4787-b539-1f72cf5fd62d",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:10:43:955862",
                "metric_str": "content_trust.topic",
                "other_agent": "B",
                "resource_id": "0322374a-7270-4787-b539-1f72cf5fd62d",
                "trust_value": "0.4838055627088022"
            },
            {
                "date_time": "2022-12-13 16:10:43:999672",
                "metric_str": "content_trust.provenance",
                "other_agent": "B",
                "resource_id": "0322374a-7270-4787-b539-1f72cf5fd62d",
                "trust_value": "-1.0"
            },
            {
                "date_time": "2022-12-13 16:10:44:047564",
                "metric_str": "content_trust.direct_experience",
                "other_agent": "B",
                "resource_id": "0322374a-7270-4787-b539-1f72cf5fd62d",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:10:44:257228",
                "metric_str": "content_trust.recommendation",
                "other_agent": "B",
                "resource_id": "0322374a-7270-4787-b539-1f72cf5fd62d",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:10:44:278405",
                "metric_str": "content_trust.related_resources",
                "other_agent": "B",
                "resource_id": "0322374a-7270-4787-b539-1f72cf5fd62d",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:10:44:317593",
                "metric_str": "content_trust.user_expertise",
                "other_agent": "B",
                "resource_id": "0322374a-7270-4787-b539-1f72cf5fd62d",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:10:44:399674",
                "metric_str": "content_trust.popularity",
                "other_agent": "B",
                "resource_id": "0322374a-7270-4787-b539-1f72cf5fd62d",
                "trust_value": "1.0"
            },
            {
                "date_time": "2022-12-13 16:10:45:075197",
                "metric_str": "content_trust.bias",
                "other_agent": "B",
                "resource_id": "6a635ac8-491d-41a9-b9f0-1720a9e1cbe9",
                "trust_value": "0.07822542168570501"
            },
            {
                "date_time": "2022-12-13 16:10:45:077190",
                "metric_str": "content_trust.specificity",
                "other_agent": "B",
                "resource_id": "6a635ac8-491d-41a9-b9f0-1720a9e1cbe9",
                "trust_value": "0.16686345365635447"
            },
            {
                "date_time": "2022-12-13 16:10:45:095998",
                "metric_str": "content_trust.likelihood",
                "other_agent": "B",
                "resource_id": "6a635ac8-491d-41a9-b9f0-1720a9e1cbe9",
                "trust_value": "0.07067380381509047"
            },
            {
                "date_time": "2022-12-13 16:10:45:118192",
                "metric_str": "content_trust.incentive",
                "other_agent": "B",
                "resource_id": "6a635ac8-491d-41a9-b9f0-1720a9e1cbe9",
                "trust_value": "-0.33899152915913056"
            },
            {
                "date_time": "2022-12-13 16:10:50:603012",
                "metric_str": "content_trust.bias",
                "other_agent": "J",
                "resource_id": "69dc482c-aaf0-4db5-8d7f-213abd8ee2c7",
                "trust_value": "0.902368638674268"
            },
            {
                "date_time": "2022-12-13 16:10:50:606014",
                "metric_str": "content_trust.specificity",
                "other_agent": "J",
                "resource_id": "69dc482c-aaf0-4db5-8d7f-213abd8ee2c7",
                "trust_value": "-0.22493499135983752"
            },
            {
                "date_time": "2022-12-13 16:10:50:643362",
                "metric_str": "content_trust.likelihood",
                "other_agent": "J",
                "resource_id": "69dc482c-aaf0-4db5-8d7f-213abd8ee2c7",
                "trust_value": "-0.8016622137021239"
            },
            {
                "date_time": "2022-12-13 16:10:50:674147",
                "metric_str": "content_trust.incentive",
                "other_agent": "J",
                "resource_id": "69dc482c-aaf0-4db5-8d7f-213abd8ee2c7",
                "trust_value": "0.3418348910820419"
            },
            {
                "date_time": "2022-12-13 16:10:50:705880",
                "metric_str": "content_trust.deception",
                "other_agent": "J",
                "resource_id": "69dc482c-aaf0-4db5-8d7f-213abd8ee2c7",
                "trust_value": "0.06815172772309319"
            },
            {
                "date_time": "2022-12-13 16:10:50:731556",
                "metric_str": "content_trust.age",
                "other_agent": "J",
                "resource_id": "69dc482c-aaf0-4db5-8d7f-213abd8ee2c7",
                "trust_value": "1.0"
            },
            {
                "date_time": "2022-12-13 16:10:50:772492",
                "metric_str": "content_trust.authority",
                "other_agent": "J",
                "resource_id": "69dc482c-aaf0-4db5-8d7f-213abd8ee2c7",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:10:50:849065",
                "metric_str": "content_trust.topic",
                "other_agent": "J",
                "resource_id": "69dc482c-aaf0-4db5-8d7f-213abd8ee2c7",
                "trust_value": "0.7197679743514274"
            },
            {
                "date_time": "2022-12-13 16:10:50:942806",
                "metric_str": "content_trust.provenance",
                "other_agent": "J",
                "resource_id": "69dc482c-aaf0-4db5-8d7f-213abd8ee2c7",
                "trust_value": "-0.33333333333333337"
            },
            {
                "date_time": "2022-12-13 16:10:50:992739",
                "metric_str": "content_trust.direct_experience",
                "other_agent": "J",
                "resource_id": "69dc482c-aaf0-4db5-8d7f-213abd8ee2c7",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:10:51:805967",
                "metric_str": "content_trust.recommendation",
                "other_agent": "J",
                "resource_id": "69dc482c-aaf0-4db5-8d7f-213abd8ee2c7",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:10:51:954730",
                "metric_str": "content_trust.related_resources",
                "other_agent": "J",
                "resource_id": "69dc482c-aaf0-4db5-8d7f-213abd8ee2c7",
                "trust_value": "-0.1287496122548231"
            },
            {
                "date_time": "2022-12-13 16:10:52:064163",
                "metric_str": "content_trust.user_expertise",
                "other_agent": "J",
                "resource_id": "69dc482c-aaf0-4db5-8d7f-213abd8ee2c7",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:10:52:099471",
                "metric_str": "content_trust.popularity",
                "other_agent": "J",
                "resource_id": "69dc482c-aaf0-4db5-8d7f-213abd8ee2c7",
                "trust_value": "0.0"
            },
            {
                "date_time": "2022-12-13 16:11:38:947091",
                "metric_str": "content_trust.bias",
                "other_agent": "E",
                "resource_id": "5c785637-57da-4812-961a-cb205c3a50c4",
                "trust_value": "-0.12519219808857018"
            },
            {
                "date_time": "2022-12-13 16:11:38:949237",
                "metric_str": "content_trust.specificity",
                "other_agent": "E",
                "resource_id": "5c785637-57da-4812-961a-cb205c3a50c4",
                "trust_value": "-0.9482328652147554"
            },
            {
                "date_time": "2022-12-13 16:11:38:975746",
                "metric_str": "content_trust.likelihood",
                "other_agent": "E",
                "resource_id": "5c785637-57da-4812-961a-cb205c3a50c4",
                "trust_value": "0.893750079424855"
            },
            {
                "date_time": "2022-12-13 16:11:39:007783",
                "metric_str": "content_trust.incentive",
                "other_agent": "E",
                "resource_id": "5c785637-57da-4812-961a-cb205c3a50c4",
                "trust_value": "-0.25078059526879737"
            },
            {
                "date_time": "2022-12-13 16:11:39:060645",
                "metric_str": "content_trust.deception",
                "other_agent": "E",
                "resource_id": "5c785637-57da-4812-961a-cb205c3a50c4",
                "trust_value": "0.9988577597806587"
            },
            {
                "date_time": "2022-12-13 16:11:39:083320",
                "metric_str": "content_trust.age",
                "other_agent": "E",
                "resource_id": "5c785637-57da-4812-961a-cb205c3a50c4",
                "trust_value": "1.0"
            },
            {
                "date_time": "2022-12-13 16:11:39:109549",
                "metric_str": "content_trust.authority",
                "other_agent": "E",
                "resource_id": "5c785637-57da-4812-961a-cb205c3a50c4",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:11:39:179918",
                "metric_str": "content_trust.topic",
                "other_agent": "E",
                "resource_id": "5c785637-57da-4812-961a-cb205c3a50c4",
                "trust_value": "0.4589841323394692"
            },
            {
                "date_time": "2022-12-13 16:11:39:205113",
                "metric_str": "content_trust.provenance",
                "other_agent": "E",
                "resource_id": "5c785637-57da-4812-961a-cb205c3a50c4",
                "trust_value": "-1.0"
            },
            {
                "date_time": "2022-12-13 16:11:39:258256",
                "metric_str": "content_trust.direct_experience",
                "other_agent": "E",
                "resource_id": "5c785637-57da-4812-961a-cb205c3a50c4",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:11:39:446842",
                "metric_str": "content_trust.recommendation",
                "other_agent": "E",
                "resource_id": "5c785637-57da-4812-961a-cb205c3a50c4",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:11:39:536938",
                "metric_str": "content_trust.related_resources",
                "other_agent": "E",
                "resource_id": "5c785637-57da-4812-961a-cb205c3a50c4",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:11:39:576822",
                "metric_str": "content_trust.user_expertise",
                "other_agent": "E",
                "resource_id": "5c785637-57da-4812-961a-cb205c3a50c4",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:11:39:625507",
                "metric_str": "content_trust.popularity",
                "other_agent": "E",
                "resource_id": "5c785637-57da-4812-961a-cb205c3a50c4",
                "trust_value": "1.0"
            },
            {
                "date_time": "2022-12-13 16:11:42:959974",
                "metric_str": "content_trust.bias",
                "other_agent": "F",
                "resource_id": "0c5c6da6-c89d-425b-b63b-fad7b1ad95fc",
                "trust_value": "0.08352362891719789"
            },
            {
                "date_time": "2022-12-13 16:11:42:963517",
                "metric_str": "content_trust.specificity",
                "other_agent": "F",
                "resource_id": "0c5c6da6-c89d-425b-b63b-fad7b1ad95fc",
                "trust_value": "0.8026668452444357"
            },
            {
                "date_time": "2022-12-13 16:11:43:054356",
                "metric_str": "content_trust.likelihood",
                "other_agent": "F",
                "resource_id": "0c5c6da6-c89d-425b-b63b-fad7b1ad95fc",
                "trust_value": "0.4665749023324337"
            },
            {
                "date_time": "2022-12-13 16:11:43:103793",
                "metric_str": "content_trust.incentive",
                "other_agent": "F",
                "resource_id": "0c5c6da6-c89d-425b-b63b-fad7b1ad95fc",
                "trust_value": "-0.9710721770875115"
            },
            {
                "date_time": "2022-12-13 16:11:46:088937",
                "metric_str": "content_trust.bias",
                "other_agent": "J",
                "resource_id": "0fc0929d-b3e6-4553-8929-5a96b6552636",
                "trust_value": "-0.6532921140088637"
            },
            {
                "date_time": "2022-12-13 16:11:46:091970",
                "metric_str": "content_trust.specificity",
                "other_agent": "J",
                "resource_id": "0fc0929d-b3e6-4553-8929-5a96b6552636",
                "trust_value": "-0.297686754563117"
            },
            {
                "date_time": "2022-12-13 16:11:46:127292",
                "metric_str": "content_trust.likelihood",
                "other_agent": "J",
                "resource_id": "0fc0929d-b3e6-4553-8929-5a96b6552636",
                "trust_value": "0.7427954586437526"
            },
            {
                "date_time": "2022-12-13 16:11:46:162120",
                "metric_str": "content_trust.incentive",
                "other_agent": "J",
                "resource_id": "0fc0929d-b3e6-4553-8929-5a96b6552636",
                "trust_value": "-0.7678638204575547"
            },
            {
                "date_time": "2022-12-13 16:11:46:189345",
                "metric_str": "content_trust.deception",
                "other_agent": "J",
                "resource_id": "0fc0929d-b3e6-4553-8929-5a96b6552636",
                "trust_value": "0.6959179407916751"
            },
            {
                "date_time": "2022-12-13 16:11:46:219559",
                "metric_str": "content_trust.age",
                "other_agent": "J",
                "resource_id": "0fc0929d-b3e6-4553-8929-5a96b6552636",
                "trust_value": "1.0"
            },
            {
                "date_time": "2022-12-13 16:11:46:271003",
                "metric_str": "content_trust.authority",
                "other_agent": "J",
                "resource_id": "0fc0929d-b3e6-4553-8929-5a96b6552636",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:11:46:423478",
                "metric_str": "content_trust.topic",
                "other_agent": "J",
                "resource_id": "0fc0929d-b3e6-4553-8929-5a96b6552636",
                "trust_value": "0.23826764159625147"
            },
            {
                "date_time": "2022-12-13 16:11:46:450787",
                "metric_str": "content_trust.provenance",
                "other_agent": "J",
                "resource_id": "0fc0929d-b3e6-4553-8929-5a96b6552636",
                "trust_value": "-0.33333333333333337"
            },
            {
                "date_time": "2022-12-13 16:11:46:490712",
                "metric_str": "content_trust.direct_experience",
                "other_agent": "J",
                "resource_id": "0fc0929d-b3e6-4553-8929-5a96b6552636",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:11:46:821300",
                "metric_str": "content_trust.recommendation",
                "other_agent": "J",
                "resource_id": "0fc0929d-b3e6-4553-8929-5a96b6552636",
                "trust_value": "0.4168052026882611"
            },
            {
                "date_time": "2022-12-13 16:11:46:939128",
                "metric_str": "content_trust.related_resources",
                "other_agent": "J",
                "resource_id": "0fc0929d-b3e6-4553-8929-5a96b6552636",
                "trust_value": "-1.0"
            },
            {
                "date_time": "2022-12-13 16:11:46:987170",
                "metric_str": "content_trust.user_expertise",
                "other_agent": "J",
                "resource_id": "0fc0929d-b3e6-4553-8929-5a96b6552636",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:11:47:024220",
                "metric_str": "content_trust.popularity",
                "other_agent": "J",
                "resource_id": "0fc0929d-b3e6-4553-8929-5a96b6552636",
                "trust_value": "0.0"
            }
        ],
        "D": [
            {
                "date_time": "2022-12-13 16:10:34:764003",
                "metric_str": "content_trust.bias",
                "other_agent": "B",
                "resource_id": "133a2c3a-bdb7-468e-bc04-0400e217ec6e",
                "trust_value": "0.7871396667742476"
            },
            {
                "date_time": "2022-12-13 16:10:34:769549",
                "metric_str": "content_trust.specificity",
                "other_agent": "B",
                "resource_id": "133a2c3a-bdb7-468e-bc04-0400e217ec6e",
                "trust_value": "0.4699681955346098"
            },
            {
                "date_time": "2022-12-13 16:10:34:831164",
                "metric_str": "content_trust.likelihood",
                "other_agent": "B",
                "resource_id": "133a2c3a-bdb7-468e-bc04-0400e217ec6e",
                "trust_value": "0.9223637242370044"
            },
            {
                "date_time": "2022-12-13 16:10:34:920086",
                "metric_str": "content_trust.incentive",
                "other_agent": "B",
                "resource_id": "133a2c3a-bdb7-468e-bc04-0400e217ec6e",
                "trust_value": "-0.8953996371950144"
            },
            {
                "date_time": "2022-12-13 16:10:34:952414",
                "metric_str": "content_trust.deception",
                "other_agent": "B",
                "resource_id": "133a2c3a-bdb7-468e-bc04-0400e217ec6e",
                "trust_value": "0.6919182458550612"
            },
            {
                "date_time": "2022-12-13 16:10:35:048002",
                "metric_str": "content_trust.age",
                "other_agent": "B",
                "resource_id": "133a2c3a-bdb7-468e-bc04-0400e217ec6e",
                "trust_value": "1.0"
            },
            {
                "date_time": "2022-12-13 16:10:35:083796",
                "metric_str": "content_trust.authority",
                "other_agent": "B",
                "resource_id": "133a2c3a-bdb7-468e-bc04-0400e217ec6e",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:10:35:162072",
                "metric_str": "content_trust.topic",
                "other_agent": "B",
                "resource_id": "133a2c3a-bdb7-468e-bc04-0400e217ec6e",
                "trust_value": "-0.17162097738642612"
            },
            {
                "date_time": "2022-12-13 16:10:35:186206",
                "metric_str": "content_trust.provenance",
                "other_agent": "B",
                "resource_id": "133a2c3a-bdb7-468e-bc04-0400e217ec6e",
                "trust_value": "0.33333333333333326"
            },
            {
                "date_time": "2022-12-13 16:10:35:242259",
                "metric_str": "content_trust.direct_experience",
                "other_agent": "B",
                "resource_id": "133a2c3a-bdb7-468e-bc04-0400e217ec6e",
                "trust_value": "-0.24650937224655056"
            },
            {
                "date_time": "2022-12-13 16:10:35:528612",
                "metric_str": "content_trust.recommendation",
                "other_agent": "B",
                "resource_id": "133a2c3a-bdb7-468e-bc04-0400e217ec6e",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:10:35:599896",
                "metric_str": "content_trust.related_resources",
                "other_agent": "B",
                "resource_id": "133a2c3a-bdb7-468e-bc04-0400e217ec6e",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:10:35:662996",
                "metric_str": "content_trust.user_expertise",
                "other_agent": "B",
                "resource_id": "133a2c3a-bdb7-468e-bc04-0400e217ec6e",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:10:35:885431",
                "metric_str": "content_trust.popularity",
                "other_agent": "B",
                "resource_id": "133a2c3a-bdb7-468e-bc04-0400e217ec6e",
                "trust_value": "0.8"
            },
            {
                "date_time": "2022-12-13 16:11:27:037792",
                "metric_str": "content_trust.bias",
                "other_agent": "B",
                "resource_id": "166cf2c4-e540-4821-885e-b6fd50da4c95",
                "trust_value": "-0.9967114633313876"
            },
            {
                "date_time": "2022-12-13 16:11:27:040833",
                "metric_str": "content_trust.specificity",
                "other_agent": "B",
                "resource_id": "166cf2c4-e540-4821-885e-b6fd50da4c95",
                "trust_value": "-0.48035011153373164"
            },
            {
                "date_time": "2022-12-13 16:11:27:084758",
                "metric_str": "content_trust.likelihood",
                "other_agent": "B",
                "resource_id": "166cf2c4-e540-4821-885e-b6fd50da4c95",
                "trust_value": "-0.6378248930837696"
            },
            {
                "date_time": "2022-12-13 16:11:27:115154",
                "metric_str": "content_trust.incentive",
                "other_agent": "B",
                "resource_id": "166cf2c4-e540-4821-885e-b6fd50da4c95",
                "trust_value": "0.6638660118273303"
            },
            {
                "date_time": "2022-12-13 16:11:55:342191",
                "metric_str": "content_trust.bias",
                "other_agent": "B",
                "resource_id": "823c3a0d-cd16-45b7-9522-7b7c6a410433",
                "trust_value": "0.39365287026408824"
            },
            {
                "date_time": "2022-12-13 16:11:55:346835",
                "metric_str": "content_trust.specificity",
                "other_agent": "B",
                "resource_id": "823c3a0d-cd16-45b7-9522-7b7c6a410433",
                "trust_value": "0.9142867363933744"
            },
            {
                "date_time": "2022-12-13 16:11:55:370420",
                "metric_str": "content_trust.likelihood",
                "other_agent": "B",
                "resource_id": "823c3a0d-cd16-45b7-9522-7b7c6a410433",
                "trust_value": "0.18208456908147053"
            },
            {
                "date_time": "2022-12-13 16:11:55:397396",
                "metric_str": "content_trust.incentive",
                "other_agent": "B",
                "resource_id": "823c3a0d-cd16-45b7-9522-7b7c6a410433",
                "trust_value": "-0.4111844707680745"
            },
            {
                "date_time": "2022-12-13 16:12:02:550766",
                "metric_str": "content_trust.bias",
                "other_agent": "E",
                "resource_id": "fbd08837-3a21-44ac-a756-6757a40146dc",
                "trust_value": "0.06335986931721083"
            },
            {
                "date_time": "2022-12-13 16:12:02:553763",
                "metric_str": "content_trust.specificity",
                "other_agent": "E",
                "resource_id": "fbd08837-3a21-44ac-a756-6757a40146dc",
                "trust_value": "-0.20266852088688925"
            },
            {
                "date_time": "2022-12-13 16:12:02:593458",
                "metric_str": "content_trust.likelihood",
                "other_agent": "E",
                "resource_id": "fbd08837-3a21-44ac-a756-6757a40146dc",
                "trust_value": "-0.21516814038090648"
            },
            {
                "date_time": "2022-12-13 16:12:02:647125",
                "metric_str": "content_trust.incentive",
                "other_agent": "E",
                "resource_id": "fbd08837-3a21-44ac-a756-6757a40146dc",
                "trust_value": "-0.3224544651557899"
            }
        ],
        "E": [
            {
                "date_time": "2022-12-13 16:09:35:366576",
                "metric_str": "content_trust.bias",
                "other_agent": "I",
                "resource_id": "31012207-6aca-4e9a-aad4-89ceb0e374fa",
                "trust_value": "-0.5259630666810704"
            },
            {
                "date_time": "2022-12-13 16:09:35:372139",
                "metric_str": "content_trust.specificity",
                "other_agent": "I",
                "resource_id": "31012207-6aca-4e9a-aad4-89ceb0e374fa",
                "trust_value": "-0.4318970775348894"
            },
            {
                "date_time": "2022-12-13 16:09:35:441703",
                "metric_str": "content_trust.likelihood",
                "other_agent": "I",
                "resource_id": "31012207-6aca-4e9a-aad4-89ceb0e374fa",
                "trust_value": "0.09518816412163988"
            },
            {
                "date_time": "2022-12-13 16:09:35:479237",
                "metric_str": "content_trust.incentive",
                "other_agent": "I",
                "resource_id": "31012207-6aca-4e9a-aad4-89ceb0e374fa",
                "trust_value": "0.5900026963061091"
            },
            {
                "date_time": "2022-12-13 16:09:35:518093",
                "metric_str": "content_trust.deception",
                "other_agent": "I",
                "resource_id": "31012207-6aca-4e9a-aad4-89ceb0e374fa",
                "trust_value": "0.330551878710029"
            },
            {
                "date_time": "2022-12-13 16:09:35:632521",
                "metric_str": "content_trust.age",
                "other_agent": "I",
                "resource_id": "31012207-6aca-4e9a-aad4-89ceb0e374fa",
                "trust_value": "1.0"
            },
            {
                "date_time": "2022-12-13 16:09:35:679478",
                "metric_str": "content_trust.authority",
                "other_agent": "I",
                "resource_id": "31012207-6aca-4e9a-aad4-89ceb0e374fa",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:09:35:718806",
                "metric_str": "content_trust.topic",
                "other_agent": "I",
                "resource_id": "31012207-6aca-4e9a-aad4-89ceb0e374fa",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:09:35:789996",
                "metric_str": "content_trust.provenance",
                "other_agent": "I",
                "resource_id": "31012207-6aca-4e9a-aad4-89ceb0e374fa",
                "trust_value": "0.19999999999999996"
            },
            {
                "date_time": "2022-12-13 16:09:35:962846",
                "metric_str": "content_trust.direct_experience",
                "other_agent": "I",
                "resource_id": "31012207-6aca-4e9a-aad4-89ceb0e374fa",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:09:36:119033",
                "metric_str": "content_trust.recommendation",
                "other_agent": "I",
                "resource_id": "31012207-6aca-4e9a-aad4-89ceb0e374fa",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:09:36:328275",
                "metric_str": "content_trust.related_resources",
                "other_agent": "I",
                "resource_id": "31012207-6aca-4e9a-aad4-89ceb0e374fa",
                "trust_value": "-0.8945161225019069"
            },
            {
                "date_time": "2022-12-13 16:09:36:378268",
                "metric_str": "content_trust.user_expertise",
                "other_agent": "I",
                "resource_id": "31012207-6aca-4e9a-aad4-89ceb0e374fa",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:09:37:195013",
                "metric_str": "content_trust.popularity",
                "other_agent": "I",
                "resource_id": "31012207-6aca-4e9a-aad4-89ceb0e374fa",
                "trust_value": "0.8"
            },
            {
                "date_time": "2022-12-13 16:09:37:635608",
                "metric_str": "content_trust.bias",
                "other_agent": "H",
                "resource_id": "7f18710c-5ec5-430e-b9dd-5d7d8333f662",
                "trust_value": "0.7817068765902075"
            },
            {
                "date_time": "2022-12-13 16:09:37:639164",
                "metric_str": "content_trust.specificity",
                "other_agent": "H",
                "resource_id": "7f18710c-5ec5-430e-b9dd-5d7d8333f662",
                "trust_value": "0.03767953974961746"
            },
            {
                "date_time": "2022-12-13 16:09:37:695332",
                "metric_str": "content_trust.likelihood",
                "other_agent": "H",
                "resource_id": "7f18710c-5ec5-430e-b9dd-5d7d8333f662",
                "trust_value": "0.36285378572440585"
            },
            {
                "date_time": "2022-12-13 16:09:37:727495",
                "metric_str": "content_trust.incentive",
                "other_agent": "H",
                "resource_id": "7f18710c-5ec5-430e-b9dd-5d7d8333f662",
                "trust_value": "-0.12000834882142364"
            },
            {
                "date_time": "2022-12-13 16:09:38:307771",
                "metric_str": "content_trust.bias",
                "other_agent": "G",
                "resource_id": "b3b962fa-4e6b-4594-a130-e37b5137cb85",
                "trust_value": "0.9410049558795595"
            },
            {
                "date_time": "2022-12-13 16:09:38:312317",
                "metric_str": "content_trust.specificity",
                "other_agent": "G",
                "resource_id": "b3b962fa-4e6b-4594-a130-e37b5137cb85",
                "trust_value": "0.416185853307236"
            },
            {
                "date_time": "2022-12-13 16:09:38:358234",
                "metric_str": "content_trust.likelihood",
                "other_agent": "G",
                "resource_id": "b3b962fa-4e6b-4594-a130-e37b5137cb85",
                "trust_value": "0.6907146535760138"
            },
            {
                "date_time": "2022-12-13 16:09:38:434908",
                "metric_str": "content_trust.incentive",
                "other_agent": "G",
                "resource_id": "b3b962fa-4e6b-4594-a130-e37b5137cb85",
                "trust_value": "-0.538765823219173"
            },
            {
                "date_time": "2022-12-13 16:09:38:474998",
                "metric_str": "content_trust.deception",
                "other_agent": "G",
                "resource_id": "b3b962fa-4e6b-4594-a130-e37b5137cb85",
                "trust_value": "0.7228113380441992"
            },
            {
                "date_time": "2022-12-13 16:09:38:515510",
                "metric_str": "content_trust.age",
                "other_agent": "G",
                "resource_id": "b3b962fa-4e6b-4594-a130-e37b5137cb85",
                "trust_value": "1.0"
            },
            {
                "date_time": "2022-12-13 16:09:38:570548",
                "metric_str": "content_trust.authority",
                "other_agent": "G",
                "resource_id": "b3b962fa-4e6b-4594-a130-e37b5137cb85",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:09:38:760333",
                "metric_str": "content_trust.topic",
                "other_agent": "G",
                "resource_id": "b3b962fa-4e6b-4594-a130-e37b5137cb85",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:09:38:817575",
                "metric_str": "content_trust.provenance",
                "other_agent": "G",
                "resource_id": "b3b962fa-4e6b-4594-a130-e37b5137cb85",
                "trust_value": "0.19999999999999996"
            },
            {
                "date_time": "2022-12-13 16:09:38:879039",
                "metric_str": "content_trust.direct_experience",
                "other_agent": "G",
                "resource_id": "b3b962fa-4e6b-4594-a130-e37b5137cb85",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:09:39:141533",
                "metric_str": "content_trust.recommendation",
                "other_agent": "G",
                "resource_id": "b3b962fa-4e6b-4594-a130-e37b5137cb85",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:09:39:183765",
                "metric_str": "content_trust.related_resources",
                "other_agent": "G",
                "resource_id": "b3b962fa-4e6b-4594-a130-e37b5137cb85",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:09:39:226137",
                "metric_str": "content_trust.user_expertise",
                "other_agent": "G",
                "resource_id": "b3b962fa-4e6b-4594-a130-e37b5137cb85",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:09:41:030348",
                "metric_str": "content_trust.popularity",
                "other_agent": "G",
                "resource_id": "b3b962fa-4e6b-4594-a130-e37b5137cb85",
                "trust_value": "0.8"
            },
            {
                "date_time": "2022-12-13 16:09:50:385289",
                "metric_str": "content_trust.bias",
                "other_agent": "B",
                "resource_id": "e9becdd4-73f1-4f37-a763-a5826e9449b3",
                "trust_value": "0.3580493743448965"
            },
            {
                "date_time": "2022-12-13 16:09:50:387809",
                "metric_str": "content_trust.specificity",
                "other_agent": "B",
                "resource_id": "e9becdd4-73f1-4f37-a763-a5826e9449b3",
                "trust_value": "-0.49870967099333385"
            },
            {
                "date_time": "2022-12-13 16:09:50:416052",
                "metric_str": "content_trust.likelihood",
                "other_agent": "B",
                "resource_id": "e9becdd4-73f1-4f37-a763-a5826e9449b3",
                "trust_value": "-0.24494753583247242"
            },
            {
                "date_time": "2022-12-13 16:09:50:464099",
                "metric_str": "content_trust.incentive",
                "other_agent": "B",
                "resource_id": "e9becdd4-73f1-4f37-a763-a5826e9449b3",
                "trust_value": "-0.32982225023309963"
            },
            {
                "date_time": "2022-12-13 16:09:55:051367",
                "metric_str": "content_trust.bias",
                "other_agent": "I",
                "resource_id": "67f35f30-d23f-4ec7-97fe-6a0622cc4643",
                "trust_value": "0.735829173794823"
            },
            {
                "date_time": "2022-12-13 16:09:55:054366",
                "metric_str": "content_trust.specificity",
                "other_agent": "I",
                "resource_id": "67f35f30-d23f-4ec7-97fe-6a0622cc4643",
                "trust_value": "-0.9415596407469651"
            },
            {
                "date_time": "2022-12-13 16:09:55:088747",
                "metric_str": "content_trust.likelihood",
                "other_agent": "I",
                "resource_id": "67f35f30-d23f-4ec7-97fe-6a0622cc4643",
                "trust_value": "0.10453680493181738"
            },
            {
                "date_time": "2022-12-13 16:09:55:121552",
                "metric_str": "content_trust.incentive",
                "other_agent": "I",
                "resource_id": "67f35f30-d23f-4ec7-97fe-6a0622cc4643",
                "trust_value": "-0.467713449335446"
            },
            {
                "date_time": "2022-12-13 16:10:00:005707",
                "metric_str": "content_trust.bias",
                "other_agent": "H",
                "resource_id": "15b1cc47-d52d-41dd-a397-fd55c836db3e",
                "trust_value": "-0.8492930612855132"
            },
            {
                "date_time": "2022-12-13 16:10:00:012800",
                "metric_str": "content_trust.specificity",
                "other_agent": "H",
                "resource_id": "15b1cc47-d52d-41dd-a397-fd55c836db3e",
                "trust_value": "0.9366919916340803"
            },
            {
                "date_time": "2022-12-13 16:10:00:036471",
                "metric_str": "content_trust.likelihood",
                "other_agent": "H",
                "resource_id": "15b1cc47-d52d-41dd-a397-fd55c836db3e",
                "trust_value": "0.8993190299102876"
            },
            {
                "date_time": "2022-12-13 16:10:00:097904",
                "metric_str": "content_trust.incentive",
                "other_agent": "H",
                "resource_id": "15b1cc47-d52d-41dd-a397-fd55c836db3e",
                "trust_value": "0.1180281297309782"
            },
            {
                "date_time": "2022-12-13 16:10:00:128136",
                "metric_str": "content_trust.deception",
                "other_agent": "H",
                "resource_id": "15b1cc47-d52d-41dd-a397-fd55c836db3e",
                "trust_value": "0.022152399498315045"
            },
            {
                "date_time": "2022-12-13 16:10:00:154858",
                "metric_str": "content_trust.age",
                "other_agent": "H",
                "resource_id": "15b1cc47-d52d-41dd-a397-fd55c836db3e",
                "trust_value": "1.0"
            },
            {
                "date_time": "2022-12-13 16:10:00:197871",
                "metric_str": "content_trust.authority",
                "other_agent": "H",
                "resource_id": "15b1cc47-d52d-41dd-a397-fd55c836db3e",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:10:00:266470",
                "metric_str": "content_trust.topic",
                "other_agent": "H",
                "resource_id": "15b1cc47-d52d-41dd-a397-fd55c836db3e",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:10:00:331193",
                "metric_str": "content_trust.provenance",
                "other_agent": "H",
                "resource_id": "15b1cc47-d52d-41dd-a397-fd55c836db3e",
                "trust_value": "0.33333333333333326"
            },
            {
                "date_time": "2022-12-13 16:10:00:377128",
                "metric_str": "content_trust.direct_experience",
                "other_agent": "H",
                "resource_id": "15b1cc47-d52d-41dd-a397-fd55c836db3e",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:10:00:578283",
                "metric_str": "content_trust.recommendation",
                "other_agent": "H",
                "resource_id": "15b1cc47-d52d-41dd-a397-fd55c836db3e",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:10:00:669912",
                "metric_str": "content_trust.related_resources",
                "other_agent": "H",
                "resource_id": "15b1cc47-d52d-41dd-a397-fd55c836db3e",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:10:00:725930",
                "metric_str": "content_trust.user_expertise",
                "other_agent": "H",
                "resource_id": "15b1cc47-d52d-41dd-a397-fd55c836db3e",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:10:01:503621",
                "metric_str": "content_trust.popularity",
                "other_agent": "H",
                "resource_id": "15b1cc47-d52d-41dd-a397-fd55c836db3e",
                "trust_value": "0.8"
            },
            {
                "date_time": "2022-12-13 16:10:04:754677",
                "metric_str": "content_trust.bias",
                "other_agent": "G",
                "resource_id": "af8ec117-e19c-4b0b-b809-d7afa1737a30",
                "trust_value": "0.15495721552543862"
            },
            {
                "date_time": "2022-12-13 16:10:04:759228",
                "metric_str": "content_trust.specificity",
                "other_agent": "G",
                "resource_id": "af8ec117-e19c-4b0b-b809-d7afa1737a30",
                "trust_value": "0.9109232324751733"
            },
            {
                "date_time": "2022-12-13 16:10:04:795033",
                "metric_str": "content_trust.likelihood",
                "other_agent": "G",
                "resource_id": "af8ec117-e19c-4b0b-b809-d7afa1737a30",
                "trust_value": "0.5924119686563052"
            },
            {
                "date_time": "2022-12-13 16:10:04:830342",
                "metric_str": "content_trust.incentive",
                "other_agent": "G",
                "resource_id": "af8ec117-e19c-4b0b-b809-d7afa1737a30",
                "trust_value": "0.35298134882656185"
            },
            {
                "date_time": "2022-12-13 16:10:11:459808",
                "metric_str": "content_trust.bias",
                "other_agent": "I",
                "resource_id": "3dbbae25-6e16-44ab-b388-74d26c1d4f53",
                "trust_value": "-0.3217246954967927"
            },
            {
                "date_time": "2022-12-13 16:10:11:462330",
                "metric_str": "content_trust.specificity",
                "other_agent": "I",
                "resource_id": "3dbbae25-6e16-44ab-b388-74d26c1d4f53",
                "trust_value": "0.8891902453006895"
            },
            {
                "date_time": "2022-12-13 16:10:11:496177",
                "metric_str": "content_trust.likelihood",
                "other_agent": "I",
                "resource_id": "3dbbae25-6e16-44ab-b388-74d26c1d4f53",
                "trust_value": "-0.3001022153293096"
            },
            {
                "date_time": "2022-12-13 16:10:11:524379",
                "metric_str": "content_trust.incentive",
                "other_agent": "I",
                "resource_id": "3dbbae25-6e16-44ab-b388-74d26c1d4f53",
                "trust_value": "-0.6317667212178364"
            },
            {
                "date_time": "2022-12-13 16:10:11:553190",
                "metric_str": "content_trust.deception",
                "other_agent": "I",
                "resource_id": "3dbbae25-6e16-44ab-b388-74d26c1d4f53",
                "trust_value": "0.9713406668273683"
            },
            {
                "date_time": "2022-12-13 16:10:11:583565",
                "metric_str": "content_trust.age",
                "other_agent": "I",
                "resource_id": "3dbbae25-6e16-44ab-b388-74d26c1d4f53",
                "trust_value": "1.0"
            },
            {
                "date_time": "2022-12-13 16:10:11:630990",
                "metric_str": "content_trust.authority",
                "other_agent": "I",
                "resource_id": "3dbbae25-6e16-44ab-b388-74d26c1d4f53",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:10:11:721827",
                "metric_str": "content_trust.topic",
                "other_agent": "I",
                "resource_id": "3dbbae25-6e16-44ab-b388-74d26c1d4f53",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:10:11:755096",
                "metric_str": "content_trust.provenance",
                "other_agent": "I",
                "resource_id": "3dbbae25-6e16-44ab-b388-74d26c1d4f53",
                "trust_value": "1.0"
            },
            {
                "date_time": "2022-12-13 16:10:11:831872",
                "metric_str": "content_trust.direct_experience",
                "other_agent": "I",
                "resource_id": "3dbbae25-6e16-44ab-b388-74d26c1d4f53",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:10:12:129052",
                "metric_str": "content_trust.recommendation",
                "other_agent": "I",
                "resource_id": "3dbbae25-6e16-44ab-b388-74d26c1d4f53",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:10:12:314521",
                "metric_str": "content_trust.related_resources",
                "other_agent": "I",
                "resource_id": "3dbbae25-6e16-44ab-b388-74d26c1d4f53",
                "trust_value": "-0.3509864427562895"
            },
            {
                "date_time": "2022-12-13 16:10:12:389303",
                "metric_str": "content_trust.user_expertise",
                "other_agent": "I",
                "resource_id": "3dbbae25-6e16-44ab-b388-74d26c1d4f53",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:10:12:790695",
                "metric_str": "content_trust.popularity",
                "other_agent": "I",
                "resource_id": "3dbbae25-6e16-44ab-b388-74d26c1d4f53",
                "trust_value": "0.8"
            },
            {
                "date_time": "2022-12-13 16:10:29:179218",
                "metric_str": "content_trust.bias",
                "other_agent": "D",
                "resource_id": "8b4f5e64-2db6-4317-9a15-41b9910b844d",
                "trust_value": "-0.10926026734694227"
            },
            {
                "date_time": "2022-12-13 16:10:29:182237",
                "metric_str": "content_trust.specificity",
                "other_agent": "D",
                "resource_id": "8b4f5e64-2db6-4317-9a15-41b9910b844d",
                "trust_value": "-0.20225985618296338"
            },
            {
                "date_time": "2022-12-13 16:10:29:207073",
                "metric_str": "content_trust.likelihood",
                "other_agent": "D",
                "resource_id": "8b4f5e64-2db6-4317-9a15-41b9910b844d",
                "trust_value": "-0.20298504644399418"
            },
            {
                "date_time": "2022-12-13 16:10:29:240771",
                "metric_str": "content_trust.incentive",
                "other_agent": "D",
                "resource_id": "8b4f5e64-2db6-4317-9a15-41b9910b844d",
                "trust_value": "0.8409341117983804"
            },
            {
                "date_time": "2022-12-13 16:10:43:179105",
                "metric_str": "content_trust.bias",
                "other_agent": "H",
                "resource_id": "ab1e8eb4-b8e2-4a43-9563-565196832386",
                "trust_value": "-0.651450893328098"
            },
            {
                "date_time": "2022-12-13 16:10:43:181121",
                "metric_str": "content_trust.specificity",
                "other_agent": "H",
                "resource_id": "ab1e8eb4-b8e2-4a43-9563-565196832386",
                "trust_value": "0.914002528795903"
            },
            {
                "date_time": "2022-12-13 16:10:43:214337",
                "metric_str": "content_trust.likelihood",
                "other_agent": "H",
                "resource_id": "ab1e8eb4-b8e2-4a43-9563-565196832386",
                "trust_value": "0.1706353894211401"
            },
            {
                "date_time": "2022-12-13 16:10:43:248804",
                "metric_str": "content_trust.incentive",
                "other_agent": "H",
                "resource_id": "ab1e8eb4-b8e2-4a43-9563-565196832386",
                "trust_value": "0.23135519322633358"
            },
            {
                "date_time": "2022-12-13 16:10:52:835510",
                "metric_str": "content_trust.bias",
                "other_agent": "C",
                "resource_id": "404270bf-4058-4340-9aad-bdc9942305ab",
                "trust_value": "-0.4976654649969008"
            },
            {
                "date_time": "2022-12-13 16:10:52:839054",
                "metric_str": "content_trust.specificity",
                "other_agent": "C",
                "resource_id": "404270bf-4058-4340-9aad-bdc9942305ab",
                "trust_value": "0.5375225249082656"
            },
            {
                "date_time": "2022-12-13 16:10:52:921535",
                "metric_str": "content_trust.likelihood",
                "other_agent": "C",
                "resource_id": "404270bf-4058-4340-9aad-bdc9942305ab",
                "trust_value": "0.17013628188794105"
            },
            {
                "date_time": "2022-12-13 16:10:52:998991",
                "metric_str": "content_trust.incentive",
                "other_agent": "C",
                "resource_id": "404270bf-4058-4340-9aad-bdc9942305ab",
                "trust_value": "0.9896110866302339"
            },
            {
                "date_time": "2022-12-13 16:11:07:397896",
                "metric_str": "content_trust.bias",
                "other_agent": "I",
                "resource_id": "31c67a49-a9dc-4026-aa99-451b9fd16ab2",
                "trust_value": "-0.1228887432023702"
            },
            {
                "date_time": "2022-12-13 16:11:07:400910",
                "metric_str": "content_trust.specificity",
                "other_agent": "I",
                "resource_id": "31c67a49-a9dc-4026-aa99-451b9fd16ab2",
                "trust_value": "-0.8622693547681257"
            },
            {
                "date_time": "2022-12-13 16:11:07:609948",
                "metric_str": "content_trust.likelihood",
                "other_agent": "I",
                "resource_id": "31c67a49-a9dc-4026-aa99-451b9fd16ab2",
                "trust_value": "-0.5447936406414557"
            },
            {
                "date_time": "2022-12-13 16:11:07:779681",
                "metric_str": "content_trust.incentive",
                "other_agent": "I",
                "resource_id": "31c67a49-a9dc-4026-aa99-451b9fd16ab2",
                "trust_value": "-0.07796285438139705"
            },
            {
                "date_time": "2022-12-13 16:11:07:823585",
                "metric_str": "content_trust.deception",
                "other_agent": "I",
                "resource_id": "31c67a49-a9dc-4026-aa99-451b9fd16ab2",
                "trust_value": "0.4203278251995788"
            },
            {
                "date_time": "2022-12-13 16:11:07:933563",
                "metric_str": "content_trust.age",
                "other_agent": "I",
                "resource_id": "31c67a49-a9dc-4026-aa99-451b9fd16ab2",
                "trust_value": "1.0"
            },
            {
                "date_time": "2022-12-13 16:11:08:455630",
                "metric_str": "content_trust.authority",
                "other_agent": "I",
                "resource_id": "31c67a49-a9dc-4026-aa99-451b9fd16ab2",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:11:08:571242",
                "metric_str": "content_trust.topic",
                "other_agent": "I",
                "resource_id": "31c67a49-a9dc-4026-aa99-451b9fd16ab2",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:11:08:632364",
                "metric_str": "content_trust.provenance",
                "other_agent": "I",
                "resource_id": "31c67a49-a9dc-4026-aa99-451b9fd16ab2",
                "trust_value": "-1.0"
            },
            {
                "date_time": "2022-12-13 16:11:08:731243",
                "metric_str": "content_trust.direct_experience",
                "other_agent": "I",
                "resource_id": "31c67a49-a9dc-4026-aa99-451b9fd16ab2",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:11:09:050354",
                "metric_str": "content_trust.recommendation",
                "other_agent": "I",
                "resource_id": "31c67a49-a9dc-4026-aa99-451b9fd16ab2",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:11:09:297882",
                "metric_str": "content_trust.related_resources",
                "other_agent": "I",
                "resource_id": "31c67a49-a9dc-4026-aa99-451b9fd16ab2",
                "trust_value": "0.6696985696589439"
            },
            {
                "date_time": "2022-12-13 16:11:09:429121",
                "metric_str": "content_trust.user_expertise",
                "other_agent": "I",
                "resource_id": "31c67a49-a9dc-4026-aa99-451b9fd16ab2",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:11:10:245292",
                "metric_str": "content_trust.popularity",
                "other_agent": "I",
                "resource_id": "31c67a49-a9dc-4026-aa99-451b9fd16ab2",
                "trust_value": "0.8"
            },
            {
                "date_time": "2022-12-13 16:11:27:727064",
                "metric_str": "content_trust.bias",
                "other_agent": "F",
                "resource_id": "a348c8fc-e075-4c80-820e-e098612c4cd8",
                "trust_value": "0.3232092586442521"
            },
            {
                "date_time": "2022-12-13 16:11:27:732128",
                "metric_str": "content_trust.specificity",
                "other_agent": "F",
                "resource_id": "a348c8fc-e075-4c80-820e-e098612c4cd8",
                "trust_value": "0.9930670377904431"
            },
            {
                "date_time": "2022-12-13 16:11:27:769486",
                "metric_str": "content_trust.likelihood",
                "other_agent": "F",
                "resource_id": "a348c8fc-e075-4c80-820e-e098612c4cd8",
                "trust_value": "-0.05986248990417331"
            },
            {
                "date_time": "2022-12-13 16:11:27:810938",
                "metric_str": "content_trust.incentive",
                "other_agent": "F",
                "resource_id": "a348c8fc-e075-4c80-820e-e098612c4cd8",
                "trust_value": "-0.8503662305804907"
            },
            {
                "date_time": "2022-12-13 16:11:27:867056",
                "metric_str": "content_trust.deception",
                "other_agent": "F",
                "resource_id": "a348c8fc-e075-4c80-820e-e098612c4cd8",
                "trust_value": "0.9352825771413544"
            },
            {
                "date_time": "2022-12-13 16:11:27:898374",
                "metric_str": "content_trust.age",
                "other_agent": "F",
                "resource_id": "a348c8fc-e075-4c80-820e-e098612c4cd8",
                "trust_value": "1.0"
            },
            {
                "date_time": "2022-12-13 16:11:27:951011",
                "metric_str": "content_trust.authority",
                "other_agent": "F",
                "resource_id": "a348c8fc-e075-4c80-820e-e098612c4cd8",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:11:28:105981",
                "metric_str": "content_trust.topic",
                "other_agent": "F",
                "resource_id": "a348c8fc-e075-4c80-820e-e098612c4cd8",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:11:28:189137",
                "metric_str": "content_trust.provenance",
                "other_agent": "F",
                "resource_id": "a348c8fc-e075-4c80-820e-e098612c4cd8",
                "trust_value": "0.0"
            },
            {
                "date_time": "2022-12-13 16:11:28:287650",
                "metric_str": "content_trust.direct_experience",
                "other_agent": "F",
                "resource_id": "a348c8fc-e075-4c80-820e-e098612c4cd8",
                "trust_value": "0.6696985696589439"
            },
            {
                "date_time": "2022-12-13 16:11:28:520714",
                "metric_str": "content_trust.recommendation",
                "other_agent": "F",
                "resource_id": "a348c8fc-e075-4c80-820e-e098612c4cd8",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:11:28:699814",
                "metric_str": "content_trust.related_resources",
                "other_agent": "F",
                "resource_id": "a348c8fc-e075-4c80-820e-e098612c4cd8",
                "trust_value": "0.09055986196034405"
            },
            {
                "date_time": "2022-12-13 16:11:28:752295",
                "metric_str": "content_trust.user_expertise",
                "other_agent": "F",
                "resource_id": "a348c8fc-e075-4c80-820e-e098612c4cd8",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:11:29:151841",
                "metric_str": "content_trust.popularity",
                "other_agent": "F",
                "resource_id": "a348c8fc-e075-4c80-820e-e098612c4cd8",
                "trust_value": "0.8"
            },
            {
                "date_time": "2022-12-13 16:11:36:734711",
                "metric_str": "content_trust.bias",
                "other_agent": "C",
                "resource_id": "77ce1453-b11b-4cc8-8511-187a17ea87e1",
                "trust_value": "0.8985743101974102"
            },
            {
                "date_time": "2022-12-13 16:11:36:742271",
                "metric_str": "content_trust.specificity",
                "other_agent": "C",
                "resource_id": "77ce1453-b11b-4cc8-8511-187a17ea87e1",
                "trust_value": "0.26735268654214384"
            },
            {
                "date_time": "2022-12-13 16:11:36:777608",
                "metric_str": "content_trust.likelihood",
                "other_agent": "C",
                "resource_id": "77ce1453-b11b-4cc8-8511-187a17ea87e1",
                "trust_value": "-0.48817541187105284"
            },
            {
                "date_time": "2022-12-13 16:11:36:812909",
                "metric_str": "content_trust.incentive",
                "other_agent": "C",
                "resource_id": "77ce1453-b11b-4cc8-8511-187a17ea87e1",
                "trust_value": "0.9583807764006866"
            },
            {
                "date_time": "2022-12-13 16:11:36:839588",
                "metric_str": "content_trust.deception",
                "other_agent": "C",
                "resource_id": "77ce1453-b11b-4cc8-8511-187a17ea87e1",
                "trust_value": "0.12277302961907388"
            },
            {
                "date_time": "2022-12-13 16:11:36:867309",
                "metric_str": "content_trust.age",
                "other_agent": "C",
                "resource_id": "77ce1453-b11b-4cc8-8511-187a17ea87e1",
                "trust_value": "1.0"
            },
            {
                "date_time": "2022-12-13 16:11:36:902569",
                "metric_str": "content_trust.authority",
                "other_agent": "C",
                "resource_id": "77ce1453-b11b-4cc8-8511-187a17ea87e1",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:11:36:982615",
                "metric_str": "content_trust.topic",
                "other_agent": "C",
                "resource_id": "77ce1453-b11b-4cc8-8511-187a17ea87e1",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:11:37:020005",
                "metric_str": "content_trust.provenance",
                "other_agent": "C",
                "resource_id": "77ce1453-b11b-4cc8-8511-187a17ea87e1",
                "trust_value": "1.0"
            },
            {
                "date_time": "2022-12-13 16:11:37:069722",
                "metric_str": "content_trust.direct_experience",
                "other_agent": "C",
                "resource_id": "77ce1453-b11b-4cc8-8511-187a17ea87e1",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:11:37:223992",
                "metric_str": "content_trust.recommendation",
                "other_agent": "C",
                "resource_id": "77ce1453-b11b-4cc8-8511-187a17ea87e1",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:11:37:441222",
                "metric_str": "content_trust.related_resources",
                "other_agent": "C",
                "resource_id": "77ce1453-b11b-4cc8-8511-187a17ea87e1",
                "trust_value": "0.3129717640125043"
            },
            {
                "date_time": "2022-12-13 16:11:37:483429",
                "metric_str": "content_trust.user_expertise",
                "other_agent": "C",
                "resource_id": "77ce1453-b11b-4cc8-8511-187a17ea87e1",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:11:37:766951",
                "metric_str": "content_trust.popularity",
                "other_agent": "C",
                "resource_id": "77ce1453-b11b-4cc8-8511-187a17ea87e1",
                "trust_value": "0.8"
            },
            {
                "date_time": "2022-12-13 16:11:52:628090",
                "metric_str": "content_trust.bias",
                "other_agent": "B",
                "resource_id": "c5d8d143-aa75-44b4-ba0c-93d4227cde36",
                "trust_value": "0.2949751248527397"
            },
            {
                "date_time": "2022-12-13 16:11:52:632129",
                "metric_str": "content_trust.specificity",
                "other_agent": "B",
                "resource_id": "c5d8d143-aa75-44b4-ba0c-93d4227cde36",
                "trust_value": "-0.34293132852214936"
            },
            {
                "date_time": "2022-12-13 16:11:52:659924",
                "metric_str": "content_trust.likelihood",
                "other_agent": "B",
                "resource_id": "c5d8d143-aa75-44b4-ba0c-93d4227cde36",
                "trust_value": "-0.49616624427866785"
            },
            {
                "date_time": "2022-12-13 16:11:52:702379",
                "metric_str": "content_trust.incentive",
                "other_agent": "B",
                "resource_id": "c5d8d143-aa75-44b4-ba0c-93d4227cde36",
                "trust_value": "0.627328286448779"
            }
        ],
        "F": [
            {
                "date_time": "2022-12-13 16:09:48:349997",
                "metric_str": "content_trust.bias",
                "other_agent": "D",
                "resource_id": "079b73b6-b7a6-4314-b200-60046e7e15dd",
                "trust_value": "0.06367327116825239"
            },
            {
                "date_time": "2022-12-13 16:09:48:353024",
                "metric_str": "content_trust.specificity",
                "other_agent": "D",
                "resource_id": "079b73b6-b7a6-4314-b200-60046e7e15dd",
                "trust_value": "-0.5412770490355003"
            },
            {
                "date_time": "2022-12-13 16:09:48:392981",
                "metric_str": "content_trust.likelihood",
                "other_agent": "D",
                "resource_id": "079b73b6-b7a6-4314-b200-60046e7e15dd",
                "trust_value": "-0.1075918825690334"
            },
            {
                "date_time": "2022-12-13 16:09:48:421742",
                "metric_str": "content_trust.incentive",
                "other_agent": "D",
                "resource_id": "079b73b6-b7a6-4314-b200-60046e7e15dd",
                "trust_value": "0.6610751191260318"
            },
            {
                "date_time": "2022-12-13 16:09:48:448512",
                "metric_str": "content_trust.deception",
                "other_agent": "D",
                "resource_id": "079b73b6-b7a6-4314-b200-60046e7e15dd",
                "trust_value": "-0.5076482836878127"
            },
            {
                "date_time": "2022-12-13 16:09:48:483881",
                "metric_str": "content_trust.age",
                "other_agent": "D",
                "resource_id": "079b73b6-b7a6-4314-b200-60046e7e15dd",
                "trust_value": "1.0"
            },
            {
                "date_time": "2022-12-13 16:09:48:507545",
                "metric_str": "content_trust.authority",
                "other_agent": "D",
                "resource_id": "079b73b6-b7a6-4314-b200-60046e7e15dd",
                "trust_value": "1.0"
            },
            {
                "date_time": "2022-12-13 16:09:48:531280",
                "metric_str": "content_trust.topic",
                "other_agent": "D",
                "resource_id": "079b73b6-b7a6-4314-b200-60046e7e15dd",
                "trust_value": "-0.4145861796836382"
            },
            {
                "date_time": "2022-12-13 16:09:48:554467",
                "metric_str": "content_trust.provenance",
                "other_agent": "D",
                "resource_id": "079b73b6-b7a6-4314-b200-60046e7e15dd",
                "trust_value": "1.0"
            },
            {
                "date_time": "2022-12-13 16:09:48:588314",
                "metric_str": "content_trust.direct_experience",
                "other_agent": "D",
                "resource_id": "079b73b6-b7a6-4314-b200-60046e7e15dd",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:09:48:778430",
                "metric_str": "content_trust.recommendation",
                "other_agent": "D",
                "resource_id": "079b73b6-b7a6-4314-b200-60046e7e15dd",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:09:48:833415",
                "metric_str": "content_trust.related_resources",
                "other_agent": "D",
                "resource_id": "079b73b6-b7a6-4314-b200-60046e7e15dd",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:09:48:857614",
                "metric_str": "content_trust.user_expertise",
                "other_agent": "D",
                "resource_id": "079b73b6-b7a6-4314-b200-60046e7e15dd",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:09:48:957340",
                "metric_str": "content_trust.popularity",
                "other_agent": "D",
                "resource_id": "079b73b6-b7a6-4314-b200-60046e7e15dd",
                "trust_value": "0.6666666666666665"
            },
            {
                "date_time": "2022-12-13 16:09:55:658357",
                "metric_str": "content_trust.bias",
                "other_agent": "E",
                "resource_id": "e64f0231-c7f2-41e3-a262-b6f61a58a934",
                "trust_value": "-0.08420030235238674"
            },
            {
                "date_time": "2022-12-13 16:09:55:676015",
                "metric_str": "content_trust.specificity",
                "other_agent": "E",
                "resource_id": "e64f0231-c7f2-41e3-a262-b6f61a58a934",
                "trust_value": "0.2968387022243373"
            },
            {
                "date_time": "2022-12-13 16:09:55:743216",
                "metric_str": "content_trust.likelihood",
                "other_agent": "E",
                "resource_id": "e64f0231-c7f2-41e3-a262-b6f61a58a934",
                "trust_value": "0.07866832888006425"
            },
            {
                "date_time": "2022-12-13 16:09:55:803266",
                "metric_str": "content_trust.incentive",
                "other_agent": "E",
                "resource_id": "e64f0231-c7f2-41e3-a262-b6f61a58a934",
                "trust_value": "-0.9708176628659106"
            },
            {
                "date_time": "2022-12-13 16:09:55:849333",
                "metric_str": "content_trust.deception",
                "other_agent": "E",
                "resource_id": "e64f0231-c7f2-41e3-a262-b6f61a58a934",
                "trust_value": "0.9345501976695021"
            },
            {
                "date_time": "2022-12-13 16:09:55:914899",
                "metric_str": "content_trust.age",
                "other_agent": "E",
                "resource_id": "e64f0231-c7f2-41e3-a262-b6f61a58a934",
                "trust_value": "1.0"
            },
            {
                "date_time": "2022-12-13 16:09:55:960274",
                "metric_str": "content_trust.authority",
                "other_agent": "E",
                "resource_id": "e64f0231-c7f2-41e3-a262-b6f61a58a934",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:09:56:037456",
                "metric_str": "content_trust.topic",
                "other_agent": "E",
                "resource_id": "e64f0231-c7f2-41e3-a262-b6f61a58a934",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:09:56:092589",
                "metric_str": "content_trust.provenance",
                "other_agent": "E",
                "resource_id": "e64f0231-c7f2-41e3-a262-b6f61a58a934",
                "trust_value": "1.0"
            },
            {
                "date_time": "2022-12-13 16:09:56:190600",
                "metric_str": "content_trust.direct_experience",
                "other_agent": "E",
                "resource_id": "e64f0231-c7f2-41e3-a262-b6f61a58a934",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:09:56:650152",
                "metric_str": "content_trust.recommendation",
                "other_agent": "E",
                "resource_id": "e64f0231-c7f2-41e3-a262-b6f61a58a934",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:09:56:833882",
                "metric_str": "content_trust.related_resources",
                "other_agent": "E",
                "resource_id": "e64f0231-c7f2-41e3-a262-b6f61a58a934",
                "trust_value": "-0.6696155020824408"
            },
            {
                "date_time": "2022-12-13 16:09:56:898063",
                "metric_str": "content_trust.user_expertise",
                "other_agent": "E",
                "resource_id": "e64f0231-c7f2-41e3-a262-b6f61a58a934",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:09:57:138397",
                "metric_str": "content_trust.popularity",
                "other_agent": "E",
                "resource_id": "e64f0231-c7f2-41e3-a262-b6f61a58a934",
                "trust_value": "0.6666666666666665"
            },
            {
                "date_time": "2022-12-13 16:10:05:348551",
                "metric_str": "content_trust.bias",
                "other_agent": "D",
                "resource_id": "3fa939f6-ee0c-4ae1-9af8-234b72004176",
                "trust_value": "-0.8912315041336305"
            },
            {
                "date_time": "2022-12-13 16:10:05:351571",
                "metric_str": "content_trust.specificity",
                "other_agent": "D",
                "resource_id": "3fa939f6-ee0c-4ae1-9af8-234b72004176",
                "trust_value": "0.24430363865146654"
            },
            {
                "date_time": "2022-12-13 16:10:05:380866",
                "metric_str": "content_trust.likelihood",
                "other_agent": "D",
                "resource_id": "3fa939f6-ee0c-4ae1-9af8-234b72004176",
                "trust_value": "-0.10677611815451615"
            },
            {
                "date_time": "2022-12-13 16:10:05:410081",
                "metric_str": "content_trust.incentive",
                "other_agent": "D",
                "resource_id": "3fa939f6-ee0c-4ae1-9af8-234b72004176",
                "trust_value": "-0.8024047071455025"
            },
            {
                "date_time": "2022-12-13 16:10:45:483725",
                "metric_str": "content_trust.bias",
                "other_agent": "A",
                "resource_id": "844e832c-91de-4009-91e6-aac5aa9ee738",
                "trust_value": "0.23360523507273356"
            },
            {
                "date_time": "2022-12-13 16:10:45:485723",
                "metric_str": "content_trust.specificity",
                "other_agent": "A",
                "resource_id": "844e832c-91de-4009-91e6-aac5aa9ee738",
                "trust_value": "-0.11623847969804713"
            },
            {
                "date_time": "2022-12-13 16:10:45:512472",
                "metric_str": "content_trust.likelihood",
                "other_agent": "A",
                "resource_id": "844e832c-91de-4009-91e6-aac5aa9ee738",
                "trust_value": "0.45408327439751917"
            },
            {
                "date_time": "2022-12-13 16:10:45:544187",
                "metric_str": "content_trust.incentive",
                "other_agent": "A",
                "resource_id": "844e832c-91de-4009-91e6-aac5aa9ee738",
                "trust_value": "-0.08792970565978853"
            },
            {
                "date_time": "2022-12-13 16:11:12:031363",
                "metric_str": "content_trust.bias",
                "other_agent": "E",
                "resource_id": "6a011967-4879-4be2-821d-4984213bfb69",
                "trust_value": "-0.5540716369357692"
            },
            {
                "date_time": "2022-12-13 16:11:12:042939",
                "metric_str": "content_trust.specificity",
                "other_agent": "E",
                "resource_id": "6a011967-4879-4be2-821d-4984213bfb69",
                "trust_value": "-0.7908892657024524"
            },
            {
                "date_time": "2022-12-13 16:11:12:152329",
                "metric_str": "content_trust.likelihood",
                "other_agent": "E",
                "resource_id": "6a011967-4879-4be2-821d-4984213bfb69",
                "trust_value": "-0.3165971749554344"
            },
            {
                "date_time": "2022-12-13 16:11:12:268879",
                "metric_str": "content_trust.incentive",
                "other_agent": "E",
                "resource_id": "6a011967-4879-4be2-821d-4984213bfb69",
                "trust_value": "-0.8668251490359389"
            },
            {
                "date_time": "2022-12-13 16:11:12:392520",
                "metric_str": "content_trust.deception",
                "other_agent": "E",
                "resource_id": "6a011967-4879-4be2-821d-4984213bfb69",
                "trust_value": "-0.03168760065742715"
            },
            {
                "date_time": "2022-12-13 16:11:12:463148",
                "metric_str": "content_trust.age",
                "other_agent": "E",
                "resource_id": "6a011967-4879-4be2-821d-4984213bfb69",
                "trust_value": "1.0"
            },
            {
                "date_time": "2022-12-13 16:11:12:560533",
                "metric_str": "content_trust.authority",
                "other_agent": "E",
                "resource_id": "6a011967-4879-4be2-821d-4984213bfb69",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:11:12:770842",
                "metric_str": "content_trust.topic",
                "other_agent": "E",
                "resource_id": "6a011967-4879-4be2-821d-4984213bfb69",
                "trust_value": "0.3452858549305091"
            },
            {
                "date_time": "2022-12-13 16:11:12:962820",
                "metric_str": "content_trust.provenance",
                "other_agent": "E",
                "resource_id": "6a011967-4879-4be2-821d-4984213bfb69",
                "trust_value": "0.33333333333333326"
            },
            {
                "date_time": "2022-12-13 16:11:13:100002",
                "metric_str": "content_trust.direct_experience",
                "other_agent": "E",
                "resource_id": "6a011967-4879-4be2-821d-4984213bfb69",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:11:13:353376",
                "metric_str": "content_trust.recommendation",
                "other_agent": "E",
                "resource_id": "6a011967-4879-4be2-821d-4984213bfb69",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:11:13:521505",
                "metric_str": "content_trust.related_resources",
                "other_agent": "E",
                "resource_id": "6a011967-4879-4be2-821d-4984213bfb69",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:11:13:631605",
                "metric_str": "content_trust.user_expertise",
                "other_agent": "E",
                "resource_id": "6a011967-4879-4be2-821d-4984213bfb69",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:11:13:813839",
                "metric_str": "content_trust.popularity",
                "other_agent": "E",
                "resource_id": "6a011967-4879-4be2-821d-4984213bfb69",
                "trust_value": "0.6666666666666665"
            },
            {
                "date_time": "2022-12-13 16:11:18:255792",
                "metric_str": "content_trust.bias",
                "other_agent": "H",
                "resource_id": "d3bdc308-75bc-438a-90f2-a0d0f2a1924e",
                "trust_value": "-0.5169100475640249"
            },
            {
                "date_time": "2022-12-13 16:11:18:259356",
                "metric_str": "content_trust.specificity",
                "other_agent": "H",
                "resource_id": "d3bdc308-75bc-438a-90f2-a0d0f2a1924e",
                "trust_value": "-0.6207848966875447"
            },
            {
                "date_time": "2022-12-13 16:11:18:327431",
                "metric_str": "content_trust.likelihood",
                "other_agent": "H",
                "resource_id": "d3bdc308-75bc-438a-90f2-a0d0f2a1924e",
                "trust_value": "0.9598330421114094"
            },
            {
                "date_time": "2022-12-13 16:11:18:372471",
                "metric_str": "content_trust.incentive",
                "other_agent": "H",
                "resource_id": "d3bdc308-75bc-438a-90f2-a0d0f2a1924e",
                "trust_value": "-0.658621661365999"
            },
            {
                "date_time": "2022-12-13 16:11:18:408566",
                "metric_str": "content_trust.deception",
                "other_agent": "H",
                "resource_id": "d3bdc308-75bc-438a-90f2-a0d0f2a1924e",
                "trust_value": "-0.473074548021726"
            },
            {
                "date_time": "2022-12-13 16:11:18:443352",
                "metric_str": "content_trust.age",
                "other_agent": "H",
                "resource_id": "d3bdc308-75bc-438a-90f2-a0d0f2a1924e",
                "trust_value": "1.0"
            },
            {
                "date_time": "2022-12-13 16:11:18:471100",
                "metric_str": "content_trust.authority",
                "other_agent": "H",
                "resource_id": "d3bdc308-75bc-438a-90f2-a0d0f2a1924e",
                "trust_value": "1.0"
            },
            {
                "date_time": "2022-12-13 16:11:18:537376",
                "metric_str": "content_trust.topic",
                "other_agent": "H",
                "resource_id": "d3bdc308-75bc-438a-90f2-a0d0f2a1924e",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:11:18:562514",
                "metric_str": "content_trust.provenance",
                "other_agent": "H",
                "resource_id": "d3bdc308-75bc-438a-90f2-a0d0f2a1924e",
                "trust_value": "0.0"
            },
            {
                "date_time": "2022-12-13 16:11:18:627077",
                "metric_str": "content_trust.direct_experience",
                "other_agent": "H",
                "resource_id": "d3bdc308-75bc-438a-90f2-a0d0f2a1924e",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:11:18:760069",
                "metric_str": "content_trust.recommendation",
                "other_agent": "H",
                "resource_id": "d3bdc308-75bc-438a-90f2-a0d0f2a1924e",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:11:18:839541",
                "metric_str": "content_trust.related_resources",
                "other_agent": "H",
                "resource_id": "d3bdc308-75bc-438a-90f2-a0d0f2a1924e",
                "trust_value": "-0.21248165906950145"
            },
            {
                "date_time": "2022-12-13 16:11:18:869286",
                "metric_str": "content_trust.user_expertise",
                "other_agent": "H",
                "resource_id": "d3bdc308-75bc-438a-90f2-a0d0f2a1924e",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:11:18:931263",
                "metric_str": "content_trust.popularity",
                "other_agent": "H",
                "resource_id": "d3bdc308-75bc-438a-90f2-a0d0f2a1924e",
                "trust_value": "0.33333333333333326"
            },
            {
                "date_time": "2022-12-13 16:11:19:573738",
                "metric_str": "content_trust.bias",
                "other_agent": "A",
                "resource_id": "558b587b-76d0-4e63-bbcb-25aa46fb2627",
                "trust_value": "-0.43503300523225774"
            },
            {
                "date_time": "2022-12-13 16:11:19:575735",
                "metric_str": "content_trust.specificity",
                "other_agent": "A",
                "resource_id": "558b587b-76d0-4e63-bbcb-25aa46fb2627",
                "trust_value": "0.40820637365861856"
            },
            {
                "date_time": "2022-12-13 16:11:19:608090",
                "metric_str": "content_trust.likelihood",
                "other_agent": "A",
                "resource_id": "558b587b-76d0-4e63-bbcb-25aa46fb2627",
                "trust_value": "0.6264779087423775"
            },
            {
                "date_time": "2022-12-13 16:11:19:652519",
                "metric_str": "content_trust.incentive",
                "other_agent": "A",
                "resource_id": "558b587b-76d0-4e63-bbcb-25aa46fb2627",
                "trust_value": "-0.9542975286023199"
            },
            {
                "date_time": "2022-12-13 16:11:19:689807",
                "metric_str": "content_trust.deception",
                "other_agent": "A",
                "resource_id": "558b587b-76d0-4e63-bbcb-25aa46fb2627",
                "trust_value": "-0.1609702671579898"
            },
            {
                "date_time": "2022-12-13 16:11:19:717232",
                "metric_str": "content_trust.age",
                "other_agent": "A",
                "resource_id": "558b587b-76d0-4e63-bbcb-25aa46fb2627",
                "trust_value": "1.0"
            },
            {
                "date_time": "2022-12-13 16:11:19:743406",
                "metric_str": "content_trust.authority",
                "other_agent": "A",
                "resource_id": "558b587b-76d0-4e63-bbcb-25aa46fb2627",
                "trust_value": "1.0"
            },
            {
                "date_time": "2022-12-13 16:11:19:807494",
                "metric_str": "content_trust.topic",
                "other_agent": "A",
                "resource_id": "558b587b-76d0-4e63-bbcb-25aa46fb2627",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:11:19:851938",
                "metric_str": "content_trust.provenance",
                "other_agent": "A",
                "resource_id": "558b587b-76d0-4e63-bbcb-25aa46fb2627",
                "trust_value": "0.6000000000000001"
            },
            {
                "date_time": "2022-12-13 16:11:19:954411",
                "metric_str": "content_trust.direct_experience",
                "other_agent": "A",
                "resource_id": "558b587b-76d0-4e63-bbcb-25aa46fb2627",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:11:20:208263",
                "metric_str": "content_trust.recommendation",
                "other_agent": "A",
                "resource_id": "558b587b-76d0-4e63-bbcb-25aa46fb2627",
                "trust_value": "-0.22561638566069267"
            },
            {
                "date_time": "2022-12-13 16:11:20:471612",
                "metric_str": "content_trust.related_resources",
                "other_agent": "A",
                "resource_id": "558b587b-76d0-4e63-bbcb-25aa46fb2627",
                "trust_value": "0.1415190078755929"
            },
            {
                "date_time": "2022-12-13 16:11:20:528648",
                "metric_str": "content_trust.user_expertise",
                "other_agent": "A",
                "resource_id": "558b587b-76d0-4e63-bbcb-25aa46fb2627",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:11:20:648075",
                "metric_str": "content_trust.popularity",
                "other_agent": "A",
                "resource_id": "558b587b-76d0-4e63-bbcb-25aa46fb2627",
                "trust_value": "0.6666666666666665"
            },
            {
                "date_time": "2022-12-13 16:11:34:832810",
                "metric_str": "content_trust.bias",
                "other_agent": "A",
                "resource_id": "dfb5dc07-bec3-4888-9fc5-69d4c2df6b56",
                "trust_value": "-0.8384407037609105"
            },
            {
                "date_time": "2022-12-13 16:11:34:834803",
                "metric_str": "content_trust.specificity",
                "other_agent": "A",
                "resource_id": "dfb5dc07-bec3-4888-9fc5-69d4c2df6b56",
                "trust_value": "-0.7310249535496665"
            },
            {
                "date_time": "2022-12-13 16:11:34:860046",
                "metric_str": "content_trust.likelihood",
                "other_agent": "A",
                "resource_id": "dfb5dc07-bec3-4888-9fc5-69d4c2df6b56",
                "trust_value": "-0.5904503797428065"
            },
            {
                "date_time": "2022-12-13 16:11:34:884292",
                "metric_str": "content_trust.incentive",
                "other_agent": "A",
                "resource_id": "dfb5dc07-bec3-4888-9fc5-69d4c2df6b56",
                "trust_value": "0.578073510711484"
            },
            {
                "date_time": "2022-12-13 16:11:35:359661",
                "metric_str": "content_trust.bias",
                "other_agent": "J",
                "resource_id": "11306aa6-78c0-425f-8754-24091a98e72e",
                "trust_value": "0.5821562317234146"
            },
            {
                "date_time": "2022-12-13 16:11:35:362192",
                "metric_str": "content_trust.specificity",
                "other_agent": "J",
                "resource_id": "11306aa6-78c0-425f-8754-24091a98e72e",
                "trust_value": "-0.14983876654522543"
            },
            {
                "date_time": "2022-12-13 16:11:35:401725",
                "metric_str": "content_trust.likelihood",
                "other_agent": "J",
                "resource_id": "11306aa6-78c0-425f-8754-24091a98e72e",
                "trust_value": "-0.010854370000430213"
            },
            {
                "date_time": "2022-12-13 16:11:35:446841",
                "metric_str": "content_trust.incentive",
                "other_agent": "J",
                "resource_id": "11306aa6-78c0-425f-8754-24091a98e72e",
                "trust_value": "0.26279412086691467"
            },
            {
                "date_time": "2022-12-13 16:11:35:483711",
                "metric_str": "content_trust.deception",
                "other_agent": "J",
                "resource_id": "11306aa6-78c0-425f-8754-24091a98e72e",
                "trust_value": "-0.24466250049659277"
            },
            {
                "date_time": "2022-12-13 16:11:35:514422",
                "metric_str": "content_trust.age",
                "other_agent": "J",
                "resource_id": "11306aa6-78c0-425f-8754-24091a98e72e",
                "trust_value": "1.0"
            },
            {
                "date_time": "2022-12-13 16:11:35:562327",
                "metric_str": "content_trust.authority",
                "other_agent": "J",
                "resource_id": "11306aa6-78c0-425f-8754-24091a98e72e",
                "trust_value": "1.0"
            },
            {
                "date_time": "2022-12-13 16:11:35:620329",
                "metric_str": "content_trust.topic",
                "other_agent": "J",
                "resource_id": "11306aa6-78c0-425f-8754-24091a98e72e",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:11:35:647756",
                "metric_str": "content_trust.provenance",
                "other_agent": "J",
                "resource_id": "11306aa6-78c0-425f-8754-24091a98e72e",
                "trust_value": "1.0"
            },
            {
                "date_time": "2022-12-13 16:11:35:743279",
                "metric_str": "content_trust.direct_experience",
                "other_agent": "J",
                "resource_id": "11306aa6-78c0-425f-8754-24091a98e72e",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:11:35:919049",
                "metric_str": "content_trust.recommendation",
                "other_agent": "J",
                "resource_id": "11306aa6-78c0-425f-8754-24091a98e72e",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:11:36:067248",
                "metric_str": "content_trust.related_resources",
                "other_agent": "J",
                "resource_id": "11306aa6-78c0-425f-8754-24091a98e72e",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:11:36:106696",
                "metric_str": "content_trust.user_expertise",
                "other_agent": "J",
                "resource_id": "11306aa6-78c0-425f-8754-24091a98e72e",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:11:36:181547",
                "metric_str": "content_trust.popularity",
                "other_agent": "J",
                "resource_id": "11306aa6-78c0-425f-8754-24091a98e72e",
                "trust_value": "0.6666666666666665"
            },
            {
                "date_time": "2022-12-13 16:11:40:099714",
                "metric_str": "content_trust.bias",
                "other_agent": "H",
                "resource_id": "7727b51f-d122-42d3-92f0-34b9f5e2aec2",
                "trust_value": "0.42580575805538423"
            },
            {
                "date_time": "2022-12-13 16:11:40:103717",
                "metric_str": "content_trust.specificity",
                "other_agent": "H",
                "resource_id": "7727b51f-d122-42d3-92f0-34b9f5e2aec2",
                "trust_value": "0.4085514488597457"
            },
            {
                "date_time": "2022-12-13 16:11:40:130497",
                "metric_str": "content_trust.likelihood",
                "other_agent": "H",
                "resource_id": "7727b51f-d122-42d3-92f0-34b9f5e2aec2",
                "trust_value": "0.8606077045813281"
            },
            {
                "date_time": "2022-12-13 16:11:40:174413",
                "metric_str": "content_trust.incentive",
                "other_agent": "H",
                "resource_id": "7727b51f-d122-42d3-92f0-34b9f5e2aec2",
                "trust_value": "0.8457159103903704"
            },
            {
                "date_time": "2022-12-13 16:11:40:205252",
                "metric_str": "content_trust.deception",
                "other_agent": "H",
                "resource_id": "7727b51f-d122-42d3-92f0-34b9f5e2aec2",
                "trust_value": "0.6283755708503453"
            },
            {
                "date_time": "2022-12-13 16:11:40:244171",
                "metric_str": "content_trust.age",
                "other_agent": "H",
                "resource_id": "7727b51f-d122-42d3-92f0-34b9f5e2aec2",
                "trust_value": "1.0"
            },
            {
                "date_time": "2022-12-13 16:11:40:273502",
                "metric_str": "content_trust.authority",
                "other_agent": "H",
                "resource_id": "7727b51f-d122-42d3-92f0-34b9f5e2aec2",
                "trust_value": "1.0"
            },
            {
                "date_time": "2022-12-13 16:11:40:383388",
                "metric_str": "content_trust.topic",
                "other_agent": "H",
                "resource_id": "7727b51f-d122-42d3-92f0-34b9f5e2aec2",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:11:40:419155",
                "metric_str": "content_trust.provenance",
                "other_agent": "H",
                "resource_id": "7727b51f-d122-42d3-92f0-34b9f5e2aec2",
                "trust_value": "0.0"
            },
            {
                "date_time": "2022-12-13 16:11:40:475566",
                "metric_str": "content_trust.direct_experience",
                "other_agent": "H",
                "resource_id": "7727b51f-d122-42d3-92f0-34b9f5e2aec2",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:11:40:675595",
                "metric_str": "content_trust.recommendation",
                "other_agent": "H",
                "resource_id": "7727b51f-d122-42d3-92f0-34b9f5e2aec2",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:11:40:761866",
                "metric_str": "content_trust.related_resources",
                "other_agent": "H",
                "resource_id": "7727b51f-d122-42d3-92f0-34b9f5e2aec2",
                "trust_value": "-1.0"
            },
            {
                "date_time": "2022-12-13 16:11:40:801884",
                "metric_str": "content_trust.user_expertise",
                "other_agent": "H",
                "resource_id": "7727b51f-d122-42d3-92f0-34b9f5e2aec2",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:11:40:879124",
                "metric_str": "content_trust.popularity",
                "other_agent": "H",
                "resource_id": "7727b51f-d122-42d3-92f0-34b9f5e2aec2",
                "trust_value": "0.33333333333333326"
            },
            {
                "date_time": "2022-12-13 16:11:49:273790",
                "metric_str": "content_trust.bias",
                "other_agent": "I",
                "resource_id": "9b64a3c9-97d8-4c5e-8190-f622306eafa7",
                "trust_value": "0.40293054728289324"
            },
            {
                "date_time": "2022-12-13 16:11:49:277315",
                "metric_str": "content_trust.specificity",
                "other_agent": "I",
                "resource_id": "9b64a3c9-97d8-4c5e-8190-f622306eafa7",
                "trust_value": "-0.1025863964689524"
            },
            {
                "date_time": "2022-12-13 16:11:49:333386",
                "metric_str": "content_trust.likelihood",
                "other_agent": "I",
                "resource_id": "9b64a3c9-97d8-4c5e-8190-f622306eafa7",
                "trust_value": "-0.6179074435546856"
            },
            {
                "date_time": "2022-12-13 16:11:49:376737",
                "metric_str": "content_trust.incentive",
                "other_agent": "I",
                "resource_id": "9b64a3c9-97d8-4c5e-8190-f622306eafa7",
                "trust_value": "-0.9290832083866076"
            },
            {
                "date_time": "2022-12-13 16:11:49:419610",
                "metric_str": "content_trust.deception",
                "other_agent": "I",
                "resource_id": "9b64a3c9-97d8-4c5e-8190-f622306eafa7",
                "trust_value": "0.1529650776856455"
            },
            {
                "date_time": "2022-12-13 16:11:49:482182",
                "metric_str": "content_trust.age",
                "other_agent": "I",
                "resource_id": "9b64a3c9-97d8-4c5e-8190-f622306eafa7",
                "trust_value": "1.0"
            },
            {
                "date_time": "2022-12-13 16:11:49:521503",
                "metric_str": "content_trust.authority",
                "other_agent": "I",
                "resource_id": "9b64a3c9-97d8-4c5e-8190-f622306eafa7",
                "trust_value": "1.0"
            },
            {
                "date_time": "2022-12-13 16:11:49:664988",
                "metric_str": "content_trust.topic",
                "other_agent": "I",
                "resource_id": "9b64a3c9-97d8-4c5e-8190-f622306eafa7",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:11:49:695295",
                "metric_str": "content_trust.provenance",
                "other_agent": "I",
                "resource_id": "9b64a3c9-97d8-4c5e-8190-f622306eafa7",
                "trust_value": "0.0"
            },
            {
                "date_time": "2022-12-13 16:11:49:751567",
                "metric_str": "content_trust.direct_experience",
                "other_agent": "I",
                "resource_id": "9b64a3c9-97d8-4c5e-8190-f622306eafa7",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:11:50:018014",
                "metric_str": "content_trust.recommendation",
                "other_agent": "I",
                "resource_id": "9b64a3c9-97d8-4c5e-8190-f622306eafa7",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:11:50:188594",
                "metric_str": "content_trust.related_resources",
                "other_agent": "I",
                "resource_id": "9b64a3c9-97d8-4c5e-8190-f622306eafa7",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:11:50:250115",
                "metric_str": "content_trust.user_expertise",
                "other_agent": "I",
                "resource_id": "9b64a3c9-97d8-4c5e-8190-f622306eafa7",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:11:50:422453",
                "metric_str": "content_trust.popularity",
                "other_agent": "I",
                "resource_id": "9b64a3c9-97d8-4c5e-8190-f622306eafa7",
                "trust_value": "0.6666666666666665"
            }
        ],
        "G": [
            {
                "date_time": "2022-12-13 16:09:44:879743",
                "metric_str": "content_trust.bias",
                "other_agent": "I",
                "resource_id": "e4fb53da-ba46-420e-b5ef-1189ec550fa4",
                "trust_value": "0.11287437409979284"
            },
            {
                "date_time": "2022-12-13 16:09:44:885322",
                "metric_str": "content_trust.specificity",
                "other_agent": "I",
                "resource_id": "e4fb53da-ba46-420e-b5ef-1189ec550fa4",
                "trust_value": "0.3103948586267793"
            },
            {
                "date_time": "2022-12-13 16:09:44:905992",
                "metric_str": "content_trust.likelihood",
                "other_agent": "I",
                "resource_id": "e4fb53da-ba46-420e-b5ef-1189ec550fa4",
                "trust_value": "0.4167533039518947"
            },
            {
                "date_time": "2022-12-13 16:09:44:935775",
                "metric_str": "content_trust.incentive",
                "other_agent": "I",
                "resource_id": "e4fb53da-ba46-420e-b5ef-1189ec550fa4",
                "trust_value": "-0.34902457181289237"
            },
            {
                "date_time": "2022-12-13 16:09:44:963539",
                "metric_str": "content_trust.deception",
                "other_agent": "I",
                "resource_id": "e4fb53da-ba46-420e-b5ef-1189ec550fa4",
                "trust_value": "0.7555800928606258"
            },
            {
                "date_time": "2022-12-13 16:09:45:011601",
                "metric_str": "content_trust.age",
                "other_agent": "I",
                "resource_id": "e4fb53da-ba46-420e-b5ef-1189ec550fa4",
                "trust_value": "1.0"
            },
            {
                "date_time": "2022-12-13 16:09:45:078603",
                "metric_str": "content_trust.authority",
                "other_agent": "I",
                "resource_id": "e4fb53da-ba46-420e-b5ef-1189ec550fa4",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:09:45:139590",
                "metric_str": "content_trust.topic",
                "other_agent": "I",
                "resource_id": "e4fb53da-ba46-420e-b5ef-1189ec550fa4",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:09:45:169827",
                "metric_str": "content_trust.provenance",
                "other_agent": "I",
                "resource_id": "e4fb53da-ba46-420e-b5ef-1189ec550fa4",
                "trust_value": "1.0"
            },
            {
                "date_time": "2022-12-13 16:09:45:206140",
                "metric_str": "content_trust.direct_experience",
                "other_agent": "I",
                "resource_id": "e4fb53da-ba46-420e-b5ef-1189ec550fa4",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:09:45:518057",
                "metric_str": "content_trust.recommendation",
                "other_agent": "I",
                "resource_id": "e4fb53da-ba46-420e-b5ef-1189ec550fa4",
                "trust_value": "0.4218123796764314"
            },
            {
                "date_time": "2022-12-13 16:09:45:657534",
                "metric_str": "content_trust.related_resources",
                "other_agent": "I",
                "resource_id": "e4fb53da-ba46-420e-b5ef-1189ec550fa4",
                "trust_value": "-0.7056884854014094"
            },
            {
                "date_time": "2022-12-13 16:09:45:688790",
                "metric_str": "content_trust.user_expertise",
                "other_agent": "I",
                "resource_id": "e4fb53da-ba46-420e-b5ef-1189ec550fa4",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:09:46:162703",
                "metric_str": "content_trust.popularity",
                "other_agent": "I",
                "resource_id": "e4fb53da-ba46-420e-b5ef-1189ec550fa4",
                "trust_value": "0.7142857142857144"
            },
            {
                "date_time": "2022-12-13 16:09:50:827570",
                "metric_str": "content_trust.bias",
                "other_agent": "I",
                "resource_id": "be855c09-9a76-4eef-b8a9-5f8a57b9dc4a",
                "trust_value": "-0.6000183904838912"
            },
            {
                "date_time": "2022-12-13 16:09:50:832141",
                "metric_str": "content_trust.specificity",
                "other_agent": "I",
                "resource_id": "be855c09-9a76-4eef-b8a9-5f8a57b9dc4a",
                "trust_value": "-0.37822549823918195"
            },
            {
                "date_time": "2022-12-13 16:09:50:860313",
                "metric_str": "content_trust.likelihood",
                "other_agent": "I",
                "resource_id": "be855c09-9a76-4eef-b8a9-5f8a57b9dc4a",
                "trust_value": "-0.8411922499019651"
            },
            {
                "date_time": "2022-12-13 16:09:50:879999",
                "metric_str": "content_trust.incentive",
                "other_agent": "I",
                "resource_id": "be855c09-9a76-4eef-b8a9-5f8a57b9dc4a",
                "trust_value": "0.7065207859637619"
            },
            {
                "date_time": "2022-12-13 16:09:50:901179",
                "metric_str": "content_trust.deception",
                "other_agent": "I",
                "resource_id": "be855c09-9a76-4eef-b8a9-5f8a57b9dc4a",
                "trust_value": "0.9939980450899999"
            },
            {
                "date_time": "2022-12-13 16:09:50:927324",
                "metric_str": "content_trust.age",
                "other_agent": "I",
                "resource_id": "be855c09-9a76-4eef-b8a9-5f8a57b9dc4a",
                "trust_value": "1.0"
            },
            {
                "date_time": "2022-12-13 16:09:50:982281",
                "metric_str": "content_trust.authority",
                "other_agent": "I",
                "resource_id": "be855c09-9a76-4eef-b8a9-5f8a57b9dc4a",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:09:51:037199",
                "metric_str": "content_trust.topic",
                "other_agent": "I",
                "resource_id": "be855c09-9a76-4eef-b8a9-5f8a57b9dc4a",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:09:51:061430",
                "metric_str": "content_trust.provenance",
                "other_agent": "I",
                "resource_id": "be855c09-9a76-4eef-b8a9-5f8a57b9dc4a",
                "trust_value": "1.0"
            },
            {
                "date_time": "2022-12-13 16:09:51:094834",
                "metric_str": "content_trust.direct_experience",
                "other_agent": "I",
                "resource_id": "be855c09-9a76-4eef-b8a9-5f8a57b9dc4a",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:09:51:984762",
                "metric_str": "content_trust.recommendation",
                "other_agent": "I",
                "resource_id": "be855c09-9a76-4eef-b8a9-5f8a57b9dc4a",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:09:52:066406",
                "metric_str": "content_trust.related_resources",
                "other_agent": "I",
                "resource_id": "be855c09-9a76-4eef-b8a9-5f8a57b9dc4a",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:09:52:102807",
                "metric_str": "content_trust.user_expertise",
                "other_agent": "I",
                "resource_id": "be855c09-9a76-4eef-b8a9-5f8a57b9dc4a",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:09:52:340056",
                "metric_str": "content_trust.popularity",
                "other_agent": "I",
                "resource_id": "be855c09-9a76-4eef-b8a9-5f8a57b9dc4a",
                "trust_value": "0.7142857142857144"
            },
            {
                "date_time": "2022-12-13 16:09:54:557468",
                "metric_str": "content_trust.bias",
                "other_agent": "H",
                "resource_id": "6cb2e9c9-2456-4575-bf01-067bb7ca2c51",
                "trust_value": "0.9294826491695776"
            },
            {
                "date_time": "2022-12-13 16:09:54:560006",
                "metric_str": "content_trust.specificity",
                "other_agent": "H",
                "resource_id": "6cb2e9c9-2456-4575-bf01-067bb7ca2c51",
                "trust_value": "0.10132669172247644"
            },
            {
                "date_time": "2022-12-13 16:09:54:587347",
                "metric_str": "content_trust.likelihood",
                "other_agent": "H",
                "resource_id": "6cb2e9c9-2456-4575-bf01-067bb7ca2c51",
                "trust_value": "0.7633913093151758"
            },
            {
                "date_time": "2022-12-13 16:09:54:612502",
                "metric_str": "content_trust.incentive",
                "other_agent": "H",
                "resource_id": "6cb2e9c9-2456-4575-bf01-067bb7ca2c51",
                "trust_value": "-0.058699188768875254"
            },
            {
                "date_time": "2022-12-13 16:09:59:396042",
                "metric_str": "content_trust.bias",
                "other_agent": "C",
                "resource_id": "dbe97540-0827-4db5-b6b0-511e5217b62c",
                "trust_value": "0.8735440630938134"
            },
            {
                "date_time": "2022-12-13 16:09:59:400607",
                "metric_str": "content_trust.specificity",
                "other_agent": "C",
                "resource_id": "dbe97540-0827-4db5-b6b0-511e5217b62c",
                "trust_value": "0.6818659786733945"
            },
            {
                "date_time": "2022-12-13 16:09:59:445058",
                "metric_str": "content_trust.likelihood",
                "other_agent": "C",
                "resource_id": "dbe97540-0827-4db5-b6b0-511e5217b62c",
                "trust_value": "0.4856939451048059"
            },
            {
                "date_time": "2022-12-13 16:09:59:480925",
                "metric_str": "content_trust.incentive",
                "other_agent": "C",
                "resource_id": "dbe97540-0827-4db5-b6b0-511e5217b62c",
                "trust_value": "-0.6043478781574587"
            },
            {
                "date_time": "2022-12-13 16:10:01:994968",
                "metric_str": "content_trust.bias",
                "other_agent": "I",
                "resource_id": "4e33ea3b-3422-4d9a-965c-000b47e2a5f0",
                "trust_value": "0.22079576170704662"
            },
            {
                "date_time": "2022-12-13 16:10:01:999481",
                "metric_str": "content_trust.specificity",
                "other_agent": "I",
                "resource_id": "4e33ea3b-3422-4d9a-965c-000b47e2a5f0",
                "trust_value": "-0.8485845114172794"
            },
            {
                "date_time": "2022-12-13 16:10:02:033820",
                "metric_str": "content_trust.likelihood",
                "other_agent": "I",
                "resource_id": "4e33ea3b-3422-4d9a-965c-000b47e2a5f0",
                "trust_value": "-0.43484070304203826"
            },
            {
                "date_time": "2022-12-13 16:10:02:064565",
                "metric_str": "content_trust.incentive",
                "other_agent": "I",
                "resource_id": "4e33ea3b-3422-4d9a-965c-000b47e2a5f0",
                "trust_value": "0.497461233004026"
            },
            {
                "date_time": "2022-12-13 16:10:02:085736",
                "metric_str": "content_trust.deception",
                "other_agent": "I",
                "resource_id": "4e33ea3b-3422-4d9a-965c-000b47e2a5f0",
                "trust_value": "0.6673597680944403"
            },
            {
                "date_time": "2022-12-13 16:10:02:111997",
                "metric_str": "content_trust.age",
                "other_agent": "I",
                "resource_id": "4e33ea3b-3422-4d9a-965c-000b47e2a5f0",
                "trust_value": "1.0"
            },
            {
                "date_time": "2022-12-13 16:10:02:139226",
                "metric_str": "content_trust.authority",
                "other_agent": "I",
                "resource_id": "4e33ea3b-3422-4d9a-965c-000b47e2a5f0",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:10:02:195274",
                "metric_str": "content_trust.topic",
                "other_agent": "I",
                "resource_id": "4e33ea3b-3422-4d9a-965c-000b47e2a5f0",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:10:02:232935",
                "metric_str": "content_trust.provenance",
                "other_agent": "I",
                "resource_id": "4e33ea3b-3422-4d9a-965c-000b47e2a5f0",
                "trust_value": "1.0"
            },
            {
                "date_time": "2022-12-13 16:10:02:278342",
                "metric_str": "content_trust.direct_experience",
                "other_agent": "I",
                "resource_id": "4e33ea3b-3422-4d9a-965c-000b47e2a5f0",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:10:02:477342",
                "metric_str": "content_trust.recommendation",
                "other_agent": "I",
                "resource_id": "4e33ea3b-3422-4d9a-965c-000b47e2a5f0",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:10:02:586290",
                "metric_str": "content_trust.related_resources",
                "other_agent": "I",
                "resource_id": "4e33ea3b-3422-4d9a-965c-000b47e2a5f0",
                "trust_value": "0.21608802380586573"
            },
            {
                "date_time": "2022-12-13 16:10:02:624596",
                "metric_str": "content_trust.user_expertise",
                "other_agent": "I",
                "resource_id": "4e33ea3b-3422-4d9a-965c-000b47e2a5f0",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:10:02:831215",
                "metric_str": "content_trust.popularity",
                "other_agent": "I",
                "resource_id": "4e33ea3b-3422-4d9a-965c-000b47e2a5f0",
                "trust_value": "0.7142857142857144"
            },
            {
                "date_time": "2022-12-13 16:10:33:339906",
                "metric_str": "content_trust.bias",
                "other_agent": "I",
                "resource_id": "be4ae04f-68cc-42a9-a24d-2712fa18d7eb",
                "trust_value": "-0.5054251721177063"
            },
            {
                "date_time": "2022-12-13 16:10:33:342923",
                "metric_str": "content_trust.specificity",
                "other_agent": "I",
                "resource_id": "be4ae04f-68cc-42a9-a24d-2712fa18d7eb",
                "trust_value": "-0.18087172191438583"
            },
            {
                "date_time": "2022-12-13 16:10:33:387807",
                "metric_str": "content_trust.likelihood",
                "other_agent": "I",
                "resource_id": "be4ae04f-68cc-42a9-a24d-2712fa18d7eb",
                "trust_value": "0.16098931884236878"
            },
            {
                "date_time": "2022-12-13 16:10:33:433719",
                "metric_str": "content_trust.incentive",
                "other_agent": "I",
                "resource_id": "be4ae04f-68cc-42a9-a24d-2712fa18d7eb",
                "trust_value": "-0.40210859426866974"
            },
            {
                "date_time": "2022-12-13 16:10:33:498842",
                "metric_str": "content_trust.deception",
                "other_agent": "I",
                "resource_id": "be4ae04f-68cc-42a9-a24d-2712fa18d7eb",
                "trust_value": "0.8125447254253331"
            },
            {
                "date_time": "2022-12-13 16:10:33:529162",
                "metric_str": "content_trust.age",
                "other_agent": "I",
                "resource_id": "be4ae04f-68cc-42a9-a24d-2712fa18d7eb",
                "trust_value": "1.0"
            },
            {
                "date_time": "2022-12-13 16:10:33:562137",
                "metric_str": "content_trust.authority",
                "other_agent": "I",
                "resource_id": "be4ae04f-68cc-42a9-a24d-2712fa18d7eb",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:10:33:631748",
                "metric_str": "content_trust.topic",
                "other_agent": "I",
                "resource_id": "be4ae04f-68cc-42a9-a24d-2712fa18d7eb",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:10:33:659473",
                "metric_str": "content_trust.provenance",
                "other_agent": "I",
                "resource_id": "be4ae04f-68cc-42a9-a24d-2712fa18d7eb",
                "trust_value": "1.0"
            },
            {
                "date_time": "2022-12-13 16:10:33:709492",
                "metric_str": "content_trust.direct_experience",
                "other_agent": "I",
                "resource_id": "be4ae04f-68cc-42a9-a24d-2712fa18d7eb",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:10:33:959852",
                "metric_str": "content_trust.recommendation",
                "other_agent": "I",
                "resource_id": "be4ae04f-68cc-42a9-a24d-2712fa18d7eb",
                "trust_value": "0.4049930862085646"
            },
            {
                "date_time": "2022-12-13 16:10:34:020349",
                "metric_str": "content_trust.related_resources",
                "other_agent": "I",
                "resource_id": "be4ae04f-68cc-42a9-a24d-2712fa18d7eb",
                "trust_value": "0.8665614489029956"
            },
            {
                "date_time": "2022-12-13 16:10:34:064868",
                "metric_str": "content_trust.user_expertise",
                "other_agent": "I",
                "resource_id": "be4ae04f-68cc-42a9-a24d-2712fa18d7eb",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:10:34:283319",
                "metric_str": "content_trust.popularity",
                "other_agent": "I",
                "resource_id": "be4ae04f-68cc-42a9-a24d-2712fa18d7eb",
                "trust_value": "0.7142857142857144"
            },
            {
                "date_time": "2022-12-13 16:10:44:754080",
                "metric_str": "content_trust.bias",
                "other_agent": "A",
                "resource_id": "f88781b4-f659-400c-b24d-9b2b1d472946",
                "trust_value": "-0.03125243529620425"
            },
            {
                "date_time": "2022-12-13 16:10:44:756080",
                "metric_str": "content_trust.specificity",
                "other_agent": "A",
                "resource_id": "f88781b4-f659-400c-b24d-9b2b1d472946",
                "trust_value": "0.3805139397566648"
            },
            {
                "date_time": "2022-12-13 16:10:44:782468",
                "metric_str": "content_trust.likelihood",
                "other_agent": "A",
                "resource_id": "f88781b4-f659-400c-b24d-9b2b1d472946",
                "trust_value": "-0.8013505339319651"
            },
            {
                "date_time": "2022-12-13 16:10:44:811185",
                "metric_str": "content_trust.incentive",
                "other_agent": "A",
                "resource_id": "f88781b4-f659-400c-b24d-9b2b1d472946",
                "trust_value": "-0.466116129284184"
            },
            {
                "date_time": "2022-12-13 16:10:59:468143",
                "metric_str": "content_trust.bias",
                "other_agent": "C",
                "resource_id": "2a788cb3-4a5a-4d28-88aa-f5c5b4d14569",
                "trust_value": "0.10401302649416677"
            },
            {
                "date_time": "2022-12-13 16:10:59:472161",
                "metric_str": "content_trust.specificity",
                "other_agent": "C",
                "resource_id": "2a788cb3-4a5a-4d28-88aa-f5c5b4d14569",
                "trust_value": "0.38587628950734487"
            },
            {
                "date_time": "2022-12-13 16:10:59:544752",
                "metric_str": "content_trust.likelihood",
                "other_agent": "C",
                "resource_id": "2a788cb3-4a5a-4d28-88aa-f5c5b4d14569",
                "trust_value": "0.08563382104159434"
            },
            {
                "date_time": "2022-12-13 16:10:59:635137",
                "metric_str": "content_trust.incentive",
                "other_agent": "C",
                "resource_id": "2a788cb3-4a5a-4d28-88aa-f5c5b4d14569",
                "trust_value": "0.6433102863597417"
            },
            {
                "date_time": "2022-12-13 16:11:14:816932",
                "metric_str": "content_trust.bias",
                "other_agent": "F",
                "resource_id": "3f709ed4-2ba9-41b7-baa7-8604e830ed40",
                "trust_value": "0.6840088017090027"
            },
            {
                "date_time": "2022-12-13 16:11:14:820901",
                "metric_str": "content_trust.specificity",
                "other_agent": "F",
                "resource_id": "3f709ed4-2ba9-41b7-baa7-8604e830ed40",
                "trust_value": "-0.8224845281479061"
            },
            {
                "date_time": "2022-12-13 16:11:14:854137",
                "metric_str": "content_trust.likelihood",
                "other_agent": "F",
                "resource_id": "3f709ed4-2ba9-41b7-baa7-8604e830ed40",
                "trust_value": "-0.5058463556661645"
            },
            {
                "date_time": "2022-12-13 16:11:14:923090",
                "metric_str": "content_trust.incentive",
                "other_agent": "F",
                "resource_id": "3f709ed4-2ba9-41b7-baa7-8604e830ed40",
                "trust_value": "0.8082570586180249"
            },
            {
                "date_time": "2022-12-13 16:11:15:713336",
                "metric_str": "content_trust.bias",
                "other_agent": "C",
                "resource_id": "a95e5c03-431c-450c-b51e-fe2b181cefcc",
                "trust_value": "-0.9514208623762765"
            },
            {
                "date_time": "2022-12-13 16:11:15:731170",
                "metric_str": "content_trust.specificity",
                "other_agent": "C",
                "resource_id": "a95e5c03-431c-450c-b51e-fe2b181cefcc",
                "trust_value": "0.42243975913256104"
            },
            {
                "date_time": "2022-12-13 16:11:15:796230",
                "metric_str": "content_trust.likelihood",
                "other_agent": "C",
                "resource_id": "a95e5c03-431c-450c-b51e-fe2b181cefcc",
                "trust_value": "-0.705588791678337"
            },
            {
                "date_time": "2022-12-13 16:11:15:828739",
                "metric_str": "content_trust.incentive",
                "other_agent": "C",
                "resource_id": "a95e5c03-431c-450c-b51e-fe2b181cefcc",
                "trust_value": "0.46300541582770305"
            },
            {
                "date_time": "2022-12-13 16:11:17:279272",
                "metric_str": "content_trust.bias",
                "other_agent": "D",
                "resource_id": "d8ecefa4-6f7e-4195-879d-c6bcefcbc295",
                "trust_value": "-0.7905416337271047"
            },
            {
                "date_time": "2022-12-13 16:11:17:282288",
                "metric_str": "content_trust.specificity",
                "other_agent": "D",
                "resource_id": "d8ecefa4-6f7e-4195-879d-c6bcefcbc295",
                "trust_value": "-0.11991823864190021"
            },
            {
                "date_time": "2022-12-13 16:11:17:345860",
                "metric_str": "content_trust.likelihood",
                "other_agent": "D",
                "resource_id": "d8ecefa4-6f7e-4195-879d-c6bcefcbc295",
                "trust_value": "-0.27467644574989647"
            },
            {
                "date_time": "2022-12-13 16:11:17:385413",
                "metric_str": "content_trust.incentive",
                "other_agent": "D",
                "resource_id": "d8ecefa4-6f7e-4195-879d-c6bcefcbc295",
                "trust_value": "0.23189919341719012"
            },
            {
                "date_time": "2022-12-13 16:11:25:388341",
                "metric_str": "content_trust.bias",
                "other_agent": "E",
                "resource_id": "c29c19d8-3de7-4ad9-8260-fcf3abd2cd4f",
                "trust_value": "-0.08702455223283079"
            },
            {
                "date_time": "2022-12-13 16:11:25:391365",
                "metric_str": "content_trust.specificity",
                "other_agent": "E",
                "resource_id": "c29c19d8-3de7-4ad9-8260-fcf3abd2cd4f",
                "trust_value": "0.11207895893397013"
            },
            {
                "date_time": "2022-12-13 16:11:25:439874",
                "metric_str": "content_trust.likelihood",
                "other_agent": "E",
                "resource_id": "c29c19d8-3de7-4ad9-8260-fcf3abd2cd4f",
                "trust_value": "-0.21453372832207296"
            },
            {
                "date_time": "2022-12-13 16:11:25:481305",
                "metric_str": "content_trust.incentive",
                "other_agent": "E",
                "resource_id": "c29c19d8-3de7-4ad9-8260-fcf3abd2cd4f",
                "trust_value": "-0.7819999480270718"
            },
            {
                "date_time": "2022-12-13 16:11:25:521208",
                "metric_str": "content_trust.deception",
                "other_agent": "E",
                "resource_id": "c29c19d8-3de7-4ad9-8260-fcf3abd2cd4f",
                "trust_value": "0.024508909435303483"
            },
            {
                "date_time": "2022-12-13 16:11:25:555452",
                "metric_str": "content_trust.age",
                "other_agent": "E",
                "resource_id": "c29c19d8-3de7-4ad9-8260-fcf3abd2cd4f",
                "trust_value": "1.0"
            },
            {
                "date_time": "2022-12-13 16:11:25:607019",
                "metric_str": "content_trust.authority",
                "other_agent": "E",
                "resource_id": "c29c19d8-3de7-4ad9-8260-fcf3abd2cd4f",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:11:25:722510",
                "metric_str": "content_trust.topic",
                "other_agent": "E",
                "resource_id": "c29c19d8-3de7-4ad9-8260-fcf3abd2cd4f",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:11:25:752810",
                "metric_str": "content_trust.provenance",
                "other_agent": "E",
                "resource_id": "c29c19d8-3de7-4ad9-8260-fcf3abd2cd4f",
                "trust_value": "1.0"
            },
            {
                "date_time": "2022-12-13 16:11:25:798723",
                "metric_str": "content_trust.direct_experience",
                "other_agent": "E",
                "resource_id": "c29c19d8-3de7-4ad9-8260-fcf3abd2cd4f",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:11:26:064291",
                "metric_str": "content_trust.recommendation",
                "other_agent": "E",
                "resource_id": "c29c19d8-3de7-4ad9-8260-fcf3abd2cd4f",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:11:26:117368",
                "metric_str": "content_trust.related_resources",
                "other_agent": "E",
                "resource_id": "c29c19d8-3de7-4ad9-8260-fcf3abd2cd4f",
                "trust_value": "0.21512479709231802"
            },
            {
                "date_time": "2022-12-13 16:11:26:165165",
                "metric_str": "content_trust.user_expertise",
                "other_agent": "E",
                "resource_id": "c29c19d8-3de7-4ad9-8260-fcf3abd2cd4f",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:11:26:454150",
                "metric_str": "content_trust.popularity",
                "other_agent": "E",
                "resource_id": "c29c19d8-3de7-4ad9-8260-fcf3abd2cd4f",
                "trust_value": "0.8571428571428572"
            },
            {
                "date_time": "2022-12-13 16:11:38:401828",
                "metric_str": "content_trust.bias",
                "other_agent": "F",
                "resource_id": "1bfbdd59-7f66-4ea5-90d5-75bd586bec6c",
                "trust_value": "0.7893025881355982"
            },
            {
                "date_time": "2022-12-13 16:11:38:405832",
                "metric_str": "content_trust.specificity",
                "other_agent": "F",
                "resource_id": "1bfbdd59-7f66-4ea5-90d5-75bd586bec6c",
                "trust_value": "0.30793949355685424"
            },
            {
                "date_time": "2022-12-13 16:11:38:439681",
                "metric_str": "content_trust.likelihood",
                "other_agent": "F",
                "resource_id": "1bfbdd59-7f66-4ea5-90d5-75bd586bec6c",
                "trust_value": "-0.5247776975860645"
            },
            {
                "date_time": "2022-12-13 16:11:38:466946",
                "metric_str": "content_trust.incentive",
                "other_agent": "F",
                "resource_id": "1bfbdd59-7f66-4ea5-90d5-75bd586bec6c",
                "trust_value": "0.11623635475156502"
            },
            {
                "date_time": "2022-12-13 16:11:53:245774",
                "metric_str": "content_trust.bias",
                "other_agent": "B",
                "resource_id": "299ecd20-2fa0-4761-9d49-6bb82a4919c4",
                "trust_value": "-0.09641535308539884"
            },
            {
                "date_time": "2022-12-13 16:11:53:249334",
                "metric_str": "content_trust.specificity",
                "other_agent": "B",
                "resource_id": "299ecd20-2fa0-4761-9d49-6bb82a4919c4",
                "trust_value": "0.7402373452550457"
            },
            {
                "date_time": "2022-12-13 16:11:53:291390",
                "metric_str": "content_trust.likelihood",
                "other_agent": "B",
                "resource_id": "299ecd20-2fa0-4761-9d49-6bb82a4919c4",
                "trust_value": "0.922379346973335"
            },
            {
                "date_time": "2022-12-13 16:11:53:357619",
                "metric_str": "content_trust.incentive",
                "other_agent": "B",
                "resource_id": "299ecd20-2fa0-4761-9d49-6bb82a4919c4",
                "trust_value": "0.7207372418457669"
            },
            {
                "date_time": "2022-12-13 16:11:57:880310",
                "metric_str": "content_trust.bias",
                "other_agent": "D",
                "resource_id": "36479877-46b7-4811-bdf7-640d2cfc3e71",
                "trust_value": "-0.5875450704709408"
            },
            {
                "date_time": "2022-12-13 16:11:57:885316",
                "metric_str": "content_trust.specificity",
                "other_agent": "D",
                "resource_id": "36479877-46b7-4811-bdf7-640d2cfc3e71",
                "trust_value": "-0.541278491920979"
            },
            {
                "date_time": "2022-12-13 16:11:57:935999",
                "metric_str": "content_trust.likelihood",
                "other_agent": "D",
                "resource_id": "36479877-46b7-4811-bdf7-640d2cfc3e71",
                "trust_value": "-0.9143538165760894"
            },
            {
                "date_time": "2022-12-13 16:11:57:983269",
                "metric_str": "content_trust.incentive",
                "other_agent": "D",
                "resource_id": "36479877-46b7-4811-bdf7-640d2cfc3e71",
                "trust_value": "0.6135282933129238"
            }
        ],
        "H": [
            {
                "date_time": "2022-12-13 16:09:46:542499",
                "metric_str": "content_trust.bias",
                "other_agent": "F",
                "resource_id": "f57b765d-1671-452a-b170-310d83f261c4",
                "trust_value": "0.2725406037516931"
            },
            {
                "date_time": "2022-12-13 16:09:46:546043",
                "metric_str": "content_trust.specificity",
                "other_agent": "F",
                "resource_id": "f57b765d-1671-452a-b170-310d83f261c4",
                "trust_value": "0.8542115215590995"
            },
            {
                "date_time": "2022-12-13 16:09:46:602040",
                "metric_str": "content_trust.likelihood",
                "other_agent": "F",
                "resource_id": "f57b765d-1671-452a-b170-310d83f261c4",
                "trust_value": "-0.050621624503592866"
            },
            {
                "date_time": "2022-12-13 16:09:46:641427",
                "metric_str": "content_trust.incentive",
                "other_agent": "F",
                "resource_id": "f57b765d-1671-452a-b170-310d83f261c4",
                "trust_value": "-0.9194878559089981"
            },
            {
                "date_time": "2022-12-13 16:09:46:679988",
                "metric_str": "content_trust.deception",
                "other_agent": "F",
                "resource_id": "f57b765d-1671-452a-b170-310d83f261c4",
                "trust_value": "0.5460717009720943"
            },
            {
                "date_time": "2022-12-13 16:09:46:781908",
                "metric_str": "content_trust.age",
                "other_agent": "F",
                "resource_id": "f57b765d-1671-452a-b170-310d83f261c4",
                "trust_value": "1.0"
            },
            {
                "date_time": "2022-12-13 16:09:46:852510",
                "metric_str": "content_trust.authority",
                "other_agent": "F",
                "resource_id": "f57b765d-1671-452a-b170-310d83f261c4",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:09:46:943325",
                "metric_str": "content_trust.topic",
                "other_agent": "F",
                "resource_id": "f57b765d-1671-452a-b170-310d83f261c4",
                "trust_value": "-0.19397813087980764"
            },
            {
                "date_time": "2022-12-13 16:09:46:982202",
                "metric_str": "content_trust.provenance",
                "other_agent": "F",
                "resource_id": "f57b765d-1671-452a-b170-310d83f261c4",
                "trust_value": "0.6000000000000001"
            },
            {
                "date_time": "2022-12-13 16:09:47:032272",
                "metric_str": "content_trust.direct_experience",
                "other_agent": "F",
                "resource_id": "f57b765d-1671-452a-b170-310d83f261c4",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:09:47:146443",
                "metric_str": "content_trust.recommendation",
                "other_agent": "F",
                "resource_id": "f57b765d-1671-452a-b170-310d83f261c4",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:09:47:253002",
                "metric_str": "content_trust.related_resources",
                "other_agent": "F",
                "resource_id": "f57b765d-1671-452a-b170-310d83f261c4",
                "trust_value": "-0.6248683010133228"
            },
            {
                "date_time": "2022-12-13 16:09:47:304020",
                "metric_str": "content_trust.user_expertise",
                "other_agent": "F",
                "resource_id": "f57b765d-1671-452a-b170-310d83f261c4",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:09:47:375519",
                "metric_str": "content_trust.popularity",
                "other_agent": "F",
                "resource_id": "f57b765d-1671-452a-b170-310d83f261c4",
                "trust_value": "1.0"
            },
            {
                "date_time": "2022-12-13 16:09:52:687939",
                "metric_str": "content_trust.bias",
                "other_agent": "F",
                "resource_id": "388560bf-eef0-42af-bbde-4933c639bec6",
                "trust_value": "0.7034283024476091"
            },
            {
                "date_time": "2022-12-13 16:09:52:698044",
                "metric_str": "content_trust.specificity",
                "other_agent": "F",
                "resource_id": "388560bf-eef0-42af-bbde-4933c639bec6",
                "trust_value": "-0.5075584291905799"
            },
            {
                "date_time": "2022-12-13 16:09:52:741849",
                "metric_str": "content_trust.likelihood",
                "other_agent": "F",
                "resource_id": "388560bf-eef0-42af-bbde-4933c639bec6",
                "trust_value": "-0.26100425471498157"
            },
            {
                "date_time": "2022-12-13 16:09:52:777230",
                "metric_str": "content_trust.incentive",
                "other_agent": "F",
                "resource_id": "388560bf-eef0-42af-bbde-4933c639bec6",
                "trust_value": "-0.09840706770586971"
            },
            {
                "date_time": "2022-12-13 16:09:52:820495",
                "metric_str": "content_trust.deception",
                "other_agent": "F",
                "resource_id": "388560bf-eef0-42af-bbde-4933c639bec6",
                "trust_value": "0.005231594161101194"
            },
            {
                "date_time": "2022-12-13 16:09:52:841628",
                "metric_str": "content_trust.age",
                "other_agent": "F",
                "resource_id": "388560bf-eef0-42af-bbde-4933c639bec6",
                "trust_value": "1.0"
            },
            {
                "date_time": "2022-12-13 16:09:52:891589",
                "metric_str": "content_trust.authority",
                "other_agent": "F",
                "resource_id": "388560bf-eef0-42af-bbde-4933c639bec6",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:09:53:025700",
                "metric_str": "content_trust.topic",
                "other_agent": "F",
                "resource_id": "388560bf-eef0-42af-bbde-4933c639bec6",
                "trust_value": "-0.2585597630444392"
            },
            {
                "date_time": "2022-12-13 16:09:53:075648",
                "metric_str": "content_trust.provenance",
                "other_agent": "F",
                "resource_id": "388560bf-eef0-42af-bbde-4933c639bec6",
                "trust_value": "0.33333333333333326"
            },
            {
                "date_time": "2022-12-13 16:09:53:158453",
                "metric_str": "content_trust.direct_experience",
                "other_agent": "F",
                "resource_id": "388560bf-eef0-42af-bbde-4933c639bec6",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:09:53:413281",
                "metric_str": "content_trust.recommendation",
                "other_agent": "F",
                "resource_id": "388560bf-eef0-42af-bbde-4933c639bec6",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:09:53:624647",
                "metric_str": "content_trust.related_resources",
                "other_agent": "F",
                "resource_id": "388560bf-eef0-42af-bbde-4933c639bec6",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:09:53:752917",
                "metric_str": "content_trust.user_expertise",
                "other_agent": "F",
                "resource_id": "388560bf-eef0-42af-bbde-4933c639bec6",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:09:53:823056",
                "metric_str": "content_trust.popularity",
                "other_agent": "F",
                "resource_id": "388560bf-eef0-42af-bbde-4933c639bec6",
                "trust_value": "1.0"
            },
            {
                "date_time": "2022-12-13 16:10:05:932361",
                "metric_str": "content_trust.bias",
                "other_agent": "F",
                "resource_id": "df865ede-54af-4338-84fc-56491ad4e159",
                "trust_value": "-0.9301023204370538"
            },
            {
                "date_time": "2022-12-13 16:10:05:935357",
                "metric_str": "content_trust.specificity",
                "other_agent": "F",
                "resource_id": "df865ede-54af-4338-84fc-56491ad4e159",
                "trust_value": "0.28997099284701866"
            },
            {
                "date_time": "2022-12-13 16:10:05:967103",
                "metric_str": "content_trust.likelihood",
                "other_agent": "F",
                "resource_id": "df865ede-54af-4338-84fc-56491ad4e159",
                "trust_value": "0.8269811933403746"
            },
            {
                "date_time": "2022-12-13 16:10:05:999737",
                "metric_str": "content_trust.incentive",
                "other_agent": "F",
                "resource_id": "df865ede-54af-4338-84fc-56491ad4e159",
                "trust_value": "0.2252482191934455"
            },
            {
                "date_time": "2022-12-13 16:10:06:030484",
                "metric_str": "content_trust.deception",
                "other_agent": "F",
                "resource_id": "df865ede-54af-4338-84fc-56491ad4e159",
                "trust_value": "0.9957760286661461"
            },
            {
                "date_time": "2022-12-13 16:10:06:059655",
                "metric_str": "content_trust.age",
                "other_agent": "F",
                "resource_id": "df865ede-54af-4338-84fc-56491ad4e159",
                "trust_value": "1.0"
            },
            {
                "date_time": "2022-12-13 16:10:06:093039",
                "metric_str": "content_trust.authority",
                "other_agent": "F",
                "resource_id": "df865ede-54af-4338-84fc-56491ad4e159",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:10:06:160377",
                "metric_str": "content_trust.topic",
                "other_agent": "F",
                "resource_id": "df865ede-54af-4338-84fc-56491ad4e159",
                "trust_value": "0.48036785526756237"
            },
            {
                "date_time": "2022-12-13 16:10:06:190186",
                "metric_str": "content_trust.provenance",
                "other_agent": "F",
                "resource_id": "df865ede-54af-4338-84fc-56491ad4e159",
                "trust_value": "0.0"
            },
            {
                "date_time": "2022-12-13 16:10:06:225896",
                "metric_str": "content_trust.direct_experience",
                "other_agent": "F",
                "resource_id": "df865ede-54af-4338-84fc-56491ad4e159",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:10:06:364165",
                "metric_str": "content_trust.recommendation",
                "other_agent": "F",
                "resource_id": "df865ede-54af-4338-84fc-56491ad4e159",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:10:06:518577",
                "metric_str": "content_trust.related_resources",
                "other_agent": "F",
                "resource_id": "df865ede-54af-4338-84fc-56491ad4e159",
                "trust_value": "0.5643971108411387"
            },
            {
                "date_time": "2022-12-13 16:10:06:592204",
                "metric_str": "content_trust.user_expertise",
                "other_agent": "F",
                "resource_id": "df865ede-54af-4338-84fc-56491ad4e159",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:10:06:699249",
                "metric_str": "content_trust.popularity",
                "other_agent": "F",
                "resource_id": "df865ede-54af-4338-84fc-56491ad4e159",
                "trust_value": "1.0"
            },
            {
                "date_time": "2022-12-13 16:10:32:218485",
                "metric_str": "content_trust.bias",
                "other_agent": "C",
                "resource_id": "71ca86a9-fc27-4c9b-9f66-02a51a171256",
                "trust_value": "0.07750899732310157"
            },
            {
                "date_time": "2022-12-13 16:10:32:220508",
                "metric_str": "content_trust.specificity",
                "other_agent": "C",
                "resource_id": "71ca86a9-fc27-4c9b-9f66-02a51a171256",
                "trust_value": "0.013376354346880337"
            },
            {
                "date_time": "2022-12-13 16:10:32:247084",
                "metric_str": "content_trust.likelihood",
                "other_agent": "C",
                "resource_id": "71ca86a9-fc27-4c9b-9f66-02a51a171256",
                "trust_value": "-0.48532804561234144"
            },
            {
                "date_time": "2022-12-13 16:10:32:272355",
                "metric_str": "content_trust.incentive",
                "other_agent": "C",
                "resource_id": "71ca86a9-fc27-4c9b-9f66-02a51a171256",
                "trust_value": "0.37657133936312936"
            },
            {
                "date_time": "2022-12-13 16:10:32:313807",
                "metric_str": "content_trust.deception",
                "other_agent": "C",
                "resource_id": "71ca86a9-fc27-4c9b-9f66-02a51a171256",
                "trust_value": "-0.08378720341827406"
            },
            {
                "date_time": "2022-12-13 16:10:32:380411",
                "metric_str": "content_trust.age",
                "other_agent": "C",
                "resource_id": "71ca86a9-fc27-4c9b-9f66-02a51a171256",
                "trust_value": "1.0"
            },
            {
                "date_time": "2022-12-13 16:10:32:418427",
                "metric_str": "content_trust.authority",
                "other_agent": "C",
                "resource_id": "71ca86a9-fc27-4c9b-9f66-02a51a171256",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:10:32:479471",
                "metric_str": "content_trust.topic",
                "other_agent": "C",
                "resource_id": "71ca86a9-fc27-4c9b-9f66-02a51a171256",
                "trust_value": "0.36836162661439775"
            },
            {
                "date_time": "2022-12-13 16:10:32:532359",
                "metric_str": "content_trust.provenance",
                "other_agent": "C",
                "resource_id": "71ca86a9-fc27-4c9b-9f66-02a51a171256",
                "trust_value": "1.0"
            },
            {
                "date_time": "2022-12-13 16:10:32:577392",
                "metric_str": "content_trust.direct_experience",
                "other_agent": "C",
                "resource_id": "71ca86a9-fc27-4c9b-9f66-02a51a171256",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:10:32:750953",
                "metric_str": "content_trust.recommendation",
                "other_agent": "C",
                "resource_id": "71ca86a9-fc27-4c9b-9f66-02a51a171256",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:10:32:830555",
                "metric_str": "content_trust.related_resources",
                "other_agent": "C",
                "resource_id": "71ca86a9-fc27-4c9b-9f66-02a51a171256",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:10:32:895639",
                "metric_str": "content_trust.user_expertise",
                "other_agent": "C",
                "resource_id": "71ca86a9-fc27-4c9b-9f66-02a51a171256",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:10:32:993498",
                "metric_str": "content_trust.popularity",
                "other_agent": "C",
                "resource_id": "71ca86a9-fc27-4c9b-9f66-02a51a171256",
                "trust_value": "1.0"
            },
            {
                "date_time": "2022-12-13 16:11:03:208481",
                "metric_str": "content_trust.bias",
                "other_agent": "I",
                "resource_id": "d6a977ac-a8f7-456a-b5eb-4b36d2dcdfbb",
                "trust_value": "0.29008892326467706"
            },
            {
                "date_time": "2022-12-13 16:11:03:212013",
                "metric_str": "content_trust.specificity",
                "other_agent": "I",
                "resource_id": "d6a977ac-a8f7-456a-b5eb-4b36d2dcdfbb",
                "trust_value": "-0.42139480704300314"
            },
            {
                "date_time": "2022-12-13 16:11:03:252889",
                "metric_str": "content_trust.likelihood",
                "other_agent": "I",
                "resource_id": "d6a977ac-a8f7-456a-b5eb-4b36d2dcdfbb",
                "trust_value": "-0.10653651202343872"
            },
            {
                "date_time": "2022-12-13 16:11:03:369608",
                "metric_str": "content_trust.incentive",
                "other_agent": "I",
                "resource_id": "d6a977ac-a8f7-456a-b5eb-4b36d2dcdfbb",
                "trust_value": "-0.0501593599648511"
            },
            {
                "date_time": "2022-12-13 16:11:03:410017",
                "metric_str": "content_trust.deception",
                "other_agent": "I",
                "resource_id": "d6a977ac-a8f7-456a-b5eb-4b36d2dcdfbb",
                "trust_value": "-0.13741634717787732"
            },
            {
                "date_time": "2022-12-13 16:11:03:525138",
                "metric_str": "content_trust.age",
                "other_agent": "I",
                "resource_id": "d6a977ac-a8f7-456a-b5eb-4b36d2dcdfbb",
                "trust_value": "1.0"
            },
            {
                "date_time": "2022-12-13 16:11:03:589272",
                "metric_str": "content_trust.authority",
                "other_agent": "I",
                "resource_id": "d6a977ac-a8f7-456a-b5eb-4b36d2dcdfbb",
                "trust_value": "1.0"
            },
            {
                "date_time": "2022-12-13 16:11:03:708381",
                "metric_str": "content_trust.topic",
                "other_agent": "I",
                "resource_id": "d6a977ac-a8f7-456a-b5eb-4b36d2dcdfbb",
                "trust_value": "0.2540036067947622"
            },
            {
                "date_time": "2022-12-13 16:11:03:832551",
                "metric_str": "content_trust.provenance",
                "other_agent": "I",
                "resource_id": "d6a977ac-a8f7-456a-b5eb-4b36d2dcdfbb",
                "trust_value": "1.0"
            },
            {
                "date_time": "2022-12-13 16:11:03:929120",
                "metric_str": "content_trust.direct_experience",
                "other_agent": "I",
                "resource_id": "d6a977ac-a8f7-456a-b5eb-4b36d2dcdfbb",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:11:04:952138",
                "metric_str": "content_trust.recommendation",
                "other_agent": "I",
                "resource_id": "d6a977ac-a8f7-456a-b5eb-4b36d2dcdfbb",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:11:05:261745",
                "metric_str": "content_trust.related_resources",
                "other_agent": "I",
                "resource_id": "d6a977ac-a8f7-456a-b5eb-4b36d2dcdfbb",
                "trust_value": "-0.8844068944299395"
            },
            {
                "date_time": "2022-12-13 16:11:05:423005",
                "metric_str": "content_trust.user_expertise",
                "other_agent": "I",
                "resource_id": "d6a977ac-a8f7-456a-b5eb-4b36d2dcdfbb",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:11:05:663520",
                "metric_str": "content_trust.popularity",
                "other_agent": "I",
                "resource_id": "d6a977ac-a8f7-456a-b5eb-4b36d2dcdfbb",
                "trust_value": "1.0"
            },
            {
                "date_time": "2022-12-13 16:11:16:662261",
                "metric_str": "content_trust.bias",
                "other_agent": "E",
                "resource_id": "00a367b5-4412-41eb-acdc-24fe7e447193",
                "trust_value": "-0.49041871618516986"
            },
            {
                "date_time": "2022-12-13 16:11:16:668805",
                "metric_str": "content_trust.specificity",
                "other_agent": "E",
                "resource_id": "00a367b5-4412-41eb-acdc-24fe7e447193",
                "trust_value": "0.6306723177304563"
            },
            {
                "date_time": "2022-12-13 16:11:16:722136",
                "metric_str": "content_trust.likelihood",
                "other_agent": "E",
                "resource_id": "00a367b5-4412-41eb-acdc-24fe7e447193",
                "trust_value": "0.36286000769377846"
            },
            {
                "date_time": "2022-12-13 16:11:16:754941",
                "metric_str": "content_trust.incentive",
                "other_agent": "E",
                "resource_id": "00a367b5-4412-41eb-acdc-24fe7e447193",
                "trust_value": "-0.12274606206135275"
            },
            {
                "date_time": "2022-12-13 16:11:41:352177",
                "metric_str": "content_trust.bias",
                "other_agent": "J",
                "resource_id": "f6f3e6c6-02ae-43f6-aff8-b9c762e626e7",
                "trust_value": "-0.0659594950231599"
            },
            {
                "date_time": "2022-12-13 16:11:41:356179",
                "metric_str": "content_trust.specificity",
                "other_agent": "J",
                "resource_id": "f6f3e6c6-02ae-43f6-aff8-b9c762e626e7",
                "trust_value": "-0.5026515552244939"
            },
            {
                "date_time": "2022-12-13 16:11:41:379371",
                "metric_str": "content_trust.likelihood",
                "other_agent": "J",
                "resource_id": "f6f3e6c6-02ae-43f6-aff8-b9c762e626e7",
                "trust_value": "-0.6157361808097335"
            },
            {
                "date_time": "2022-12-13 16:11:41:412905",
                "metric_str": "content_trust.incentive",
                "other_agent": "J",
                "resource_id": "f6f3e6c6-02ae-43f6-aff8-b9c762e626e7",
                "trust_value": "0.4630785226715255"
            },
            {
                "date_time": "2022-12-13 16:11:41:461625",
                "metric_str": "content_trust.deception",
                "other_agent": "J",
                "resource_id": "f6f3e6c6-02ae-43f6-aff8-b9c762e626e7",
                "trust_value": "0.2361666469885384"
            },
            {
                "date_time": "2022-12-13 16:11:41:506013",
                "metric_str": "content_trust.age",
                "other_agent": "J",
                "resource_id": "f6f3e6c6-02ae-43f6-aff8-b9c762e626e7",
                "trust_value": "1.0"
            },
            {
                "date_time": "2022-12-13 16:11:41:571839",
                "metric_str": "content_trust.authority",
                "other_agent": "J",
                "resource_id": "f6f3e6c6-02ae-43f6-aff8-b9c762e626e7",
                "trust_value": "1.0"
            },
            {
                "date_time": "2022-12-13 16:11:41:670137",
                "metric_str": "content_trust.topic",
                "other_agent": "J",
                "resource_id": "f6f3e6c6-02ae-43f6-aff8-b9c762e626e7",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:11:41:712032",
                "metric_str": "content_trust.provenance",
                "other_agent": "J",
                "resource_id": "f6f3e6c6-02ae-43f6-aff8-b9c762e626e7",
                "trust_value": "0.5"
            },
            {
                "date_time": "2022-12-13 16:11:41:773072",
                "metric_str": "content_trust.direct_experience",
                "other_agent": "J",
                "resource_id": "f6f3e6c6-02ae-43f6-aff8-b9c762e626e7",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:11:41:931513",
                "metric_str": "content_trust.recommendation",
                "other_agent": "J",
                "resource_id": "f6f3e6c6-02ae-43f6-aff8-b9c762e626e7",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:11:42:099099",
                "metric_str": "content_trust.related_resources",
                "other_agent": "J",
                "resource_id": "f6f3e6c6-02ae-43f6-aff8-b9c762e626e7",
                "trust_value": "0.29999147318379277"
            },
            {
                "date_time": "2022-12-13 16:11:42:148869",
                "metric_str": "content_trust.user_expertise",
                "other_agent": "J",
                "resource_id": "f6f3e6c6-02ae-43f6-aff8-b9c762e626e7",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:11:42:225473",
                "metric_str": "content_trust.popularity",
                "other_agent": "J",
                "resource_id": "f6f3e6c6-02ae-43f6-aff8-b9c762e626e7",
                "trust_value": "1.0"
            },
            {
                "date_time": "2022-12-13 16:11:51:198914",
                "metric_str": "content_trust.bias",
                "other_agent": "E",
                "resource_id": "940a5072-39e6-431e-afce-9e0497d4a6cf",
                "trust_value": "-0.6218079551240312"
            },
            {
                "date_time": "2022-12-13 16:11:51:202459",
                "metric_str": "content_trust.specificity",
                "other_agent": "E",
                "resource_id": "940a5072-39e6-431e-afce-9e0497d4a6cf",
                "trust_value": "0.5225725284759974"
            },
            {
                "date_time": "2022-12-13 16:11:51:234213",
                "metric_str": "content_trust.likelihood",
                "other_agent": "E",
                "resource_id": "940a5072-39e6-431e-afce-9e0497d4a6cf",
                "trust_value": "0.25012063834725673"
            },
            {
                "date_time": "2022-12-13 16:11:51:265429",
                "metric_str": "content_trust.incentive",
                "other_agent": "E",
                "resource_id": "940a5072-39e6-431e-afce-9e0497d4a6cf",
                "trust_value": "0.06502895502185835"
            },
            {
                "date_time": "2022-12-13 16:11:51:299298",
                "metric_str": "content_trust.deception",
                "other_agent": "E",
                "resource_id": "940a5072-39e6-431e-afce-9e0497d4a6cf",
                "trust_value": "-0.12992090439191628"
            },
            {
                "date_time": "2022-12-13 16:11:51:339685",
                "metric_str": "content_trust.age",
                "other_agent": "E",
                "resource_id": "940a5072-39e6-431e-afce-9e0497d4a6cf",
                "trust_value": "1.0"
            },
            {
                "date_time": "2022-12-13 16:11:51:376023",
                "metric_str": "content_trust.authority",
                "other_agent": "E",
                "resource_id": "940a5072-39e6-431e-afce-9e0497d4a6cf",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:11:51:467851",
                "metric_str": "content_trust.topic",
                "other_agent": "E",
                "resource_id": "940a5072-39e6-431e-afce-9e0497d4a6cf",
                "trust_value": "-0.2873760854858425"
            },
            {
                "date_time": "2022-12-13 16:11:51:518403",
                "metric_str": "content_trust.provenance",
                "other_agent": "E",
                "resource_id": "940a5072-39e6-431e-afce-9e0497d4a6cf",
                "trust_value": "1.0"
            },
            {
                "date_time": "2022-12-13 16:11:51:567871",
                "metric_str": "content_trust.direct_experience",
                "other_agent": "E",
                "resource_id": "940a5072-39e6-431e-afce-9e0497d4a6cf",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:11:51:710624",
                "metric_str": "content_trust.recommendation",
                "other_agent": "E",
                "resource_id": "940a5072-39e6-431e-afce-9e0497d4a6cf",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:11:51:814946",
                "metric_str": "content_trust.related_resources",
                "other_agent": "E",
                "resource_id": "940a5072-39e6-431e-afce-9e0497d4a6cf",
                "trust_value": "0.0909649418134669"
            },
            {
                "date_time": "2022-12-13 16:11:51:855745",
                "metric_str": "content_trust.user_expertise",
                "other_agent": "E",
                "resource_id": "940a5072-39e6-431e-afce-9e0497d4a6cf",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:11:51:916878",
                "metric_str": "content_trust.popularity",
                "other_agent": "E",
                "resource_id": "940a5072-39e6-431e-afce-9e0497d4a6cf",
                "trust_value": "1.0"
            }
        ],
        "I": [
            {
                "date_time": "2022-12-13 16:09:37:907466",
                "metric_str": "content_trust.bias",
                "other_agent": "D",
                "resource_id": "c12af18e-135b-4908-92b5-9bbab4d6521e",
                "trust_value": "-0.3336328127355459"
            },
            {
                "date_time": "2022-12-13 16:09:37:912574",
                "metric_str": "content_trust.specificity",
                "other_agent": "D",
                "resource_id": "c12af18e-135b-4908-92b5-9bbab4d6521e",
                "trust_value": "0.8888066116344018"
            },
            {
                "date_time": "2022-12-13 16:09:37:980239",
                "metric_str": "content_trust.likelihood",
                "other_agent": "D",
                "resource_id": "c12af18e-135b-4908-92b5-9bbab4d6521e",
                "trust_value": "-0.7583152359782035"
            },
            {
                "date_time": "2022-12-13 16:09:38:026548",
                "metric_str": "content_trust.incentive",
                "other_agent": "D",
                "resource_id": "c12af18e-135b-4908-92b5-9bbab4d6521e",
                "trust_value": "0.15471770807288987"
            },
            {
                "date_time": "2022-12-13 16:09:43:557466",
                "metric_str": "content_trust.bias",
                "other_agent": "F",
                "resource_id": "3cef966d-0082-4596-9fa4-a33daadf531d",
                "trust_value": "-0.7395863809663161"
            },
            {
                "date_time": "2022-12-13 16:09:43:570847",
                "metric_str": "content_trust.specificity",
                "other_agent": "F",
                "resource_id": "3cef966d-0082-4596-9fa4-a33daadf531d",
                "trust_value": "-0.7227845756186124"
            },
            {
                "date_time": "2022-12-13 16:09:43:601167",
                "metric_str": "content_trust.likelihood",
                "other_agent": "F",
                "resource_id": "3cef966d-0082-4596-9fa4-a33daadf531d",
                "trust_value": "0.13988521859532432"
            },
            {
                "date_time": "2022-12-13 16:09:43:623796",
                "metric_str": "content_trust.incentive",
                "other_agent": "F",
                "resource_id": "3cef966d-0082-4596-9fa4-a33daadf531d",
                "trust_value": "-0.4181405375316798"
            },
            {
                "date_time": "2022-12-13 16:09:43:651581",
                "metric_str": "content_trust.deception",
                "other_agent": "F",
                "resource_id": "3cef966d-0082-4596-9fa4-a33daadf531d",
                "trust_value": "0.9801467397965435"
            },
            {
                "date_time": "2022-12-13 16:09:43:674941",
                "metric_str": "content_trust.age",
                "other_agent": "F",
                "resource_id": "3cef966d-0082-4596-9fa4-a33daadf531d",
                "trust_value": "1.0"
            },
            {
                "date_time": "2022-12-13 16:09:43:711772",
                "metric_str": "content_trust.authority",
                "other_agent": "F",
                "resource_id": "3cef966d-0082-4596-9fa4-a33daadf531d",
                "trust_value": "1.0"
            },
            {
                "date_time": "2022-12-13 16:09:43:734008",
                "metric_str": "content_trust.topic",
                "other_agent": "F",
                "resource_id": "3cef966d-0082-4596-9fa4-a33daadf531d",
                "trust_value": "-0.8241128130751345"
            },
            {
                "date_time": "2022-12-13 16:09:43:761835",
                "metric_str": "content_trust.provenance",
                "other_agent": "F",
                "resource_id": "3cef966d-0082-4596-9fa4-a33daadf531d",
                "trust_value": "1.0"
            },
            {
                "date_time": "2022-12-13 16:09:43:803228",
                "metric_str": "content_trust.direct_experience",
                "other_agent": "F",
                "resource_id": "3cef966d-0082-4596-9fa4-a33daadf531d",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:09:44:310593",
                "metric_str": "content_trust.recommendation",
                "other_agent": "F",
                "resource_id": "3cef966d-0082-4596-9fa4-a33daadf531d",
                "trust_value": "-0.2588919425541166"
            },
            {
                "date_time": "2022-12-13 16:09:44:390836",
                "metric_str": "content_trust.related_resources",
                "other_agent": "F",
                "resource_id": "3cef966d-0082-4596-9fa4-a33daadf531d",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:09:44:440280",
                "metric_str": "content_trust.user_expertise",
                "other_agent": "F",
                "resource_id": "3cef966d-0082-4596-9fa4-a33daadf531d",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:09:44:585686",
                "metric_str": "content_trust.popularity",
                "other_agent": "F",
                "resource_id": "3cef966d-0082-4596-9fa4-a33daadf531d",
                "trust_value": "0.6666666666666665"
            },
            {
                "date_time": "2022-12-13 16:09:49:449800",
                "metric_str": "content_trust.bias",
                "other_agent": "J",
                "resource_id": "e1a70885-d17a-4db4-b284-b461801bff4c",
                "trust_value": "-0.6557194052763584"
            },
            {
                "date_time": "2022-12-13 16:09:49:452822",
                "metric_str": "content_trust.specificity",
                "other_agent": "J",
                "resource_id": "e1a70885-d17a-4db4-b284-b461801bff4c",
                "trust_value": "-0.4496706049026311"
            },
            {
                "date_time": "2022-12-13 16:09:49:475500",
                "metric_str": "content_trust.likelihood",
                "other_agent": "J",
                "resource_id": "e1a70885-d17a-4db4-b284-b461801bff4c",
                "trust_value": "-0.550811399109775"
            },
            {
                "date_time": "2022-12-13 16:09:49:499787",
                "metric_str": "content_trust.incentive",
                "other_agent": "J",
                "resource_id": "e1a70885-d17a-4db4-b284-b461801bff4c",
                "trust_value": "-0.47051896621272826"
            },
            {
                "date_time": "2022-12-13 16:09:49:524476",
                "metric_str": "content_trust.deception",
                "other_agent": "J",
                "resource_id": "e1a70885-d17a-4db4-b284-b461801bff4c",
                "trust_value": "0.2742604128218391"
            },
            {
                "date_time": "2022-12-13 16:09:49:551231",
                "metric_str": "content_trust.age",
                "other_agent": "J",
                "resource_id": "e1a70885-d17a-4db4-b284-b461801bff4c",
                "trust_value": "1.0"
            },
            {
                "date_time": "2022-12-13 16:09:49:573888",
                "metric_str": "content_trust.authority",
                "other_agent": "J",
                "resource_id": "e1a70885-d17a-4db4-b284-b461801bff4c",
                "trust_value": "1.0"
            },
            {
                "date_time": "2022-12-13 16:09:49:622815",
                "metric_str": "content_trust.topic",
                "other_agent": "J",
                "resource_id": "e1a70885-d17a-4db4-b284-b461801bff4c",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:09:49:642483",
                "metric_str": "content_trust.provenance",
                "other_agent": "J",
                "resource_id": "e1a70885-d17a-4db4-b284-b461801bff4c",
                "trust_value": "-0.33333333333333337"
            },
            {
                "date_time": "2022-12-13 16:09:49:680765",
                "metric_str": "content_trust.direct_experience",
                "other_agent": "J",
                "resource_id": "e1a70885-d17a-4db4-b284-b461801bff4c",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:09:49:820428",
                "metric_str": "content_trust.recommendation",
                "other_agent": "J",
                "resource_id": "e1a70885-d17a-4db4-b284-b461801bff4c",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:09:49:879692",
                "metric_str": "content_trust.related_resources",
                "other_agent": "J",
                "resource_id": "e1a70885-d17a-4db4-b284-b461801bff4c",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:09:49:909880",
                "metric_str": "content_trust.user_expertise",
                "other_agent": "J",
                "resource_id": "e1a70885-d17a-4db4-b284-b461801bff4c",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:09:50:023850",
                "metric_str": "content_trust.popularity",
                "other_agent": "J",
                "resource_id": "e1a70885-d17a-4db4-b284-b461801bff4c",
                "trust_value": "0.33333333333333326"
            },
            {
                "date_time": "2022-12-13 16:10:40:726278",
                "metric_str": "content_trust.bias",
                "other_agent": "G",
                "resource_id": "c2f8cba2-9f03-47a7-9c0f-d0d58d8a1615",
                "trust_value": "0.557787909284355"
            },
            {
                "date_time": "2022-12-13 16:10:40:730955",
                "metric_str": "content_trust.specificity",
                "other_agent": "G",
                "resource_id": "c2f8cba2-9f03-47a7-9c0f-d0d58d8a1615",
                "trust_value": "-0.3561811820302887"
            },
            {
                "date_time": "2022-12-13 16:10:40:766331",
                "metric_str": "content_trust.likelihood",
                "other_agent": "G",
                "resource_id": "c2f8cba2-9f03-47a7-9c0f-d0d58d8a1615",
                "trust_value": "-0.43556340779656244"
            },
            {
                "date_time": "2022-12-13 16:10:40:807322",
                "metric_str": "content_trust.incentive",
                "other_agent": "G",
                "resource_id": "c2f8cba2-9f03-47a7-9c0f-d0d58d8a1615",
                "trust_value": "0.19724317756065468"
            },
            {
                "date_time": "2022-12-13 16:10:40:850064",
                "metric_str": "content_trust.deception",
                "other_agent": "G",
                "resource_id": "c2f8cba2-9f03-47a7-9c0f-d0d58d8a1615",
                "trust_value": "0.7832136954056677"
            },
            {
                "date_time": "2022-12-13 16:10:40:883842",
                "metric_str": "content_trust.age",
                "other_agent": "G",
                "resource_id": "c2f8cba2-9f03-47a7-9c0f-d0d58d8a1615",
                "trust_value": "1.0"
            },
            {
                "date_time": "2022-12-13 16:10:40:925189",
                "metric_str": "content_trust.authority",
                "other_agent": "G",
                "resource_id": "c2f8cba2-9f03-47a7-9c0f-d0d58d8a1615",
                "trust_value": "1.0"
            },
            {
                "date_time": "2022-12-13 16:10:40:995861",
                "metric_str": "content_trust.topic",
                "other_agent": "G",
                "resource_id": "c2f8cba2-9f03-47a7-9c0f-d0d58d8a1615",
                "trust_value": "-0.11450276077191757"
            },
            {
                "date_time": "2022-12-13 16:10:41:031159",
                "metric_str": "content_trust.provenance",
                "other_agent": "G",
                "resource_id": "c2f8cba2-9f03-47a7-9c0f-d0d58d8a1615",
                "trust_value": "-1.0"
            },
            {
                "date_time": "2022-12-13 16:10:41:082608",
                "metric_str": "content_trust.direct_experience",
                "other_agent": "G",
                "resource_id": "c2f8cba2-9f03-47a7-9c0f-d0d58d8a1615",
                "trust_value": "0.3648259164049463"
            },
            {
                "date_time": "2022-12-13 16:10:41:297871",
                "metric_str": "content_trust.recommendation",
                "other_agent": "G",
                "resource_id": "c2f8cba2-9f03-47a7-9c0f-d0d58d8a1615",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:10:41:357681",
                "metric_str": "content_trust.related_resources",
                "other_agent": "G",
                "resource_id": "c2f8cba2-9f03-47a7-9c0f-d0d58d8a1615",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:10:41:401314",
                "metric_str": "content_trust.user_expertise",
                "other_agent": "G",
                "resource_id": "c2f8cba2-9f03-47a7-9c0f-d0d58d8a1615",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:10:41:504061",
                "metric_str": "content_trust.popularity",
                "other_agent": "G",
                "resource_id": "c2f8cba2-9f03-47a7-9c0f-d0d58d8a1615",
                "trust_value": "0.33333333333333326"
            },
            {
                "date_time": "2022-12-13 16:10:48:362046",
                "metric_str": "content_trust.bias",
                "other_agent": "B",
                "resource_id": "235788ca-6ed2-40b5-af26-467ea0f62b60",
                "trust_value": "0.1402981048158909"
            },
            {
                "date_time": "2022-12-13 16:10:48:367595",
                "metric_str": "content_trust.specificity",
                "other_agent": "B",
                "resource_id": "235788ca-6ed2-40b5-af26-467ea0f62b60",
                "trust_value": "0.23894724371566212"
            },
            {
                "date_time": "2022-12-13 16:10:48:402003",
                "metric_str": "content_trust.likelihood",
                "other_agent": "B",
                "resource_id": "235788ca-6ed2-40b5-af26-467ea0f62b60",
                "trust_value": "-0.20723733524862586"
            },
            {
                "date_time": "2022-12-13 16:10:48:462027",
                "metric_str": "content_trust.incentive",
                "other_agent": "B",
                "resource_id": "235788ca-6ed2-40b5-af26-467ea0f62b60",
                "trust_value": "0.4257414448558694"
            },
            {
                "date_time": "2022-12-13 16:10:48:489766",
                "metric_str": "content_trust.deception",
                "other_agent": "B",
                "resource_id": "235788ca-6ed2-40b5-af26-467ea0f62b60",
                "trust_value": "0.888488878690181"
            },
            {
                "date_time": "2022-12-13 16:10:48:524575",
                "metric_str": "content_trust.age",
                "other_agent": "B",
                "resource_id": "235788ca-6ed2-40b5-af26-467ea0f62b60",
                "trust_value": "1.0"
            },
            {
                "date_time": "2022-12-13 16:10:48:562438",
                "metric_str": "content_trust.authority",
                "other_agent": "B",
                "resource_id": "235788ca-6ed2-40b5-af26-467ea0f62b60",
                "trust_value": "1.0"
            },
            {
                "date_time": "2022-12-13 16:10:48:678208",
                "metric_str": "content_trust.topic",
                "other_agent": "B",
                "resource_id": "235788ca-6ed2-40b5-af26-467ea0f62b60",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:10:48:713485",
                "metric_str": "content_trust.provenance",
                "other_agent": "B",
                "resource_id": "235788ca-6ed2-40b5-af26-467ea0f62b60",
                "trust_value": "0.5"
            },
            {
                "date_time": "2022-12-13 16:10:48:765882",
                "metric_str": "content_trust.direct_experience",
                "other_agent": "B",
                "resource_id": "235788ca-6ed2-40b5-af26-467ea0f62b60",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:10:49:091008",
                "metric_str": "content_trust.recommendation",
                "other_agent": "B",
                "resource_id": "235788ca-6ed2-40b5-af26-467ea0f62b60",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:10:49:175206",
                "metric_str": "content_trust.related_resources",
                "other_agent": "B",
                "resource_id": "235788ca-6ed2-40b5-af26-467ea0f62b60",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:10:49:392242",
                "metric_str": "content_trust.user_expertise",
                "other_agent": "B",
                "resource_id": "235788ca-6ed2-40b5-af26-467ea0f62b60",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:10:49:591146",
                "metric_str": "content_trust.popularity",
                "other_agent": "B",
                "resource_id": "235788ca-6ed2-40b5-af26-467ea0f62b60",
                "trust_value": "0.6666666666666665"
            },
            {
                "date_time": "2022-12-13 16:11:29:785369",
                "metric_str": "content_trust.bias",
                "other_agent": "A",
                "resource_id": "12386d1b-8d8b-40fb-bb2b-adf444440dec",
                "trust_value": "-0.21205152285432205"
            },
            {
                "date_time": "2022-12-13 16:11:29:788039",
                "metric_str": "content_trust.specificity",
                "other_agent": "A",
                "resource_id": "12386d1b-8d8b-40fb-bb2b-adf444440dec",
                "trust_value": "-0.7936653237908387"
            },
            {
                "date_time": "2022-12-13 16:11:29:820280",
                "metric_str": "content_trust.likelihood",
                "other_agent": "A",
                "resource_id": "12386d1b-8d8b-40fb-bb2b-adf444440dec",
                "trust_value": "-0.2170082406553484"
            },
            {
                "date_time": "2022-12-13 16:11:29:850540",
                "metric_str": "content_trust.incentive",
                "other_agent": "A",
                "resource_id": "12386d1b-8d8b-40fb-bb2b-adf444440dec",
                "trust_value": "-0.9791051325917315"
            },
            {
                "date_time": "2022-12-13 16:11:29:895409",
                "metric_str": "content_trust.deception",
                "other_agent": "A",
                "resource_id": "12386d1b-8d8b-40fb-bb2b-adf444440dec",
                "trust_value": "0.3027470052603982"
            },
            {
                "date_time": "2022-12-13 16:11:29:922082",
                "metric_str": "content_trust.age",
                "other_agent": "A",
                "resource_id": "12386d1b-8d8b-40fb-bb2b-adf444440dec",
                "trust_value": "1.0"
            },
            {
                "date_time": "2022-12-13 16:11:29:955298",
                "metric_str": "content_trust.authority",
                "other_agent": "A",
                "resource_id": "12386d1b-8d8b-40fb-bb2b-adf444440dec",
                "trust_value": "1.0"
            },
            {
                "date_time": "2022-12-13 16:11:30:035447",
                "metric_str": "content_trust.topic",
                "other_agent": "A",
                "resource_id": "12386d1b-8d8b-40fb-bb2b-adf444440dec",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:11:30:066215",
                "metric_str": "content_trust.provenance",
                "other_agent": "A",
                "resource_id": "12386d1b-8d8b-40fb-bb2b-adf444440dec",
                "trust_value": "1.0"
            },
            {
                "date_time": "2022-12-13 16:11:30:107733",
                "metric_str": "content_trust.direct_experience",
                "other_agent": "A",
                "resource_id": "12386d1b-8d8b-40fb-bb2b-adf444440dec",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:11:30:252768",
                "metric_str": "content_trust.recommendation",
                "other_agent": "A",
                "resource_id": "12386d1b-8d8b-40fb-bb2b-adf444440dec",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:11:30:315554",
                "metric_str": "content_trust.related_resources",
                "other_agent": "A",
                "resource_id": "12386d1b-8d8b-40fb-bb2b-adf444440dec",
                "trust_value": "-0.8380356063506955"
            },
            {
                "date_time": "2022-12-13 16:11:30:361392",
                "metric_str": "content_trust.user_expertise",
                "other_agent": "A",
                "resource_id": "12386d1b-8d8b-40fb-bb2b-adf444440dec",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:11:30:448837",
                "metric_str": "content_trust.popularity",
                "other_agent": "A",
                "resource_id": "12386d1b-8d8b-40fb-bb2b-adf444440dec",
                "trust_value": "0.6666666666666665"
            },
            {
                "date_time": "2022-12-13 16:11:32:402025",
                "metric_str": "content_trust.bias",
                "other_agent": "C",
                "resource_id": "dbdc4394-e023-429a-b84e-10b7be9f96c8",
                "trust_value": "0.6137037941958365"
            },
            {
                "date_time": "2022-12-13 16:11:32:404025",
                "metric_str": "content_trust.specificity",
                "other_agent": "C",
                "resource_id": "dbdc4394-e023-429a-b84e-10b7be9f96c8",
                "trust_value": "-0.666658729420385"
            },
            {
                "date_time": "2022-12-13 16:11:32:431239",
                "metric_str": "content_trust.likelihood",
                "other_agent": "C",
                "resource_id": "dbdc4394-e023-429a-b84e-10b7be9f96c8",
                "trust_value": "-0.46430308958294186"
            },
            {
                "date_time": "2022-12-13 16:11:32:457824",
                "metric_str": "content_trust.incentive",
                "other_agent": "C",
                "resource_id": "dbdc4394-e023-429a-b84e-10b7be9f96c8",
                "trust_value": "-0.762731796919526"
            },
            {
                "date_time": "2022-12-13 16:11:32:485529",
                "metric_str": "content_trust.deception",
                "other_agent": "C",
                "resource_id": "dbdc4394-e023-429a-b84e-10b7be9f96c8",
                "trust_value": "0.6059471770014899"
            },
            {
                "date_time": "2022-12-13 16:11:32:520873",
                "metric_str": "content_trust.age",
                "other_agent": "C",
                "resource_id": "dbdc4394-e023-429a-b84e-10b7be9f96c8",
                "trust_value": "1.0"
            },
            {
                "date_time": "2022-12-13 16:11:32:550097",
                "metric_str": "content_trust.authority",
                "other_agent": "C",
                "resource_id": "dbdc4394-e023-429a-b84e-10b7be9f96c8",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:11:32:619070",
                "metric_str": "content_trust.topic",
                "other_agent": "C",
                "resource_id": "dbdc4394-e023-429a-b84e-10b7be9f96c8",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:11:32:641742",
                "metric_str": "content_trust.provenance",
                "other_agent": "C",
                "resource_id": "dbdc4394-e023-429a-b84e-10b7be9f96c8",
                "trust_value": "-1.0"
            },
            {
                "date_time": "2022-12-13 16:11:32:680489",
                "metric_str": "content_trust.direct_experience",
                "other_agent": "C",
                "resource_id": "dbdc4394-e023-429a-b84e-10b7be9f96c8",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:11:32:843832",
                "metric_str": "content_trust.recommendation",
                "other_agent": "C",
                "resource_id": "dbdc4394-e023-429a-b84e-10b7be9f96c8",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:11:32:950344",
                "metric_str": "content_trust.related_resources",
                "other_agent": "C",
                "resource_id": "dbdc4394-e023-429a-b84e-10b7be9f96c8",
                "trust_value": "-0.3287141494215786"
            },
            {
                "date_time": "2022-12-13 16:11:32:985573",
                "metric_str": "content_trust.user_expertise",
                "other_agent": "C",
                "resource_id": "dbdc4394-e023-429a-b84e-10b7be9f96c8",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:11:33:086850",
                "metric_str": "content_trust.popularity",
                "other_agent": "C",
                "resource_id": "dbdc4394-e023-429a-b84e-10b7be9f96c8",
                "trust_value": "0.6666666666666665"
            },
            {
                "date_time": "2022-12-13 16:11:33:641675",
                "metric_str": "content_trust.bias",
                "other_agent": "A",
                "resource_id": "14067f16-12f9-40f4-822d-b6ae15ca38e9",
                "trust_value": "-0.137705072626654"
            },
            {
                "date_time": "2022-12-13 16:11:33:645260",
                "metric_str": "content_trust.specificity",
                "other_agent": "A",
                "resource_id": "14067f16-12f9-40f4-822d-b6ae15ca38e9",
                "trust_value": "-0.7746719252126717"
            },
            {
                "date_time": "2022-12-13 16:11:33:666116",
                "metric_str": "content_trust.likelihood",
                "other_agent": "A",
                "resource_id": "14067f16-12f9-40f4-822d-b6ae15ca38e9",
                "trust_value": "0.21371669700284168"
            },
            {
                "date_time": "2022-12-13 16:11:33:698896",
                "metric_str": "content_trust.incentive",
                "other_agent": "A",
                "resource_id": "14067f16-12f9-40f4-822d-b6ae15ca38e9",
                "trust_value": "0.42835228340004106"
            },
            {
                "date_time": "2022-12-13 16:11:33:729109",
                "metric_str": "content_trust.deception",
                "other_agent": "A",
                "resource_id": "14067f16-12f9-40f4-822d-b6ae15ca38e9",
                "trust_value": "0.857897753419882"
            },
            {
                "date_time": "2022-12-13 16:11:33:759346",
                "metric_str": "content_trust.age",
                "other_agent": "A",
                "resource_id": "14067f16-12f9-40f4-822d-b6ae15ca38e9",
                "trust_value": "1.0"
            },
            {
                "date_time": "2022-12-13 16:11:33:792747",
                "metric_str": "content_trust.authority",
                "other_agent": "A",
                "resource_id": "14067f16-12f9-40f4-822d-b6ae15ca38e9",
                "trust_value": "1.0"
            },
            {
                "date_time": "2022-12-13 16:11:33:884421",
                "metric_str": "content_trust.topic",
                "other_agent": "A",
                "resource_id": "14067f16-12f9-40f4-822d-b6ae15ca38e9",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:11:33:915581",
                "metric_str": "content_trust.provenance",
                "other_agent": "A",
                "resource_id": "14067f16-12f9-40f4-822d-b6ae15ca38e9",
                "trust_value": "-1.0"
            },
            {
                "date_time": "2022-12-13 16:11:33:978096",
                "metric_str": "content_trust.direct_experience",
                "other_agent": "A",
                "resource_id": "14067f16-12f9-40f4-822d-b6ae15ca38e9",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:11:34:105919",
                "metric_str": "content_trust.recommendation",
                "other_agent": "A",
                "resource_id": "14067f16-12f9-40f4-822d-b6ae15ca38e9",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:11:34:192743",
                "metric_str": "content_trust.related_resources",
                "other_agent": "A",
                "resource_id": "14067f16-12f9-40f4-822d-b6ae15ca38e9",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:11:34:243188",
                "metric_str": "content_trust.user_expertise",
                "other_agent": "A",
                "resource_id": "14067f16-12f9-40f4-822d-b6ae15ca38e9",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:11:34:345300",
                "metric_str": "content_trust.popularity",
                "other_agent": "A",
                "resource_id": "14067f16-12f9-40f4-822d-b6ae15ca38e9",
                "trust_value": "0.6666666666666665"
            },
            {
                "date_time": "2022-12-13 16:11:55:859411",
                "metric_str": "content_trust.bias",
                "other_agent": "B",
                "resource_id": "b9afb8d7-e691-421d-9cb6-87d6200a2725",
                "trust_value": "-0.28448038793477504"
            },
            {
                "date_time": "2022-12-13 16:11:55:862956",
                "metric_str": "content_trust.specificity",
                "other_agent": "B",
                "resource_id": "b9afb8d7-e691-421d-9cb6-87d6200a2725",
                "trust_value": "-0.9428985708082114"
            },
            {
                "date_time": "2022-12-13 16:11:55:924060",
                "metric_str": "content_trust.likelihood",
                "other_agent": "B",
                "resource_id": "b9afb8d7-e691-421d-9cb6-87d6200a2725",
                "trust_value": "0.9994529008729962"
            },
            {
                "date_time": "2022-12-13 16:11:55:973557",
                "metric_str": "content_trust.incentive",
                "other_agent": "B",
                "resource_id": "b9afb8d7-e691-421d-9cb6-87d6200a2725",
                "trust_value": "-0.7590660805131171"
            }
        ],
        "J": [
            {
                "date_time": "2022-12-13 16:09:41:619106",
                "metric_str": "content_trust.bias",
                "other_agent": "A",
                "resource_id": "4d999183-86ad-4f17-812b-66c7d1576e3d",
                "trust_value": "-0.5385946508370358"
            },
            {
                "date_time": "2022-12-13 16:09:41:622122",
                "metric_str": "content_trust.specificity",
                "other_agent": "A",
                "resource_id": "4d999183-86ad-4f17-812b-66c7d1576e3d",
                "trust_value": "0.9455941489413664"
            },
            {
                "date_time": "2022-12-13 16:09:41:670874",
                "metric_str": "content_trust.likelihood",
                "other_agent": "A",
                "resource_id": "4d999183-86ad-4f17-812b-66c7d1576e3d",
                "trust_value": "0.11858481466676118"
            },
            {
                "date_time": "2022-12-13 16:09:41:699632",
                "metric_str": "content_trust.incentive",
                "other_agent": "A",
                "resource_id": "4d999183-86ad-4f17-812b-66c7d1576e3d",
                "trust_value": "-0.5029952979212438"
            },
            {
                "date_time": "2022-12-13 16:09:57:602134",
                "metric_str": "content_trust.bias",
                "other_agent": "H",
                "resource_id": "4a0b2de7-8a71-4273-add7-626e0c4dd8a1",
                "trust_value": "0.24737766285412754"
            },
            {
                "date_time": "2022-12-13 16:09:57:652682",
                "metric_str": "content_trust.specificity",
                "other_agent": "H",
                "resource_id": "4a0b2de7-8a71-4273-add7-626e0c4dd8a1",
                "trust_value": "-0.5011848268525516"
            },
            {
                "date_time": "2022-12-13 16:09:57:684045",
                "metric_str": "content_trust.likelihood",
                "other_agent": "H",
                "resource_id": "4a0b2de7-8a71-4273-add7-626e0c4dd8a1",
                "trust_value": "0.3663287689864374"
            },
            {
                "date_time": "2022-12-13 16:09:57:719400",
                "metric_str": "content_trust.incentive",
                "other_agent": "H",
                "resource_id": "4a0b2de7-8a71-4273-add7-626e0c4dd8a1",
                "trust_value": "0.9079841655206267"
            },
            {
                "date_time": "2022-12-13 16:09:57:745600",
                "metric_str": "content_trust.deception",
                "other_agent": "H",
                "resource_id": "4a0b2de7-8a71-4273-add7-626e0c4dd8a1",
                "trust_value": "-0.10533314785448789"
            },
            {
                "date_time": "2022-12-13 16:09:57:787489",
                "metric_str": "content_trust.age",
                "other_agent": "H",
                "resource_id": "4a0b2de7-8a71-4273-add7-626e0c4dd8a1",
                "trust_value": "1.0"
            },
            {
                "date_time": "2022-12-13 16:09:57:812718",
                "metric_str": "content_trust.authority",
                "other_agent": "H",
                "resource_id": "4a0b2de7-8a71-4273-add7-626e0c4dd8a1",
                "trust_value": "1.0"
            },
            {
                "date_time": "2022-12-13 16:09:57:871271",
                "metric_str": "content_trust.topic",
                "other_agent": "H",
                "resource_id": "4a0b2de7-8a71-4273-add7-626e0c4dd8a1",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:09:57:937888",
                "metric_str": "content_trust.provenance",
                "other_agent": "H",
                "resource_id": "4a0b2de7-8a71-4273-add7-626e0c4dd8a1",
                "trust_value": "1.0"
            },
            {
                "date_time": "2022-12-13 16:09:57:983329",
                "metric_str": "content_trust.direct_experience",
                "other_agent": "H",
                "resource_id": "4a0b2de7-8a71-4273-add7-626e0c4dd8a1",
                "trust_value": "0.9730979932015968"
            },
            {
                "date_time": "2022-12-13 16:09:58:198372",
                "metric_str": "content_trust.recommendation",
                "other_agent": "H",
                "resource_id": "4a0b2de7-8a71-4273-add7-626e0c4dd8a1",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:09:58:275074",
                "metric_str": "content_trust.related_resources",
                "other_agent": "H",
                "resource_id": "4a0b2de7-8a71-4273-add7-626e0c4dd8a1",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:09:58:346335",
                "metric_str": "content_trust.user_expertise",
                "other_agent": "H",
                "resource_id": "4a0b2de7-8a71-4273-add7-626e0c4dd8a1",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:09:58:892790",
                "metric_str": "content_trust.popularity",
                "other_agent": "H",
                "resource_id": "4a0b2de7-8a71-4273-add7-626e0c4dd8a1",
                "trust_value": "0.8"
            },
            {
                "date_time": "2022-12-13 16:10:09:250471",
                "metric_str": "content_trust.bias",
                "other_agent": "E",
                "resource_id": "b5910899-aea7-4cdf-b974-fd3f9367ffc2",
                "trust_value": "0.591189826086427"
            },
            {
                "date_time": "2022-12-13 16:10:09:260020",
                "metric_str": "content_trust.specificity",
                "other_agent": "E",
                "resource_id": "b5910899-aea7-4cdf-b974-fd3f9367ffc2",
                "trust_value": "0.09141995970444405"
            },
            {
                "date_time": "2022-12-13 16:10:09:283193",
                "metric_str": "content_trust.likelihood",
                "other_agent": "E",
                "resource_id": "b5910899-aea7-4cdf-b974-fd3f9367ffc2",
                "trust_value": "-0.29385744771135625"
            },
            {
                "date_time": "2022-12-13 16:10:09:322998",
                "metric_str": "content_trust.incentive",
                "other_agent": "E",
                "resource_id": "b5910899-aea7-4cdf-b974-fd3f9367ffc2",
                "trust_value": "-0.15696555620431263"
            },
            {
                "date_time": "2022-12-13 16:10:09:350357",
                "metric_str": "content_trust.deception",
                "other_agent": "E",
                "resource_id": "b5910899-aea7-4cdf-b974-fd3f9367ffc2",
                "trust_value": "0.4971660668953706"
            },
            {
                "date_time": "2022-12-13 16:10:09:382192",
                "metric_str": "content_trust.age",
                "other_agent": "E",
                "resource_id": "b5910899-aea7-4cdf-b974-fd3f9367ffc2",
                "trust_value": "1.0"
            },
            {
                "date_time": "2022-12-13 16:10:09:419018",
                "metric_str": "content_trust.authority",
                "other_agent": "E",
                "resource_id": "b5910899-aea7-4cdf-b974-fd3f9367ffc2",
                "trust_value": "1.0"
            },
            {
                "date_time": "2022-12-13 16:10:09:479128",
                "metric_str": "content_trust.topic",
                "other_agent": "E",
                "resource_id": "b5910899-aea7-4cdf-b974-fd3f9367ffc2",
                "trust_value": "0.6625425885932115"
            },
            {
                "date_time": "2022-12-13 16:10:09:510382",
                "metric_str": "content_trust.provenance",
                "other_agent": "E",
                "resource_id": "b5910899-aea7-4cdf-b974-fd3f9367ffc2",
                "trust_value": "1.0"
            },
            {
                "date_time": "2022-12-13 16:10:09:554356",
                "metric_str": "content_trust.direct_experience",
                "other_agent": "E",
                "resource_id": "b5910899-aea7-4cdf-b974-fd3f9367ffc2",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:10:09:899970",
                "metric_str": "content_trust.recommendation",
                "other_agent": "E",
                "resource_id": "b5910899-aea7-4cdf-b974-fd3f9367ffc2",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:10:10:006346",
                "metric_str": "content_trust.related_resources",
                "other_agent": "E",
                "resource_id": "b5910899-aea7-4cdf-b974-fd3f9367ffc2",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:10:10:045268",
                "metric_str": "content_trust.user_expertise",
                "other_agent": "E",
                "resource_id": "b5910899-aea7-4cdf-b974-fd3f9367ffc2",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:10:10:407354",
                "metric_str": "content_trust.popularity",
                "other_agent": "E",
                "resource_id": "b5910899-aea7-4cdf-b974-fd3f9367ffc2",
                "trust_value": "0.8"
            },
            {
                "date_time": "2022-12-13 16:10:10:823155",
                "metric_str": "content_trust.bias",
                "other_agent": "D",
                "resource_id": "0dd38d06-9eda-4659-b116-f60627fc5093",
                "trust_value": "0.4346438553300078"
            },
            {
                "date_time": "2022-12-13 16:10:10:827154",
                "metric_str": "content_trust.specificity",
                "other_agent": "D",
                "resource_id": "0dd38d06-9eda-4659-b116-f60627fc5093",
                "trust_value": "0.8775750231845361"
            },
            {
                "date_time": "2022-12-13 16:10:10:863994",
                "metric_str": "content_trust.likelihood",
                "other_agent": "D",
                "resource_id": "0dd38d06-9eda-4659-b116-f60627fc5093",
                "trust_value": "0.5905703033503313"
            },
            {
                "date_time": "2022-12-13 16:10:10:892240",
                "metric_str": "content_trust.incentive",
                "other_agent": "D",
                "resource_id": "0dd38d06-9eda-4659-b116-f60627fc5093",
                "trust_value": "-0.25427102362898046"
            },
            {
                "date_time": "2022-12-13 16:10:28:603033",
                "metric_str": "content_trust.bias",
                "other_agent": "F",
                "resource_id": "e977db3c-cae3-4e59-8dba-9c27a8d5128f",
                "trust_value": "0.10115423737286156"
            },
            {
                "date_time": "2022-12-13 16:10:28:610589",
                "metric_str": "content_trust.specificity",
                "other_agent": "F",
                "resource_id": "e977db3c-cae3-4e59-8dba-9c27a8d5128f",
                "trust_value": "-0.4773107399840033"
            },
            {
                "date_time": "2022-12-13 16:10:28:673745",
                "metric_str": "content_trust.likelihood",
                "other_agent": "F",
                "resource_id": "e977db3c-cae3-4e59-8dba-9c27a8d5128f",
                "trust_value": "0.45111685805839197"
            },
            {
                "date_time": "2022-12-13 16:10:28:710090",
                "metric_str": "content_trust.incentive",
                "other_agent": "F",
                "resource_id": "e977db3c-cae3-4e59-8dba-9c27a8d5128f",
                "trust_value": "0.0014736793482366117"
            },
            {
                "date_time": "2022-12-13 16:10:37:262132",
                "metric_str": "content_trust.bias",
                "other_agent": "D",
                "resource_id": "4fc687a4-b359-4e30-a866-55d3f4e28980",
                "trust_value": "-0.4017713739202913"
            },
            {
                "date_time": "2022-12-13 16:10:37:267674",
                "metric_str": "content_trust.specificity",
                "other_agent": "D",
                "resource_id": "4fc687a4-b359-4e30-a866-55d3f4e28980",
                "trust_value": "0.8983046281042666"
            },
            {
                "date_time": "2022-12-13 16:10:37:315114",
                "metric_str": "content_trust.likelihood",
                "other_agent": "D",
                "resource_id": "4fc687a4-b359-4e30-a866-55d3f4e28980",
                "trust_value": "-0.39843465170393255"
            },
            {
                "date_time": "2022-12-13 16:10:37:348283",
                "metric_str": "content_trust.incentive",
                "other_agent": "D",
                "resource_id": "4fc687a4-b359-4e30-a866-55d3f4e28980",
                "trust_value": "-0.19512218085378974"
            },
            {
                "date_time": "2022-12-13 16:10:37:378160",
                "metric_str": "content_trust.deception",
                "other_agent": "D",
                "resource_id": "4fc687a4-b359-4e30-a866-55d3f4e28980",
                "trust_value": "0.6047143882877566"
            },
            {
                "date_time": "2022-12-13 16:10:37:402810",
                "metric_str": "content_trust.age",
                "other_agent": "D",
                "resource_id": "4fc687a4-b359-4e30-a866-55d3f4e28980",
                "trust_value": "1.0"
            },
            {
                "date_time": "2022-12-13 16:10:37:431139",
                "metric_str": "content_trust.authority",
                "other_agent": "D",
                "resource_id": "4fc687a4-b359-4e30-a866-55d3f4e28980",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:10:37:620282",
                "metric_str": "content_trust.topic",
                "other_agent": "D",
                "resource_id": "4fc687a4-b359-4e30-a866-55d3f4e28980",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:10:37:646952",
                "metric_str": "content_trust.provenance",
                "other_agent": "D",
                "resource_id": "4fc687a4-b359-4e30-a866-55d3f4e28980",
                "trust_value": "0.0"
            },
            {
                "date_time": "2022-12-13 16:10:37:698976",
                "metric_str": "content_trust.direct_experience",
                "other_agent": "D",
                "resource_id": "4fc687a4-b359-4e30-a866-55d3f4e28980",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:10:37:878655",
                "metric_str": "content_trust.recommendation",
                "other_agent": "D",
                "resource_id": "4fc687a4-b359-4e30-a866-55d3f4e28980",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:10:38:120409",
                "metric_str": "content_trust.related_resources",
                "other_agent": "D",
                "resource_id": "4fc687a4-b359-4e30-a866-55d3f4e28980",
                "trust_value": "0.12522351024630662"
            },
            {
                "date_time": "2022-12-13 16:10:38:178997",
                "metric_str": "content_trust.user_expertise",
                "other_agent": "D",
                "resource_id": "4fc687a4-b359-4e30-a866-55d3f4e28980",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:10:38:773195",
                "metric_str": "content_trust.popularity",
                "other_agent": "D",
                "resource_id": "4fc687a4-b359-4e30-a866-55d3f4e28980",
                "trust_value": "0.8"
            },
            {
                "date_time": "2022-12-13 16:10:42:074374",
                "metric_str": "content_trust.bias",
                "other_agent": "D",
                "resource_id": "48a7d157-f13b-455a-a70b-4fd91af1fd8d",
                "trust_value": "0.8732422294227669"
            },
            {
                "date_time": "2022-12-13 16:10:42:077890",
                "metric_str": "content_trust.specificity",
                "other_agent": "D",
                "resource_id": "48a7d157-f13b-455a-a70b-4fd91af1fd8d",
                "trust_value": "-0.26339334946573323"
            },
            {
                "date_time": "2022-12-13 16:10:42:116154",
                "metric_str": "content_trust.likelihood",
                "other_agent": "D",
                "resource_id": "48a7d157-f13b-455a-a70b-4fd91af1fd8d",
                "trust_value": "0.8687827830564554"
            },
            {
                "date_time": "2022-12-13 16:10:42:149943",
                "metric_str": "content_trust.incentive",
                "other_agent": "D",
                "resource_id": "48a7d157-f13b-455a-a70b-4fd91af1fd8d",
                "trust_value": "0.13469870129182326"
            },
            {
                "date_time": "2022-12-13 16:10:42:179663",
                "metric_str": "content_trust.deception",
                "other_agent": "D",
                "resource_id": "48a7d157-f13b-455a-a70b-4fd91af1fd8d",
                "trust_value": "0.7907365473384056"
            },
            {
                "date_time": "2022-12-13 16:10:42:221037",
                "metric_str": "content_trust.age",
                "other_agent": "D",
                "resource_id": "48a7d157-f13b-455a-a70b-4fd91af1fd8d",
                "trust_value": "1.0"
            },
            {
                "date_time": "2022-12-13 16:10:42:247773",
                "metric_str": "content_trust.authority",
                "other_agent": "D",
                "resource_id": "48a7d157-f13b-455a-a70b-4fd91af1fd8d",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:10:42:314961",
                "metric_str": "content_trust.topic",
                "other_agent": "D",
                "resource_id": "48a7d157-f13b-455a-a70b-4fd91af1fd8d",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:10:42:341724",
                "metric_str": "content_trust.provenance",
                "other_agent": "D",
                "resource_id": "48a7d157-f13b-455a-a70b-4fd91af1fd8d",
                "trust_value": "1.0"
            },
            {
                "date_time": "2022-12-13 16:10:42:383588",
                "metric_str": "content_trust.direct_experience",
                "other_agent": "D",
                "resource_id": "48a7d157-f13b-455a-a70b-4fd91af1fd8d",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:10:42:511746",
                "metric_str": "content_trust.recommendation",
                "other_agent": "D",
                "resource_id": "48a7d157-f13b-455a-a70b-4fd91af1fd8d",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:10:42:601208",
                "metric_str": "content_trust.related_resources",
                "other_agent": "D",
                "resource_id": "48a7d157-f13b-455a-a70b-4fd91af1fd8d",
                "trust_value": "-1.0"
            },
            {
                "date_time": "2022-12-13 16:10:42:631275",
                "metric_str": "content_trust.user_expertise",
                "other_agent": "D",
                "resource_id": "48a7d157-f13b-455a-a70b-4fd91af1fd8d",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:10:42:849795",
                "metric_str": "content_trust.popularity",
                "other_agent": "D",
                "resource_id": "48a7d157-f13b-455a-a70b-4fd91af1fd8d",
                "trust_value": "0.8"
            },
            {
                "date_time": "2022-12-13 16:10:53:952823",
                "metric_str": "content_trust.bias",
                "other_agent": "F",
                "resource_id": "2b98e5e7-ce67-460e-9f6c-a2a21c433133",
                "trust_value": "0.8728825325835596"
            },
            {
                "date_time": "2022-12-13 16:10:53:955825",
                "metric_str": "content_trust.specificity",
                "other_agent": "F",
                "resource_id": "2b98e5e7-ce67-460e-9f6c-a2a21c433133",
                "trust_value": "0.27295339033864163"
            },
            {
                "date_time": "2022-12-13 16:10:54:040785",
                "metric_str": "content_trust.likelihood",
                "other_agent": "F",
                "resource_id": "2b98e5e7-ce67-460e-9f6c-a2a21c433133",
                "trust_value": "0.8838857040378758"
            },
            {
                "date_time": "2022-12-13 16:10:54:087300",
                "metric_str": "content_trust.incentive",
                "other_agent": "F",
                "resource_id": "2b98e5e7-ce67-460e-9f6c-a2a21c433133",
                "trust_value": "-0.657984562240667"
            },
            {
                "date_time": "2022-12-13 16:10:54:121154",
                "metric_str": "content_trust.deception",
                "other_agent": "F",
                "resource_id": "2b98e5e7-ce67-460e-9f6c-a2a21c433133",
                "trust_value": "0.3099724614702295"
            },
            {
                "date_time": "2022-12-13 16:10:54:557680",
                "metric_str": "content_trust.age",
                "other_agent": "F",
                "resource_id": "2b98e5e7-ce67-460e-9f6c-a2a21c433133",
                "trust_value": "1.0"
            },
            {
                "date_time": "2022-12-13 16:10:54:900869",
                "metric_str": "content_trust.authority",
                "other_agent": "F",
                "resource_id": "2b98e5e7-ce67-460e-9f6c-a2a21c433133",
                "trust_value": "1.0"
            },
            {
                "date_time": "2022-12-13 16:10:55:178519",
                "metric_str": "content_trust.topic",
                "other_agent": "F",
                "resource_id": "2b98e5e7-ce67-460e-9f6c-a2a21c433133",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:10:55:214773",
                "metric_str": "content_trust.provenance",
                "other_agent": "F",
                "resource_id": "2b98e5e7-ce67-460e-9f6c-a2a21c433133",
                "trust_value": "1.0"
            },
            {
                "date_time": "2022-12-13 16:10:55:269693",
                "metric_str": "content_trust.direct_experience",
                "other_agent": "F",
                "resource_id": "2b98e5e7-ce67-460e-9f6c-a2a21c433133",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:10:55:453360",
                "metric_str": "content_trust.recommendation",
                "other_agent": "F",
                "resource_id": "2b98e5e7-ce67-460e-9f6c-a2a21c433133",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:10:55:936932",
                "metric_str": "content_trust.related_resources",
                "other_agent": "F",
                "resource_id": "2b98e5e7-ce67-460e-9f6c-a2a21c433133",
                "trust_value": "-1.0"
            },
            {
                "date_time": "2022-12-13 16:10:56:097616",
                "metric_str": "content_trust.user_expertise",
                "other_agent": "F",
                "resource_id": "2b98e5e7-ce67-460e-9f6c-a2a21c433133",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:10:57:919458",
                "metric_str": "content_trust.popularity",
                "other_agent": "F",
                "resource_id": "2b98e5e7-ce67-460e-9f6c-a2a21c433133",
                "trust_value": "0.8"
            },
            {
                "date_time": "2022-12-13 16:11:01:164764",
                "metric_str": "content_trust.bias",
                "other_agent": "B",
                "resource_id": "e1c76099-bcb7-480f-87ee-4f1e226f5819",
                "trust_value": "-0.0367726781306521"
            },
            {
                "date_time": "2022-12-13 16:11:01:169309",
                "metric_str": "content_trust.specificity",
                "other_agent": "B",
                "resource_id": "e1c76099-bcb7-480f-87ee-4f1e226f5819",
                "trust_value": "-0.09254769731272017"
            },
            {
                "date_time": "2022-12-13 16:11:01:219671",
                "metric_str": "content_trust.likelihood",
                "other_agent": "B",
                "resource_id": "e1c76099-bcb7-480f-87ee-4f1e226f5819",
                "trust_value": "-0.8565134672916013"
            },
            {
                "date_time": "2022-12-13 16:11:01:312972",
                "metric_str": "content_trust.incentive",
                "other_agent": "B",
                "resource_id": "e1c76099-bcb7-480f-87ee-4f1e226f5819",
                "trust_value": "-0.59946137502137"
            },
            {
                "date_time": "2022-12-13 16:11:30:932846",
                "metric_str": "content_trust.bias",
                "other_agent": "A",
                "resource_id": "570babbd-0397-4c51-87d9-e207e19231ba",
                "trust_value": "0.5681364795923403"
            },
            {
                "date_time": "2022-12-13 16:11:30:934847",
                "metric_str": "content_trust.specificity",
                "other_agent": "A",
                "resource_id": "570babbd-0397-4c51-87d9-e207e19231ba",
                "trust_value": "0.24062386952377124"
            },
            {
                "date_time": "2022-12-13 16:11:30:964373",
                "metric_str": "content_trust.likelihood",
                "other_agent": "A",
                "resource_id": "570babbd-0397-4c51-87d9-e207e19231ba",
                "trust_value": "0.07741545949128148"
            },
            {
                "date_time": "2022-12-13 16:11:30:993405",
                "metric_str": "content_trust.incentive",
                "other_agent": "A",
                "resource_id": "570babbd-0397-4c51-87d9-e207e19231ba",
                "trust_value": "0.9155987371949292"
            },
            {
                "date_time": "2022-12-13 16:11:31:021529",
                "metric_str": "content_trust.deception",
                "other_agent": "A",
                "resource_id": "570babbd-0397-4c51-87d9-e207e19231ba",
                "trust_value": "0.16900217020553865"
            },
            {
                "date_time": "2022-12-13 16:11:31:054223",
                "metric_str": "content_trust.age",
                "other_agent": "A",
                "resource_id": "570babbd-0397-4c51-87d9-e207e19231ba",
                "trust_value": "1.0"
            },
            {
                "date_time": "2022-12-13 16:11:31:086847",
                "metric_str": "content_trust.authority",
                "other_agent": "A",
                "resource_id": "570babbd-0397-4c51-87d9-e207e19231ba",
                "trust_value": "1.0"
            },
            {
                "date_time": "2022-12-13 16:11:31:147019",
                "metric_str": "content_trust.topic",
                "other_agent": "A",
                "resource_id": "570babbd-0397-4c51-87d9-e207e19231ba",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:11:31:171025",
                "metric_str": "content_trust.provenance",
                "other_agent": "A",
                "resource_id": "570babbd-0397-4c51-87d9-e207e19231ba",
                "trust_value": "1.0"
            },
            {
                "date_time": "2022-12-13 16:11:31:218423",
                "metric_str": "content_trust.direct_experience",
                "other_agent": "A",
                "resource_id": "570babbd-0397-4c51-87d9-e207e19231ba",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:11:31:370173",
                "metric_str": "content_trust.recommendation",
                "other_agent": "A",
                "resource_id": "570babbd-0397-4c51-87d9-e207e19231ba",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:11:31:512790",
                "metric_str": "content_trust.related_resources",
                "other_agent": "A",
                "resource_id": "570babbd-0397-4c51-87d9-e207e19231ba",
                "trust_value": "0.42955940806389736"
            },
            {
                "date_time": "2022-12-13 16:11:31:552048",
                "metric_str": "content_trust.user_expertise",
                "other_agent": "A",
                "resource_id": "570babbd-0397-4c51-87d9-e207e19231ba",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:11:31:822349",
                "metric_str": "content_trust.popularity",
                "other_agent": "A",
                "resource_id": "570babbd-0397-4c51-87d9-e207e19231ba",
                "trust_value": "0.8"
            },
            {
                "date_time": "2022-12-13 16:11:43:951873",
                "metric_str": "content_trust.bias",
                "other_agent": "I",
                "resource_id": "44648993-314f-466b-989b-4765cfdf5c44",
                "trust_value": "0.4749427785001932"
            },
            {
                "date_time": "2022-12-13 16:11:43:957393",
                "metric_str": "content_trust.specificity",
                "other_agent": "I",
                "resource_id": "44648993-314f-466b-989b-4765cfdf5c44",
                "trust_value": "0.3563249737305436"
            },
            {
                "date_time": "2022-12-13 16:11:44:000282",
                "metric_str": "content_trust.likelihood",
                "other_agent": "I",
                "resource_id": "44648993-314f-466b-989b-4765cfdf5c44",
                "trust_value": "0.185439427103812"
            },
            {
                "date_time": "2022-12-13 16:11:44:057179",
                "metric_str": "content_trust.incentive",
                "other_agent": "I",
                "resource_id": "44648993-314f-466b-989b-4765cfdf5c44",
                "trust_value": "-0.6326177089352609"
            },
            {
                "date_time": "2022-12-13 16:11:44:117766",
                "metric_str": "content_trust.deception",
                "other_agent": "I",
                "resource_id": "44648993-314f-466b-989b-4765cfdf5c44",
                "trust_value": "0.5340983889536663"
            },
            {
                "date_time": "2022-12-13 16:11:44:148983",
                "metric_str": "content_trust.age",
                "other_agent": "I",
                "resource_id": "44648993-314f-466b-989b-4765cfdf5c44",
                "trust_value": "1.0"
            },
            {
                "date_time": "2022-12-13 16:11:44:183352",
                "metric_str": "content_trust.authority",
                "other_agent": "I",
                "resource_id": "44648993-314f-466b-989b-4765cfdf5c44",
                "trust_value": "1.0"
            },
            {
                "date_time": "2022-12-13 16:11:44:304914",
                "metric_str": "content_trust.topic",
                "other_agent": "I",
                "resource_id": "44648993-314f-466b-989b-4765cfdf5c44",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:11:44:361969",
                "metric_str": "content_trust.provenance",
                "other_agent": "I",
                "resource_id": "44648993-314f-466b-989b-4765cfdf5c44",
                "trust_value": "-1.0"
            },
            {
                "date_time": "2022-12-13 16:11:44:422794",
                "metric_str": "content_trust.direct_experience",
                "other_agent": "I",
                "resource_id": "44648993-314f-466b-989b-4765cfdf5c44",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:11:44:667865",
                "metric_str": "content_trust.recommendation",
                "other_agent": "I",
                "resource_id": "44648993-314f-466b-989b-4765cfdf5c44",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:11:44:722797",
                "metric_str": "content_trust.related_resources",
                "other_agent": "I",
                "resource_id": "44648993-314f-466b-989b-4765cfdf5c44",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:11:44:776123",
                "metric_str": "content_trust.user_expertise",
                "other_agent": "I",
                "resource_id": "44648993-314f-466b-989b-4765cfdf5c44",
                "trust_value": "None"
            },
            {
                "date_time": "2022-12-13 16:11:45:181574",
                "metric_str": "content_trust.popularity",
                "other_agent": "I",
                "resource_id": "44648993-314f-466b-989b-4765cfdf5c44",
                "trust_value": "0.8"
            },
            {
                "date_time": "2022-12-13 16:11:48:468252",
                "metric_str": "content_trust.bias",
                "other_agent": "C",
                "resource_id": "677d1e8d-e82f-4401-9567-3a440346eaa2",
                "trust_value": "0.746924641363391"
            },
            {
                "date_time": "2022-12-13 16:11:48:471286",
                "metric_str": "content_trust.specificity",
                "other_agent": "C",
                "resource_id": "677d1e8d-e82f-4401-9567-3a440346eaa2",
                "trust_value": "-0.6400500262553646"
            },
            {
                "date_time": "2022-12-13 16:11:48:502667",
                "metric_str": "content_trust.likelihood",
                "other_agent": "C",
                "resource_id": "677d1e8d-e82f-4401-9567-3a440346eaa2",
                "trust_value": "0.6235194595799827"
            },
            {
                "date_time": "2022-12-13 16:11:48:538125",
                "metric_str": "content_trust.incentive",
                "other_agent": "C",
                "resource_id": "677d1e8d-e82f-4401-9567-3a440346eaa2",
                "trust_value": "-0.607190040097995"
            }
        ]
    }
}