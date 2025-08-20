setInterval(function() {
    apex.server.process("KEEP_ALIVE", {}, {dataType: "text"});
}, 5 * 60 * 1000);
