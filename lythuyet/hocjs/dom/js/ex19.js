var input = document.querySelector("input");
var beforeUnloadHander = function (e) {
  e.preventDefault();
  e.returnValue = true;
};
input.addEventListener("input", function (e) {
  var value = e.target.value;
  var defaultValue = e.target.defaultValue;
  if (value !== defaultValue) {
    window.addEventListener("beforeunload", beforeUnloadHander);
  } else {
    window.removeEventListener("beforeunload", beforeUnloadHander);
  }
});

var lyric = {
  err: 0,
  msg: "Success",
  data: {
    sentences: [
      {
        words: [
          { startTime: 27489, endTime: 27999, data: "Một" },
          { startTime: 28009, endTime: 28470, data: "nụ" },
          { startTime: 28480, endTime: 28919, data: "hôn" },
          { startTime: 28990, endTime: 29490, data: "cuối" },
          { startTime: 30119, endTime: 30579, data: "rồi" },
          { startTime: 30579, endTime: 31190, data: "tạm" },
          { startTime: 31190, endTime: 31500, data: "biệt" },
          { startTime: 31510, endTime: 32040, data: "nhau" },
        ],
      },
      {
        words: [
          { startTime: 32840, endTime: 33220, data: "Ngày" },
          { startTime: 33220, endTime: 33729, data: "mai" },
          { startTime: 33729, endTime: 34179, data: "mình" },
          { startTime: 34189, endTime: 34759, data: "sẽ" },
          { startTime: 35499, endTime: 36009, data: "mất" },
          { startTime: 36009, endTime: 36449, data: "nhau" },
          { startTime: 36449, endTime: 36849, data: "thật" },
          { startTime: 36849, endTime: 37240, data: "rồi" },
        ],
      },
      {
        words: [
          { startTime: 38229, endTime: 38720, data: "Mỗi" },
          { startTime: 38790, endTime: 39250, data: "người" },
          { startTime: 39250, endTime: 39620, data: "mỗi" },
          { startTime: 39730, endTime: 40260, data: "nơi" },
          { startTime: 40919, endTime: 41330, data: "tìm" },
          { startTime: 41340, endTime: 41710, data: "hạnh" },
          { startTime: 41710, endTime: 42169, data: "phúc" },
          { startTime: 42169, endTime: 42620, data: "mới" },
        ],
      },
      {
        words: [
          { startTime: 43609, endTime: 43859, data: "Để" },
          { startTime: 43879, endTime: 44430, data: "không" },
          { startTime: 44550, endTime: 44900, data: "ai" },
          { startTime: 44910, endTime: 45360, data: "phải" },
          { startTime: 46030, endTime: 46980, data: "phiền" },
          { startTime: 46980, endTime: 47330, data: "lụy" },
          { startTime: 47330, endTime: 47830, data: "đến" },
          { startTime: 47840, endTime: 48380, data: "ai" },
        ],
      },
      {
        words: [
          { startTime: 48759, endTime: 49259, data: "Dù" },
          { startTime: 49429, endTime: 49949, data: "cho" },
          { startTime: 49949, endTime: 50270, data: "ngày" },
          { startTime: 50270, endTime: 50690, data: "mai" },
          { startTime: 51539, endTime: 52260, data: "nỗi" },
          { startTime: 52270, endTime: 52879, data: "đau" },
          { startTime: 52879, endTime: 53269, data: "còn" },
          { startTime: 53519, endTime: 53810, data: "dài" },
        ],
      },
      {
        words: [
          { startTime: 54389, endTime: 54479, data: "Và" },
          { startTime: 54919, endTime: 55249, data: "yêu" },
          { startTime: 55259, endTime: 55639, data: "thương" },
          { startTime: 55649, endTime: 56299, data: "ấy" },
          { startTime: 56799, endTime: 57579, data: "sẽ" },
          { startTime: 57579, endTime: 58209, data: "không" },
          { startTime: 58229, endTime: 58689, data: "tồn" },
          { startTime: 58939, endTime: 59589, data: "tại" },
        ],
      },
      {
        words: [
          { startTime: 59930, endTime: 60390, data: "Ai" },
          { startTime: 60480, endTime: 60800, data: "cũng" },
          { startTime: 60810, endTime: 61439, data: "sẽ" },
          { startTime: 61449, endTime: 62239, data: "phải" },
          { startTime: 62549, endTime: 62829, data: "hướng" },
          { startTime: 63089, endTime: 63609, data: "đến" },
          { startTime: 63609, endTime: 63810, data: "tương" },
          { startTime: 64310, endTime: 65000, data: "lai" },
        ],
      },
      {
        words: [
          { startTime: 65289, endTime: 65529, data: "Để" },
          { startTime: 65769, endTime: 66139, data: "kiếm" },
          { startTime: 66179, endTime: 66669, data: "cho" },
          { startTime: 66969, endTime: 67619, data: "mình" },
          { startTime: 67939, endTime: 68389, data: "một" },
          { startTime: 68389, endTime: 68909, data: "người" },
          { startTime: 68909, endTime: 69129, data: "thế" },
          { startTime: 69619, endTime: 69989, data: "vai" },
        ],
      },
      {
        words: [
          { startTime: 72779, endTime: 73359, data: "Nếu" },
          { startTime: 73599, endTime: 73969, data: "như" },
          { startTime: 73969, endTime: 74249, data: "ngày" },
          { startTime: 74259, endTime: 74689, data: "xưa" },
        ],
      },
      {
        words: [
          { startTime: 75189, endTime: 75629, data: "Chúng" },
          { startTime: 75639, endTime: 76189, data: "ta" },
          { startTime: 76199, endTime: 76610, data: "không" },
          { startTime: 76610, endTime: 76640, data: "vội" },
          { startTime: 76650, endTime: 76829, data: "vàng" },
        ],
      },
      {
        words: [
          { startTime: 78270, endTime: 78510, data: "Yêu" },
          { startTime: 78520, endTime: 79020, data: "nhau" },
          { startTime: 79339, endTime: 79659, data: "để" },
          { startTime: 79659, endTime: 79959, data: "rồi" },
          { startTime: 80609, endTime: 81069, data: "bây" },
          { startTime: 81179, endTime: 81699, data: "giờ" },
          { startTime: 81699, endTime: 82219, data: "lìa" },
          { startTime: 82219, endTime: 82569, data: "tan" },
        ],
      },
      {
        words: [
          { startTime: 83629, endTime: 83809, data: "Thì" },
          { startTime: 83959, endTime: 84449, data: "chắc" },
          { startTime: 84459, endTime: 84879, data: "có" },
          { startTime: 84939, endTime: 86009, data: "lẽ" },
          { startTime: 86029, endTime: 86519, data: "sẽ" },
          { startTime: 86529, endTime: 87029, data: "không" },
          { startTime: 87059, endTime: 87509, data: "đau" },
          { startTime: 87509, endTime: 87539, data: "khổ" },
        ],
      },
      {
        words: [
          { startTime: 88999, endTime: 89249, data: "Yêu" },
          { startTime: 89259, endTime: 89760, data: "thương" },
          { startTime: 89760, endTime: 90250, data: "vụn" },
          { startTime: 90260, endTime: 90710, data: "vỡ" },
          { startTime: 91230, endTime: 91750, data: "thêm" },
          { startTime: 91990, endTime: 92349, data: "một" },
          { startTime: 92349, endTime: 92909, data: "lần" },
          { startTime: 92909, endTime: 93270, data: "nữa" },
        ],
      },
      {
        words: [
          { startTime: 94130, endTime: 94440, data: "Giờ" },
          { startTime: 94589, endTime: 95019, data: "anh" },
          { startTime: 95029, endTime: 95479, data: "sẽ" },
          { startTime: 95489, endTime: 95979, data: "không" },
          { startTime: 96609, endTime: 97269, data: "níu" },
          { startTime: 97269, endTime: 97809, data: "tay" },
          { startTime: 97819, endTime: 98450, data: "em" },
          { startTime: 98450, endTime: 98490, data: "lại" },
        ],
      },
      {
        words: [
          { startTime: 99589, endTime: 99859, data: "Để" },
          { startTime: 100029, endTime: 100399, data: "yêu" },
          { startTime: 100409, endTime: 100879, data: "thương" },
          { startTime: 100959, endTime: 101379, data: "ấy" },
          { startTime: 101839, endTime: 102339, data: "dần" },
          { startTime: 102539, endTime: 102949, data: "dần" },
          { startTime: 103009, endTime: 103489, data: "phôi" },
          { startTime: 103499, endTime: 104059, data: "phai" },
        ],
      },
      {
        words: [
          { startTime: 104860, endTime: 105290, data: "Chúc" },
          { startTime: 105319, endTime: 105670, data: "em" },
          { startTime: 105750, endTime: 106290, data: "ngày" },
          { startTime: 106290, endTime: 107170, data: "mai" },
          { startTime: 107170, endTime: 107670, data: "hạnh" },
          { startTime: 107820, endTime: 108330, data: "phúc" },
          { startTime: 108779, endTime: 109220, data: "bên" },
          { startTime: 109470, endTime: 109860, data: "ai" },
        ],
      },
      {
        words: [
          { startTime: 111219, endTime: 111579, data: "Đừng" },
          { startTime: 111579, endTime: 111999, data: "giống" },
          { startTime: 112009, endTime: 112409, data: "như" },
          { startTime: 112419, endTime: 112969, data: "anh" },
          { startTime: 112979, endTime: 113609, data: "với" },
          { startTime: 113609, endTime: 113869, data: "em" },
          { startTime: 114579, endTime: 115019, data: "hiện" },
          { startTime: 115079, endTime: 115549, data: "tại" },
        ],
      },
      {
        words: [
          { startTime: 147450, endTime: 147890, data: "Một" },
          { startTime: 147919, endTime: 148419, data: "nụ" },
          { startTime: 148429, endTime: 148760, data: "hôn" },
          { startTime: 149029, endTime: 149379, data: "cuối" },
          { startTime: 150119, endTime: 150639, data: "rồi" },
          { startTime: 150639, endTime: 150919, data: "tạm" },
          { startTime: 151129, endTime: 151629, data: "biệt" },
          { startTime: 151629, endTime: 151999, data: "nhau" },
        ],
      },
      {
        words: [
          { startTime: 152869, endTime: 153259, data: "Ngày" },
          { startTime: 153269, endTime: 153749, data: "mai" },
          { startTime: 153749, endTime: 154129, data: "mình" },
          { startTime: 154139, endTime: 154630, data: "sẽ" },
          { startTime: 155539, endTime: 155979, data: "mất" },
          { startTime: 155979, endTime: 156399, data: "nhau" },
          { startTime: 156399, endTime: 156799, data: "thật" },
          { startTime: 156799, endTime: 157150, data: "rồi" },
        ],
      },
      {
        words: [
          { startTime: 158230, endTime: 158969, data: "Mỗi" },
          { startTime: 158969, endTime: 159269, data: "người" },
          { startTime: 159269, endTime: 159639, data: "mỗi" },
          { startTime: 159729, endTime: 160039, data: "nơi" },
          { startTime: 160959, endTime: 161309, data: "tìm" },
          { startTime: 161319, endTime: 161719, data: "hạnh" },
          { startTime: 161719, endTime: 162269, data: "phúc" },
          { startTime: 162269, endTime: 162479, data: "mới" },
        ],
      },
      {
        words: [
          { startTime: 163589, endTime: 163829, data: "Để" },
          { startTime: 163839, endTime: 164469, data: "không" },
          { startTime: 164499, endTime: 164859, data: "ai" },
          { startTime: 164869, endTime: 165309, data: "phải" },
          { startTime: 166109, endTime: 166899, data: "phiền" },
          { startTime: 166910, endTime: 167340, data: "lụy" },
          { startTime: 167340, endTime: 167840, data: "đến" },
          { startTime: 167840, endTime: 167850, data: "ai" },
        ],
      },
      {
        words: [
          { startTime: 168849, endTime: 169190, data: "Dù" },
          { startTime: 169450, endTime: 169940, data: "cho" },
          { startTime: 169940, endTime: 170290, data: "ngày" },
          { startTime: 170290, endTime: 170690, data: "mai" },
          { startTime: 172020, endTime: 172250, data: "nỗi" },
          { startTime: 172250, endTime: 172819, data: "đau" },
          { startTime: 172819, endTime: 173349, data: "còn" },
          { startTime: 173679, endTime: 174029, data: "dài" },
        ],
      },
      {
        words: [
          { startTime: 174299, endTime: 174569, data: "Và" },
          { startTime: 174970, endTime: 175230, data: "yêu" },
          { startTime: 175239, endTime: 175619, data: "thương" },
          { startTime: 175629, endTime: 176219, data: "ấy" },
          { startTime: 176849, endTime: 177569, data: "sẽ" },
          { startTime: 177569, endTime: 178189, data: "không" },
          { startTime: 178219, endTime: 178689, data: "tồn" },
          { startTime: 178969, endTime: 179539, data: "tại" },
        ],
      },
      {
        words: [
          { startTime: 179990, endTime: 180429, data: "Ai" },
          { startTime: 180439, endTime: 180730, data: "cũng" },
          { startTime: 180810, endTime: 181269, data: "sẽ" },
          { startTime: 181430, endTime: 182200, data: "phải" },
          { startTime: 182549, endTime: 183079, data: "hướng" },
          { startTime: 183079, endTime: 183599, data: "đến" },
          { startTime: 183599, endTime: 184229, data: "tương" },
          { startTime: 184339, endTime: 184919, data: "lai" },
        ],
      },
      {
        words: [
          { startTime: 185279, endTime: 185529, data: "Để" },
          { startTime: 185689, endTime: 186149, data: "kiếm" },
          { startTime: 186199, endTime: 186689, data: "cho" },
          { startTime: 186989, endTime: 187439, data: "mình" },
          { startTime: 187899, endTime: 188409, data: "một" },
          { startTime: 188409, endTime: 188909, data: "người" },
          { startTime: 188909, endTime: 189599, data: "thế" },
          { startTime: 189599, endTime: 189849, data: "vai" },
        ],
      },
      {
        words: [
          { startTime: 192770, endTime: 193539, data: "Nếu" },
          { startTime: 193549, endTime: 193759, data: "như" },
          { startTime: 193899, endTime: 194249, data: "ngày" },
          { startTime: 194259, endTime: 194749, data: "xưa" },
        ],
      },
      {
        words: [
          { startTime: 195159, endTime: 195559, data: "Chúng" },
          { startTime: 195569, endTime: 196209, data: "ta" },
          { startTime: 196219, endTime: 196599, data: "không" },
          { startTime: 197750, endTime: 197780, data: "vội" },
          { startTime: 197780, endTime: 197810, data: "vàng" },
        ],
      },
      {
        words: [
          { startTime: 198249, endTime: 198619, data: "Yêu" },
          { startTime: 198629, endTime: 199339, data: "nhau" },
          { startTime: 199339, endTime: 199650, data: "để" },
          { startTime: 199650, endTime: 199950, data: "rồi" },
          { startTime: 200600, endTime: 201130, data: "bây" },
          { startTime: 201180, endTime: 201739, data: "giờ" },
          { startTime: 201739, endTime: 202209, data: "lìa" },
          { startTime: 202209, endTime: 202939, data: "tan" },
        ],
      },
      {
        words: [
          { startTime: 203710, endTime: 203729, data: "Thì" },
          { startTime: 203949, endTime: 204230, data: "chắc" },
          { startTime: 204480, endTime: 204840, data: "có" },
          { startTime: 204890, endTime: 206060, data: "lẽ" },
          { startTime: 206060, endTime: 206540, data: "sẽ" },
          { startTime: 206550, endTime: 206890, data: "không" },
          { startTime: 207070, endTime: 207490, data: "đau" },
          { startTime: 207490, endTime: 207849, data: "khổ" },
        ],
      },
      {
        words: [
          { startTime: 208940, endTime: 209269, data: "Yêu" },
          { startTime: 209269, endTime: 209709, data: "thương" },
          { startTime: 209739, endTime: 210199, data: "vụn" },
          { startTime: 210209, endTime: 211140, data: "vỡ" },
          { startTime: 211180, endTime: 211920, data: "thêm" },
          { startTime: 211920, endTime: 212329, data: "một" },
          { startTime: 212329, endTime: 212970, data: "lần" },
          { startTime: 212970, endTime: 213220, data: "nữa" },
        ],
      },
      {
        words: [
          { startTime: 214169, endTime: 214569, data: "Giờ" },
          { startTime: 214579, endTime: 215039, data: "anh" },
          { startTime: 215039, endTime: 215469, data: "sẽ" },
          { startTime: 215479, endTime: 215849, data: "không" },
          { startTime: 216569, endTime: 217269, data: "níu" },
          { startTime: 217269, endTime: 217739, data: "tay" },
          { startTime: 217749, endTime: 218259, data: "em" },
          { startTime: 218259, endTime: 218419, data: "lại" },
        ],
      },
      {
        words: [
          { startTime: 219609, endTime: 219830, data: "Để" },
          { startTime: 219979, endTime: 220419, data: "yêu" },
          { startTime: 220419, endTime: 220809, data: "thương" },
          { startTime: 220899, endTime: 221349, data: "ấy" },
          { startTime: 221770, endTime: 222330, data: "dần" },
          { startTime: 222510, endTime: 222870, data: "dần" },
          { startTime: 223070, endTime: 223529, data: "phôi" },
          { startTime: 223539, endTime: 223829, data: "phai" },
        ],
      },
      {
        words: [
          { startTime: 224869, endTime: 225320, data: "Chúc" },
          { startTime: 225330, endTime: 225710, data: "em" },
          { startTime: 225720, endTime: 226119, data: "ngày" },
          { startTime: 226290, endTime: 227189, data: "mai" },
          { startTime: 227199, endTime: 227590, data: "hạnh" },
          { startTime: 227830, endTime: 228330, data: "phúc" },
          { startTime: 228330, endTime: 229080, data: "bên" },
          { startTime: 229400, endTime: 230080, data: "ai" },
        ],
      },
      {
        words: [
          { startTime: 231250, endTime: 231569, data: "Đừng" },
          { startTime: 231569, endTime: 231920, data: "giống" },
          { startTime: 231930, endTime: 232130, data: "như" },
          { startTime: 232370, endTime: 232920, data: "anh" },
          { startTime: 232930, endTime: 233440, data: "với" },
          { startTime: 233489, endTime: 234519, data: "em" },
          { startTime: 234530, endTime: 234970, data: "hiện" },
          { startTime: 235100, endTime: 235600, data: "tại" },
        ],
      },
      {
        words: [
          { startTime: 238219, endTime: 238519, data: "Nếu" },
          { startTime: 238740, endTime: 239259, data: "như" },
          { startTime: 239259, endTime: 239829, data: "ngày" },
          { startTime: 239829, endTime: 240000, data: "xưa" },
        ],
      },
      {
        words: [
          { startTime: 240459, endTime: 240869, data: "Chúng" },
          { startTime: 240939, endTime: 241529, data: "ta" },
          { startTime: 241559, endTime: 241959, data: "không" },
          { startTime: 241969, endTime: 242359, data: "vội" },
          { startTime: 242369, endTime: 242719, data: "vàng" },
        ],
      },
      {
        words: [
          { startTime: 243590, endTime: 243990, data: "Yêu" },
          { startTime: 244000, endTime: 244270, data: "nhau" },
          { startTime: 244679, endTime: 245030, data: "để" },
          { startTime: 245030, endTime: 245280, data: "rồi" },
          { startTime: 245960, endTime: 246519, data: "bây" },
          { startTime: 246519, endTime: 247089, data: "giờ" },
          { startTime: 247089, endTime: 247569, data: "lìa" },
          { startTime: 247569, endTime: 248049, data: "tan" },
        ],
      },
      {
        words: [
          { startTime: 248919, endTime: 249049, data: "Thì" },
          { startTime: 249289, endTime: 249690, data: "chắc" },
          { startTime: 249830, endTime: 250170, data: "có" },
          { startTime: 250180, endTime: 250720, data: "lẽ" },
          { startTime: 251349, endTime: 251899, data: "sẽ" },
          { startTime: 251899, endTime: 252249, data: "không" },
          { startTime: 252409, endTime: 252849, data: "đau" },
          { startTime: 252849, endTime: 253219, data: "khổ" },
        ],
      },
      {
        words: [
          { startTime: 254259, endTime: 254569, data: "Yêu" },
          { startTime: 254579, endTime: 255069, data: "thương" },
          { startTime: 255079, endTime: 255569, data: "vụn" },
          { startTime: 255579, endTime: 256079, data: "vỡ" },
          { startTime: 256549, endTime: 257069, data: "thêm" },
          { startTime: 257259, endTime: 257569, data: "một" },
          { startTime: 257579, endTime: 258320, data: "lần" },
          { startTime: 258320, endTime: 258580, data: "nữa" },
        ],
      },
      {
        words: [
          { startTime: 259519, endTime: 259810, data: "Giờ" },
          { startTime: 259930, endTime: 260190, data: "anh" },
          { startTime: 260280, endTime: 260739, data: "sẽ" },
          { startTime: 260959, endTime: 261189, data: "không" },
          { startTime: 261939, endTime: 262599, data: "níu" },
          { startTime: 262639, endTime: 263060, data: "tay" },
          { startTime: 263070, endTime: 263600, data: "em" },
          { startTime: 263600, endTime: 263690, data: "lại" },
        ],
      },
      {
        words: [
          { startTime: 264909, endTime: 265189, data: "Để" },
          { startTime: 265299, endTime: 265709, data: "yêu" },
          { startTime: 265719, endTime: 266159, data: "thương" },
          { startTime: 266299, endTime: 266659, data: "ấy" },
          { startTime: 267249, endTime: 267659, data: "dần" },
          { startTime: 267879, endTime: 268199, data: "dần" },
          { startTime: 268509, endTime: 268740, data: "phôi" },
          { startTime: 268860, endTime: 269170, data: "phai" },
        ],
      },
      {
        words: [
          { startTime: 270179, endTime: 270619, data: "Chúc" },
          { startTime: 270629, endTime: 270970, data: "em" },
          { startTime: 270980, endTime: 271520, data: "ngày" },
          { startTime: 271630, endTime: 272049, data: "mai" },
          { startTime: 272480, endTime: 272840, data: "hạnh" },
          { startTime: 273650, endTime: 273680, data: "phúc" },
          { startTime: 273680, endTime: 274360, data: "bên" },
          { startTime: 274910, endTime: 275150, data: "ai" },
        ],
      },
      {
        words: [
          { startTime: 276570, endTime: 276899, data: "Đừng" },
          { startTime: 276899, endTime: 277289, data: "giống" },
          { startTime: 277289, endTime: 277309, data: "như" },
          { startTime: 277749, endTime: 278279, data: "anh" },
          { startTime: 278299, endTime: 278949, data: "với" },
          { startTime: 278959, endTime: 279769, data: "em" },
          { startTime: 279879, endTime: 280309, data: "hiện" },
          { startTime: 280489, endTime: 280659, data: "tại" },
        ],
      },
      {
        words: [
          { startTime: 284569, endTime: 284989, data: "Đừng" },
          { startTime: 284989, endTime: 285399, data: "giống" },
          { startTime: 285409, endTime: 285889, data: "như" },
          { startTime: 285899, endTime: 286529, data: "anh" },
        ],
      },
      {
        words: [
          { startTime: 290149, endTime: 290480, data: "Hiện" },
          { startTime: 291660, endTime: 292160, data: "tại" },
        ],
      },
    ],
    file: "https://static-zmp3.zmdcdn.me/lyrics/2017/07/24/9e98ad6814f35c1eced2ed13a4a916c1_1075525434.lrc",
    enabledVideoBG: true,
    streamingUrl:
      "https://mcloud-bf-s7-mv-zmp3.zmdcdn.me/0bQjKH0yDUc/4c5fc58753c3ba9de3d2/11c857db569ebfc0e68f/720/Yeu-Voi-Vang.mp4?authen=exp=1720967771~acl=/0bQjKH0yDUc/*~hmac=384e966a053acb848fc7835141c3150a",
    defaultIBGUrls: [
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/3/c/0/5/3c05c10ae36f6361f9af0874bb7c4851.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/b/b/e/0/bbe01e4bf6d8e23101fcb6db44df311d.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/a/1/f/3/a1f34293d1dc92735be8c3f9082c4acf.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/6/e/9/5/6e95b598e1e14a187ee779bcd888e75c.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/1/c/8/1/1c81e957a6270eba91571d822a47e7c5.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/0/0/0/d/000d9d0679bbbb564a191a6801d7f19d.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/e/6/4/f/e64f4fd6f53caebabc1c26d592093cfa.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/d/e/3/1/de315c40b537d40b7409a6702f446631.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/1/4/6/2/1462efc7378bed3f98ace411e11eab45.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/5/b/f/a/5bfa05533ed7975035e69a4508c82fd6.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/f/2/b/1/f2b1b91fa64e0c354150c86fd96c249c.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/5/1/f/b/51fbcd4ae32096ffe2dd89cd36bb6ed9.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/6/2/3/9/62392463eab1eb1aaa2d1f3bd0f758bb.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/1/2/f/0/12f01e12d6e13e263ef76f3fdb65d66e.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/8/8/2/4/8824ef8e3e3aa3e302f03879a1f9d7d3.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/4/3/4/9/43491e9d95a9942015548bd2a061250d.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/9/8/7/5/987517940ce71a96bab9c0c88d5b6b95.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/8/e/2/4/8e24305fde744814083af980a593e8c2.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/f/1/2/7/f1270dd1bed79b527228e3351d2b67ae.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/0/a/3/0/0a301934881ee4e2de30dc8f41bc55f9.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/c/c/9/f/cc9fce8719364ba9d8a846984c590a0e.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/e/5/d/e/e5de86acd7567465f54a6b9307076947.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/6/4/b/b/64bb19c5f971b4e4f16f3bfdff64a396.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/0/3/2/0/03206606d461843e22451747a9b60769.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/b/d/4/4/bd4485d6dfef80764869a4d88d9b0475.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/e/8/6/8/e86817d147315d9d644835f60d17ae41.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/b/b/4/7/bb477f2f56f162b13426f70c9858c732.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/c/5/3/6/c536ff6ab992e36be24ca0adf8e86ae0.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/6/c/f/c/6cfc1e6e3b94c62cded257659602f00b.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/2/5/d/6/25d6adaa11b4e932d61309ed635d57fa.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/d/2/a/e/d2ae42243ccd4fec321fc60692a5a2dc.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/b/8/0/e/b80e5777c7eec332c882bf79bd692056.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/e/7/b/a/e7ba1207018f1d2fa7048598c7d627df.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/3/f/4/0/3f40bd0d6d8cbcf833c72ab050f19e6a.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/a/d/a/d/adad060e15f8409ec2e7670cf943c202.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/e/d/1/7/ed17742d63b635725e6071a9bee362c5.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/3/a/e/8/3ae816de233a9eae0116b4b5a21af43e.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/d/7/f/1/d7f15e3996e7923ffc2a64d1f8e43448.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/0/0/7/e/007e6b48696aab4a61ca46a10d980f63.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/d/9/f/5/d9f592437d80e358a76e32798ce2d294.jpg",
    ],
    BGMode: 0,
  },
  timestamp: 1720796816111,
};

console.log(lyric);