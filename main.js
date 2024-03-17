var christianHovered = 0;
var christianLerp = 0;

const sleep = ms => new Promise(r => setTimeout(r, ms));

function lerp( a, b, alpha ) {
    return a + alpha * (b - a)
}


async function christianMove(yes) {
    christianHovered = yes;
    for (var i = 0; i<60; i++) {
        christianLerp = lerp(christianLerp, christianHovered, 0.05);
        document.getElementById("christianBillede").style.scale = 1+christianLerp*0.10;
        document.getElementById("christianBillede").style.filter = "brightness("+(christianLerp/3.0+0.66)+")";
        await sleep(16.66);
    }
}