var tablero;

var tresRaya = function(con){
	this.x = 0;
	this.y = 0;
	this.contexto = con;
	this.equis = false;
	this.circulo = false;
	this.finJuego = false;
	this.actual ="";
	this.coordenadas = {
		a : {
			x : 100,
			y : 10,
			bloqueado : false,
			actual : ""
		},
		b : {
			x : 300,
			y : 10,
			bloqueado : false,
			actual : ""
		},
		c : {
			x : 500,
			y : 10,
			bloqueado : false,
			actual : ""
		},



		d : {
			x : 100,
			y : 210,
			bloqueado : false,
			actual : ""
		},
		e : {
			x : 300,
			y : 210,
			bloqueado : false,
			actual : ""
		},
		f : {
			x : 500,
			y : 210,
			bloqueado : false,
			actual : ""
		},



		g : {
			x : 100,
			y : 410,
			bloqueado : false,
			actual : ""
		},
		h : {
			x : 300,
			y : 410,
			bloqueado : false,
			actual : ""
		},
		i : {
			x : 500,
			y : 410,
			bloqueado : false,
			actual : ""
		}
	}
}

tresRaya.prototype.dibujar = function(canvas_x,canvas_y) {
	var dibujo = this.contexto;
	var coordenadas = this.verificarCoordenada(canvas_x,canvas_y);
	this.lineaVertical(dibujo,200);
	this.lineaVertical(dibujo,400);
	this.lineaHorizontal(dibujo,200);
	this.lineaHorizontal(dibujo,400);
	if(this.finJuego){
		alert("Fin del Juego");
		return false;
	}else{
		if(this.circulo)
		{
			if(this.actual != "O")
			{
				if(!coordenadas.bloqueado){
					this.dibujarCirculo(dibujo,coordenadas.x,coordenadas.y);
					coordenadas.bloqueado = true;
					coordenadas.actual = "O";
					this.actual="O";
					this.verificarGanador(dibujo);
				}
			}else{
				alert("Es Turno de la Equis")
			}
			
		}
		
		if(this.equis)
		{
			if(this.actual != "X")
			{
				if(!coordenadas.bloqueado){
				this.dibujarEquis(dibujo,coordenadas.x,coordenadas.y);
				coordenadas.bloqueado = true;
				coordenadas.actual = "X";
				this.actual = "X";
				this.verificarGanador(dibujo);
				}
			}else{
				alert("Es Turno del Circulo")
			}
			
			console.log(coordenadas);
			
		}
	}
	

	
};
tresRaya.prototype.verificarCoordenada = function(canvas_x,canvas_y) {
	if(canvas_x <= 200 && canvas_y <= 200){
		return this.coordenadas.a;
	}

	if((canvas_x > 200 && canvas_x <= 400) && canvas_y <= 200){
		return this.coordenadas.b;
	}

	if((canvas_x > 400 && canvas_x <= 600) && canvas_y <= 200){
		return this.coordenadas.c;
	}

    //tyutyutyutyu


	if(canvas_x <= 200 && canvas_y <= 400){
		return this.coordenadas.d;
	}

	if((canvas_x > 200 && canvas_x <= 400) && (canvas_y > 200 && canvas_y <=400)){
		return this.coordenadas.e;
	}

	if((canvas_x > 400 && canvas_x <= 600) && (canvas_y > 200 && canvas_y <=400)){
		return this.coordenadas.f;
	}

	//asdasfsdsdfsdfsdf

	if(canvas_x <= 200 && canvas_y <= 600){
		return this.coordenadas.g;
	}

	if((canvas_x > 200 && canvas_x <= 400) && (canvas_y > 400 && canvas_y <=600)){
		return this.coordenadas.h;
	}

	if((canvas_x > 400 && canvas_x <= 600) && (canvas_y > 400 && canvas_y <=600)){
		return this.coordenadas.i;
	}
};

tresRaya.prototype.lineaDiagonal = function(con,x,y,w,z) {
	var dibujo = con;
	dibujo.beginPath();
	dibujo.moveTo(x,y);
	dibujo.lineTo(w,z);

	
	dibujo.strokeStyle = "#000000";
	dibujo.lineWidth = 15;
	dibujo.stroke();
	dibujo.closePath();
};

tresRaya.prototype.lineaVertical = function(con,x) {
	var dibujo = con;
	dibujo.beginPath();
	dibujo.moveTo(x,0);
	dibujo.lineTo(x,600);
	dibujo.lineWidth = 15;
	
		dibujo.strokeStyle ="#000000";
	
	
	dibujo.stroke();
	dibujo.closePath();
};

tresRaya.prototype.lineaHorizontal = function(con,y) {
	var dibujo = con;
	dibujo.beginPath();
	dibujo.moveTo(0,y);
	dibujo.lineTo(600,y);
	dibujo.lineWidth = 15;
	
		dibujo.strokeStyle ="#000000";
	
	
	dibujo.stroke();
	dibujo.closePath();
};

tresRaya.prototype.dibujarCirculo = function(con,x,y) {
	var dibujo = con;

	dibujo.beginPath();
	dibujo.arc(x,y+90,90,0,Math.PI * 2,false);
	dibujo.strokeStyle = "#F00";
	dibujo.lineWidth = 5;
	dibujo.stroke();
	dibujo.closePath();
};

tresRaya.prototype.dibujarEquis = function(con,x,y) {
	var dibujo = con;
	dibujo.beginPath();
	dibujo.moveTo(x+80,y);
	dibujo.lineTo(x-80,y+170)
	dibujo.moveTo(x-80,y);
	dibujo.lineTo(x+80,y+170)


	dibujo.strokeStyle = "blue";
	dibujo.lineWidth = 5;
	dibujo.stroke();
	dibujo.closePath();
};

tresRaya.prototype.verificarGanador = function(cont) {
	coordenadas = this.coordenadas
	if(coordenadas.a.actual != "" && coordenadas.b.actual !="" && coordenadas.c.actual != "")
	{
		if(coordenadas.a.actual == coordenadas.b.actual && coordenadas.b.actual == coordenadas.c.actual)
		{
			this.lineaHorizontal(cont,100);
			this.finJuego = true;
		}
	}
	

	if(coordenadas.d.actual != "" && coordenadas.e.actual !="" && coordenadas.f.actual != "")
	{
		if(coordenadas.d.actual == coordenadas.e.actual && coordenadas.e.actual == coordenadas.f.actual)
		{
			this.lineaHorizontal(cont,300);
			this.finJuego = true;
		}
		
	}

	if(coordenadas.g.actual != "" && coordenadas.h.actual !="" && coordenadas.i.actual != "")
	{
		if(coordenadas.g.actual == coordenadas.h.actual && coordenadas.h.actual == coordenadas.i.actual)
		{
			this.lineaHorizontal(cont,500);
			this.finJuego = true;
		}
		
	}

// VERTICALES

	if(coordenadas.a.actual != "" && coordenadas.d.actual !="" && coordenadas.g.actual != "")
	{
		if(coordenadas.a.actual == coordenadas.d.actual && coordenadas.d.actual == coordenadas.g.actual)
		{
			this.lineaVertical(cont,100);
			this.finJuego = true;
		}
	}

	if(coordenadas.b.actual != "" && coordenadas.e.actual !="" && coordenadas.h.actual != "")
	{
		if(coordenadas.b.actual == coordenadas.e.actual && coordenadas.e.actual == coordenadas.h.actual)
		{
			this.lineaVertical(cont,300);
			this.finJuego = true;
		}
	}

	if(coordenadas.c.actual != "" && coordenadas.f.actual !="" && coordenadas.i.actual != "")
	{
		if(coordenadas.c.actual == coordenadas.f.actual && coordenadas.f.actual == coordenadas.i.actual)
		{
			this.lineaVertical(cont,500);
			this.finJuego = true;
		}
	}

	// DIAGONALES

	if(coordenadas.a.actual != "" && coordenadas.e.actual !="" && coordenadas.i.actual != "")
	{
		if(coordenadas.a.actual == coordenadas.e.actual && coordenadas.e.actual == coordenadas.i.actual)
		{
			this.lineaDiagonal(cont,0,0,600,600);
			this.finJuego = true;
		}
	}

	if(coordenadas.c.actual != "" && coordenadas.e.actual !="" && coordenadas.g.actual != "")
	{
		if(coordenadas.c.actual == coordenadas.e.actual && coordenadas.e.actual == coordenadas.g.actual)
		{
			this.lineaDiagonal(cont,600,0,0,600);
			this.finJuego = true;
		}
	}


};

function inicio(){
	var canvas = document.getElementById('campo');

	var btnEquis = document.getElementById("equis");
	var btnCirculo = document.getElementById("circulo");



	contexto = canvas.getContext("2d");
	tablero = new tresRaya(contexto);

	canvas.addEventListener("mousedown",function(event){
		if(!tablero.equis && !tablero.circulo){
			alert("Seleccione Equis o Circulo para Jugar");
		}
		canvas_x = event.pageX;
		canvas_y = event.pageY;
		tablero.dibujar(canvas_x,canvas_y);
	
	})

	btnEquis.addEventListener("click",function(){
		tablero.equis = true;
		tablero.circulo = false;
	});

	btnCirculo.addEventListener("click",function(){
		tablero.equis = false;
		tablero.circulo = true;
	});

	tablero.dibujar();
	
	
}