let informasjonsteknologi1 = {
spraak: ["HTML", "CSS"],
likerFaget: false,
timetall: 3,
klasserom: "Vet ikke",
antallElever: "sånn 3"

};

informasjonsteknologi1.spraak.push('JavaScript');


informasjonsteknologi1.antallElever = "sånn 3";

informasjonsteknologi1.likerFaget = true;

delete informasjonsteknologi1.timetall;

console.log('--- Programmeringsspråk ---');
for (let i = 0; i < informasjonsteknologi1.spraak.length; i++) {
	console.log(informasjonsteknologi1.spraak[i]);
}


console.log('--- Egenskaper (nøkler) ---');
for (let key in informasjonsteknologi1) {
	if (informasjonsteknologi1.hasOwnProperty(key)) {
		console.log(key);
	}
}


console.log('--- Verdier ---');
for (let key in informasjonsteknologi1) {
	if (informasjonsteknologi1.hasOwnProperty(key)) {
		console.log(informasjonsteknologi1[key]);
	}
}


const resultDiv = document.getElementById('result');
if (resultDiv) {
	resultDiv.innerHTML = `
		<h2>Objektet etter endringer</h2>
		<p class="result-item"><b>Klasserom:</b> ${informasjonsteknologi1.klasserom}</p>
		<p class="result-item"><b>Antall elever:</b> ${informasjonsteknologi1.antallElever}</p>
		<p class="result-item"><b>Liker faget:</b> ${informasjonsteknologi1.likerFaget}</p>
		<h2>Programmeringsspråk</h2>
		<ul id="sprak-list"></ul>
		<h2>Alle egenskaper (nøkler)</h2>
		<pre id="keys"></pre>
		<h2>Alle verdier</h2>
		<pre id="values"></pre>
	`;

	const sprakList = document.getElementById('sprak-list');
	informasjonsteknologi1.spraak.forEach(s => {
		const li = document.createElement('li');
		li.textContent = s;
		sprakList.appendChild(li);
	});

	const keysPre = document.getElementById('keys');
	const valuesPre = document.getElementById('values');
	keysPre.textContent = Object.keys(informasjonsteknologi1).join('\n');
	valuesPre.textContent = Object.values(informasjonsteknologi1).map(v => {
		if (Array.isArray(v)) return v.join(', ');
		return String(v);
	}).join('\n');
} else {
	console.warn('Fant ikke #result i dokumentet — sørg for at index.html har et element med id="result"');
}


console.log('Endelig objekt:', JSON.stringify(informasjonsteknologi1, null, 2));

// -------------------------
// Oppgave 2
// 2a: Lag en array med 10 film-objekter (tittel, regissor, sett)
const filmer = [
	{ tittel: 'Inception', regissor: 'Christopher Nolan', sett: true },
	{ tittel: 'The Matrix', regissor: 'Lana Wachowski & Lilly Wachowski', sett: true },
	{ tittel: 'Parasite', regissor: 'Bong Joon-ho', sett: false },
	{ tittel: 'Interstellar', regissor: 'Christopher Nolan', sett: true },
	{ tittel: 'The Godfather', regissor: 'Francis Ford Coppola', sett: false },
	{ tittel: 'Spirited Away', regissor: 'Hayao Miyazaki', sett: false },
	{ tittel: 'The Room', regissor: 'Tommy Wiseau', sett: false },
	{ tittel: 'Amélie', regissor: 'Jean-Pierre Jeunet', sett: false },
	{ tittel: 'The Shawshank Redemption', regissor: 'Frank Darabont', sett: true },
	{ tittel: 'Pulp Fiction', regissor: 'Quentin Tarantino', sett: false }
];

// 2b: bruk en løkke for å gå gjennom arrayen og skrive tittel og regissør til konsollen
console.log('\n--- Filmer (opprinnelig rekkefølge) ---');
filmer.forEach(f => console.log(`${f.tittel} — ${f.regissor}`));

// 2c: sorter objektene i arrayen etter filmtittel
const filmerSortert = [...filmer].sort((a, b) => a.tittel.localeCompare(b.tittel, 'no'));
console.log('\n--- Filmer (sortert etter tittel) ---');
filmerSortert.forEach(f => console.log(`${f.tittel} — ${f.regissor}`));

// 2d: legg til en tekst foran hver tittel som antyder om du har sett filmen eller ikke
console.log('\n--- Filmer med sett/ikke sett ---');
filmerSortert.forEach(f => {
	const prefix = f.sett ? '[Sett]' : '[Ikke sett]';
	console.log(`${prefix} ${f.tittel} — ${f.regissor}`);
});

// Vis film-listene på siden under #result
if (resultDiv) {
	// Legg til en seksjon for Oppgave 2
	resultDiv.innerHTML += `
		<h2>Oppgave 2 — Filmer</h2>
		<h3>Opprinnelig</h3>
		<ul id="filmer-opprinnelig"></ul>
		<h3>Sortert etter tittel</h3>
		<ul id="filmer-sortert"></ul>
	`;

	const ulOpprinnelig = document.getElementById('filmer-opprinnelig');
	filmer.forEach(f => {
		const li = document.createElement('li');
		li.textContent = `${f.tittel} — ${f.regissor}`;
		ulOpprinnelig.appendChild(li);
	});

	const ulSortert = document.getElementById('filmer-sortert');
	filmerSortert.forEach(f => {
		const li = document.createElement('li');
		const prefix = f.sett ? 'Sett: ' : 'Ikke sett: ';
		li.textContent = `${prefix}${f.tittel} — ${f.regissor}`;
		ulSortert.appendChild(li);
	});
}

