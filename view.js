let htmlMarkup = {
    head: "<!DOCTYPE html>\n" +
      "<html lang=\"en\">\n" +
      "<head>\n" +
      "    <meta charset=\"UTF-8\">\n" +
      "    <title>Index</title>\n" +
      "</head>\n",
    body: {
      open: "<body>",
      content: "123",
      close: "</body> \n" +
            "</html>"
    },
    textOutput: function () {
        this.body.content = text.content;
    },
    htmlOutput:
      function() {
        this.textOutput();
        let body = this.body.open+this.body.content+this.body.close;
        document.write(this.head, body);
    },
};

let text = {
    content: "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquid animi at beatae consequatur culpa dolorem,\n" +
        "    dolores earum eos est facere magnam molestiae quidem rem repellat similique tempore tenetur ut. A consectetur\n" +
        "    consequatur consequuntur dolore dolorum earum iste maxime molestiae, optio praesentium quibusdam, voluptatem!\n" +
        "    Blanditiis esse harum hic illum perspiciatis, quaerat repudiandae sunt veritatis voluptate! Architecto cum\n" +
        "    cupiditate debitis ea magnam minima officiis saepe sed, ut voluptates. A, animi blanditiis deleniti excepturi non\n" +
        "    nulla numquam quo reiciendis reprehenderit sit? Aut eligendi ex iste magnam, nisi perferendis similique tenetur! Ab\n" +
        "    architecto commodi deserunt dolor enim excepturi id ipsam iste laudantium, minus neque porro possimus quae\n" +
        "    repudiandae sequi vero voluptas. At atque consequuntur doloremque expedita explicabo fugit harum laborum possimus\n" +
        "    recusandae, rerum similique sit! Architecto aspernatur at doloribus eius eligendi enim harum inventore libero\n" +
        "    necessitatibus, ratione! Animi aperiam beatae, consequatur doloremque eos natus nostrum possimus reiciendis repellat\n" +
        "    soluta suscipit tempora, vitae. Ab accusantium adipisci ea est fuga ipsa molestiae rerum tenetur ullam? Atque cum\n" +
        "    delectus dolore doloribus dolorum enim eos esse est et excepturi expedita explicabo facere fuga fugiat ipsum labore\n" +
        "    minima minus molestias neque nostrum nulla numquam, perferendis quaerat quas ratione reiciendis repellendus\n" +
        "    repudiandae saepe soluta suscipit tempora temporibus tenetur velit veniam vero voluptas voluptate. Aliquam aut\n" +
        "    consectetur cumque debitis doloribus eaque et fuga illum in ipsa, modi molestias, nemo non nostrum nulla numquam\n" +
        "    odit officia officiis optio, porro quam qui quis reiciendis saepe similique sint sit soluta tempore tenetur ullam!\n" +
        "    Alias aut consequatur eveniet magni nam non perspiciatis quaerat quos recusandae rem! Alias cum iure nobis quas\n" +
        "    quasi quisquam totam voluptas? Autem explicabo ipsa libero reiciendis vel. Accusamus ad aliquam corporis delectus,\n" +
        "    dolorem eius eum, nisi odit officiis omnis optio pariatur quas quos. Blanditiis dolorum eaque excepturi explicabo\n" +
        "    hic odit saepe? A adipisci ea earum hic nihil qui recusandae tempore!</p><p>Cum ea facere modi quae quos similique\n" +
        "    sint? Ad deleniti excepturi fuga in nam non ratione, veniam. Amet aspernatur cum cumque dolorum expedita in iste\n" +
        "    minima modi nulla odio odit omnis quisquam, ratione sit ut vel vero voluptatum. Ad blanditiis dolor dolores fugiat,\n" +
        "    in, labore libero minima molestiae neque perferendis quidem quis quo ratione rerum, suscipit ullam voluptates. Ab ad\n" +
        "    assumenda consequuntur deserunt est excepturi facere harum illo nam nemo odio pariatur perferendis provident, quidem\n" +
        "    voluptatum. A adipisci blanditiis delectus deleniti dolorem eaque eligendi eos eum expedita fugiat inventore ipsa\n" +
        "    iure magnam maxime minima nam nihil nisi nostrum numquam officiis, optio pariatur perspiciatis porro quam quas quia\n" +
        "    quis quod reiciendis saepe, suscipit. A accusamus accusantium ad aliquid animi architecto blanditiis commodi\n" +
        "    consectetur consequatur cumque doloremque, ea eum exercitationem hic iste iure laboriosam laborum maxime, modi natus\n" +
        "    necessitatibus nulla perspiciatis quis quod ratione rem repellat repudiandae saepe sapiente similique sit unde vel\n" +
        "    veniam vitae voluptate voluptatem voluptates. Ad architecto atque beatae culpa cupiditate debitis deleniti ea earum\n" +
        "    eius eum expedita impedit ipsam maxime molestiae molestias mollitia necessitatibus nesciunt numquam qui quisquam quo\n" +
        "    quod reiciendis, saepe sed sit unde vitae voluptas. Assumenda, distinctio ea esse eum necessitatibus nostrum quam\n" +
        "    quasi quo reprehenderit veritatis. Accusamus animi atque blanditiis, consequatur cumque doloremque eius ex facere\n" +
        "    laudantium molestiae, nam omnis optio quaerat temporibus vitae? Accusantium beatae dolor, dolores eaque hic numquam\n" +
        "    quae quidem rem repellendus voluptatem. Accusantium corporis cumque deserunt earum eum, maxime modi necessitatibus\n" +
        "    nesciunt nisi quas quibusdam tempora temporibus vel! Ab aliquid animi consequatur corporis cupiditate debitis,\n" +
        "    delectus dicta dolore eius eligendi facilis magnam modi possimus quas qui quibusdam, recusandae reiciendis\n" +
        "    repellendus reprehenderit rerum sed sunt, tempora tempore voluptates voluptatibus. Aut commodi dolores eos fugiat\n" +
        "    ipsam minima nihil numquam sit tempore voluptatibus! Blanditiis delectus facilis libero officia officiis praesentium\n" +
        "    quisquam similique tenetur ullam.</p><p>Corporis eligendi natus quasi saepe voluptate voluptatum. Accusamus, animi\n" +
        "    aspernatur delectus deleniti, dicta dolor eaque enim fugit inventore maxime natus quaerat quia repellendus\n" +
        "    repudiandae, sapiente soluta tempore tenetur unde! Aliquam animi aperiam consectetur culpa delectus dignissimos\n" +
        "    distinctio eos expedita ipsam iusto minima odit pariatur placeat possimus qui, quisquam quo soluta sunt veniam\n" +
        "    veritatis. Architecto eligendi iste neque provident quos veritatis vitae. Accusantium animi architecto, at corporis\n" +
        "    cum cumque dicta doloribus excepturi exercitationem fugit illum inventore ipsa nulla optio pariatur placeat quaerat\n" +
        "    qui quis quos reiciendis sapiente sint soluta sunt ullam unde veritatis voluptates. A adipisci aspernatur assumenda\n" +
        "    at beatae dignissimos distinctio doloremque earum eius eligendi eos expedita fuga harum in incidunt laborum minus\n" +
        "    natus nesciunt nostrum nulla odit omnis perferendis perspiciatis quam, quia quidem quo quod reiciendis saepe\n" +
        "    similique sint sit tempora ullam vel vitae voluptatibus voluptatum. Assumenda cumque debitis deserunt eaque\n" +
        "    excepturi explicabo fugit hic id ipsum, magnam, molestiae molestias nam non odio quaerat quas quis quod\n" +
        "    reprehenderit sint veritatis. Adipisci, aperiam cum delectus dolorem doloremque doloribus ducimus eligendi enim ex,\n" +
        "    excepturi iure nostrum nulla quod repellendus repudiandae sequi sit totam voluptates! Atque consectetur error\n" +
        "    provident sequi sit? A aut debitis excepturi exercitationem explicabo id minus quibusdam quos veritatis? Ad adipisci\n" +
        "    consequuntur delectus deleniti dignissimos dolore dolores eaque eius eligendi esse et exercitationem explicabo\n" +
        "    facere fugit harum inventore ipsa ipsum, itaque iure laborum odio officia perferendis quam quidem quo quod ratione\n" +
        "    recusandae reiciendis rem repellendus similique suscipit vel veniam vero vitae voluptatem voluptatum. Aut enim est\n" +
        "    exercitationem explicabo iure, natus odio quaerat unde? Accusamus assumenda eos fugit id, molestiae perferendis!\n" +
        "    Autem blanditiis cum cupiditate dicta dignissimos dolor dolorem enim esse, ex excepturi fugit illum magnam maiores,\n" +
        "    maxime nihil odit optio praesentium quaerat quam reiciendis rem repellendus reprehenderit repudiandae sed sequi sint\n" +
        "    tempora veritatis voluptas voluptates, voluptatum? Distinctio dolorem, nisi!</p><p>Aspernatur autem dolores\n" +
        "    doloribus facere pariatur quidem quos similique! Aperiam atque delectus, esse incidunt ipsa laboriosam minima\n" +
        "    sapiente! Accusamus aperiam aspernatur, atque culpa cupiditate, dicta dolor dolorem doloremque doloribus dolorum\n" +
        "    ducimus ea earum enim eveniet expedita hic, illum iste laborum minima modi odit officia pariatur placeat porro\n" +
        "    quaerat quod reiciendis sequi suscipit ut vel velit veritatis voluptas voluptate? Alias assumenda consequatur, eos\n" +
        "    labore libero magnam maiores molestiae necessitatibus, perferendis placeat praesentium, quibusdam quis repellat!\n" +
        "    Blanditiis consequatur dolorem praesentium temporibus. Dolore, fuga molestiae nihil repudiandae veniam voluptas\n" +
        "    voluptates. Accusamus alias cum eos hic minus? Ipsa magnam nisi quaerat quasi repudiandae. Aliquid amet eaque\n" +
        "    eveniet ipsum, mollitia numquam qui quod sint ut veritatis. Dicta dolor, ea nisi odio, odit, officiis placeat quae\n" +
        "    quasi repellendus repudiandae sunt veniam! A accusantium adipisci alias architecto atque, corporis, distinctio,\n" +
        "    doloremque eius facilis harum illum iure labore laboriosam minima nobis obcaecati perferendis provident quae\n" +
        "    quibusdam reiciendis reprehenderit sequi similique sint soluta tempore veritatis vero. Culpa eum fuga iusto minus\n" +
        "    odio quae quisquam. Alias animi ducimus eum excepturi explicabo hic quod suscipit tenetur. Architecto, consequuntur,\n" +
        "    est eveniet excepturi laboriosam, minima numquam perferendis quasi quia sequi tempora ut! Aliquam commodi, culpa,\n" +
        "    cupiditate, debitis dicta ea esse excepturi illo numquam perspiciatis quae qui quo sed voluptate voluptates! Ab\n" +
        "    alias aliquam aperiam asperiores commodi consequatur debitis delectus eaque explicabo iste labore nam natus nesciunt\n" +
        "    nisi placeat ratione reprehenderit sequi soluta tempora tenetur vitae voluptate, voluptatibus! Architecto\n" +
        "    dignissimos doloribus eaque eum eveniet nulla voluptates voluptatibus! Accusamus at atque blanditiis, dignissimos\n" +
        "    eaque esse eum excepturi expedita explicabo fuga hic, iure magni nihil nobis, quam quidem ratione recusandae saepe\n" +
        "    sapiente sequi sint suscipit ullam. Blanditiis eius omnis quos. A deleniti ipsam non officia qui! Dolorem iste\n" +
        "    magnam nobis officia recusandae reiciendis repudiandae sed ullam vel voluptatibus? Delectus ea, earum ipsum odit\n" +
        "    quam quia quos.</p><p>Consectetur dolor eaque eveniet facere maxime nisi quam quisquam quos sapiente. Amet aperiam\n" +
        "    dicta dolore magnam optio quo, repellendus sit tempora totam vel, voluptatem voluptatibus? Aliquid consectetur,\n" +
        "    cumque debitis delectus distinctio ducimus est inventore ipsa ipsam libero minima numquam obcaecati odit omnis\n" +
        "    provident qui quod sapiente sed veniam veritatis vitae voluptas voluptatem. Consequatur deleniti id nam nihil\n" +
        "    nostrum quia quos ratione voluptas. Dolorem eum inventore libero nisi nobis, odit quod. Adipisci consectetur culpa\n" +
        "    cupiditate deserunt ea illum ipsum mollitia, nemo neque, odit perferendis quae qui reiciendis sint sit? Atque id\n" +
        "    suscipit veritatis. A aliquid assumenda consectetur consequatur dolor, doloribus eaque esse est facilis fuga, harum\n" +
        "    iusto laudantium nihil perspiciatis suscipit ullam veniam, voluptatum? Accusantium amet assumenda consequatur\n" +
        "    consequuntur cumque dicta doloremque, dolores eius eos harum id inventore ipsum libero magnam minima modi natus\n" +
        "    neque nihil nisi nostrum numquam obcaecati omnis optio quas ratione rem saepe sed sunt veniam voluptate? Accusantium\n" +
        "    adipisci aliquid, aut deleniti dicta dolorum eius error exercitationem fugiat iure labore laboriosam natus obcaecati\n" +
        "    omnis quaerat, quis repudiandae tenetur voluptatem. Aperiam corporis esse et ex facilis fuga, iste, laborum nam\n" +
        "    porro quaerat quas temporibus veritatis voluptatibus. Dolores ducimus hic, magnam quidem tempore ullam vitae!\n" +
        "    Delectus error est, excepturi magni odit optio possimus quisquam recusandae? Commodi eius fuga modi veritatis\n" +
        "    voluptate. Accusamus adipisci aspernatur assumenda dignissimos dolorum eius impedit ipsam ipsum, iure magni maiores\n" +
        "    minima nemo neque nulla numquam odit pariatur perspiciatis praesentium, quae quaerat qui quia recusandae reiciendis\n" +
        "    repellat repellendus repudiandae vel voluptatum? Assumenda delectus dicta, dolorum eius esse ex ipsa nam nesciunt\n" +
        "    nobis, omnis quos temporibus ullam veniam vitae voluptatem. A autem eos inventore quae quisquam ratione veniam.\n" +
        "    Accusantium at consequuntur cum dignissimos impedit magni non odio ut. Alias earum illo ipsam, laboriosam non\n" +
        "    reiciendis vel! Animi consequuntur eos sit suscipit temporibus. Commodi illo ipsum quos recusandae soluta.</p>"
};