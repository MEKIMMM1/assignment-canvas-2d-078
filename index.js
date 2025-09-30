import { getContext, FPS, mouse } from "./utils-module.js";
// กำหนดชื่อเรื่องของเอกสาร HTML
document.title = "A01 - App Graphics 2D";
// กำหนดให้ฟังก์ชัน main ทำงานเมื่อ DOM ถูกโหลดเสร็จสมบูรณ์
document.addEventListener("DOMContentLoaded", main);

// ฟังก์ชันหลักที่ใช้ในการเริ่มต้นแอปพลิเคชัน ทำงานเมื่อ DOM ถูกโหลดเสร็จสมบูรณ์
function main(ev) {
	// เข้าถึง context ของ canvas ที่มี id เป็น "myCanvas"
	const ctx = getContext("#myCanvas");
	let mousePos = { x: 0, y: 0 };
	let speedx = 10;
	let cloadx = 0;
	let cloadx2 = 0;
	// อัปเดตตำแหน่งของเมาส์เมื่อมีการขยับเมาส์
	document.addEventListener("mousemove", function(e) {
		mousePos = { x: e.offsetX, y: e.offsetY };
	});

	// กำหนดค่าเริ่มต้นสำหรับแอปพลิเคชันในรูปแบบของอ็อบเจกต์ config
	const config = {
		width : 800,
		height : 600,
		bgColor : "rgba(32, 167, 219, 1)",
		debug : true, // เปิดใช้งานโหมดดีบัก
	};
	
    // กำหนดขนาดของ canvas ตามค่าใน config
	ctx.canvas.width = config.width;
	ctx.canvas.height = config.height;

	function draw() {
		// ใช้ FPS สำหรับการวัดอัตราเฟรมต่อวินาที
		FPS.update();

		// กำหนดสีพื้นหลังของ canvas และใช้ fillRect เพื่อเติมสีพื้นหลัง
		ctx.fillStyle = config.bgColor;
		ctx.fillRect(0, 0, config.width, config.height);

		//ขนาดและสีของข้อความ ของเมาส์
		ctx.font = "16px Arial";
		ctx.fillStyle = "black";

		//แสดงตำแหน่งของเมาส์
		ctx.fillText("Mouse: " + mousePos.x + ", " + mousePos.y, config.width - 130, 20);
		
		// ภูเขาขนาดกลาง ลูก 1
		ctx.beginPath();
		ctx.moveTo(-90, 220);
		ctx.quadraticCurveTo(110, -60, 250, 220);
		ctx.closePath();
		//ส่วนของเส้นขอบ
		ctx.strokeStyle = "rgba(0, 0, 0, 1)";
		ctx.lineWidth = 3;
		ctx.stroke();
		ctx.fillStyle = "rgba(19, 104, 2, 1)";
		ctx.fill();

		// ภูเขาใหญ่
		ctx.beginPath();
		ctx.moveTo(400, 220);
		ctx.quadraticCurveTo(650, -130, 900, 220);
		ctx.closePath();
		//ส่วนของสีและเส้นขอบ
		ctx.strokeStyle = "rgba(0, 0, 0, 1)";
		ctx.lineWidth = 3;
		ctx.stroke();
		ctx.fillStyle = "rgba(19, 104, 2, 1)";
		ctx.fill();

		// ภูเขาลูกเล็ก
		ctx.beginPath();
		ctx.moveTo(300, 220);
		ctx.quadraticCurveTo(370, 90, 440, 220);
		ctx.closePath();
		//ส่วนของสีและเส้นขอบ
		ctx.strokeStyle = "rgba(0, 0, 0, 1)";
		ctx.lineWidth = 3;
		ctx.stroke();
		ctx.fillStyle = "rgba(19, 104, 2, 1)";
		ctx.fill();
		
		//รัสมีพระอาทิตย์
		const gradient = ctx.createRadialGradient(450, 60, 15, 450, 60, 55); // จุดศูนย์กลาง (450, 60), รัศมีใน (10), รัศมีนอก (55)
		gradient.addColorStop(0, "rgba(255, 60, 0, 0.62)"); // สีภายใน
		gradient.addColorStop(1, "rgba(239, 174, 21, 0.4)"); // สีภายนอก
		//วงกลมรัศมีพระอาทิตย์
		ctx.beginPath(); 
		ctx.arc(450, 60, 50, 0, Math.PI * 2); // วาดวงกลมที่มีรัศมี 50
		ctx.closePath(); 
		ctx.fillStyle = gradient; //การไล่สีแบบรัศมี
		ctx.fill();
		ctx.closePath();
		
		//พระอาทิตย์
		ctx.beginPath();
		ctx.arc(450, 60, 30, 0, Math.PI * 2);
		ctx.closePath();
		//ส่วนของสีและเส้นขอบ
		ctx.fillStyle = "rgba(241, 178, 30, 0.77)";
		ctx.fill();
	

		//เส้นตรงตัดภูเขา
		ctx.beginPath();
		ctx.moveTo(0, 220);
		ctx.lineTo(800, 220);
		ctx.closePath();
		ctx.strokeStyle = "rgba(0, 0, 0, 1)";
		ctx.lineWidth = 2;
		ctx.stroke();


		//พื้นที่ของทุ่งหญ้า
		ctx.fillStyle = "rgba(33, 100, 33, 1)";
		ctx.fillRect(0, 220, 800, 380);

		//ท้องนา
		ctx.beginPath();
		ctx.moveTo(10, 440);
		ctx.lineTo(260, 440);
		ctx.lineTo(260, 590);
		ctx.lineTo(10, 590);
		ctx.closePath();
		ctx.fillStyle = "rgba(167, 125, 66, 1)";
		ctx.fill();
		ctx.lineWidth = 8;
		ctx.strokeStyle = "rgba(20, 57, 16, 0.91)";
		ctx.stroke();

		//แบ่งท้องนา 3 * 5 ช่อง
		for (let i = 0; i < 3; i++) { // 3 แถว
			for (let j = 0; j < 5; j++) { // 5 คอลัมน์
				ctx.beginPath(); 
				ctx.rect(10 + j * 50, 440 + i * 50, 50, 50); // สร้างสี่เหลี่ยมขนาด 50x50
				ctx.fillStyle = "rgba(107, 66, 38, 0.85)";
				ctx.fill(); 
				ctx.lineWidth = 3;
				ctx.strokeStyle = "rgba(70, 47, 30, 0.6)";
				ctx.stroke();
			}
		}

		//ต้นข้าววิเศษ
		//ต้นข้าวแบบตัว v กลับหัว
		const riceStartY = 430; // จุดเริ่มต้นแนวตั้งของทุ่งนา
		const riceEndY = 590;   // จุดสิ้นสุดแนวตั้งของทุ่งนา
		const riceStartX = 20;  // จุดเริ่มต้นแนวนอน
		const riceEndX = 265;   // จุดสิ้นสุดแนวนอน
		const riceStepX = 39;   // ระยะห่างแต่ละต้นแนวนอน
		const riceStepY = 23.9;   // ระยะห่างแต่ละต้นแนวตั้ง
		for (let y = riceStartY; y < riceEndY; y += riceStepY) {
			for (let x = riceStartX; x < riceEndX; x += riceStepX) {
				ctx.beginPath();
				ctx.moveTo(x - 9, y + 14); // ปลายซ้ายของ v
				ctx.lineTo(x, y);          // ปลายล่างของ v
				ctx.lineTo(x + 4, y + 15); // ปลายขวาของ v
				ctx.strokeStyle = "#3e7d1c";
				ctx.lineWidth = 3;
				ctx.stroke();
			}
		}
				

		// ต้นไม้ 
		// คำนวณ offset เพื่อย้ายต้นไม้ไปที่ตำแหน่งใหม่
		const dx = 35 - (85); 
		const dy = 320 - (370);

		// ใบไม้
		ctx.beginPath();
		ctx.moveTo(85*1.15 + dx, 370*1.05 + dy);
		ctx.quadraticCurveTo(-30*1.35 + dx, 320*1.15 + dy, 25*1.05 + dx, 310*1.05 + dy); 
		ctx.quadraticCurveTo(10*1.15 + dx, 240*1.15 + dy, 90*1.05 + dx, 270*0.95 + dy);
		ctx.quadraticCurveTo(190*1.35 + dx, 210*1.15 + dy, 150*1.15 + dx, 290*1.05 + dy);
		ctx.quadraticCurveTo(190*1.15 + dx, 210*1.05 + dy, 250*1.05 + dx, 310*1.05 + dy);
		ctx.quadraticCurveTo(220*1.35 + dx, 350*1.05 + dy, 150*1.15 + dx, 370*1.05 + dy);
		ctx.closePath();
		ctx.strokeStyle = "black";
		ctx.lineWidth = 4;
		ctx.stroke();
		ctx.fillStyle = "rgba(7, 74, 7, 1)";
		ctx.fill();

		// ลำต้น
		ctx.beginPath();
		ctx.lineWidth = 4;
		ctx.strokeStyle = "black";
		ctx.moveTo(85*1.2 + dx, 450*1.05 + dy);
		ctx.quadraticCurveTo(110*1.2 + dx, 400*1.05 + dy, 70*1.05 + dx, 310*1.05 + dy);
		ctx.lineTo(110*1.15 + dx, 365*1.05 + dy);
		ctx.lineTo(120*1.15 + dx, 320*1.05 + dy);
		ctx.lineTo(130*1.15 + dx, 360*1.05 + dy);
		ctx.lineTo(170*1.05 + dx, 310*1.15 + dy);
		ctx.quadraticCurveTo(110*1.3 + dx, 380*1.15 + dy, 155*1.15 + dx, 450*1.05 + dy);
		ctx.closePath();
		ctx.stroke();
		ctx.fillStyle = "rgba(96, 55, 14, 1)";
		ctx.fill();

		// ต้นไม้ขนาดเล็ก (ต้นที่ 2)
		// คำนวณ offset เพื่อย้ายต้นไม้ไปที่ตำแหน่งใหม่
		const dx2 = 435 - (85);
		const dy2 = 420 - (370);

		// ใบไม้
		ctx.beginPath();
		ctx.moveTo(85*0.8 + dx2, 370*0.7 + dy2);
		ctx.quadraticCurveTo(-30*1.0 + dx2, 320*0.8 + dy2, 25*0.7 + dx2, 310*0.7 + dy2);
		ctx.quadraticCurveTo(10*0.8 + dx2, 240*0.8 + dy2, 90*0.7 + dx2, 270*0.6 + dy2);
		ctx.quadraticCurveTo(190*1.0 + dx2, 210*0.8 + dy2, 150*0.8 + dx2, 290*0.7 + dy2);
		ctx.quadraticCurveTo(190*0.8 + dx2, 240*0.7 + dy2, 250*0.7 + dx2, 310*0.7 + dy2);
		ctx.quadraticCurveTo(220*1.0 + dx2, 350*0.7 + dy2, 150*0.8 + dx2, 370*0.7 + dy2);
		ctx.closePath();
		ctx.strokeStyle = "black";
		ctx.lineWidth = 3;
		ctx.stroke();
		ctx.fillStyle = "rgba(7, 74, 7, 1)";
		ctx.fill();

		// ลำต้น
		ctx.beginPath();
		ctx.lineWidth = 3;
		ctx.strokeStyle = "black";
		ctx.moveTo(85*0.9 + dx2, 450*0.7 + dy2);
		ctx.quadraticCurveTo(110*0.9 + dx2, 400*0.7 + dy2, 70*0.7 + dx2, 310*0.7 + dy2);
		ctx.lineTo(110*0.8 + dx2, 365*0.7 + dy2);
		ctx.lineTo(120*0.8 + dx2, 320*0.7 + dy2);
		ctx.lineTo(130*0.8 + dx2, 360*0.7 + dy2);
		ctx.lineTo(170*0.7 + dx2, 310*0.8 + dy2);
		ctx.quadraticCurveTo(110*1.0 + dx2, 380*0.8 + dy2, 155*0.8 + dx2, 450*0.7 + dy2);
		ctx.closePath();
		ctx.stroke();
		ctx.fillStyle = "rgba(96, 55, 14, 1)";
		ctx.fill();

		//บ้าน
		// ตัวบ้าน
		ctx.beginPath();
		ctx.moveTo(500, 480); // จุดเริ่มต้นที่มุมซ้ายล่างของบ้าน
		ctx.lineTo(770, 480); // เส้นตรงไปยังมุมขวาล่างของบ้าน
		ctx.lineTo(770, 345); // เส้นตรงไปยังมุมขวาบนของบ้าน
		ctx.lineTo(500, 345); // เส้นตรงไปยังมุมซ้ายบนของบ้าน
		ctx.closePath(); 
		ctx.strokeStyle = "black"; 
		ctx.lineWidth = 3; 
		ctx.stroke(); 
		ctx.fillStyle = "rgba(255, 228, 181, 1)";
		ctx.fill(); 

		//ห้องกันประตู
		ctx.beginPath();
		ctx.moveTo(500, 480); // จุดเริ่มต้นที่มุมซ้ายล่างของบ้าน
		ctx.lineTo(590, 480); // เส้นตรงไปยังมุมขวาล่างของบ้าน
		ctx.lineTo(590, 345); // เส้นตรงไปยังมุมขวาบนของบ้าน
		ctx.lineTo(500, 345); // เส้นตรงไปยังมุมซ้ายบนของบ้าน
		ctx.closePath(); 
		ctx.strokeStyle = "black";
		ctx.lineWidth = 3;
		ctx.stroke(); 
		ctx.fillStyle = "rgba(255, 228, 181, 1)";
		ctx.fill();

		//หน้าต่างบ้าน
		ctx.beginPath();
		ctx.moveTo(635, 440); // จุดเริ่มต้นที่มุมซ้ายบนของหน้าต่าง
		ctx.lineTo(720, 440); // เส้นตรงไปยังมุมขวาบนของหน้าต่าง
		ctx.lineTo(720, 370); // เส้นตรงไปยังมุมขวาล่างของหน้าต่าง
		ctx.lineTo(635, 370); // เส้นตรงไปยังมุมซ้ายล่างของหน้าต่าง
		ctx.closePath(); 
		ctx.strokeStyle = "black"; 
		ctx.lineWidth = 3; 
		ctx.stroke();
		ctx.fillStyle = "rgba(123, 207, 235, 0.7)";
		ctx.fill();

		//ตัว + ตรงกลางหน้าต่าง
		ctx.beginPath();
		ctx.moveTo(677, 440); // เริ่มเส้นล่างตรงกลาง
		ctx.lineTo(677, 370); // จบเส้นบนตรงกลาง
		ctx.stroke(); 
		ctx.beginPath();
		ctx.moveTo(635, 405); // เริ่มเส้นนอนซ้าย
		ctx.lineTo(720, 405); // จบเส้นนอนขวา
		ctx.stroke();

		//ประตูบ้าน
		ctx.beginPath();
		ctx.moveTo(520, 480); // จุดเริ่มต้นที่มุมซ้ายล่างของประตู
		ctx.lineTo(570, 480); // เส้นตรงไปยังมุมขวาล่างของประตู
		ctx.lineTo(570, 410); // เส้นตรงไปยังมุมขวาบนของประตู
		ctx.lineTo(520, 410); // เส้นตรงไปยังมุมซ้ายบนของประตู
		ctx.closePath(); 
		ctx.strokeStyle = "black";
		ctx.lineWidth = 3;
		ctx.stroke(); 
		ctx.fillStyle = "rgba(115, 57, 30, 0.93)";
		ctx.fill();

		//ลูกบิดประตู
		ctx.beginPath();
		ctx.arc(564, 445, 3, 0, Math.PI * 2); // วาดวงกลมที่มุมขวาของประตู
		ctx.closePath();
		ctx.strokeStyle = "black";
		ctx.lineWidth = 3;
		ctx.stroke();
		ctx.closePath();
		ctx.fillStyle = "rgba(72, 36, 36, 1)";
		ctx.fill();

		//ปล่องไฟ
		ctx.beginPath();
		ctx.moveTo(750, 330); // จุดเริ่มต้นที่มุมซ้ายล่างของปล่องไฟ
		ctx.lineTo(750, 280); // เส้นตรงไปยังมุมขวาล่างของปล่องไฟ
		ctx.lineTo(720, 280); // เส้นตรงไปยังมุมขวาบนของปล่องไฟ
		ctx.lineTo(720, 320); // เส้นตรงไปยังมุมซ้ายบนของปล่องไฟ
		ctx.closePath(); 
		ctx.strokeStyle = "black";
		ctx.lineWidth = 2;
		ctx.stroke();
		ctx.fillStyle = "rgba(182, 57, 40, 1)";
		ctx.fill();
		// ฝาปิดปล่องไฟ
		ctx.beginPath();
		ctx.moveTo(710, 280);
		ctx.lineTo(760, 280);
		ctx.lineTo(760, 270);
		ctx.lineTo(710, 270);
		ctx.closePath();
		ctx.strokeStyle = "black";
		ctx.lineWidth = 2;
		ctx.stroke();
		ctx.fillStyle = "rgba(182, 57, 40, 1)";
		ctx.fill();

		// หลังคาบ้าน
		ctx.beginPath();
		ctx.moveTo(480, 345); // จุดเริ่มต้นที่มุมซ้ายล่างของหลังคา
		ctx.lineTo(785, 345); // เส้นตรงไปยังมุมขวาล่างของหลังคา
		ctx.lineTo(632, 250); // เส้นตรงไปยังยอดหลังคา
		ctx.closePath(); 
		ctx.strokeStyle = "black"; 
		ctx.lineWidth = 3; 
		ctx.stroke();
		ctx.fillStyle = "rgba(115, 39, 39, 1)";
		ctx.fill();

		// แม่น้ำจากอ่าวไทย
		ctx.beginPath();
		ctx.moveTo(250, 220); 
		ctx.bezierCurveTo(150, 350, 500, 400, 280,600 ); // จุดควบคุมและจุดสิ้นสุดของเส้นโค้ง
		ctx.lineTo(480, 600);  // เส้นตรงไปยังมุมขวาล่างของแม่น้ำ
		ctx.bezierCurveTo(500, 250, 250, 400, 300, 220); // จุดควบคุมและจุดสิ้นสุดของเส้นโค้ง
		ctx.fillStyle = "rgba(27, 116, 225, 0.88)"; 
		ctx.fill();
		ctx.strokeStyle = "black";
		ctx.lineWidth = 2;
		ctx.stroke();

		//ก้อนเมฆ  (เมฆสีทองงงงงงงงงงง) 

		function drawCloud(cloudX, y, scale=1) { // ฟังก์ชันสำหรับวาดเมฆ
			ctx.fillStyle = "white";
			ctx.beginPath();
			ctx.arc(cloudX, y, 30*scale, 0, Math.PI*2);     // วงกลมซ้าย
			ctx.arc(cloudX+40*scale, y-20*scale, 35*scale, 0, Math.PI*2); // วงบน
			ctx.arc(cloudX+80*scale, y, 30*scale, 0, Math.PI*2); // วงขวา
			ctx.arc(cloudX+40*scale, y+10*scale, 40*scale, 0, Math.PI*2); // วงล่างกลาง
			ctx.closePath();
			ctx.fill();
		}

		// เมฆเคลื่อนที่จากขวาไปซ้าย
		cloadx -= speedx * 0.01; // ปรับความเร็วได้ที่นี่
		if (cloadx < - 300) {
			cloadx = config.width ;
		}
 		drawCloud(cloadx+200,65,0.7); //ก้อนใหญ่
		// ตำแหน่งและขนาดของเมฆ
		
		function drawCloud2(cloudX2, y, scale=1) { // ฟังก์ชันสำหรับวาดเมฆ
			ctx.fillStyle = "white";
			ctx.beginPath();
			ctx.arc(cloudX2, y, 30*scale, 0, Math.PI*2);     // วงกลมซ้าย
			ctx.arc(cloudX2+40*scale, y-20*scale, 35*scale, 0, Math.PI*2); // วงบน
			ctx.arc(cloudX2+80*scale, y, 30*scale, 0, Math.PI*2); // วงขวา
			ctx.arc(cloudX2+40*scale, y+10*scale, 40*scale, 0, Math.PI*2); // วงล่างกลาง
			ctx.closePath();
			ctx.fill();
		}
	
		cloadx2 -= speedx * 0.02; // ปรับความเร็วได้ที่นี่
		if (cloadx2 < - 400) {
		cloadx2 = config.width - 300 ;
		}
		drawCloud2(cloadx2+300,95,0.5); //ก้อนเล็ก

		// // เขตสิ้นสุดของการวาดรูป


		// แสดงข้อความ FPS บน canvas ถ้า config.debug เป็น true
		if (config.debug) FPS.show(ctx, 10, 28);

		// ใช้ requestAnimationFrame เพื่อเรียกใช้ฟังก์ชัน draw ต่อไป
		requestAnimationFrame(draw);
	}
	// เริ่มต้นการวาดภาพบน canvas
	draw();
}	