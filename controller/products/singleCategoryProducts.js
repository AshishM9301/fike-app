const singleCategoryProducts = async () => {
  try {
    const data = await Categories.aggregate([
      { $match: { _id: route.params?.id } },
      {
        $lookup: {
          from: "product",
          let: "categoryId",
          pipeline: "_id",
          as: "products",
        },
      },
    ]);

    return res.status(200).json({
      success: true,
      message: "Category Products Details",
      data: data,
    });
  } catch (err) {
    return res.status(400).json({ success: false, message: "Error : " + err });
  }
};

module.exports = singleCategoryProducts;
