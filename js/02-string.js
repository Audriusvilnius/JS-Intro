/*
STRING - tekstas
reiksmes konstravimas:
- viengubos kabutes (')
- dvygubos kabutes (")
- bektikas/apostrofas (`)

Specialusis atvejis:
- jei tekste yra kabutes, jas norint padaryti ne komandiniu simboliu, o tekstiniu simboliu, galima ta kabute "eskeipinti" -> \

*/

console.log('2' + '2');
console.log(2 + 2);
console.log(2 + '2');
console.log('2' + 2);

const firstName = 'Petras';
console.log(firstName);

const lastName = "Petraitis";
console.log(lastName);

const fullName = firstName + ' ' + lastName;
console.log(fullName);

const kabutes = 'Cia tures buti 2 kabutes.';
console.log(kabutes);

const kabutes2 = 'Dvyguba kabute (").';
console.log(kabutes2);

const kabutes1 = "Vienguba kabute (').";
console.log(kabutes1);

// const kabutes11 = 'Vienguba (') ir dvyguba (") kabutes.';
const kabutesSplit = "Vienguba (') ir" + ' dvyguba (") kabutes.';
console.log(kabutesSplit);

const kabutes11 = 'Vienguba (\') ir dvyguba (") kabutes.';
console.log(kabutes11);

const kabutes22 = "Vienguba (') ir dvyguba (\") kabutes.";
console.log(kabutes22);

const kabutes12 = "Vienguba (\') ir dvyguba (\") kabutes.";
console.log(kabutes12);

const multiline = 'AAAAAAAA\n\r\
bbbb';
console.log(multiline);

const HTML = '<header>\n\r\
                <img>\n\r\
                <nav>\n\r\
                    <a></a>\n\r\
                    <a></a>\n\r\
                    <a></a>\n\r\
                </nav>\n\r\
            </header>';
console.log(HTML);

const backtip = `Kabute.`;
console.log(backtip);

const backtip12 = `Vienguba (') ir dvyguba (") kabutes.`;
console.log(backtip12);

const backtip123 = `Vienguba ('), dvyguba (") ir backtip (\`) kabutes.`;
console.log(backtip123);


const HTML2 = `<header>
    <img>
    <nav>
        <a></a>
        <a></a>
        <a></a>
    </nav>
</header>`;

console.log(HTML2);

console.log('------------');

// Hi there, Chuck!
const username = 'Chuck';

const hi1 = 'Hi there, ' + username + '!';
console.log(hi1);

const hi2 = "Hi there, " + username + "!";
console.log(hi2);

const hi3 = `Hi there, ` + username + `!`;
console.log(hi3);

const hiBacktik = `Hi there, ${username}!`;
console.log(hiBacktik);

const n1 = 7;
const n2 = 5;
const sum = n1 + n2;

const sumStringKabute = n1 + ' + ' + n2 + ' = ' + sum;
console.log(sumStringKabute);

const sumStringKabute2 = n1 + ' + ' + n2 + ' = ' + n1 + n2;
console.log(sumStringKabute2);

const sumStringKabute3 = n1 + ' + ' + n2 + ' = ' + (n1 + n2);
console.log(sumStringKabute3);

const sumString = `${n1} + ${n2} = ${sum}`;
console.log(sumString);

const sumString2 = `${n1} + ${n2} = ${n1 + n2}`;
console.log(sumString2);

const demoBacktip = '${n1} + ${n2} = ${n1 + n2}';
console.log(demoBacktip);