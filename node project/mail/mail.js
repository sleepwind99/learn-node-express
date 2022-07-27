const transporter = nodemailer.createTransport({
    host: "smtp.example.com",   //SMTP 서버 호스트 주소
    port: 587,  //포트 번호
    secure: false,  // true 이면, SMTP 서버 접속 시 TLS를 사용. 일반적으로 포트번호는 465를 사용. false인 경우는 포트 번호 587 혹은 25 사용
    auth: {
        user: "username",   //사용자 계정
        pass: "password"    //비밀번호 
    }
})

//SMTP 서버 접속 정보가 정상적인지 확인
transporter.verify((error, success) => {
    if(error) console.log(error);   //접속 에러 발생 시
    else console.log("서버가 메시지를 받을 준비가 되어 있습니다."); //접속이 정상적일 때
});