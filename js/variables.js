define([
	"dojo/_base/declare"
],
function ( 	declare ) {
        "use strict";
        return declare(null, {
			makeVariables: function(t){	
				// definition expression root field names
				t.KM2 = "";
				t.ACCp = "";
				t.DINp = "";
				t.GDDsP = ""; 
				t.SurAvgP = "";
				t.CPI = "";
				t.inIBA = "";
				t.TNC = "";
				t.WT_TOT = "";
				t.FWScrit = "";
				t.ABCcorr = "";
				t.cumu_hci = "";
				t.popnow = "";
				t.pop2050 = "";
				t.P2_2050 = "";
				t.P5_2050 = "";
				// object for range slider
				t.sliderObj = {
					h8p1:{
						KM2:{values:[],vis:true,min:0,max:980}, 
						ACCp:{values:[],vis:true,min:0,max:100}, 
						DINp:{values:[],vis:true,min:0,max:100}, 
						GDDsP:{values:[],vis:true,min:0,max:100}, 
						SurAvgP:{values:[],vis:true,min:0,max:100}, 
						CPI:{vis:false}, 
						WT_TOT:{values:[],vis:true,min:0,max:75,shfld:true}, 
						cumu_hci:{values:[],vis:true,min:0,max:5,shfld:true}, 
						popnow:{values:[],vis:true,min:0,max:400,nounsc:true}, 
						pop2050:{values:[],vis:true,min:0,max:400,nounsc:true},
						P2_2050:{values:[],vis:true,min:0,max:400,nounsc:true},
						P5_2050:{values:[],vis:true,min:0,max:400,nounsc:true}
					},
					h8p2:{
						KM2:{values:[],vis:true,min:0,max:2400}, 
						ACCp:{values:[],vis:true,min:0,max:100}, 
						DINp:{values:[],vis:true,min:0,max:100}, 
						GDDsP:{vis:false}, 
						SurAvgP:{vis:false}, 
						CPI:{vis:false}, 
						WT_TOT:{values:[],vis:true,min:0,max:75,shfld:true}, 
						cumu_hci:{values:[],vis:true,min:0,max:5,shfld:true}, 
						popnow:{values:[],vis:true,min:0,max:600,nounsc:true}, 
						pop2050:{values:[],vis:true,min:0,max:400,nounsc:true},
						P2_2050:{values:[],vis:true,min:0,max:400,nounsc:true},
						P5_2050:{values:[],vis:true,min:0,max:400,nounsc:true}
					},
					h8p3:{
						KM2:{values:[],vis:true,min:0,max:2750}, 
						ACCp:{values:[],vis:true,min:0,max:100}, 
						DINp:{values:[],vis:true,min:0,max:100}, 
						GDDsP:{vis:false}, 
						SurAvgP:{vis:false}, 
						CPI:{vis:false}, 
						WT_TOT:{values:[],vis:true,min:0,max:75,shfld:true}, 
						cumu_hci:{values:[],vis:true,min:0,max:5,shfld:true}, 
						popnow:{values:[],vis:true,min:0,max:700,nounsc:true}, 
						pop2050:{values:[],vis:true,min:0,max:400,nounsc:true},
						P2_2050:{values:[],vis:true,min:0,max:400,nounsc:true},
						P5_2050:{values:[],vis:true,min:0,max:400,nounsc:true}
					},
					h8r1:{
						KM2:{values:[],vis:true,min:0,max:670}, 
						ACCp:{values:[],vis:true,min:0,max:100}, 
						DINp:{values:[],vis:true,min:0,max:100}, 
						GDDsP:{vis:false}, 
						SurAvgP:{vis:false}, 
						CPI:{values:[],vis:true,min:0,max:10,div:10}, 
						WT_TOT:{values:[],vis:true,min:0,max:75,shfld:true}, 
						cumu_hci:{values:[],vis:true,min:0,max:5,shfld:true}, 
						popnow:{values:[],vis:true,min:0,max:700,nounsc:true}, 
						pop2050:{values:[],vis:true,min:0,max:400,nounsc:true},
						P2_2050:{values:[],vis:true,min:0,max:400,nounsc:true},
						P5_2050:{values:[],vis:true,min:0,max:400,nounsc:true}
					},
					h8r2:{
						KM2:{values:[],vis:true,min:0,max:3700}, 
						ACCp:{values:[],vis:true,min:0,max:100}, 
						DINp:{values:[],vis:true,min:0,max:100}, 
						GDDsP:{vis:false}, 
						SurAvgP:{vis:false}, 
						CPI:{values:[],vis:true,min:0,max:10,div:10}, 
						WT_TOT:{values:[],vis:true,min:0,max:75,shfld:true}, 
						cumu_hci:{values:[],vis:true,min:0,max:5,shfld:true}, 
						popnow:{values:[],vis:true,min:0,max:700,nounsc:true}, 
						pop2050:{values:[],vis:true,min:0,max:400,nounsc:true},
						P2_2050:{values:[],vis:true,min:0,max:400,nounsc:true},
						P5_2050:{values:[],vis:true,min:0,max:400,nounsc:true}
					},
					h8r3:{
						KM2:{values:[],vis:true,min:0,max:5300}, 
						ACCp:{values:[],vis:true,min:0,max:100}, 
						DINp:{values:[],vis:true,min:0,max:100}, 
						GDDsP:{vis:false}, 
						SurAvgP:{vis:false}, 
						CPI:{values:[],vis:true,min:0,max:10,div:10}, 
						WT_TOT:{values:[],vis:true,min:0,max:75,shfld:true}, 
						cumu_hci:{values:[],vis:true,min:0,max:5,shfld:true}, 
						popnow:{values:[],vis:true,min:0,max:700,nounsc:true}, 
						pop2050:{values:[],vis:true,min:0,max:400,nounsc:true},
						P2_2050:{values:[],vis:true,min:0,max:400,nounsc:true},
						P5_2050:{values:[],vis:true,min:0,max:400,nounsc:true}
					},
					h8rr1:{
						KM2:{values:[],vis:true,min:0,max:1065}, 
						ACCp:{values:[],vis:true,min:0,max:100}, 
						DINp:{values:[],vis:true,min:0,max:100}, 
						GDDsP:{vis:false}, 
						SurAvgP:{vis:false}, 
						CPI:{values:[],vis:true,min:0,max:10,div:10}, 
						WT_TOT:{values:[],vis:true,min:0,max:75,shfld:true}, 
						cumu_hci:{values:[],vis:true,min:0,max:5,shfld:true}, 
						popnow:{values:[],vis:true,min:0,max:700,nounsc:true}, 
						pop2050:{values:[],vis:true,min:0,max:400,nounsc:true},
						P2_2050:{values:[],vis:true,min:0,max:400,nounsc:true},
						P5_2050:{values:[],vis:true,min:0,max:400,nounsc:true}
					},
					h8rr2:{
						KM2:{values:[],vis:true,min:0,max:2780}, 
						ACCp:{values:[],vis:true,min:0,max:100}, 
						DINp:{values:[],vis:true,min:0,max:100}, 
						GDDsP:{vis:false}, 
						SurAvgP:{vis:false}, 
						CPI:{values:[],vis:true,min:0,max:10,div:10}, 
						WT_TOT:{values:[],vis:true,min:0,max:75,shfld:true}, 
						cumu_hci:{values:[],vis:true,min:0,max:5,shfld:true}, 
						popnow:{values:[],vis:true,min:0,max:700,nounsc:true}, 
						pop2050:{values:[],vis:true,min:0,max:400,nounsc:true},
						P2_2050:{values:[],vis:true,min:0,max:400,nounsc:true},
						P5_2050:{values:[],vis:true,min:0,max:400,nounsc:true}
					},
					h8rr3:{
						KM2:{values:[],vis:true,min:0,max:580}, 
						ACCp:{values:[],vis:true,min:0,max:100}, 
						DINp:{values:[],vis:true,min:0,max:100}, 
						GDDsP:{vis:false}, 
						SurAvgP:{vis:false}, 
						CPI:{values:[],vis:true,min:0,max:10,div:10}, 
						WT_TOT:{values:[],vis:true,min:0,max:75,shfld:true}, 
						cumu_hci:{values:[],vis:true,min:0,max:5,shfld:true}, 
						popnow:{values:[],vis:true,min:0,max:700,nounsc:true}, 
						pop2050:{values:[],vis:true,min:0,max:400,nounsc:true},
						P2_2050:{values:[],vis:true,min:0,max:400,nounsc:true},
						P5_2050:{values:[],vis:true,min:0,max:400,nounsc:true}
					},
					h12p1:{
						KM2:{values:[],vis:true,min:0,max:275}, 
						ACCp:{values:[],vis:true,min:0,max:100}, 
						DINp:{values:[],vis:true,min:0,max:100}, 
						GDDsP:{values:[],vis:true,min:0,max:100}, 
						SurAvgP:{values:[],vis:true,min:0,max:100}, 
						CPI:{vis:false}, 
						WT_TOT:{values:[],vis:true,min:0,max:8,shfld:true}, 
						cumu_hci:{values:[],vis:true,min:0,max:5,shfld:true}, 
						popnow:{values:[],vis:true,min:0,max:700,nounsc:true}, 
						pop2050:{values:[],vis:true,min:0,max:400,nounsc:true},
						P2_2050:{values:[],vis:true,min:0,max:400,nounsc:true},
						P5_2050:{values:[],vis:true,min:0,max:400,nounsc:true}
					},
					h12p2:{
						KM2:{values:[],vis:true,min:0,max:380}, 
						ACCp:{values:[],vis:true,min:0,max:100}, 
						DINp:{values:[],vis:true,min:0,max:100}, 
						GDDsP:{vis:false}, 
						SurAvgP:{vis:false}, 
						CPI:{vis:false}, 
						WT_TOT:{values:[],vis:true,min:0,max:8,shfld:true}, 
						cumu_hci:{values:[],vis:true,min:0,max:5,shfld:true}, 
						popnow:{values:[],vis:true,min:0,max:700,nounsc:true}, 
						pop2050:{values:[],vis:true,min:0,max:400,nounsc:true},
						P2_2050:{values:[],vis:true,min:0,max:400,nounsc:true},
						P5_2050:{values:[],vis:true,min:0,max:400,nounsc:true}
					},
					h12p3:{
						KM2:{values:[],vis:true,min:0,max:380}, 
						ACCp:{values:[],vis:true,min:0,max:100}, 
						DINp:{values:[],vis:true,min:0,max:100}, 
						GDDsP:{vis:false}, 
						SurAvgP:{vis:false}, 
						CPI:{vis:false}, 
						WT_TOT:{values:[],vis:true,min:0,max:8,shfld:true}, 
						cumu_hci:{values:[],vis:true,min:0,max:5,shfld:true}, 
						popnow:{values:[],vis:true,min:0,max:700,nounsc:true}, 
						pop2050:{values:[],vis:true,min:0,max:400,nounsc:true},
						P2_2050:{values:[],vis:true,min:0,max:400,nounsc:true},
						P5_2050:{values:[],vis:true,min:0,max:400,nounsc:true}
					},
					h12r1:{
						KM2:{values:[],vis:true,min:0,max:90}, 
						ACCp:{values:[],vis:true,min:0,max:100}, 
						DINp:{values:[],vis:true,min:0,max:100}, 
						GDDsP:{vis:false}, 
						SurAvgP:{vis:false}, 
						CPI:{values:[],vis:true,min:0,max:10,div:10},
						WT_TOT:{values:[],vis:true,min:0,max:8,shfld:true}, 
						cumu_hci:{values:[],vis:true,min:0,max:5,shfld:true}, 
						popnow:{values:[],vis:true,min:0,max:700,nounsc:true}, 
						pop2050:{values:[],vis:true,min:0,max:400,nounsc:true},
						P2_2050:{values:[],vis:true,min:0,max:400,nounsc:true},
						P5_2050:{values:[],vis:true,min:0,max:400,nounsc:true}
					},
					h12r2:{
						KM2:{values:[],vis:true,min:0,max:150}, 
						ACCp:{values:[],vis:true,min:0,max:100}, 
						DINp:{values:[],vis:true,min:0,max:100}, 
						GDDsP:{vis:false}, 
						SurAvgP:{vis:false}, 
						CPI:{values:[],vis:true,min:0,max:10,div:10}, 
						WT_TOT:{values:[],vis:true,min:0,max:8,shfld:true}, 
						cumu_hci:{values:[],vis:true,min:0,max:5,shfld:true}, 
						popnow:{values:[],vis:true,min:0,max:700,nounsc:true}, 
						pop2050:{values:[],vis:true,min:0,max:400,nounsc:true},
						P2_2050:{values:[],vis:true,min:0,max:400,nounsc:true},
						P5_2050:{values:[],vis:true,min:0,max:400,nounsc:true}
					},
					h12r3:{
						KM2:{values:[],vis:true,min:0,max:175}, 
						ACCp:{values:[],vis:true,min:0,max:100}, 
						DINp:{values:[],vis:true,min:0,max:100}, 
						GDDsP:{vis:false}, 
						SurAvgP:{vis:false}, 
						CPI:{values:[],vis:true,min:0,max:10,div:10}, 
						WT_TOT:{values:[],vis:true,min:0,max:8,shfld:true}, 
						cumu_hci:{values:[],vis:true,min:0,max:5,shfld:true}, 
						popnow:{values:[],vis:true,min:0,max:700,nounsc:true}, 
						pop2050:{values:[],vis:true,min:0,max:400,nounsc:true},
						P2_2050:{values:[],vis:true,min:0,max:400,nounsc:true},
						P5_2050:{values:[],vis:true,min:0,max:400,nounsc:true}
					},
					h12rr1:{
						KM2:{values:[],vis:true,min:0,max:105}, 
						ACCp:{values:[],vis:true,min:0,max:100}, 
						DINp:{values:[],vis:true,min:0,max:100}, 
						GDDsP:{vis:false}, 
						SurAvgP:{vis:false}, 
						CPI:{values:[],vis:true,min:0,max:10,div:10}, 
						WT_TOT:{values:[],vis:true,min:0,max:8,shfld:true}, 
						cumu_hci:{values:[],vis:true,min:0,max:5,shfld:true}, 
						popnow:{values:[],vis:true,min:0,max:700,nounsc:true}, 
						pop2050:{values:[],vis:true,min:0,max:400,nounsc:true},
						P2_2050:{values:[],vis:true,min:0,max:400,nounsc:true},
						P5_2050:{values:[],vis:true,min:0,max:400,nounsc:true}
					},
					h12rr2:{
						KM2:{values:[],vis:true,min:0,max:140}, 
						ACCp:{values:[],vis:true,min:0,max:100}, 
						DINp:{values:[],vis:true,min:0,max:100}, 
						GDDsP:{vis:false}, 
						SurAvgP:{vis:false}, 
						CPI:{values:[],vis:true,min:0,max:10,div:10}, 
						WT_TOT:{values:[],vis:true,min:0,max:8,shfld:true}, 
						cumu_hci:{values:[],vis:true,min:0,max:5,shfld:true}, 
						popnow:{values:[],vis:true,min:0,max:700,nounsc:true}, 
						pop2050:{values:[],vis:true,min:0,max:400,nounsc:true},
						P2_2050:{values:[],vis:true,min:0,max:400,nounsc:true},
						P5_2050:{values:[],vis:true,min:0,max:400,nounsc:true}
					},
					h12rr3:{
						KM2:{values:[],vis:true,min:0,max:70}, 
						ACCp:{values:[],vis:true,min:0,max:100}, 
						DINp:{values:[],vis:true,min:0,max:100}, 
						GDDsP:{vis:false}, 
						SurAvgP:{vis:false}, 
						CPI:{values:[],vis:true,min:0,max:10,div:10}, 
						WT_TOT:{values:[],vis:true,min:0,max:8,shfld:true}, 
						cumu_hci:{values:[],vis:true,min:0,max:5,shfld:true}, 
						popnow:{values:[],vis:true,min:0,max:700,nounsc:true}, 
						pop2050:{values:[],vis:true,min:0,max:400,nounsc:true},
						P2_2050:{values:[],vis:true,min:0,max:400,nounsc:true},
						P5_2050:{values:[],vis:true,min:0,max:400,nounsc:true}
					},
					catchp1:{
						KM2:{values:[],vis:true,min:0,max:275}, 
						ACCp:{values:[],vis:true,min:0,max:100}, 
						DINp:{values:[],vis:true,min:0,max:100}, 
						GDDsP:{values:[],vis:true,min:0,max:100}, 
						SurAvgP:{values:[],vis:true,min:0,max:100}, 
						CPI:{vis:false}, 
						WT_TOT:{values:[],vis:true,min:0,max:8,shfld:true}, 
						cumu_hci:{values:[],vis:true,min:0,max:5,shfld:true}, 
						popnow:{values:[],vis:true,min:0,max:700,nounsc:true}, 
						pop2050:{values:[],vis:true,min:0,max:400,nounsc:true},
						P2_2050:{values:[],vis:true,min:0,max:400,nounsc:true},
						P5_2050:{values:[],vis:true,min:0,max:400,nounsc:true}
					},
					catchp2:{
						KM2:{values:[],vis:true,min:0,max:380}, 
						ACCp:{values:[],vis:true,min:0,max:100}, 
						DINp:{values:[],vis:true,min:0,max:100}, 
						GDDsP:{vis:false}, 
						SurAvgP:{vis:false}, 
						CPI:{vis:false}, 
						WT_TOT:{values:[],vis:true,min:0,max:8,shfld:true}, 
						cumu_hci:{values:[],vis:true,min:0,max:5,shfld:true}, 
						popnow:{values:[],vis:true,min:0,max:700,nounsc:true}, 
						pop2050:{values:[],vis:true,min:0,max:400,nounsc:true},
						P2_2050:{values:[],vis:true,min:0,max:400,nounsc:true},
						P5_2050:{values:[],vis:true,min:0,max:400,nounsc:true}
					},
					catchp3:{
						KM2:{values:[],vis:true,min:0,max:380}, 
						ACCp:{values:[],vis:true,min:0,max:100}, 
						DINp:{values:[],vis:true,min:0,max:100}, 
						GDDsP:{vis:false}, 
						SurAvgP:{vis:false}, 
						CPI:{vis:false}, 
						WT_TOT:{values:[],vis:true,min:0,max:8,shfld:true}, 
						cumu_hci:{values:[],vis:true,min:0,max:5,shfld:true}, 
						popnow:{values:[],vis:true,min:0,max:700,nounsc:true}, 
						pop2050:{values:[],vis:true,min:0,max:400,nounsc:true},
						P2_2050:{values:[],vis:true,min:0,max:400,nounsc:true},
						P5_2050:{values:[],vis:true,min:0,max:400,nounsc:true}
					},
					catchr1:{
						KM2:{values:[],vis:true,min:0,max:90}, 
						ACCp:{values:[],vis:true,min:0,max:100}, 
						DINp:{values:[],vis:true,min:0,max:100}, 
						GDDsP:{vis:false}, 
						SurAvgP:{vis:false}, 
						CPI:{values:[],vis:true,min:0,max:10,div:10}, 
						WT_TOT:{values:[],vis:true,min:0,max:8,shfld:true}, 
						cumu_hci:{values:[],vis:true,min:0,max:5,shfld:true}, 
						popnow:{values:[],vis:true,min:0,max:700,nounsc:true}, 
						pop2050:{values:[],vis:true,min:0,max:400,nounsc:true},
						P2_2050:{values:[],vis:true,min:0,max:400,nounsc:true},
						P5_2050:{values:[],vis:true,min:0,max:400,nounsc:true}
					},
					catchr2:{
						KM2:{values:[],vis:true,min:0,max:150}, 
						ACCp:{values:[],vis:true,min:0,max:100}, 
						DINp:{values:[],vis:true,min:0,max:100}, 
						GDDsP:{vis:false}, 
						SurAvgP:{vis:false}, 
						CPI:{values:[],vis:true,min:0,max:10,div:10}, 
						WT_TOT:{values:[],vis:true,min:0,max:8,shfld:true}, 
						cumu_hci:{values:[],vis:true,min:0,max:5,shfld:true}, 
						popnow:{values:[],vis:true,min:0,max:700,nounsc:true}, 
						pop2050:{values:[],vis:true,min:0,max:400,nounsc:true},
						P2_2050:{values:[],vis:true,min:0,max:400,nounsc:true},
						P5_2050:{values:[],vis:true,min:0,max:400,nounsc:true}
					},
					catchr3:{
						KM2:{values:[],vis:true,min:0,max:175}, 
						ACCp:{values:[],vis:true,min:0,max:100}, 
						DINp:{values:[],vis:true,min:0,max:100}, 
						GDDsP:{vis:false}, 
						SurAvgP:{vis:false}, 
						CPI:{values:[],vis:true,min:0,max:10,div:10}, 
						WT_TOT:{values:[],vis:true,min:0,max:8,shfld:true}, 
						cumu_hci:{values:[],vis:true,min:0,max:5,shfld:true}, 
						popnow:{values:[],vis:true,min:0,max:700,nounsc:true}, 
						pop2050:{values:[],vis:true,min:0,max:400,nounsc:true},
						P2_2050:{values:[],vis:true,min:0,max:400,nounsc:true},
						P5_2050:{values:[],vis:true,min:0,max:400,nounsc:true}
					},
					catchrr1:{
						KM2:{values:[],vis:true,min:0,max:105}, 
						ACCp:{values:[],vis:true,min:0,max:100}, 
						DINp:{values:[],vis:true,min:0,max:100}, 
						GDDsP:{vis:false}, 
						SurAvgP:{vis:false}, 
						CPI:{values:[],vis:true,min:0,max:10,div:10}, 
						WT_TOT:{values:[],vis:true,min:0,max:8,shfld:true}, 
						cumu_hci:{values:[],vis:true,min:0,max:5,shfld:true}, 
						popnow:{values:[],vis:true,min:0,max:700,nounsc:true}, 
						pop2050:{values:[],vis:true,min:0,max:400,nounsc:true},
						P2_2050:{values:[],vis:true,min:0,max:400,nounsc:true},
						P5_2050:{values:[],vis:true,min:0,max:400,nounsc:true}
					},
					catchrr2:{
						KM2:{values:[],vis:true,min:0,max:140}, 
						ACCp:{values:[],vis:true,min:0,max:100}, 
						DINp:{values:[],vis:true,min:0,max:100}, 
						GDDsP:{vis:false}, 
						SurAvgP:{vis:false}, 
						CPI:{values:[],vis:true,min:0,max:10,div:10}, 
						WT_TOT:{values:[],vis:true,min:0,max:8,shfld:true}, 
						cumu_hci:{values:[],vis:true,min:0,max:5,shfld:true}, 
						popnow:{values:[],vis:true,min:0,max:700,nounsc:true}, 
						pop2050:{values:[],vis:true,min:0,max:400,nounsc:true},
						P2_2050:{values:[],vis:true,min:0,max:400,nounsc:true},
						P5_2050:{values:[],vis:true,min:0,max:400,nounsc:true}
					},
					catchrr3:{
						KM2:{values:[],vis:true,min:0,max:70}, 
						ACCp:{values:[],vis:true,min:0,max:100}, 
						DINp:{values:[],vis:true,min:0,max:100}, 
						GDDsP:{vis:false}, SurAvgP:{vis:false}, 
						CPI:{values:[],vis:true,min:0,max:10,div:10}, 
						WT_TOT:{values:[],vis:true,min:0,max:8,shfld:true}, 
						cumu_hci:{values:[],vis:true,min:0,max:5,shfld:true}, 
						popnow:{values:[],vis:true,min:0,max:700,nounsc:true}, 
						pop2050:{values:[],vis:true,min:0,max:400,nounsc:true},
						P2_2050:{values:[],vis:true,min:0,max:400,nounsc:true},
						P5_2050:{values:[],vis:true,min:0,max:400,nounsc:true}
					}
				}
				//console.log(t.sliderObj)				// object for radio groups
				t.radioObj = {
					h8p1:{
						inIBA:{vis:true,cbid:"rb_cb1"}, 
						TNC:{vis:true,cbid:"rb_cb2"}, 
						FWScrit:{vis:true,cbid:"rb_cb3",shfld:true}, 
						ABCcorr:{vis:true,cbid:"rb_cb4",shfld:true} 
					},
					h8p2:{
						inIBA:{vis:true,cbid:"rb_cb1"}, 
						TNC:{vis:true,cbid:"rb_cb2"}, 
						FWScrit:{vis:true,cbid:"rb_cb3",shfld:true}, 
						ABCcorr:{vis:true,cbid:"rb_cb4",shfld:true}
					},
					h8p3:{
						inIBA:{vis:true,cbid:"rb_cb1"}, 
						TNC:{vis:true,cbid:"rb_cb2"}, 
						FWScrit:{vis:true,cbid:"rb_cb3",shfld:true}, 
						ABCcorr:{vis:true,cbid:"rb_cb4",shfld:true}
					},
					h8r1:{
						inIBA:{vis:true,cbid:"rb_cb1"}, 
						TNC:{vis:true,cbid:"rb_cb2"}, 
						FWScrit:{vis:true,cbid:"rb_cb3",shfld:true}, 
						ABCcorr:{vis:true,cbid:"rb_cb4",shfld:true}
					},
					h8r2:{
						inIBA:{vis:true,cbid:"rb_cb1"}, 
						TNC:{vis:true,cbid:"rb_cb2"}, 
						FWScrit:{vis:true,cbid:"rb_cb3",shfld:true}, 
						ABCcorr:{vis:true,cbid:"rb_cb4",shfld:true}
					},
					h8r3:{
						inIBA:{vis:true,cbid:"rb_cb1"}, 
						TNC:{vis:true,cbid:"rb_cb2"}, 
						FWScrit:{vis:true,cbid:"rb_cb3",shfld:true}, 
						ABCcorr:{vis:true,cbid:"rb_cb4",shfld:true}
					},
					h8rr1:{
						inIBA:{vis:true,cbid:"rb_cb1"}, 
						TNC:{vis:true,cbid:"rb_cb2"}, 
						FWScrit:{vis:true,cbid:"rb_cb3",shfld:true}, 
						ABCcorr:{vis:true,cbid:"rb_cb4",shfld:true}
					},
					h8rr2:{
						inIBA:{vis:true,cbid:"rb_cb1"}, 
						TNC:{vis:true,cbid:"rb_cb2"}, 
						FWScrit:{vis:true,cbid:"rb_cb3",shfld:true}, 
						ABCcorr:{vis:true,cbid:"rb_cb4",shfld:true}
					},
					h8rr3:{
						inIBA:{vis:true,cbid:"rb_cb1"}, 
						TNC:{vis:true,cbid:"rb_cb2"}, 
						FWScrit:{vis:true,cbid:"rb_cb3",shfld:true}, 
						ABCcorr:{vis:true,cbid:"rb_cb4",shfld:true}
					},
					h12p1:{
						inIBA:{vis:true,cbid:"rb_cb1"}, 
						TNC:{vis:true,cbid:"rb_cb2"}, 
						FWScrit:{vis:true,cbid:"rb_cb3",shfld:true}, 
						ABCcorr:{vis:true,cbid:"rb_cb4",shfld:true}
					},
					h12p2:{
						inIBA:{vis:true,cbid:"rb_cb1"}, 
						TNC:{vis:true,cbid:"rb_cb2"}, 
						FWScrit:{vis:true,cbid:"rb_cb3",shfld:true}, 
						ABCcorr:{vis:true,cbid:"rb_cb4",shfld:true}
					},
					h12p3:{
						inIBA:{vis:true,cbid:"rb_cb1"}, 
						TNC:{vis:true,cbid:"rb_cb2"}, 
						FWScrit:{vis:true,cbid:"rb_cb3",shfld:true}, 
						ABCcorr:{vis:true,cbid:"rb_cb4",shfld:true}	
					},
					h12r1:{
						inIBA:{vis:true,cbid:"rb_cb1"}, 
						TNC:{vis:true,cbid:"rb_cb2"}, 
						FWScrit:{vis:true,cbid:"rb_cb3",shfld:true}, 
						ABCcorr:{vis:true,cbid:"rb_cb4",shfld:true}
					},
					h12r2:{
						inIBA:{vis:true,cbid:"rb_cb1"}, 
						TNC:{vis:true,cbid:"rb_cb2"}, 
						FWScrit:{vis:true,cbid:"rb_cb3",shfld:true}, 
						ABCcorr:{vis:true,cbid:"rb_cb4",shfld:true}
					},
					h12r3:{
						inIBA:{vis:true,cbid:"rb_cb1"}, 
						TNC:{vis:true,cbid:"rb_cb2"}, 
						FWScrit:{vis:true,cbid:"rb_cb3",shfld:true}, 
						ABCcorr:{vis:true,cbid:"rb_cb4",shfld:true}
					},
					h12rr1:{
						inIBA:{vis:true,cbid:"rb_cb1"}, 
						TNC:{vis:true,cbid:"rb_cb2"}, 
						FWScrit:{vis:true,cbid:"rb_cb3",shfld:true}, 
						ABCcorr:{vis:true,cbid:"rb_cb4",shfld:true}
					},
					h12rr2:{
						inIBA:{vis:true,cbid:"rb_cb1"}, 
						TNC:{vis:true,cbid:"rb_cb2"}, 
						FWScrit:{vis:true,cbid:"rb_cb3",shfld:true}, 
						ABCcorr:{vis:true,cbid:"rb_cb4",shfld:true}
					},
					h12rr3:{
						inIBA:{vis:true,cbid:"rb_cb1"}, 
						TNC:{vis:true,cbid:"rb_cb2"}, 
						FWScrit:{vis:true,cbid:"rb_cb3",shfld:true}, 
						ABCcorr:{vis:true,cbid:"rb_cb4",shfld:true}
					},
					catchp1:{
						inIBA:{vis:true,cbid:"rb_cb1"}, 
						TNC:{vis:true,cbid:"rb_cb2"}, 
						FWScrit:{vis:true,cbid:"rb_cb3",shfld:true}, 
						ABCcorr:{vis:true,cbid:"rb_cb4",shfld:true}
					},
					catchp2:{
						inIBA:{vis:true,cbid:"rb_cb1"}, 
						TNC:{vis:true,cbid:"rb_cb2"}, 
						FWScrit:{vis:true,cbid:"rb_cb3",shfld:true}, 
						ABCcorr:{vis:true,cbid:"rb_cb4",shfld:true}
					},
					catchp3:{
						inIBA:{vis:true,cbid:"rb_cb1"}, 
						TNC:{vis:true,cbid:"rb_cb2"}, 
						FWScrit:{vis:true,cbid:"rb_cb3",shfld:true}, 
						ABCcorr:{vis:true,cbid:"rb_cb4",shfld:true}
					},
					catchr1:{
						inIBA:{vis:true,cbid:"rb_cb1"}, 
						TNC:{vis:true,cbid:"rb_cb2"}, 
						FWScrit:{vis:true,cbid:"rb_cb3",shfld:true}, 
						ABCcorr:{vis:true,cbid:"rb_cb4",shfld:true}
					},
					catchr2:{
						inIBA:{vis:true,cbid:"rb_cb1"}, 
						TNC:{vis:true,cbid:"rb_cb2"}, 
						FWScrit:{vis:true,cbid:"rb_cb3",shfld:true}, 
						ABCcorr:{vis:true,cbid:"rb_cb4",shfld:true}
					},
					catchr3:{
						inIBA:{vis:true,cbid:"rb_cb1"}, 
						TNC:{vis:true,cbid:"rb_cb2"}, 
						FWScrit:{vis:true,cbid:"rb_cb3",shfld:true}, 
						ABCcorr:{vis:true,cbid:"rb_cb4",shfld:true}
					},
					catchrr1:{
						inIBA:{vis:true,cbid:"rb_cb1"}, 
						TNC:{vis:true,cbid:"rb_cb2"}, 
						FWScrit:{vis:true,cbid:"rb_cb3",shfld:true}, 
						ABCcorr:{vis:true,cbid:"rb_cb4",shfld:true}
					},
					catchrr2:{
						inIBA:{vis:true,cbid:"rb_cb1"}, 
						TNC:{vis:true,cbid:"rb_cb2"}, 
						FWScrit:{vis:true,cbid:"rb_cb3",shfld:true}, 
						ABCcorr:{vis:true,cbid:"rb_cb4",shfld:true}
					},
					catchrr3:{
						inIBA:{vis:true,cbid:"rb_cb1"}, 
						TNC:{vis:true,cbid:"rb_cb2"}, 
						FWScrit:{vis:true,cbid:"rb_cb3",shfld:true}, 
						ABCcorr:{vis:true,cbid:"rb_cb4",shfld:true}
					}
				}
				//console.log(t.radioObj)
				
			}
		});
    }
);