export default {
  name: "SacCer_Apr2011",
  sequence: {
    type: "ReferenceSequenceTrack",
    trackId: "SacCer_Apr2011-ReferenceSequenceTrack",
    adapter: {
      type: "BgzipFastaAdapter",
      fastaLocation: {
        uri: "/file/saccer3/sacCer3.fa.gz"
      },
      faiLocation: {
        uri: "/file/saccer3/sacCer3.fa.gz.fai"
      },
      gziLocation: {
        uri: "/file/saccer3/sacCer3.fa.gz.gzi"
      }
    }
  },
  aliases: ["sacCer3"]
};
