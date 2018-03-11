import ActiveBucket from "../ui/js/buckets/ActiveBucketView";
import SimpleSchema from 'simple-schema';

ActiveBucket.schema = new SimpleSchema({
    userId: {type: String, optional: true},
    name: {type: String, length: 25},
    location: {type: String, length: 25},
    description: {type: String, length: 40}
});