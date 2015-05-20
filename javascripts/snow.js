window.onload = function(){
	var canvas = document.getElementById("snow");
	var context = canvas.getContext("2d");

	var W = window.innerWidth;
	var H = window.innerHeight;
	canvas.width = W;
	canvas.height = H;

	var max =50;
	var particles = [];

	for(var i=0;i<max;i++){
		particles.push({
			x: Math.random()*W,
			y: Math.random()*H,
			r: Math.random()*4+1,
			d: Math.random()*max
		})
	}

	//draw
	function draw()
	{
		context.clearRect(0, 0, W, H);
		
		context.fillStyle = "rgba(255, 255, 255, 0.8)";
		context.beginPath();
		for(var i = 0; i < max; i++)
		{
			var p = particles[i];
			context.moveTo(p.x, p.y);
			context.arc(p.x, p.y, p.r, 0, Math.PI*2, true);
		}
		context.fill();
		update();
	}
	
	
	var angle = 0;
	function update()
	{
		angle += 0.01;
		for(var i = 0; i < max; i++)
		{
			var p = particles[i];
			p.y += Math.cos(angle+p.d) + 1 + p.r/2;
			p.x += Math.sin(angle) * 2;
			
			if(p.x > W+5 || p.x < -5 || p.y > H)
			{
				if(i%3 > 0) //66.67% of the flakes
				{
					particles[i] = {x: Math.random()*W, y: -10, r: p.r, d: p.d};
				}
				else
				{
					//If the flake is exitting from the right
					if(Math.sin(angle) > 0)
					{
						//Enter from the left
						particles[i] = {x: -5, y: Math.random()*H, r: p.r, d: p.d};
					}
					else
					{
						//Enter from the right
						particles[i] = {x: W+5, y: Math.random()*H, r: p.r, d: p.d};
					}
				}
			}
		}
	}
	
	//animation loop
	setInterval(draw, 33);
}


