window.onload = function() {
	// 点击收藏实现收藏与不收藏
	function collected() {
		var collecting = 1;
		document.getElementById('collect').onclick = function() {
			collecting++;
			if (collecting % 2 == 0) {
				document.getElementById('collect').src = "img/collect_already.png"
				document.getElementById('collect').title = "已收藏"
			} else {
				document.getElementById('collect').src = "img/collect_none.png"
				document.getElementById('collect').title = "收藏"
			}
		}
	}
	collected()

	// 点击图片实现播放音乐或不播放音乐和实现图片一直旋转或停止旋转
	function runing() {

		var playing = 1;

		document.getElementById("rotate").onclick = function() {

			if (playing == 1) {
				// 不播放
				document.getElementById("music").pause();
				// 不旋转
				playing = 0;
				document.getElementById("rotate").style.webkitAnimationPlayState = "paused"
			} else {
				// 播放
				document.getElementById("music").play();
				// 旋转
				playing = 1;
				document.getElementById("rotate").style.webkitAnimationPlayState = "running"
			}
		}
	}
	runing()

	// h5页面音频自动播放问题
	function Audio_problems() {

		var audio = document.getElementById('music');

		audio1 = audio;

		audio.src = "music/司南 - 冬眠.mp3";

		audio.loop = true;

		audio.autoplay = true;

		audio.play();

		audio.addEventListener('canplay', canPlay, false);

	}

	// 设置audio初始音量
	function getVideo() {
		document.getElementById('music').volume = 0.3;
	}
	getVideo()
}