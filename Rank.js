let deg = [1172, 1182, 1208, 1130, 1223, 1075, 1199, 1236, 1271, 1307, 1338, 1114, 1274, 1084, 1296, 1181, 1302, 915.75, 1132, 1210, 1246, 1228, 1352, 1184, 1171,
    1209, 1207, 1192, 1210, 1192, 1277, 1319, 1222, 1254, 1226, 1318, 1228, 1157, 1322, 1173, 1239, 1290, 1223, 1352, 1346, 1279, 1246, 1151, 1122, 1315, 
    1178, 1207, 1233, 1051, 1277, 1284, 1184, 1287, 1282, 1274, 902.75, 1270, 1188, 1099, 392, 1004, 1268, 1048, 1316, 1230, 0, 1325, 1294, 1169, 1432, 
    1373, 1187, 1251, 1293, 1251, 1181, 1200, 1245, 1245, 1155, 1174, 1201, 1259, 1129, 1208, 1213, 1245, 1192, 1116, 1219];

let deg_arng = [1172, 1182, 1208, 1130, 1223, 1075, 1199, 1236, 1271, 1307, 1338, 1114, 1274, 1084, 1296, 1181, 1302, 915.75, 1132, 1210, 1246, 1228, 1352, 1184, 1171,
    1209, 1207, 1192, 1210, 1192, 1277, 1319, 1222, 1254, 1226, 1318, 1228, 1157, 1322, 1173, 1239, 1290, 1223, 1352, 1346, 1279, 1246, 1151, 1122, 1315, 
    1178, 1207, 1233, 1051, 1277, 1284, 1184, 1287, 1282, 1274, 902.75, 1270, 1188, 1099, 392, 1004, 1268, 1048, 1316, 1230, 0, 1325, 1294, 1169, 1432, 
    1373, 1187, 1251, 1293, 1251, 1181, 1200, 1245, 1245, 1155, 1174, 1201, 1259, 1129, 1208, 1213, 1245, 1192, 1116, 1219];

let names = ["ابانوب امير يوسف يعقوب", "ابانوب شفيق زاخر عطيه", "ابرام ماهر جرجس بشاى", "ابراهيم محمد حسن ابراهيم العكل", "احمد ابراهيم سالم احمد الجعفرى",
        "احمد حسن عبدالمجيد حسن السيد", "احمد حسين احمد محمد", "احمد خالد السيد احمد طلحا", "احمد خالد حسين نجيب محمد عزت", "احمد سمير جوده السيد ابراهيم",
        "احمد سيد محمد بيومى", "احمد عصام صالح محمود", "احمد مجدى طلعت عبدالمجيد العرباوى", "احمد محمد عبدالغنى على شعله", "احمد محمود سند عبدالله",
        "احمد محمود عامر عوده", "احمد محمود محمد جوده ابراهيم", "احمد مصطفى ابراهيم احمد", "اسراء مجدى مسعد حسن", "اسلام ناصر محمود ابوالخير",
        "امنه على عبدالوهاب اسماعيل", "انطونيوس عماد كامل سعيد", "ايمان محمد عبدالحميد عبدالوهاب", "ايه حسام على محمد", "بافلى جورج حسنى دوس",
        "بسمة احمد صابر محمد", "بسمله يوسف اسماعيل احمد", "بسنت ايهاب صابر اسماعيل", "بولا ايمن ميخائيل بقطر", "بولا عماد شهدى عزمى", "تقى سامح صلاح السيد",
        "تونى ميخائيل سريان بشاى", "خالد مجاهد ابراهيم على الابيض", "داليا خالد محمد حنفى", "دميانه شارل شاكر زكى", "روان محمد فتحى محمد", "ريهام جلال عبدالعزيز محمد",
        "ريهام ماهر عبدالفتاح حسن", "شادى بهاء القس ابراهيم انيس", "صفيه عادل سعيد محمد", "عبدالرحمن خالد فاروق مغاورى", "عبدالرحمن نبيل جمعه صادق",
        "عبدالله حافظ سعد عبدالحليم بدر", "عبدالله علاء الدين احمد عواد عبداللطيف", "عفاف رافت ابراهيم عبدالحميد", "علاء جابر حماده احمد عبدالرحمن",
        "على ايمن محمد عبدالودود", "على عبدالمنعم محمد فواد مصطفى السيد", "كريم محمد سعد عبدالمطلب", "كريم وليد محمد السيد", "كيرلس مجدى عبدالملاك حبيب",
        "ماريو مفدى حبيب بشوى", "ماهر شحته عبده عامر بدران", "مايكل سامى حبشى ميلاد", "محمد احمد ابراهيم منصور", "محمد احمد ربيع محروس", "محمد احمد صالح على",
        "محمد اسامة محمد بكر", "محمد اسامه عواد عواد", "محمد خالد عبدالقادر هاشم", "محمد سعد عبدالنعيم محمد", "محمد شريف محمد عبدالفتاح",
        "محمد عادل عبدالعزيز عبدالمقصود", "محمد عادل يوسف محمد على", "محمد ممدوح صلاح عبدالعزيز", "محمد ممدوح محمد سعيد", "محمد هشام فتحى عبدالحفيظ احمد",
        "محمد ياسر عبدالعزيز ابراهيم", "محمد يوسف حلمى ابوالصفا", "محى الدين ايهاب ابراهيم محى العزب", "مروان اشرف رمضان السيد", "مروان محمد شعبان احمد",
        "مريم رضا ابراهيم كامل", "مصطفى ايمن عبدالحفيظ محمد", "مصطفى شكرى الكامل محمد عيد", "مصطفى عبدالله مصطفى منصور", "مصطفى وائل حسين حسين",
        "منةالله عمر عبداللاه يوسف", "مهند عماد محمد مصطفى خفاجى", "مهند مدحت مصطفى عبدالغنى", "ميريام هانى عدلى كامل", "مينا عاطف موريس صورى",
        "مينا غطاس جرجس واصف", "نرمين احمد فواد على", "نعمة الله محمد احمد محمد", "نور الدين نبيل ابراهيم احمد", "نيرة محمود احمد محمد", "هاجر سلامة سليمان بيومى",
        "هايدى هشام فكرى محمد عماره", "هايدى وليد محمد سعيد عبدالفضيل بيومى", "هشام عصام عبدالفتاح محمد السيد", "يوسف احمد عبده حسين", "يوسف عادل السيد ابراهيم",
        "يوسف عثمان فاضل حسين", "يوسف محسن محمد مهدى الشيمى"];

let j = 1;
let i = 0;
let search = 1;
deg_arng.sort(function(a, b){return b - a});
while (i < deg_arng.length){
    if (deg_arng[i] == deg_arng[j]){
        deg_arng.splice(j, 1);
        continue;
    }
    j++;
    i++;
}


function name_search(){
    let name_to_find = document.getElementById("namein").value;

    if(name_to_find != ""){
        let name_to_find_splited = name_to_find.split(" ");


        // SPLITTING عبد AND الله
        for(let j in name_to_find_splited){
            for(let i = 0; i < name_to_find_splited[j].length; i++){
                if(name_to_find_splited[j].slice(i, i+5) == "الله"){
                    let letters = name_to_find_splited[j].split("");
                    letters.splice(i, 0, " ");
                    name_to_find_splited[j] = letters.join("");
                    break;
                }
                if(name_to_find_splited[j].slice(i, i+3) == "عبد"){
                    let letters = name_to_find_splited[j].split("");
                    letters.splice(i+3, 0, " ");
                    name_to_find_splited[j] = letters.join("");
                    break;
                }
            }
        }
        name_to_find = name_to_find_splited.join(" ");
        name_to_find_splited = name_to_find.split(" ");
        // SPLITTING عبد AND الله

        // REPLACING ALL أ,إ,آ WITH ا
        // REPLACING ALL ة WITH ه
        // REPLACING ALL ي IN THE END WITH ى
        let i = 0;
        while (i < name_to_find_splited.length){
            if (name_to_find_splited[i] == ''){
                name_to_find_splited.splice(i, 1);
                continue;
            }
            let y = name_to_find_splited[i].trim().split("");
            for (let j in y){
                if (y[j] == "أ" || y[j] == "آ" || y[j] == "إ"){
                    y[j] = "ا";
                }
            }
            name_to_find_splited[i] = y.join("");
            if (name_to_find_splited[i][name_to_find_splited[i].length - 1] == "ي"){
                let x = name_to_find_splited[i].split("");
                x[x.length - 1] = "ى";
                name_to_find_splited[i] = x.join("");
            }else if (name_to_find_splited[i][name_to_find_splited[i].length - 1] == "ة"){
                let x = name_to_find_splited[i].split("");
                x[x.length - 1] = "ه";
                name_to_find_splited[i] = x.join("");
            }
            i++
        }
        // REPLACING ALL أ,إ,آ WITH ا
        // REPLACING ALL ة WITH ه
        // REPLACING ALL ي IN THE END WITH ى


        let found = 0;
        let found_ind = 0;
        let index = -1;
        let j = 0;
        let t_splited;
        let degree = -1;
        let rank = -1;
        let name;
        for (let t of names){
            

            // SPLITTING عبد AND الله
            t_splited = t.split(" ");
            for(let j in t_splited){
                for(let i = 0; i < t_splited[j].length; i++){
                    if(t_splited[j].slice(i, i+5) == "الله"){
                        let letters = t_splited[j].split("");
                        letters.splice(i, 0, " ");
                        t_splited[j] = letters.join("");
                        break;
                    }
                    if(t_splited[j].slice(i, i+3) == "عبد"){
                        let letters = t_splited[j].split("");
                        letters.splice(i+3, 0, " ");
                        t_splited[j] = letters.join("");
                        break;
                    }
                }
            }
            let temp = t_splited.join(" ");
            t_splited = temp.split(" ");
            // SPLITTING عبد AND الله
            
            // REPLACING ALL أ,إ,آ WITH ا
            // REPLACING ALL ة WITH ه
            // REPLACING ALL ي IN THE END WITH ى
            for (let i in t_splited){
                let y = t_splited[i].split("");
                for (let j in y){
                    if (y[j] == "أ" || y[j] == "آ" || y[j] == "إ"){
                        y[j] = "ا";
                    }
                }
                t_splited[i] = y.join("");
                if (t_splited[i][t_splited[i].length - 1] == "ي"){
                    let x = t_splited[i].split("");
                    x[x.length - 1] = "ى";
                    t_splited[i] = x.join("");
                }else if (t_splited[i][t_splited[i].length - 1] == "ة"){
                    let x = t_splited[i].split("");
                    x[x.length - 1] = "ه";
                    t_splited[i] = x.join("");
                }
            }
            // REPLACING ALL أ,إ,آ WITH ا
            // REPLACING ALL ة WITH ه
            // REPLACING ALL ي IN THE END WITH ى

            
            for (let i of name_to_find_splited){
                if (i == t_splited[j]){
                    found_ind++;
                }else{
                    found_ind = 0;
                    break;
                }
                j++;
            }
            if (found_ind > 0){
                found++;
                index = names.indexOf(t);
                found_ind = 0;
            }
            j = 0;
        }
        if (found == 1){
            degree = deg[index];
            rank = deg_arng.indexOf(degree) + 1;
            name = names[index];
            document.getElementById("mes6").style.display = "inline";
            document.getElementById("name3").style.display = "inline";
            document.getElementById("mes7").style.display = "block";
            document.getElementById("mes8").style.display = "block";
            document.getElementById("degree3").style.display = "inline";
            document.getElementById("rank3").style.display = "inline";
            document.getElementById("error3").style.display = "none";
            document.getElementById("tbl").style.display = "none";
            document.getElementById("degree3").innerHTML = degree;
            document.getElementById("rank3").innerHTML = rank;
            document.getElementById("name3").innerHTML = name;
        }else if (found > 1){
            document.getElementById("mes6").style.display = "none";
            document.getElementById("name3").style.display = "none";
            document.getElementById("mes7").style.display = "none";
            document.getElementById("mes8").style.display = "none";
            document.getElementById("degree3").style.display = "none";
            document.getElementById("rank3").style.display = "none";
            document.getElementById("tbl").style.display = "none";
            document.getElementById("error3").style.display = "block";
            document.getElementById("error3").innerHTML = "Complete the name";
        }else{
            document.getElementById("mes6").style.display = "none";
            document.getElementById("name3").style.display = "none";
            document.getElementById("mes7").style.display = "none";
            document.getElementById("mes8").style.display = "none";
            document.getElementById("tbl").style.display = "none";
            document.getElementById("error3").style.display = "block";
            document.getElementById("error3").innerHTML = "Invalid name! please try again";
        }
    }
}

let current = document.getElementById("namein").value;
let previous = document.getElementById("namein").value;
document.getElementById("namein").addEventListener('keyup', (e) => {
    if(e.keyCode == 13){
        current = document.getElementById("namein").value;
        if(search == 1 || current != previous){
            name_search();
            search = 2;
        }else if(search == 2 && current == previous){
            name_search_all();
            search = 1;
        }
        previous = document.getElementById("namein").value;
    }
});

function name_search_all(){
    let name_to_find = document.getElementById("namein").value;

    if(name_to_find != ""){
        let name_to_find_splited = name_to_find.split(" ");


        // SPLITTING عبد AND الله
        for(let j in name_to_find_splited){
            for(let i = 0; i < name_to_find_splited[j].length; i++){
                if(name_to_find_splited[j].slice(i, i+5) == "الله"){
                    let letters = name_to_find_splited[j].split("");
                    letters.splice(i, 0, " ");
                    name_to_find_splited[j] = letters.join("");
                    break;
                }
                if(name_to_find_splited[j].slice(i, i+3) == "عبد"){
                    let letters = name_to_find_splited[j].split("");
                    letters.splice(i+3, 0, " ");
                    name_to_find_splited[j] = letters.join("");
                    break;
                }
            }
        }
        name_to_find = name_to_find_splited.join(" ");
        name_to_find_splited = name_to_find.split(" ");
        // SPLITTING عبد AND الله

        // REPLACING ALL أ,إ,آ WITH ا
        // REPLACING ALL ة WITH ه
        // REPLACING ALL ي IN THE END WITH ى
        let i = 0;
        while (i < name_to_find_splited.length){
            if (name_to_find_splited[i] == ''){
                name_to_find_splited.splice(i, 1);
                continue;
            }
            let y = name_to_find_splited[i].trim().split("");
            for (let j in y){
                if (y[j] == "أ" || y[j] == "آ" || y[j] == "إ"){
                    y[j] = "ا";
                }
            }
            name_to_find_splited[i] = y.join("");
            if (name_to_find_splited[i][name_to_find_splited[i].length - 1] == "ي"){
                let x = name_to_find_splited[i].split("");
                x[x.length - 1] = "ى";
                name_to_find_splited[i] = x.join("");
            }else if (name_to_find_splited[i][name_to_find_splited[i].length - 1] == "ة"){
                let x = name_to_find_splited[i].split("");
                x[x.length - 1] = "ه";
                name_to_find_splited[i] = x.join("");
            }
            i++
        }
        // REPLACING ALL أ,إ,آ WITH ا
        // REPLACING ALL ة WITH ه
        // REPLACING ALL ي IN THE END WITH ى


        let found = 0;
        let found_ind = 0;
        let index = [];
        let j = 0;
        let t_splited;
        let degree = -1;
        let rank = -1;
        let name;
        for (let t of names){
            

            // SPLITTING عبد AND الله
            t_splited = t.split(" ");
            for(let j in t_splited){
                for(let i = 0; i < t_splited[j].length; i++){
                    if(t_splited[j].slice(i, i+5) == "الله"){
                        let letters = t_splited[j].split("");
                        letters.splice(i, 0, " ");
                        t_splited[j] = letters.join("");
                        break;
                    }
                    if(t_splited[j].slice(i, i+3) == "عبد"){
                        let letters = t_splited[j].split("");
                        letters.splice(i+3, 0, " ");
                        t_splited[j] = letters.join("");
                        break;
                    }
                }
            }
            let temp = t_splited.join(" ");
            t_splited = temp.split(" ");
            // SPLITTING عبد AND الله
            
            // REPLACING ALL أ,إ,آ WITH ا
            // REPLACING ALL ة WITH ه
            // REPLACING ALL ي IN THE END WITH ى
            for (let i in t_splited){
                let y = t_splited[i].split("");
                for (let j in y){
                    if (y[j] == "أ" || y[j] == "آ" || y[j] == "إ"){
                        y[j] = "ا";
                    }
                }
                t_splited[i] = y.join("");
                if (t_splited[i][t_splited[i].length - 1] == "ي"){
                    let x = t_splited[i].split("");
                    x[x.length - 1] = "ى";
                    t_splited[i] = x.join("");
                }else if (t_splited[i][t_splited[i].length - 1] == "ة"){
                    let x = t_splited[i].split("");
                    x[x.length - 1] = "ه";
                    t_splited[i] = x.join("");
                }
            }
            // REPLACING ALL أ,إ,آ WITH ا
            // REPLACING ALL ة WITH ه
            // REPLACING ALL ي IN THE END WITH ى

            
            for (let i of name_to_find_splited){
                if (i == t_splited[j]){
                    found_ind++;
                }else{
                    found_ind = 0;
                    break;
                }
                j++;
            }
            if (found_ind > 0){
                found++;
                index.push(names.indexOf(t));
                found_ind = 0;
            }
            j = 0;
        }
        if (found != 0){
            document.getElementById("mes6").style.display = "none";
            document.getElementById("name3").style.display = "none";
            document.getElementById("mes7").style.display = "none";
            document.getElementById("mes8").style.display = "none";
            document.getElementById("degree3").style.display = "none";
            document.getElementById("rank3").style.display = "none";
            document.getElementById("error3").style.display = "none";
            let tbl = document.getElementById("tbl");
            tbl.style.display = "table";
            let ranks = [];
            let ranks_arng = [];
            let num = 1;

            // TO PRINT SEARCH RESULTS BY RANK
            for(let u of index){
                ranks.push(deg_arng.indexOf(deg[u]) + 1);
                ranks_arng.push(deg_arng.indexOf(deg[u]) + 1);
            }
            ranks_arng.sort(function(a, b){return a - b});
            // TO PRINT SEARCH RESULTS BY RANK

            // TO CLEAR THE OLD TABLE WHEN USER DO ANTHER SEARCH ALL
            while(tbl.hasChildNodes()){
                if(tbl.firstElementChild == tbl.lastElementChild){
                    break;
                }
                tbl.removeChild(tbl.lastChild);
            }
            // TO CLEAR THE OLD TABLE WHEN USER DO ANTHER SEARCH ALL
            
            for(let r of ranks_arng){
                let inner_index = index[ranks.indexOf(r)];
                let row = document.createElement("tr");
                let dataNum = document.createElement("td");
                let dataN = document.createElement("td");
                dataN.className = "name";
                let dataD = document.createElement("td");
                let dataR = document.createElement("td");
                dataNum.innerHTML = num;
                dataN.innerHTML = names[inner_index];
                dataD.innerHTML = deg[inner_index];
                dataR.innerHTML = deg_arng.indexOf(deg[inner_index]) + 1;
                row.appendChild(dataR);
                row.appendChild(dataD);
                row.appendChild(dataN);
                row.appendChild(dataNum);
                tbl.appendChild(row);
                num++;
            }
        }else{
            document.getElementById("mes6").style.display = "none";
            document.getElementById("name3").style.display = "none";
            document.getElementById("mes7").style.display = "none";
            document.getElementById("mes8").style.display = "none";
            document.getElementById("tbl").style.display = "none";
            document.getElementById("error3").style.display = "block";
            document.getElementById("error3").innerHTML = "Invalid name! please try again";
        }
    }
}

function rank_search(){
    if(document.getElementById("rankin").value != ""){
        let rank = parseInt(document.getElementById("rankin").value);
        let degree = deg_arng[rank - 1];
        let name_index = [];
        let space = "               ";
        for (let b in deg){
            if (degree == deg[b]){
                name_index.push(b);
            }
        }
        if (degree == undefined){
            document.getElementById("error2").style.display = "block";
            document.getElementById("mes3").style.display = "none";
            document.getElementById("mes4").style.display = "none";
            document.getElementById("mes5").style.display = "none";
            document.getElementById("name2").style.display = "none";
            document.getElementById("degree2").style.display = "none";
            document.getElementById("rank2").style.display = "none";
            document.getElementById("error2").innerHTML = "Invalid rank! please try again";
        }else{
            document.getElementById("mes3").style.display = "inline";
            document.getElementById("name2").style.display = "inline";
            document.getElementById("mes4").style.display = "block";
            document.getElementById("mes5").style.display = "block";
            document.getElementById("degree2").style.display = "inline";
            document.getElementById("rank2").style.display = "inline";
            document.getElementById("error2").style.display = "none";
            document.getElementById("degree2").innerHTML = degree;
            document.getElementById("rank2").innerHTML = deg_arng.indexOf(degree) + 1;
            document.getElementById("name2").innerHTML = "";
            if (name_index.length == 1){
                document.getElementById("name2").innerHTML += names[name_index[0]];
            }else{
                for (let n = 0; n < name_index.length; n++){
                    if((n + 1) == name_index.length){
                    document.getElementById("name2").innerHTML += names[name_index[n]];
                }else if ((n + 1) != name_index.length){
                    document.getElementById("name2").innerHTML += names[name_index[n]] + "<br>" + space;
                }
            }
            }
        }
    }
    console.log("Hello");
}

document.getElementById("degree").addEventListener('keyup', (e) => {
    if(e.keyCode == 13){
        degree_search();
    }
});


function degree_search(){    
    if(document.getElementById("degree").value != ""){
        let degree = parseFloat(document.getElementById("degree").value);
        let rank = deg_arng.indexOf(degree);
        let name_index = [];
        let space = "               ";
        for (let b in deg){
            if (degree == deg[b]){
                name_index.push(b);
            }
        }
        if (rank == -1){
            document.getElementById("error").style.display = "block";
            document.getElementById("mes0").style.display = "none";
            document.getElementById("mes1").style.display = "none";
            document.getElementById("mes2").style.display = "none";
            document.getElementById("name").style.display = "none";
            document.getElementById("degree1").style.display = "none";
            document.getElementById("rank").style.display = "none";
            document.getElementById("error").innerHTML = "Invalid degree! please try again";
        }else{
            document.getElementById("mes0").style.display = "inline";
            document.getElementById("name").style.display = "inline";
            document.getElementById("mes1").style.display = "block";
            document.getElementById("mes2").style.display = "block";
            document.getElementById("degree1").style.display = "inline";
            document.getElementById("rank").style.display = "inline";
            document.getElementById("error").style.display = "none";
            document.getElementById("rank").innerHTML = rank + 1;
            document.getElementById("degree1").innerHTML = deg_arng[rank];
            document.getElementById("name").innerHTML = "";
            if (name_index.length == 1){
                document.getElementById("name").innerHTML += names[name_index[0]];
            }else{
                for (let n = 0; n < name_index.length; n++){
                    if((n + 1) == name_index.length){
                        document.getElementById("name").innerHTML += names[name_index[n]];
                    }else if ((n + 1) != name_index.length){
                        document.getElementById("name").innerHTML += names[name_index[n]] + "<br>" + space;
                    }
                }
            }
        }
    }
}

document.getElementById("rankin").addEventListener('keyup', (e) => {
    if(e.keyCode == 13){
        rank_search();
    }
});


function focus_out1(){
    let input = document.getElementById("namein").value;
    if(input == ""){
        document.getElementById("mes6").style.display = "none";
        document.getElementById("mes7").style.display = "none";
        document.getElementById("mes8").style.display = "none";
        document.getElementById("name3").style.display = "none";
        document.getElementById("degree3").style.display = "none";
        document.getElementById("rank3").style.display = "none";
        document.getElementById("error3").style.display = "none";
        document.getElementById("tbl").style.display = "none";
    }
}
function focus_out2(){
    let input = document.getElementById("rankin").value;
    if(input == ""){
        document.getElementById("mes3").style.display = "none";
        document.getElementById("mes4").style.display = "none";
        document.getElementById("mes5").style.display = "none";
        document.getElementById("name2").style.display = "none";
        document.getElementById("degree2").style.display = "none";
        document.getElementById("rank2").style.display = "none";
        document.getElementById("error2").style.display = "none";
    }
}
function focus_out3(){
    let input = document.getElementById("degree").value;
    if(input == ""){
        document.getElementById("mes0").style.display = "none";
        document.getElementById("mes1").style.display = "none";
        document.getElementById("mes2").style.display = "none";
        document.getElementById("name").style.display = "none";
        document.getElementById("degree1").style.display = "none";
        document.getElementById("rank").style.display = "none";
        document.getElementById("error").style.display = "none";
    }
}

function btn_disable(){
    let namein = document.getElementById("namein").value;
    let rankin = document.getElementById("rankin").value;
    let degreein = document.getElementById("degree").value;
    if(namein == ""){
        document.getElementById("btn3").className = "btn";
        document.getElementById("btn4").className = "btn";
        document.getElementById("btn3").disabled = true;
        document.getElementById("btn4").disabled = true;
        document.getElementById("btn3").style.opacity = 0.5;
        document.getElementById("btn4").style.opacity = 0.5;
        document.getElementById("btn3").style.cursor = "not-allowed";
        document.getElementById("btn4").style.cursor = "not-allowed";
    }else{
        document.getElementById("btn3").className = "btn anim";
        document.getElementById("btn4").className = "btn anim";
        document.getElementById("btn3").disabled = false;
        document.getElementById("btn4").disabled = false;
        document.getElementById("btn3").style.opacity = 1;
        document.getElementById("btn4").style.opacity = 1;
        document.getElementById("btn3").style.cursor = "pointer";
        document.getElementById("btn4").style.cursor = "pointer";
    }
    if(rankin == ""){
        document.getElementById("btn2").className = "btn";
        document.getElementById("btn2").disabled = true;
        document.getElementById("btn2").style.opacity = 0.5;
        document.getElementById("btn2").style.cursor = "not-allowed";
    }else{
        document.getElementById("btn2").className = "btn anim";
        document.getElementById("btn2").disabled = false;
        document.getElementById("btn2").style.opacity = 1;
        document.getElementById("btn2").style.cursor = "pointer";
    }
    if(degreein == ""){
        document.getElementById("btn").className = "btn";
        document.getElementById("btn").disabled = true;
        document.getElementById("btn").style.opacity = 0.5;
        document.getElementById("btn").style.cursor = "not-allowed";
    }else{
        document.getElementById("btn").className = "btn anim";
        document.getElementById("btn").disabled = false;
        document.getElementById("btn").style.opacity = 1;
        document.getElementById("btn").style.cursor = "pointer";
    }
}
setInterval(btn_disable);