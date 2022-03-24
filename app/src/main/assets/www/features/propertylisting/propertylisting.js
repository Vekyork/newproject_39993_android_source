 Features.register({"name":"Property Listing","code":"propertylisting","version":"1.0.0","category":"integration","model":"Propertylisting_Model_Propertylisting","desktop_uri":"propertylisting\/application\/","routes":[{"root":true,"state":"propertylisting-home","controller":"PropertylistingHomeController","url":"propertylisting\/mobile_home\/index\/value_id\/:value_id","template":"l1\/home.html","cache":false},{"state":"propertylisting-map","controller":"PropertylistingMapController","url":"propertylisting\/mobile_home\/index\/value_id\/:value_id","template":"l1\/map.html","cache":false},{"state":"propertylisting-list","controller":"PropertylistingListController","url":"propertylisting\/mobile_home\/index\/value_id\/:value_id","template":"l1\/list.html","cache":false},{"state":"propertylisting-filter","controller":"PropertylistingFilterController","url":"propertylisting\/mobile_home\/index\/value_id\/:value_id\/filter\/:filter","template":"l1\/filter.html","cache":false},{"state":"propertylisting-favorite","controller":"PropertylistingFavoriteController","url":"propertylisting\/mobile_home\/index\/value_id\/:value_id","template":"l1\/favorite.html","cache":false},{"state":"propertylisting-add-basicinfo","controller":"PropertylistingAddBasicinfoController","url":"propertylisting\/mobile_home\/index\/value_id\/:value_id","template":"l1\/propertyListingAdd\/basicinfo.html","cache":false},{"state":"propertylisting-add-locations","controller":"PropertylistingAddLocationsController","url":"propertylisting\/mobile_home\/index\/value_id\/:value_id","template":"l1\/propertyListingAdd\/locations.html","cache":false},{"state":"propertylisting-add-price","controller":"PropertylistingAddpriceController","url":"propertylisting\/mobile_home\/index\/value_id\/:value_id","template":"l1\/propertyListingAdd\/price.html","cache":false},{"state":"propertylisting-add-amenities","controller":"PropertylistingAddamenitiesController","url":"propertylisting\/mobile_home\/index\/value_id\/:value_id","template":"l1\/propertyListingAdd\/amenities.html","cache":false},{"state":"propertylisting-add-images","controller":"PropertylistingAddImagesController","url":"propertylisting\/mobile_home\/index\/value_id\/:value_id","template":"l1\/propertyListingAdd\/images.html","cache":false},{"state":"propertylisting-add-owner-info","controller":"PropertylistingAddOwnerInfoController","url":"propertylisting\/mobile_home\/index\/value_id\/:value_id","template":"l1\/propertyListingAdd\/ownerinfo.html","cache":false},{"state":"propertylisting-edit","controller":"PropertylistingEditController","url":"propertylisting\/mobile_home\/index\/value_id\/:value_id\/property_id\/:property_id","template":"l1\/propertyListingEdit\/view.html","cache":false},{"state":"propertylisting-account","controller":"PropertylistingAccountController","url":"propertylisting\/mobile_home\/index\/value_id\/:value_id","template":"l1\/account.html","cache":false},{"state":"propertylisting-messages","controller":"PropertylistingMessagesController","url":"propertylisting\/mobile_home\/index\/value_id\/:value_id","template":"l1\/messages.html","cache":false},{"state":"propertylisting-history","controller":"PropertylistingHistoryController","url":"propertylisting\/mobile_home\/index\/value_id\/:value_id","template":"l1\/history.html","cache":false},{"state":"propertylisting-plans","controller":"PropertylistingPlansController","url":"propertylisting\/mobile_home\/index\/value_id\/:value_id","template":"l1\/plans.html","cache":false},{"state":"propertylisting-checkout","controller":"PropertylistingCheckoutController","url":"propertylisting\/mobile_home\/index\/value_id\/:value_id","template":"l1\/checkout.html","cache":false},{"state":"propertylisting-ewallet","controller":"PropertylistingEwalletController","url":"propertylisting\/mobile_list\/index\/value_id\/:value_id\/order_id\/:order_id","template":"l1\/please_wait.html","cache":false},{"state":"propertylisting-ewallet-return","controller":"PropertylistingEwalletReturnController","url":"propertylisting\/mobile_list\/index\/value_id\/:value_id","template":"l1\/please_wait.html","cache":false}],"icons":["icons\/propertylisting1-flat.png","icons\/propertylisting2-flat.png","icons\/propertylisting3-flat.png"],"files":["js\/controllers\/propertylisting.js","js\/controllers\/propertylistingadd.js","js\/controllers\/propertylistingedit.js","js\/controllers\/propertylisting-account.js","js\/controllers\/propertylisting-favorite.js","js\/controllers\/propertylisting-history.js","js\/controllers\/propertylisting-messages.js","js\/controllers\/propertylisting-map.js","js\/controllers\/propertylisting-my-listing.js","js\/controllers\/propertylisting-filter.js","js\/controllers\/propertylisting-init.js","js\/controllers\/propertylisting-plans.js","js\/controllers\/propertylisting-ewallet.js","js\/factory\/propertylisting.js","scss\/propertylisting.scss"],"compile":true,"use_account":true,"only_once":true,"load_on_start":true,"on_start_factory":"Propertylisting","es5_compliant":false}, ['./features/propertylisting/propertylisting.bundle.min.js']); 