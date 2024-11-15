const https = require("https");

const cookiesJson = new Object();
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const getToken = async () => {
  const source =
    "2;0;3491123;3749956;31,0,0,2,3,0;LXrggkkP8}4%In2EK|Kv7_nIr^/f7p2$>[4{J>O;Cs51r2Bi0w/#:mk2kyMlXNZk&<hi5DQ@=dx}r3J&r0XQ_qMu4Kia3R:t8P}3X}}HwN/)ybV/(2xoL7Aw[77UO.`<3P#Gh*K8EqFPRqjWxqy])$GXjkC~z&2T)b*Hz6KUN@K!1Qqav3p^@`P}r1]s(L@XoB{;o6gohN1JF2[@zpTV2!>u,!,ti#GsO|V6J9j[}X@V{LwqHY-/!pHr+K6#)>uB$D?ico^h{UHk/h8)w$vifT4g!T2)>k?PR!eB0a2LcZf~1wVBGU7I0.p8!<#,}_:iY=<q]4p*KK:,Y?<mHUOjVW>26,}l0nz_F$$](c>_ouJ$W53:3[*Bf)pS*fO{Y 2skA:G:hS@7<;g +hl Me,+C%zYz%KzN2pXLWAS&$Kwv(g5,)w>dg(-Or:m<YB5oNHDADVV-(W%r+Zh^[~#DWz)E>? ^x|[/&rww$,=$.RKU[N,*)BTu8eXB>8z`w0yHI>ORorvyrP-RfE3;V{%_k3Y}t-sfd?$^tf~yFD`Fdv0Ia]3{>Y!#9p1UlzmO @+k1)->kk.23~s-UG:)d:S;U4IBGTI6`!}fou1Yu3DMeVLdRF*JZ3]7lEsR_0|sAuXezs?]%Ppo-utFTq{.Y1ZFsJ7fuB<:)U=>V_Cb&Ny ?q;u@CHh7qC/^a#c+cba?{nv0Sy8t1t%IAA$TptPhN+u^L9p1doud;CKeu[cl6W|RRJ8V+=Y0-ZX34n`$gl ]RZd%Y)_5iE]8BeK HG!cD<A!teN/P v|Sv#P T4fW;K!*91y.xDx$RRb5>#b1+x.p{:f&.$t ,CA6b+D0ow:~5u2GO7wOs].vxU[MJ~ -UfqP%&DG@cGFsGY_zHpVDL5_NBmyQ1VHD@]dWg`tAAi*#,yD~`6n_:44WrX{r6!_Z*?B@l=C2{@l]w%99uMf~@ca5aAW]2|=s<oM 33q:3Jgh,T(`!W>Z[ZR_]`fkbK~O]E61O]O0I=plNC;*_>h/v Pi!{~po8mkZAuQ9{|!w5[]v_|q~>t)qp$|VWB9)kcgjlA?90V %]5.O5Ca&S|n.9ZXxryLzGPW[6}D=6s4YSi_t*p p^F%Surj=]0Hn?GWea;Ec*FOH+$.$It#VHe%)3vfj>HylV5C=6W(1vrJ~A5_zB&<q},R/{.t6Syr5f7}+9F&ALX+Ce6tH/:Ui2rBQ `wpg:M&u*kJ(#Z*N#mhD,wY^)N{=<u,V3(-7nCHDVsH;.~b@?P#;-cQD.jHh@Ia2m)+=a6P;^FQ (%sMWa@[Y1.fiL=P4}S?z29^xEYDpJ7jy|cNiiK^rWG56oys <@6S.?coGL)dKtLNtb?YtE,%neWaN7 Zo.%[ nw9{RFl;nQ%TF#J]B&Uqvau@`C$BVVCm ]6*dO3hQ=Cmee%G&t~eknxmuSRh1d&QcF#rcO70`TM<-zl.fXdOtuz%!iZ&UGXz;%d]JH6/mK1X?R%I5$:BSXnk{zgAjprLh`=I-2tz_X!Cdi>liI`}>9[Yhe=@{z3o-(q`WwkkVOhageJ)!Ptddq7KWXI;t!#iH9w,3J>:=8f5QhF!3+KT|;qm)7=(`l%s>=?SITZdkfBwJPK}73[`>U$5[cub<W*_KB?acruC.@p`*?9z,,[mPcEZ?<=2+<`U2J=cf%#LPY63K|^ZjzCnDq>ryVrJUq<}r#(#g2-_brWX%EG-K^(OKsXzMa{hp:k:Tjd{)Q;PW~lk)Uaa(7v22YIjFX$$uY)1);DBdcwKL|b%Hw$xAgxw`/zZAY|&4n6?7eNAk9^vSqZv}$4*w/eM6dwM}Ks~:p@URl4g4c0q H%:kOc:o=-YbF/zZ&hOzk8NVzFxM,a@V1;Qzp%?g?8vxIdJ%b4?[F7|^$;1YFwWxch*gYw)e84y&reIJzJ~=5z/FzI-q]8mHp3/F6HvH,%qxxv{u?5G^bVp)m-,CT@zb;R``Z-:+kkiwrohh;v/, tyUFslh]$/X=fb!!>xbCYGRNecoKFl>?8Eh?YD(:xkh@^2+0lB)}&s:ATMd$M|@[X%F8x%fk3ZC&Wd==p5GnMO`k)NX28kEN7.`J8F3=79u E}++jED=SX07^|-t)d1MR@XlPcKo_cZV|nn}gOFFivUk!8NK[|~A<)]iR[oln+!#]5^hR3<Ji#Fc8O}m:rT|.k/7(oby4}>>yj,I=}&8c%LpD^+kR<#MF^C>G]k}5)K[5 ~JsU^(TbMfEf=BTFHq*/o|zD3(/Ea0}zI%,~?E&a3Q?j+Fika%TR4QR$uj}=FQ[Su;NFps[(o5#TyDk]_*g:ay!PA;Z+:FLL$HVW(;|+AnP~g3WWd;vrk)mEy{/S{=26oM%<[#phgE-ZGnBEP<qm}DT*W/S#]vl,b:Pa9MW%neW.!H$-={[4C>5y62x#W}x4vl!*gOp$ bfO8lLcgd#Tf4oIia/g2WNaG4a>Guwax` 75kJ[:/ :D~=.o^.nF!wing!A({*s{ap[Y?.=]PB[uZ(!2G2iH%=VkWv6&]`HcVb^YB!f|rt5G->^:-t]A|BdR[&];)+#15HHK@^X.r|Do413do[U$1E^jj5]]>X";

  const base = async () => {
    const response = await fetch("https://my.xmarabia.net/en/member/login");
    const csrf_token = (await response.text())
      .split('name="csrf_token" value="')[1]
      .split('"/>')[0];
    cookiesJson["csrf_token"] = csrf_token;

    const cookies = response.headers.get("set-cookie");

    const cookieArray = cookies.split(", ");

    cookieArray.reduce((acc, cookie) => {
      items = ["APPSESSID", "_abck", "bm_sz", "bm_mi"];
      items.forEach((item) => {
        if (cookie.includes(item)) {
          cookiesJson[item] = cookie.slice(item.length + 1).split(";")[0];
        }
      });
    }, {});
  };

  const first = async () => {
    await base();
    const response = await fetch(
      "https://my.xmarabia.net/3sHBYR/UD/5i/AGo6/zT1ZaCh92Nje0/DuY3mQpJXpG8/WHN7XGwC/T1Ei/QFcnbCEB",
      {
        headers: {
          Cookie: `APPSESSID=${cookiesJson["APPSESSID"]}; _abck=${cookiesJson["_abck"]}; bm_sz=${cookiesJson["bm_sz"]};`,
        },
      }
    );

    const cookies = response.headers.get("set-cookie");

    cookieArray = cookies.split(", ");

    cookieArray.reduce((acc, cookie) => {
      items = ["_abck"];
      items.forEach((item) => {
        if (cookie.includes(item)) {
          cookiesJson[item] = cookie.slice(item.length + 1).split(";")[0];
        }
      });
    }, {});
  };

  const second = async () => {
    await first();

    const response = await fetch(
      "https://my.xmarabia.net/52pX_j9u/RWvL0th/rgS9Pya/Z-/OG3YLprzmQQLGO/CBoHAg/XW/4jGiwTAQUC",
      {
        method: "POST",
        headers: {
          Cookie: `APPSESSID=${cookiesJson["APPSESSID"]}; _abck=${cookiesJson["_abck"]}; bm_sz=${cookiesJson["bm_sz"]};`,
        },
        body: JSON.stringify({
          sensor_data: source,
        }),
      }
    );

    const cookies = response.headers.get("set-cookie");

    cookieArray = cookies.split(", ");

    cookieArray.reduce((acc, cookie) => {
      items = ["_abck"];
      items.forEach((item) => {
        if (cookie.includes(item)) {
          cookiesJson[item] = cookie.slice(item.length + 1).split(";")[0];
        }
      });
    }, {});
  };

  const auth = async () => {
    await second();

    const postData = `csrf_token=${cookiesJson["csrf_token"]}&ts=1729540073&et=0bae13617a01adcecebc6c69cefdc4f299ca5d6a&ga_client_id=&gclid=&login_user=mojtabadric%40gmail.com&login_pass=%21Dricmojtabasg1`;

    const options = {
      hostname: "my.xmarabia.net",
      path: "/member/auth",
      method: "POST",
      headers: {
        Cookie: `XM_AKAMAI_VISITOR_COUNTRY=IQ; _fs_usr=true; AKA_A2=A; APPSESSID=${cookiesJson["APPSESSID"]}; _abck=${cookiesJson["_abck"]}; bm_mi=${cookiesJson["bm_mi"]}; bm_sz=${cookiesJson["bm_sz"]};`,
        "Content-Length": Buffer.byteLength(postData),
        "Cache-Control": "max-age=0",
        "Sec-Ch-Ua": '"Chromium";v="129", "Not=A?Brand";v="8"',
        "Sec-Ch-Ua-Mobile": "?0",
        "Sec-Ch-Ua-Platform": '"Windows"',
        "Accept-Language": "en-US,en;q=0.9",
        Origin: "https://my.xmarabia.net",
        "Content-Type": "application/x-www-form-urlencoded",
        "Upgrade-Insecure-Requests": "1",
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.6668.71 Safari/537.36",
        Accept:
          "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
        "Sec-Fetch-Site": "same-origin",
        "Sec-Fetch-Mode": "navigate",
        "Sec-Fetch-User": "?1",
        "Sec-Fetch-Dest": "document",
        Referer: "https://my.xmarabia.net/en/member/login",
        "Accept-Encoding": "gzip, deflate, br",
        Priority: "u=0, i",
      },
    };

    return new Promise((resolve, reject) => {
      const req = https.request(options, (res) => {
        let responseBody = "";

        res.on("data", (chunk) => {
          responseBody += chunk;
        });

        res.on("end", () => {
          const setCookie = res.headers["set-cookie"];
          if (setCookie && setCookie[1]) {
            cookiesJson["APPSESSID"] = setCookie[1].split(";")[0].slice(10);
          }
          resolve();
        });
      });

      req.on("error", (error) => {
        console.error("Error:", error.message);
        reject(error);
      });

      req.write(postData);
      req.end();
    });
  };

  const session = async () => {
    await auth();

    const response = await fetch(
      "https://social.xmarabia.net/pubapi/social-trading/v1/public/session/extend",
      {
        method: "POST",
        headers: {
          Cookie: `APPSESSID=${cookiesJson["APPSESSID"]}`,
          "Content-Length": 0,
          "Sec-Ch-Ua-Platform": "Windows",
          Authorization: "Bearer null",
          "Accept-Language": "en-US,en;q=0.9",
          "Sec-Ch-Ua": '"Chromium";v="129", "Not=A?Brand";v="8"',
          "X-St-Request-Id": "83a40936-c211-4aca-9a85-07faf1c79b43",
          "Sec-Ch-Ua-Mobile": "?0",
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.6668.71 Safari/537.36",
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
          Origin: "https://social.xmarabia.net",
          "Sec-Fetch-Site": "same-origin",
          "Sec-Fetch-Mode": "cors",
          "Sec-Fetch-Dest": "empty",
          Referer:
            "https://social.xmarabia.net/copy-trading?tab=featured&view=cards",
          "Accept-Encoding": "gzip, deflate, br",
          Priority: "u=1, i",
        },
      }
    );

    const token = await response.json();
    cookiesJson["token"] = token.data.idToken;
  };

  await session();
};

const view = async () => {
  await getToken();

  const deals = [
    "632787213",
    "632588472",
    "632485988",
    "632228692",
    "624641172",
  ];
  while (true) {
    await delay(150000);
    // await delay(2000);

    response = await fetch(
      `https://social.xmarabia.net/pubapi/social-trading/v1/social-trading/strategies/25880`,
      {
        headers: {
          Authorization: `Bearer ${cookiesJson["token"]}`,
        },
      }
    );

    if (response.ok) {
      const dataJson = await response.json();

      console.log(
        "length: " +
          dataJson.data.positions.length +
          "------------------------------------"
      );
      deals.forEach((element) => {
        for (
          let i_opened = 0;
          i_opened < dataJson.data.positions.length;
          i_opened++
        ) {
          if (element == dataJson.data.positions[i_opened].id) {
            const {
              id,
              symbol,
              type,
              openTime,
              openPrice,
              currentPrice,
              profitInUsd,
            } = dataJson.data.positions[i_opened];
            console.log({
              id,
              symbol,
              type,
              openTime,
              openPrice,
              currentPrice,
              profitInUsd,
            });
          }
        }
      });
    } else {
      console.log("Response not OK, retrying after getting new token...");
      await getToken();
    }

    console.log(
      "------------------------------------------------------------------------\n"
    );
  }
};

view();
