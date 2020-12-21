export default {
  name: "GRCm39",
  sequence: {
    type: "ReferenceSequenceTrack",
    trackId: "GRCm39-ReferenceSequenceTrack",
    adapter: {
      type: "BgzipFastaAdapter",
      fastaLocation: {
        uri: "/file/mm39/mm39.fa.gz"
      },
      faiLocation: {
        uri: "/file/mm39/mm39.fa.gz.fai"
      },
      gziLocation: {
        uri: "/file/mm39/mm39.fa.gz.gzi"
      }
    }
  },
  aliases: ["mm39"]
};
