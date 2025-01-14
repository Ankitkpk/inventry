const mongoose = require('mongoose');

// Stock Item Schema
const stockItemSchema = new mongoose.Schema({
  stockName: { type: String, required: true },
  quantity: { type: Number, required: true },
  unit: { type: String, required: true },
  description: { type: String, required: true },
  Rate: { type: Number, required: true },
}, { _id: false });

// Tender Schema
const tenderSchema = new mongoose.Schema({
    tenderID: { type: String, unique: true, required: true },
    tenderName: { type: String, required: true },
    title: { type: String, required: true },
    issueDate: { type: Date, required: true },
    tenderFloatingDate: { type: Date, required: true },
    description: { type: String },
    bidderName: { type: String },
    documentDownloadStartDate: { type: Date },
    documentDownloadEndDate: { type: Date },
    bidSubmissionStartDate: { type: Date },
    bidSubmissionEndDate: { type: Date },
    bidValidity: { type: String },
    prebidMeetingAddressPortal: { type: String },
    technicalBidOpeningDate: { type: Date },
    periodOfWork: { type: String },
    location: { type: String },
    pincode: { type: String },
    bidOpeningPlace: { type: String },
    productCategory: { type: String },
    natureOfWork: { type: String },
    proposalsInvitedBy: { type: String },
    dateOfOpeningFinancialProposals: { type: Date },
    modeOfSubmittingProposals: { type: String },
    tenderWebsite: { type: String },
    costOfRPFDocument: { type: Number },
    earnestMoneyDeposit: { type: Number },
    modeOfPayment: { type: String },
    amount: { type: Number },
    bankName: { type: String },
    // stockName: { type: String },
    // stockDescription: { type: String },
    // quantity: { type: Number },
    // unit: { type: String },
    // Rate: { type: Number },
    // projectBidTotal: { type: Number },
    performanceSecurity: { type: String },
    methodOfSelection: { type: String },
    objectionCharges: { type: Number },
    projectBidTotal: Number,
    authorizedManager: { type: String },
    authorizedPerson: { type: String },
    stockItems: [stockItemSchema],
    tenderCopy:{
        type: String 
    },
    technicalDocuments:{
         type: String 
       
    },
    tenderFees:{
       type: String 
       
    },
    emdCopy:{
        type: String 

    },
    boq:{
        type: String 

    },
    pricing:{
        type: String 

    },
    performanceGuarantee:{
        type: String 

    },
    mou:{
        type: String 

    },
    other:{
        type: String 

    }
},
{ timestamps: true }
);


const Tender = mongoose.model('Tender', tenderSchema);
module.exports = Tender;
