function test() {
  VoiceRSS.speech({
    key: "0b2386ffe02b49ea905673fe3e186781",
    src: "Hello, world!",
    hl: "en-us",
    v: "Linda",
    r: 0,
    c: "mp3",
    f: "44khz_16bit_stereo",
    ssml: false,
  });
}

test();
