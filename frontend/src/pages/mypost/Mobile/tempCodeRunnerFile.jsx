 onSelect={async (val) => {
                  const selectedBrand = await brandList.find(
                    (item) => item.value === val
                  );
                  const t = selectedBrand ? selectedBrand.label : val;
                  setSelectBrand(t);
                  setSelectBrandid(val);
                }}