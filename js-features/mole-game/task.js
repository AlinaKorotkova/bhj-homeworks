let hitTarget = 0;
let missedTarget = 0;
for (let i = 1; i < 10; i++) {
	let targetHole = document.getElementById('hole' + i);
	targetHole.onclick = () => {
		if (targetHole.className.includes('hole hole_has-mole')) {
			hitTarget += 1;
			document.getElementById('dead').textContent = hitTarget;
			if (hitTarget === 10) {
				alert('Вы одержали победу!');
				dead.textContent = 0;
				lost.textContent = 0;
			}
		} else {
			missedTarget += 1;
			document.getElementById('lost').textContent = missedTarget;
			if (missedTarget === 5) {
				alert('Поражение!');
				dead.textContent = 0;
				lost.textContent = 0;
			}
		}
	}
}