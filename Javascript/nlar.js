var app = angular.module('myApp', []);
app.controller('myController', function ($scope) {
	$scope.abm = "About Me";
	$scope.updateInfo = "Updated 20 minuted ago";
	$scope.verify = "Verify";
	$scope.des = "Description about me !";
	$scope.cv = "Công việc";
	$scope.job1 = "HUFI";
	$scope.job2 = "dk.tv";
	$scope.contact = "Thông tin liên lạc";
	$scope.contact1 = "daoduykhuong2309@gmail.com";
	$scope.contact2 = "fb.com/doffi.fb";
	$scope.contactmi = " LIÊN HỆ TÔI";
	$scope.ifyou = "Nếu có thắc mắc về code thì liên lạc mình !";
	$scope.modal1 = "Facebook";
	$scope.modal2 = "Zalo";
	$scope.modal4 = "Email";
	$scope.modal5 = "Sms";
	$scope.linkfb = "https://fb.com/doffi.fb";
	$scope.linkzl = "https://zalo.me/duykhuong2309";
	$scope.linkgm = "daoduykhuong2309@gmail.com";
	$scope.phonenumber = "0935137925 - Mobiphone";
	$scope.email = "dktv0806@outlook.com.vn";
	$scope.title2 = "My Story";
	$scope.contentStory1 = "Không biết viết gì luôn.";
	$scope.contentStory2 = "Trong suốt thời gian qua, tôi cảm thấy mình chưa có tiến bộ nhiều trong công việc lẫn học tập. Cảm thấy mình cần bổ sung nhiều kiến thức hơn, có trách nhiệm hơn trong công việc và lời hứa. Cho nên tôi sẽ cố gắng nhiều hơn nữa để mọi người không thất vọng. Xin cảm ơn mọi người !";
	$scope.storytitle1 = "Đời lập trình của tôi bắt đầu bằng sự tình cờ vào năm cuối sinh viên Điện nhảy sang...";
	$scope.storytitle2 = "Lời hứa của tôi với bản thân và mọi người sắp tới ...";
	$scope.nothinglikeus = "Thank for watching";
	$scope.thankall = "Cảm ơn mọi người đã ủng hộ";
	$scope.au = "Infinite";
	$scope.phone = false;
	$scope.reverse = function () {
		$scope.phone = !$scope.phone;
	}
	$scope.gmail = false;
	$scope.reverse2 = function () {
		$scope.gmail = !$scope.gmail;
	};
});