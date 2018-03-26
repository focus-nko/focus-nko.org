import 'babel-polyfill';
import Parse from 'parse/node';


//Application ID. Just copy\paste
Parse.initialize('6560c5dc08c1183df489d6832fe1fb3a');
//Server URL;
Parse.serverURL = 'https://focus-nko.org/api/parse';

//API accessible only to authenticated user. Parse.become(<session token>) will login you;
//You can get session token by requesting it in chat;
//We will add UI to get app token directly on focus-nko.org soon;
const sessionToken = 'r:5c6fc15ac6fbc572b421efa18305affe';
//you will need to add session token to all request to API;
const requestOptions = {sessionToken};

(async ()=>{
	try{
		//Currently only Report collection is available;
		//It contains parsed periodic report for NGO from unro.minjust.ru
		let oneOrgQuery = new Parse.Query('Report');
		//find all reports for organization by ogrn number;
		oneOrgQuery.equalTo('ogrn','1145000000419');

		// You will get Array<ParseObject<Reports>>;
		// To see more info about ParseObject see https://parseplatform.github.io
		let orgs = await oneOrgQuery.find(requestOptions);
		orgs.forEach(org => {
			//parse report stored in the 'data' prop;
			console.log(`name: ${org.get('name')}, ogrn: ${org.get('ogrn')}, report name: ${org.get('reportName')}`);
			console.log(org.get('data'));
		});
		
		//To see how match all NKO spend during 2015 and see whos budget was the biggest:
		
		let targetFinanceQuery = new Parse.Query("Report");
		targetFinanceQuery
			//2015 year;
			.equalTo('data.reportPeriodYear',2015)
			//OН0002 report
			.equalTo('reportType',2);
		
		// You can download only 100 reports per on query so you should iterate over all DB;
		
		let limit = 100;
		let skip = 0;
		let max;
		let maxOrgName;
		let allSum = 0;
		let reports = [];
		let count = await targetFinanceQuery.count(requestOptions);
		console.log(`overal ${count} reports`);

		do{
			targetFinanceQuery.limit(limit);
			targetFinanceQuery.skip(skip);
			reports = await targetFinanceQuery.find(requestOptions);
			for(let i=0;i<reports.length;i++){
				let report = reports[i];
				//sum all the finance for org;
				let sum = [
					'targetFinanceGovernment',
					'targetFinanceResidents',
					'targetFinanceExternal',
					'saleFinance',
					'otherFinanceRussianMain',
					'otherFinanceRussianOther',
					'otherFinanceExternalMain',
					'otherFinanceExternalOther'
				].reduce((sum,fieldName)=>{
					let data = report.get('data');
					if(!data){
						return sum;
					}
					let expenses = data[fieldName];
					if(!expenses){
						return sum;
					}
					return expenses.reduce((sum,item)=>{
						let currentSum = item.sum;
						currentSum = parseInt(currentSum);
						if(currentSum && !isNaN(currentSum)){
							sum = sum+currentSum;
						}
						return sum;
					},sum);
				},0)
				allSum=allSum+sum;
				if(!max || sum > max){
					max = sum;
					maxOrgName = report.get('name');
				}
			}
			skip = skip + limit;
			//track progress can take some time
			if(skip%1000 === 0){
				console.log(`done ${skip}`);
			}


		}while(reports.length === limit);
		
		console.log(`Overall sum is ${allSum}`);
		console.log(`MaxOrgName ${maxOrgName} spend ${max}`);

	}catch(e){
		console.error(e);
	}
})();




