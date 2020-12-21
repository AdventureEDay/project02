export default {
  name: "GRCh38",
  sequence: {
    type: "ReferenceSequenceTrack",
    trackId: "GRCh38-ReferenceSequenceTrack",
    adapter: {
      type: "BgzipFastaAdapter",
      fastaLocation: {
        uri: "/file/hg38/hg38.fa.gz"
      },
      faiLocation: {
        uri: "/file/hg38/hg38.fa.gz.fai"
      },
      gziLocation: {
        uri: "/file/hg38/hg38.fa.gz.gzi"
      }
    }
  },
  aliases: ["hg38"],
  refNameAliases: {
    adapter: {
      type: "RefNameAliasAdapter",
      location: {
        uri: "/file/hg38/GRCh38.aliases.txt"
      }
    }
  }
};
