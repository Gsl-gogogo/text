window.onload=function  () {
	
	var show_cont=document.querySelector("#show_cont");
	var show_cont_a=show_cont.querySelectorAll("a");
	console.log(show_cont_a);
	for (var i=0;i<show_cont_a.length;i++) {
		show_cont_a[i].onmouseover=function  () {
			this.style.transition="all 2s";
			this.style.transform="scale(1.5)";
			this.style.color="green";
			this.style.opacity="1";
		}
		show_cont_a[i].onmouseout=function  () {
			this.style.transition="all 2s";
			this.style.transform="scale(1)";
			this.style.color="black";
		}
		
	}
	
	
	var first_page=document.querySelector("#first_page");
	var fp_img=document.querySelector(".fp_img");
	
	fp_img.onclick=function  () {
		
		first_page.style.transition="height 3s ease";
		first_page.style.height="0px";
	}
	
	var second_page=document.querySelector("#second_page");
	var sp_img2=document.querySelector(".sp_img2")
	var sp_img1=document.querySelector(".sp_img1");
	var c_myself_null=document.querySelector("#c_myself_null");
	
	sp_img1.onclick=function  () {
		c_myself_null.style.transition="left 3s ease";
		c_myself_null.style.left="0px";
	}
	sp_img2.onclick=function  () {
		
		first_page.style.transition="height 3s ease";
		first_page.style.height="667px";
	}
	
	var myself_img4=document.querySelector(".myself_img4");
	myself_img4.onclick=function  () {
		c_myself_null.style.transition="left 3s ease";
		c_myself_null.style.left="1366px";
	}
	
	var myself_img3=document.querySelector(".myself_img3");
	var cont=document.querySelector("#cont");
		myself_img3.onclick=function  () {
			cont.style.transition="height 3s ease";
			cont.style.height="0px";
		}
	
	var four_img6=document.querySelector(".four_img6");
	four_img6.onclick=function  () {
		cont.style.transition="height 3s ease";
		cont.style.height="667px";
	}
	
	var four_img5=document.querySelector(".four_img5");
	var five_null=document.querySelector("#five_null");
	four_img5.onclick=function  () {	
		five_null.style.transition="left 3s ease";
		five_null.style.left="0px";
	}

	var five_img7=document.querySelector(".five_img7");
	five_img7.onclick=function  () {
		five_null.style.transition="left 3s ease";
		five_null.style.left="-1366px";	
	}
}