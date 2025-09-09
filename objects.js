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
