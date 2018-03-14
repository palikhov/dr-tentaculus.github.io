	function d(max){
		return randd(1, max);
	}
	// companions //
	function companion(){
		var ret = "";
		var list = "Суккуб; Мертвый эльф альбинос; Нормальный привлекательный представитель соответствующего твоей ориентации пола; Случайный другой персонаж  из команды (ни тот, ни другой ничего не помнит); Он урод/Она уродина.; Людоящерка, которая тебя любит; Хафлинг; Самый важный NPC в игре; Твой двойник";
		
		list = list.split(";");		
		list = shuffle(list);
		
		var rnd = d(12);
		console.log("companion: "+rnd);
		switch(rnd){
			case 6: ret = companion()+ ". Вы муж и жена."; break;
			case 11: ret = vip(); break;
			case 12: ret = "Глава фракции ("+organization()+")"; break;
			default: ret=list[0];
		}
		return ret;
	}
	// vip //
	function vip(){
		var list = "Священник самого важного божества в округе; Местный правитель; Хозяин таверны; Констебль/Командир ополчения; Придворный маг; Придворный библиотекарь; Случайный местный дворянин; Случайная местная дворянка; Глава местной гильдии; Крупный купец; Вожак крупнейшей местной банды; Главарь зловещих культистов";
		
		list = list.split(";");
		
		list = shuffle(list);
		console.log("vip:" + list);
		
		return list[0];
	}
	// organization //
	function organization(){
		var list = "Местное дворянство; Элитный ударный отряд, нацеленный на ближайший вражеский город; Гильдия воров; Гильдия убийц; Гильдия магов; Гильдия трговцев; Гильдия наемников; Некий темный культ; Городская стража; Тайная служба";
		
		list = list.split(";");
		
		list = shuffle(list);
		console.log("org:" + list);
		return list[0];
	}
	// business //
	function business(){
		var rnd = d(6);		
		console.log("business: "+rnd);
		var ret="";
		switch(rnd){
			case 5: ret="Это жульничество и закон считает, что вы заодно."; break;
			case 6: ret="Все честно и через "+(3*d(4))+" <small>(3d4)</small> месяца все вернется с прибылью в "+d(100)+" <small>(d100)</small> процентов."; break;
			default: ret="Это жульничество.";
		}
		return ret;	
	}
	// tatoo //
	function tatoo(){
		var ret="";
		switch(d(6)){
			case 1: ret="Выбираешь ты."; break;
			case 2: ret="Выбирает Мастер."; break;
			case 3: ret="Выбирает игрок слева."; break;
			case 4: ret="Выбирает игрок справа."; break;
			case 5: ret="Выбирает игрок через одного слева."; break;
			case 6: ret="Выбирает игрок через одного справа."; break;
			
		}
		return ret;
	}
	// fire //
	function fire(){
		
		var rnd1 = d(6);
		var ret1="1";
		switch(rnd1){
			case 1:ret1="";
			case 2:ret1="Сжег любимую гостиницу";break;
			case 3:ret1="";
			case 4:ret1="Другой притон с дурной репутаций сгорел дотла";break;
			case 5:ret1="";
			case 6:ret1="Большой кусок города обращен в дым и пепел";break;
		}
		
		var rnd2 = d(6);
		var ret12="2";
		switch(rnd2){
			case 1:ret2="";
			case 2:ret2=", и никто не знает, что виноват ты.";break;
			case 3:ret2="";
			case 4:ret2=", и те, кто с тобой пил, знают, что виноват ты.";break;
			case 5:ret2=", и кто-то знает, что это был ты (возможно шантажист).";
			case 6:ret2=", и все всё знают.";break;
		}
		
		return ret1+ret2;
	}
	
	//// 12 results ///
	function res_1(){
		var ret = "<b>Публично показал себя дураком.</b><br>Не получаешь ХР. Брось Харизму или приобрети репутацию пьяного дурня.";
		return ret;
	}
	function res_2(){
		var ret="<b>Случайная потасовка в кабаке.</b><br>Вся команда сталкивается с таким же количеством забияк сколько их. Идет обычный бой, но гуляющий напропалую получает -2 ко всему, потому что пьян.";
		return ret;
	}
	function res_3(){
		var ret="<b>Мелкое недопонимание с властями.</b><br>Брось Харизму. Успех означает штраф "+(2*d(6)*25)+" <small>(2d6 х 25)</small> золотых. Если не можешь или не хочешь платить - проведи "+d(6)+" <small>(d6)</small> дней в кутузке.";
		return ret;
	}
	function res_4(){
		var ret="<b>Проснулся в постели... с кем-то.</b><br>";
		
		var who=companion();
		return ret+" C вами в постели "+who+".";
	}
	function res_5(){
		var ret="<b>Проигрался в ноль.</b><br>Не получаешь ХР.";
		return ret;
	}
	function res_6(){
		var ret="<b>Получил репутацию души компании.</b><br>Если не провалишь бросок Харизмы, все последующие пьянки в данном населённом пункте будут вдвое дороже из-за разных любителей халявы.";
		return ret;
	}
	function res_7(){
		var ret="<b>Оскорбил важного человека.</b><br>";
		return ret+" Это "+vip();
	}
	function res_8(){
		var ret="<b>При свечах сыпь не видна.</b><br>Получи венерическую болезнь.";
		return ret;
	}
	function res_9(){
		var ret="<b>Крутое тату. </b><br>";
		
		return ret+" "+tatoo();
	}
	function res_10(){
		var ret="<b>Гоп-стоп по беспределу.</b><br>Два вора подстерегают персонажа пока он один. Обычный бой, но гуляющий напропалую получает -2 ко всему, потому что пьян.";
		return ret;
	}
	function res_11(){
		var ret="<b>Голь подзаборная.</b><br>Ты просыпаешь и у тебя остались только доспехи и, если бросишь Мудрость, то еще то, что ты больше всего ценишь.";
		return ret;
	}
	function res_12(){
		var ret="<b>Адово похмелье.</b><br>В первый день -2 ко всему. Заклинатели бросают Интеллект, чтобы сотворить любое заклинание.";
		return ret;
	}
	function res_13(){
		var ret="<b>Грязное животное!</b><br>Ты подкатился с похабными предложениями к ведьме/магу/колдуну. Спасбросок от заклинания <i> «пагубный полиморф»</i> или ты оказываешься свиньей. В буквальном смысле.";
		return ret;
	}
	function res_14(){
		var ret="<b>You're in the army now.</b><br>Ты вступил в местную организацию. Ты помнишь пароль и тайные знаки.";
		
		return ret+" Эта орагизация - "+ organization();
	}
	function res_15(){
		var ret="<b>Учимся делать деньги!</b><br>Вложил всю свободную наличность (и 50% драгоценных камней и украшений) в аферу какого-то красноречивого купца. ";
		return ret+" "+business();
	}
	function res_16(){
		var ret="<b>Отринь мирское.</b><br>Проснулся голым в штабе одной из местных организаций.";
		return ret+" Эта организация - "+organization();
	}
	function res_17(){
		var ret="<b>Враг системы.</b><br>Серьезное недопонимание с местными властями. Сидишь в тюрьме пока не будут оплачены штрафы и взятки в размере "+(1000* d(6))+" <small>(d6 х 1000)</small> золотых. Оружие, доспехи и магические предметы конфискованы.";
		return ret;
	}
	function res_18(){
		var ret="<b>В этом напитке что-то было.</b><br>В течение 10 дней за тобой приударяет "+companion();
		return ret;
	}
	function res_19(){
		var ret="<b>Стезя святости.</b><br>В пьяном угаре ты просил своих богов вытащить тебя из какой-то передряги. Так случилось, что они услышали! Но теперь, за то что они спасли твою жалкую задницу, ты находишься под воздействием заклинания <i>Quest</i>.";
		return ret;
	}
	function res_20(){
		var ret="<b>Крыша горит!</b><br>Случайно устроил пожар. ";
		return ret+fire();
	}
	///////////////////
	
	function joy_result()
	{
		var d20=randd(1,20);
		console.log("d20: "+d20);
		var ret = "--";
		switch (d20){
			case 1: ret = res_1(); break;
			case 2: ret = res_2(); break;
			case 3: ret = res_3(); break;
			case 4: ret = res_4(); break;
			case 5: ret = res_5(); break;
			case 6: ret = res_6(); break;
			case 7: ret = res_7(); break;
			case 8: ret = res_8(); break;
			case 9: ret = res_9(); break;
			case 10: ret = res_10(); break;
			case 11: ret = res_11(); break;
			case 12: ret = res_12(); break;
			case 13: ret = res_13(); break;
			case 14: ret = res_14(); break;
			case 15: ret = res_15(); break;
			case 16: ret = res_16(); break;
			case 17: ret = res_17(); break;
			case 18: ret = res_18(); break;
			case 19: ret = res_19(); break;
			case 20: ret = res_20(); break;
		}
		return ret;
	}
	